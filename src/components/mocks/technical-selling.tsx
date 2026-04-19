"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SourceChip } from "@/components/brand/source-chip";
import { cn } from "@/lib/utils";
import {
  VIGNETTES,
  type IndustrySlug,
  type TechnicalSellingVignette,
} from "./technical-selling.data";

type PanelHeaderProps = {
  kind: string;
  channel: string;
  subject: string;
  tone?: "muted" | "accent";
};

function PanelHeader({ kind, channel, subject, tone = "muted" }: PanelHeaderProps) {
  const isAccent = tone === "accent";
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]">
        <span
          className={cn(
            "inline-flex items-center rounded-sm border px-1.5 py-0.5 font-mono",
            isAccent
              ? "border-[var(--color-accent)]/30 bg-[var(--color-accent-tint)] text-[var(--color-accent-ink)]"
              : "border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)]",
          )}
        >
          {kind}
        </span>
        <span className="text-[var(--color-muted-2)]">{channel}</span>
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink)]">
        {subject}
      </div>
    </div>
  );
}

type Props = {
  /** If set, pins the mock to a single archetype (used on industry pages + product deep-dives). */
  lockedIndex?: number | IndustrySlug;
  /** How long to dwell on each vignette before advancing (ms). */
  dwell?: number;
  /** Hide the archetype tab list — useful for narrow sidebar use inside /product/ai. */
  compact?: boolean;
  className?: string;
};

function resolveLocked(
  lockedIndex: Props["lockedIndex"],
): TechnicalSellingVignette | null {
  if (lockedIndex === undefined) return null;
  if (typeof lockedIndex === "number") return VIGNETTES[lockedIndex] ?? null;
  return VIGNETTES.find((v) => v.industry === lockedIndex) ?? null;
}

export function TechnicalSellingMock({
  lockedIndex,
  dwell = 6400,
  compact = false,
  className,
}: Props) {
  const prefersReduced = useReducedMotion() ?? false;
  const locked = resolveLocked(lockedIndex);
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    if (locked || prefersReduced) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % VIGNETTES.length);
    }, dwell);
    return () => window.clearInterval(id);
  }, [locked, prefersReduced, dwell]);

  const vignette = locked ?? VIGNETTES[idx];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-[var(--color-rule)] bg-[var(--color-paper)]",
        className,
      )}
    >
      {/* Tab strip — hidden in locked / compact mode */}
      {!locked && !compact && (
        <div
          role="tablist"
          aria-label="Industry vignettes"
          className="flex flex-wrap gap-0 border-b border-[var(--color-rule)] bg-[var(--color-paper-2)] font-mono text-[10px] uppercase tracking-[0.14em]"
        >
          {VIGNETTES.map((v, i) => {
            const active = i === idx;
            return (
              <button
                key={v.id}
                role="tab"
                aria-selected={active}
                onClick={() => setIdx(i)}
                className={cn(
                  "flex-1 border-r border-[var(--color-rule)] px-3 py-2 text-left transition-colors last:border-r-0",
                  active
                    ? "bg-[var(--color-paper)] text-[var(--color-ink)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                )}
              >
                <span className="block text-[11px] normal-case tracking-normal text-[var(--color-accent)]">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className="block">{v.industry.replace("-", " ")}</span>
              </button>
            );
          })}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={vignette.id}
          initial={prefersReduced ? {} : { opacity: 0, y: 8 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid items-stretch gap-0 md:grid-cols-2"
        >
          {/* Thread connector — desktop: horizontal arrow centered between panels */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
          >
            <div className="flex items-center gap-1.5 rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted)] shadow-sm">
              <span>Reply</span>
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                className="text-[var(--color-accent)]"
              >
                <path
                  d="M1 5h11m0 0L8.5 1.5M12 5 8.5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Thread connector — mobile: vertical arrow between stacked panels */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:hidden"
          >
            <div className="flex items-center gap-1.5 rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted)] shadow-sm">
              <span>Reply</span>
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                className="text-[var(--color-accent)]"
              >
                <path
                  d="M5 1v9m0 0L1.5 6.5M5 10l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Inbound panel — customer voice */}
          <div className="flex flex-col border-b border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:border-b-0 md:border-r md:p-7 lg:p-8">
            <PanelHeader
              kind="INBOUND"
              channel={vignette.inbound.channel.toUpperCase()}
              subject={vignette.archetype}
              tone="muted"
            />

            <div className="mt-6 flex items-start gap-3.5">
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] font-mono text-[12px] font-semibold text-[var(--color-ink)]"
              >
                {vignette.inbound.customer
                  .split(" ")
                  .map((s) => s[0])
                  .filter(Boolean)
                  .slice(0, 2)
                  .join("")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink)]">
                    {vignette.inbound.customer}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-2)]">
                    Received
                  </span>
                </div>
                {/* Incoming message bubble — neutral, tail on the left */}
                <div className="relative mt-2.5 rounded-[12px] rounded-tl-[2px] border border-[var(--color-rule)] bg-[var(--color-paper)] p-4 text-[15px] leading-relaxed text-[var(--color-ink)] shadow-[0_1px_0_rgba(11,15,23,0.02)]">
                  {vignette.inbound.body}
                </div>
              </div>
            </div>
          </div>

          {/* Outbound panel — AI-drafted reply, accent-tinted wash */}
          <div
            className={cn(
              "relative flex flex-col p-6 md:p-7 lg:p-8",
              "bg-[linear-gradient(180deg,var(--color-accent-tint)_0%,var(--color-paper)_55%)]",
            )}
          >
            {/* Thin accent seam on the left edge (desktop) to reinforce direction */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-[var(--color-accent)]/40 md:block"
            />

            <PanelHeader
              kind="DRAFT · AI"
              channel={`GROUNDED IN ${vignette.outbound.sources.length} DOCS`}
              subject={vignette.outbound.preamble}
              tone="accent"
            />

            <div className="mt-6 flex items-start gap-3.5">
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-paper)] font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent-ink)]"
              >
                MP
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-accent-ink)]">
                    MindPath · Draft
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-2)]">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-ok)]"
                    />
                    Ready
                  </span>
                </div>
                {/* Reply bubble — accent-tinted, tail on the left to mirror inbound */}
                <div className="relative mt-2.5 flex flex-col gap-2.5 rounded-[12px] rounded-tl-[2px] border border-[var(--color-accent)]/30 bg-[var(--color-paper)] p-4 text-[15px] leading-relaxed text-[var(--color-ink)] shadow-[0_1px_0_rgba(37,99,235,0.06)]">
                  {vignette.outbound.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-2)]">
                <span>Cited</span>
                <span aria-hidden className="h-px flex-1 bg-[var(--color-rule)]" />
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {vignette.outbound.sources.map((s, i) => (
                  <SourceChip
                    key={s.filename}
                    filename={s.filename}
                    variant={prefersReduced ? "fixed" : "reveal"}
                    delay={i * 140}
                  />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {vignette.moves.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center gap-1 rounded-sm border border-[var(--color-accent)]/25 bg-[var(--color-accent-tint)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-accent-ink)]"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-[var(--color-accent)]"
                    />
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
