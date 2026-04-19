"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { ChannelLogo, type LogoName } from "./logos";

/**
 * <InboxMock variant="redacted"> — the "field report" preview used inside
 * scroll-pinned sections. Shows a unified inbox where incoming conversations
 * are classified, prioritized, and (where confident) already drafted.
 *
 * Brand aesthetic: the dossier. We redact *inline* (proper nouns, amounts,
 * section numbers) so the inbox stays instantly readable as an inbox, while
 * still signalling that real customer content is never leaked on a marketing
 * site. `variant="plain"` shows the raw content for non-public surfaces.
 */

// A preview segment — `r: true` marks the fragment as redacted.
type Segment = { t: string; r?: boolean };

type Thread = {
  id: string;
  channel: LogoName;
  customer: Segment[];
  preview: Segment[];
  tag: "ORDER" | "SUPPORT" | "BILLING" | "QUOTE" | "LEAD";
  ts: string;
  unread?: boolean;
  priority?: "P0" | "P1" | "P2";
  /** AI draft confidence 0..1. Omit if the classifier hasn't drafted yet. */
  draft?: number;
};

const THREADS: Thread[] = [
  {
    id: "t1",
    channel: "whatsapp",
    customer: [{ t: "Procurement · " }, { t: "regional fabricator", r: true }],
    preview: [
      { t: "40× " },
      { t: "IF-2214 hex bolts", r: true },
      { t: ", Grade 8. Urgent — rig down." },
    ],
    tag: "QUOTE",
    ts: "08:12",
    unread: true,
    priority: "P0",
    draft: 0.92,
  },
  {
    id: "t2",
    channel: "instagram",
    customer: [{ t: "Maya R." }],
    preview: [
      { t: "Does the walnut 3-pack bowl ship to " },
      { t: "Haifa", r: true },
      { t: "? Food-safe finish?" },
    ],
    tag: "ORDER",
    ts: "08:14",
    unread: true,
    priority: "P1",
    draft: 0.88,
  },
  {
    id: "t3",
    channel: "gmail",
    customer: [{ t: "Daniel K.", r: true }, { t: " · Series B COO" }],
    preview: [
      { t: "MSA draft · Section " },
      { t: "4.2", r: true },
      { t: " — scope and IP language to align on." },
    ],
    tag: "LEAD",
    ts: "08:21",
    unread: true,
    priority: "P1",
    draft: 0.81,
  },
  {
    id: "t4",
    channel: "intercom",
    customer: [{ t: "Priya S. · 200-seat prospect" }],
    preview: [
      { t: "Does Growth include SSO + API quotas we can grow into?" },
    ],
    tag: "LEAD",
    ts: "08:27",
    priority: "P1",
    draft: 0.74,
  },
  {
    id: "t5",
    channel: "slack",
    customer: [{ t: "#cx-triage" }],
    preview: [
      { t: "Refund thread bounced between Billing + Support 3×." },
    ],
    tag: "BILLING",
    ts: "08:33",
    priority: "P2",
  },
  {
    id: "t6",
    channel: "teams",
    customer: [{ t: "Internal · Legal review" }],
    preview: [
      { t: "Cross-check: SoW amendment language in §4.2…" },
    ],
    tag: "SUPPORT",
    ts: "08:41",
    priority: "P2",
  },
];

const TAG_TONE: Record<Thread["tag"], { dot: string; pill: string }> = {
  QUOTE: {
    dot: "bg-[var(--color-status-warn)]",
    pill:
      "border-[var(--color-status-warn)]/35 bg-[#fff6e8] text-[var(--color-status-warn)]",
  },
  ORDER: {
    dot: "bg-[var(--color-accent)]",
    pill:
      "border-[var(--color-accent)]/40 bg-[var(--color-accent-tint)] text-[var(--color-accent-ink)]",
  },
  LEAD: {
    dot: "bg-[var(--color-status-ok)]",
    pill:
      "border-[var(--color-status-ok)]/30 bg-[#eaf6ef] text-[var(--color-status-ok)]",
  },
  SUPPORT: {
    dot: "bg-[var(--color-muted-2)]",
    pill:
      "border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-muted)]",
  },
  BILLING: {
    dot: "bg-[var(--color-status-bad)]",
    pill:
      "border-[var(--color-status-bad)]/30 bg-[#fdecec] text-[var(--color-status-bad)]",
  },
};

function PriorityDot({
  priority,
  unread,
}: {
  priority?: Thread["priority"];
  unread?: boolean;
}) {
  if (!priority && !unread) {
    return <span aria-hidden className="inline-block h-1.5 w-1.5 flex-none" />;
  }
  const color =
    priority === "P0"
      ? "bg-[var(--color-status-bad)]"
      : priority === "P1"
        ? "bg-[var(--color-accent)]"
        : "bg-[var(--color-muted-2)]";
  return (
    <span
      title={priority ?? "unread"}
      aria-hidden
      className={cn(
        "inline-block h-1.5 w-1.5 flex-none rounded-full",
        color,
      )}
    />
  );
}

