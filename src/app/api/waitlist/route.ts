import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

/**
 * POST /api/waitlist — capture early-access requests from the homepage
 * and industry pages.
 *
 * Runtime: Node.js (default). Uses the official `resend` SDK, an
 * in-memory per-IP rate limiter (5 req/min), and Zod for payload
 * validation. Two emails fire per successful submission:
 *   1. Internal notification → josef@mindpathbi.com
 *   2. Confirmation receipt → the submitter
 *
 * The limiter is intentionally in-memory — this endpoint fronts a
 * low-volume marketing surface and we don't want to introduce a
 * stateful datastore dependency pre-launch.
 */

const WaitlistSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(1).max(160),
  email: z.string().trim().toLowerCase().email(),
  role: z.string().trim().min(1).max(120),
  channelCount: z
    .union([z.number().int().nonnegative(), z.string().trim().max(60)])
    .optional(),
  note: z.string().trim().max(2000).optional(),
  industry: z.string().trim().max(60).optional(),
  source: z.string().trim().max(120).optional(),
});

type WaitlistPayload = z.infer<typeof WaitlistSchema>;

const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

function checkRateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || entry.resetAt < now) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }
  if (entry.count >= RATE_LIMIT) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { ok: true };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInternalHtml(p: WaitlistPayload): string {
  const row = (label: string, value: string | number | undefined) =>
    value === undefined || value === ""
      ? ""
      : `<tr><td style="padding:4px 14px 4px 0;color:#5b6470;font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:4px 0;color:#0b0f17;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:14px;">${escapeHtml(String(value))}</td></tr>`;
  return `<!doctype html><html><body style="margin:0;padding:32px;background:#f7f8fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e7ec;padding:32px;">
      <div style="font-family:monospace;font-size:11px;letter-spacing:0.2em;color:#5b6470;text-transform:uppercase;">[FILED] New waitlist entry</div>
      <h1 style="margin:8px 0 24px;font-size:20px;color:#0b0f17;">${escapeHtml(p.company)} — ${escapeHtml(p.name)}</h1>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", p.name)}
        ${row("Company", p.company)}
        ${row("Email", p.email)}
        ${row("Role", p.role)}
        ${row("Channels", p.channelCount)}
        ${row("Industry", p.industry)}
        ${row("Source", p.source)}
        ${row("Note", p.note)}
      </table>
    </div>
  </body></html>`;
}

function renderConfirmationHtml(p: WaitlistPayload): string {
  return `<!doctype html><html><body style="margin:0;padding:32px;background:#f2efe7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e7ec;padding:40px;">
      <div style="font-family:monospace;font-size:11px;letter-spacing:0.2em;color:#5b6470;text-transform:uppercase;">[FILED · CONFIDENTIAL]</div>
      <h1 style="margin:8px 0 16px;font-size:22px;color:#0b0f17;line-height:1.3;">We received your request, ${escapeHtml(p.name)}.</h1>
      <p style="margin:0 0 16px;color:#1d1d1f;font-size:14px;line-height:1.6;">Your early-access entry for <strong>${escapeHtml(p.company)}</strong> is logged. Josef reviews every waitlist personally — expect a short note within one business day.</p>
      <p style="margin:0 0 16px;color:#1d1d1f;font-size:14px;line-height:1.6;">If your team is already comparing vendors or running a sales-assist pilot, reply directly to this email and we'll move your request up.</p>
      <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e4e7ec;font-family:monospace;font-size:11px;color:#8a94a3;letter-spacing:0.1em;">— MindPath BI · every rep, a technical seller</div>
    </div>
  </body></html>`;
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const gate = checkRateLimit(ip);
  if (!gate.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      {
        status: 429,
        headers: {
          "Retry-After": String(gate.retryAfter ?? 60),
        },
      },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = WaitlistSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid_payload", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const payload = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[waitlist] RESEND_API_KEY missing");
    return NextResponse.json(
      { ok: false, error: "server_misconfigured" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const fromAddress =
    process.env.WAITLIST_FROM_ADDRESS || "MindPath BI <onboarding@resend.dev>";
  const notifyAddress =
    process.env.WAITLIST_NOTIFY_ADDRESS || "josef@mindpathbi.com";

  try {
    const subjectTag = payload.industry
      ? `[${payload.industry.toUpperCase()}] `
      : "";

    const internal = await resend.emails.send({
      from: fromAddress,
      to: notifyAddress,
      replyTo: payload.email,
      subject: `${subjectTag}Waitlist — ${payload.company} (${payload.name})`,
      html: renderInternalHtml(payload),
    });

    if (internal.error) {
      console.error("[waitlist] internal send error", internal.error);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 },
      );
    }

    const confirmation = await resend.emails.send({
      from: fromAddress,
      to: payload.email,
      replyTo: notifyAddress,
      subject: "Your MindPath BI request is filed.",
      html: renderConfirmationHtml(payload),
    });

    if (confirmation.error) {
      console.warn(
        "[waitlist] confirmation send error (continuing)",
        confirmation.error,
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[waitlist] unexpected error", err);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 502 },
    );
  }
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
