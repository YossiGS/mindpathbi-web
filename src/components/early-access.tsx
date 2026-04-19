"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { toast } from "sonner";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { ClassifiedTag } from "@/components/brand/classified-tag";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "ok" | "error";

const INDUSTRIES = [
  { slug: "ecommerce", label: "E-commerce" },
  { slug: "interior-design", label: "Interior design" },
  { slug: "travel-advisory", label: "Travel advisory" },
  { slug: "professional-services", label: "Professional services" },
  { slug: "industrial-distribution", label: "Industrial distribution" },
  { slug: "building-supply", label: "Building supply" },
  { slug: "saas", label: "SaaS" },
  { slug: "other", label: "Other" },
];

export function EarlyAccess({
  defaultIndustry,
  source,
}: {
  defaultIndustry?: string;
  source?: string;
} = {}) {
  const prefersReduced = useReducedMotion() ?? false;
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [industry, setIndustry] = React.useState(defaultIndustry ?? "");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      role: String(fd.get("role") ?? "").trim(),
      channelCount: String(fd.get("channelCount") ?? "").trim() || undefined,
      note: String(fd.get("note") ?? "").trim() || undefined,
      industry: industry || defaultIndustry || undefined,
      source: source || "homepage",
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        fieldErrors?: Record<string, string[]>;
        retryAfter?: number;
      };

      if (res.status === 429) {
        setStatus("error");
        toast.error("Please wait a minute and try again.");
        return;
      }
      if (!res.ok || !json.ok) {
        if (json.fieldErrors) {
          const flat: Record<string, string> = {};
          for (const [k, v] of Object.entries(json.fieldErrors)) {
            flat[k] = Array.isArray(v) ? v[0] ?? "Invalid" : String(v);
          }
          setErrors(flat);
        }
        setStatus("error");
        toast.error("Something didn't pass validation — check the fields.");
        return;
      }

      setStatus("ok");
      toast.success("Request received — we'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
      setIndustry(defaultIndustry ?? "");
    } catch {
      setStatus("error");
      toast.error("Network hiccup — try again in a moment.");
    }
  }

  return (
    <Section id="waitlist" rule="top" tone="dossier" size="lg">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Eyebrow num="ACCESS" tag="REQUEST INVITATION" rule={false} />
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[var(--color-ink)] md:text-[44px] md:leading-[1.04]">
            We&apos;re onboarding in cohorts.
            <br />
            <span className="text-[var(--color-muted)]">Tell us your shape.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            Who you sell to, how many channels you run, and one thing your best rep knows that the rest of the team doesn&apos;t. We&apos;ll reply with a walkthrough grounded in your actual docs — not a generic demo.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <ClassifiedTag />
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              [RESPONSE SLA] 1 business day · [REGION] EU/US · [CAPACITY] Q1 2026
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="relative md:col-span-7"
        >
          <div className="rounded-md border border-[var(--color-rule)] bg-[var(--color-paper)] p-5 md:p-7">
            <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              <span>[FORM · W-01]</span>
              <span>ENCRYPTED IN TRANSIT</span>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Field label="Full name" name="name" error={errors.name} required autoComplete="name" />
              <Field label="Work email" name="email" type="email" error={errors.email} required autoComplete="email" />
              <Field label="Company" name="company" error={errors.company} required autoComplete="organization" />
              <Field label="Role" name="role" error={errors.role} required placeholder="e.g. Head of Revenue Ops" autoComplete="organization-title" />

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="industry" className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  Industry
                </Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger id="industry" className="h-10">
                    <SelectValue placeholder="Pick one" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDUSTRIES.map((i) => (
                      <SelectItem key={i.slug} value={i.slug}>
                        {i.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Field
                label="Channels in play"
                name="channelCount"
                placeholder="Slack, Gmail, WhatsApp, Shopify…"
                error={errors.channelCount}
              />

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <Label htmlFor="note" className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  What does your best rep know that the rest of the team doesn&apos;t?
                </Label>
                <Textarea
                  id="note"
                  name="note"
                  rows={3}
                  placeholder="One sentence is enough."
                  className="resize-y"
                />
                {errors.note && (
                  <p className="text-xs text-[var(--color-status-bad)]">{errors.note}</p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-rule)] pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-2)]">
                By requesting access you agree to our{" "}
                <a href="/privacy" className="underline underline-offset-2 hover:text-[var(--color-ink)]">
                  Privacy
                </a>{" "}
                and{" "}
                <a href="/terms" className="underline underline-offset-2 hover:text-[var(--color-ink)]">
                  Terms
                </a>
                .
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-paper)] transition-opacity",
                  status === "submitting"
                    ? "cursor-wait opacity-60"
                    : "hover:opacity-85",
                )}
              >
                {status === "submitting" ? "Sending…" : "Request access"}
                <span aria-hidden>→</span>
              </button>
            </div>

            {status === "ok" && (
              <p className="mt-4 border-t border-[var(--color-rule)] pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-status-ok)]">
                [RECEIVED] Thank you — look for a note from josef@mindpathbi.com.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]"
      >
        {label} {required && <span className="text-[var(--color-accent)]">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        className={cn(error && "border-[var(--color-status-bad)]")}
      />
      {error && (
        <p className="text-xs text-[var(--color-status-bad)]">{error}</p>
      )}
    </div>
  );
}