/** Renders a segmented line, blacking out any segment flagged `r: true`. */
function SegmentLine({
  segments,
  variant,
  tone = "default",
}: {
  segments: Segment[];
  variant: "redacted" | "plain";
  tone?: "default" | "muted";
}) {
  return (
    <>
      {segments.map((s, i) => {
        if (s.r && variant === "redacted") {
          return <RedactedChunk key={i} text={s.t} tone={tone} />;
        }
        return <React.Fragment key={i}>{s.t}</React.Fragment>;
      })}
    </>
  );
}

function RedactedChunk({
  text,
  tone,
}: {
  text: string;
  tone: "default" | "muted";
}) {
  // Width based on character count, so the bar mirrors the redacted word's length.
  const ch = Math.max(2, text.length);
  return (
    <span
      aria-hidden
      title="Redacted"
      className={cn(
        "relative mx-0.5 inline-block translate-y-[1px] align-middle",
        tone === "muted" ? "bg-[#2a2f3a]" : "bg-[var(--color-ink)]",
      )}
      style={{
        width: `${ch * 0.52}em`,
        height: "0.85em",
        borderRadius: "1px",
      }}
    />
  );
}

type Props = {
  variant?: "redacted" | "plain";
  className?: string;
  /** Simulated progress 0..1 — drives the "AI classifying" animation. Hooked up by parent scroll. */
  progress?: number;
};

export function InboxMock({
  variant = "plain",
  className,
  progress = 0,
}: Props) {
  const prefersReduced = useReducedMotion() ?? false;
  const effectiveProgress = prefersReduced ? 1 : progress;

  const classifiedCount = THREADS.filter(
    (_, i) => effectiveProgress > i / THREADS.length,
  ).length;
  const draftedCount = THREADS.filter(
    (t, i) => effectiveProgress > i / THREADS.length && t.draft !== undefined,
  ).length;

  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-md border border-[var(--color-rule)] bg-[var(--color-paper)] shadow-[0_1px_0_0_rgba(10,15,25,0.02),0_12px_40px_-24px_rgba(10,15,25,0.25)]",
        className,
      )}
    >
      {/* Header ─────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-2 border-b border-[var(--color-rule)] bg-[var(--color-paper-2)] px-3 py-2 md:px-4 md:py-2.5">
        <div className="flex min-w-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)] md:tracking-[0.14em]">
          <span className="relative flex h-2 w-2 flex-none">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-status-ok)] opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-status-ok)]" />
          </span>
          <span className="flex-none text-[var(--color-ink)]">Inbox</span>
          <span className="flex-none text-[var(--color-muted-2)]">·</span>
          <span className="truncate">Unified</span>
        </div>
        <div className="flex flex-none items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-muted-2)] md:tracking-[0.14em]">
          <span className="tabular-nums">
            <span className="text-[var(--color-ink)]">{THREADS.length}</span>{" "}
            open
          </span>
          <span>·</span>
          <span className="tabular-nums">
            <span className="text-[var(--color-accent-ink)]">
              {draftedCount}
            </span>{" "}
            drafted
          </span>
        </div>
      </div>

      {/* Thread list ────────────────────────────────────────────────── */}
      <ul className="flex-1 divide-y divide-[var(--color-rule-soft)]">
        {THREADS.map((t, i) => {
          const classified = effectiveProgress > i / THREADS.length;
          const isTop = i === 0 && effectiveProgress > 0.15;
          return (
            <li
              key={t.id}
              className={cn(
                "relative",
                isTop && "bg-[var(--color-accent-tint)]/35",
              )}
            >
              {isTop && (
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-[2px] bg-[var(--color-accent)]"
                />
              )}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, x: -6 }}
                whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.045 }}
                className={cn(
                  "flex items-start gap-2.5 px-3 py-2.5 md:gap-3 md:px-4 md:py-3",
                  t.unread
                    ? "bg-[var(--color-paper)]"
                    : "bg-[var(--color-paper-2)]/40",
                )}
              >
                {/* Channel tile */}
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-[3px] border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-ink-soft)] md:h-7 md:w-7"
                >
                  <ChannelLogo
                    name={t.channel}
                    style={{ width: 14, height: 14 }}
                  />
                </span>

                <div className="min-w-0 flex-1">
                  {/* Row 1 · customer + timestamp + tag */}
                  <div className="flex items-center gap-2">
                    <PriorityDot priority={t.priority} unread={t.unread} />
                    <span
                      className={cn(
                        "min-w-0 truncate text-[13px]",
                        t.unread
                          ? "font-semibold text-[var(--color-ink)]"
                          : "font-medium text-[var(--color-ink-soft)]",
                      )}
                    >
                      <SegmentLine segments={t.customer} variant={variant} />
                    </span>
                    <span className="ml-auto flex-none font-mono text-[10px] tabular-nums text-[var(--color-muted-2)]">
                      {t.ts}
                    </span>
                    {/* [CHANGED 2026-04-19] TAG pill is hidden from row 1 on
                        mobile (too much pressure on narrow widths caused the
                        right edge of each row to clip inside the card). On
                        mobile it renders at the end of row 2 alongside the
                        draft % — there's almost always room there since the
                        preview truncates. */}
                    <motion.span
                      initial={{ opacity: 0, y: -2 }}
                      animate={{
                        opacity: classified ? 1 : 0,
                        y: classified ? 0 : -2,
                      }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "hidden flex-none md:inline-flex items-center gap-1 rounded-[3px] border px-1.5 py-[2px] font-mono text-[9px] uppercase tracking-[0.12em]",
                        TAG_TONE[t.tag].pill,
                      )}
                    >
                      <span
                        className={cn(
                          "h-1 w-1 rounded-full",
                          TAG_TONE[t.tag].dot,
                        )}
                      />
                      {t.tag}
                    </motion.span>
                  </div>

                  {/* Row 2 · preview + (mobile-only tag) + draft status */}
                  <div className="mt-1 flex items-baseline gap-2 md:gap-3">
                    <p className="min-w-0 flex-1 truncate text-[12px] leading-[1.45] text-[var(--color-muted)] md:text-[12.5px]">
                      <SegmentLine
                        segments={t.preview}
                        variant={variant}
                        tone="muted"
                      />
                    </p>
                    <motion.span
                      initial={{ opacity: 0, y: -2 }}
                      animate={{
                        opacity: classified ? 1 : 0,
                        y: classified ? 0 : -2,
                      }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "inline-flex flex-none items-center gap-1 self-center rounded-[3px] border px-1 py-[1px] font-mono text-[8.5px] uppercase tracking-[0.1em] md:hidden",
                        TAG_TONE[t.tag].pill,
                      )}
                    >
                      <span
                        className={cn(
                          "h-1 w-1 rounded-full",
                          TAG_TONE[t.tag].dot,
                        )}
                      />
                      {t.tag}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: classified ? 1 : 0 }}
                      transition={{ duration: 0.35, delay: 0.1 }}
                      className="flex-none font-mono text-[9px] uppercase tracking-[0.1em] tabular-nums md:text-[9.5px] md:tracking-[0.14em]"
                    >
                      {t.draft !== undefined ? (
                        <span className="inline-flex items-center gap-1 text-[var(--color-accent-ink)]">
                          <CheckTick />
                          Draft · {Math.round(t.draft * 100)}%
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[var(--color-muted-2)]">
                          <span className="h-1 w-1 rounded-full bg-[var(--color-muted-2)]" />
                          Queued
                        </span>
                      )}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ul>

      {/* Footer ─ AI classifier status ──────────────────────────────── */}
      {/* [CHANGED 2026-04-19] Every `span` inside the two status rows is
          `min-w-0` + truncate-friendly, and the labels are shorter on
          mobile. Before: the uppercase tracked text
          ("CLASSIFYING INTENT + PRIORITY" / "N CLASSIFIED · M DRAFTED · 1
          ESCALATED") forms a single long line with no shrink permission,
          which pushed the card's intrinsic width past the grid column on
          narrow viewports and caused the right edge to be clipped by the
          section's overflow-hidden. */}
      <div className="mt-auto border-t border-[var(--color-rule)] bg-[var(--color-paper-2)] px-3 py-2 md:px-4 md:py-2.5">
        <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.1em] md:gap-3 md:tracking-[0.14em]">
          <div className="flex min-w-0 items-center gap-2 text-[var(--color-muted)]">
            <span className="relative inline-flex h-1.5 w-1.5 flex-none">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            </span>
            <span className="flex-none text-[var(--color-ink)]">AI</span>
            <span className="flex-none text-[var(--color-muted-2)]">·</span>
            <span className="min-w-0 truncate">
              <span className="md:hidden">Classifying</span>
              <span className="hidden md:inline">
                Classifying intent + priority
              </span>
            </span>
          </div>
          <span className="flex-none tabular-nums text-[var(--color-ink)]">
            {Math.round(effectiveProgress * 100)}%
          </span>
        </div>
        <div className="mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-[var(--color-rule)]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-ink)]"
            animate={{ width: `${effectiveProgress * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-muted-2)] md:gap-x-3 md:text-[9.5px] md:tracking-[0.14em]">
          <span className="tabular-nums">
            <span className="text-[var(--color-ink-soft)]">
              {classifiedCount}
            </span>{" "}
            classified
          </span>
          <span aria-hidden>·</span>
          <span className="tabular-nums">
            <span className="text-[var(--color-accent-ink)]">
              {draftedCount}
            </span>{" "}
            drafted
          </span>
          <span aria-hidden>·</span>
          <span className="tabular-nums">
            <span className="text-[var(--color-ink-soft)]">1</span> escalated
          </span>
        </div>
      </div>
    </div>
  );
}

function CheckTick() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 10"
      className="h-[9px] w-[9px] flex-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1.5 5.25l2.25 2.25L8.5 2.5" />
    </svg>
  );
}
