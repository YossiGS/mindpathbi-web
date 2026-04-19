"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
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
    <div className="flex flex-col gap-1.5 lg:gap-2">
      <div className="flex flex-wrap items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] lg:gap-1.5 lg:text-[10px] lg:tracking-[0.14em]">
        <span
          className={cn(
            "inline-flex items-center rounded-sm border px-1 py-0.5 font-mono lg:px-1.5",
            isAccent
              ? "border-[var(--color-accent)]/30 bg-[var(--color-accent-tint)] text-[var(--color-accent-ink)]"
              : "border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)]",
          )}
        >
          {kind}
        </span>
        {/* Channel / "grounded in N docs" — hidden below lg: because at
            md panels are still only ~400px wide and the chip+channel
            combo wraps awkwardly. */}
        <span className="hidden text-[var(--color-muted-2)] lg:inline">
          {channel}
        </span>
      </div>
      {/* Subject line — hidden below lg: because the kind-chip already
          communicates the lane and panels are too narrow for a second
          headline until real desktop widths. */}
      <div className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-ink)] lg:block">
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

  // When locked, show exactly that one vignette. Otherwise we render
  // ALL vignettes stacked in a single CSS grid cell and cycle opacity
  // between them. This means the container's intrinsic height is
  // always the tallest vignette — it never changes on slide change,
  // so the page below never jumps. No measurement, no min-height hack.
  const activeList = locked ? [locked] : VIGNETTES;
  const activeIdx = locked ? 0 : idx;

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
                  "flex-1 border-r border-[var(--color-rule)] px-1.5 py-1 text-left transition-colors last:border-r-0 lg:px-3 lg:py-2",
                  active
                    ? "bg-[var(--color-paper)] text-[var(--color-ink)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                )}
              >
                {/* Below lg: only the [01] index is visible — seven industry
                    labels would wrap to multiple lines on anything narrower
                    than ~1024px. */}
                <span className="block text-[9px] normal-case tracking-normal text-[var(--color-accent)] lg:text-[11px]">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className="hidden lg:block">
                  {v.industry.replace("-", " ")}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Stage: every vignette is mounted in the same CSS grid cell
          (gridArea 1/1). The container's natural height is therefore
          the TALLEST vignette at all times — it never changes when we
          cycle, so the page below never jumps. The active vignette
          fades in, others fade out; inactive vignettes are
          aria-hidden and click-through. */}
      <div className="relative grid [grid-template-columns:minmax(0,1fr)] [grid-template-rows:auto]">
      {activeList.map((vignette, vIdx) => {
        const isActive = vIdx === activeIdx;
        return (
        <motion.div
          key={vignette.id}
          initial={false}
          animate={prefersReduced ? {} : { opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!isActive}
          className={cn(
            "relative grid grid-cols-2 items-stretch gap-0 [grid-area:1/1]",
            !isActive && "pointer-events-none",
          )}
          style={{ opacity: prefersReduced ? (isActive ? 1 : 0) : undefined }}
        >
          {/* [CHANGED 2026-04-19] Panels are side-by-side at every
              breakpoint (was md:grid-cols-2 / stacked below md). The old
              vertical-arrow REPLY badge for the stacked mobile layout is
              gone; only the horizontal arrow remains. On mobile the badge
              shrinks to just an arrow so it doesn't sit on top of the
              bubble text at ~160px-wide panels. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex items-center gap-1 rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--color-muted)] shadow-sm lg:gap-1.5 lg:px-2.5 lg:py-1 lg:text-[9px] lg:tracking-[0.18em]">
              <span className="hidden lg:inline">Reply</span>
              <svg
                width="12"
                height="9"
                viewBox="0 0 14 10"
                fill="none"
                className="text-[var(--color-accent)] lg:h-[10px] lg:w-[14px]"
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

          {/* Inbound panel — customer voice */}
          <div className="flex flex-col border-r border-[var(--color-rule)] bg-[var(--color-paper-2)] p-2.5 md:p-4 lg:p-7 xl:p-8">
            <PanelHeader
              kind="INBOUND"
              channel={vignette.inbound.channel.toUpperCase()}
              subject={vignette.archetype}
              tone="muted"
            />

            <div className="mt-3 flex items-start gap-2 lg:mt-6 lg:gap-3.5">
              <span
                aria-hidden
                className="mt-0.5 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] font-mono text-[11px] font-semibold text-[var(--color-ink)] lg:inline-flex lg:h-10 lg:w-10 lg:text-[12px]"
              >
                {vignette.inbound.customer
                  .split(" ")
                  .map((s) => s[0])
                  .filter(Boolean)
                  .slice(0, 2)
                  .join("")}
              </span>
              <div className="min-w-0 flex-1">
                {/* Customer + "Received" — desktop only. Below lg: the
                    archetype at the top already names the scene. */}
                <div className="hidden flex-wrap items-baseline gap-x-2 gap-y-1 lg:flex">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink)]">
                    {vignette.inbound.customer}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-2)]">
                    Received
                  </span>
                </div>
                {/* Incoming message bubble — neutral, tail on the left */}
                <div className="relative rounded-[10px] rounded-tl-[2px] border border-[var(--color-rule)] bg-[var(--color-paper)] p-2 text-[11.5px] leading-snug text-[var(--color-ink)] shadow-[0_1px_0_rgba(11,15,23,0.02)] md:p-3 md:text-[13px] lg:mt-2.5 lg:rounded-[12px] lg:p-4 lg:text-[15px] lg:leading-relaxed">
                  {vignette.inbound.body}
                </div>
              </div>
            </div>
          </div>

          {/* Outbound panel — AI-drafted reply, accent-tinted wash */}
          <div
            className={cn(
              "relative flex flex-col p-2.5 md:p-4 lg:p-7 xl:p-8",
              "bg-[linear-gradient(180deg,var(--color-accent-tint)_0%,var(--color-paper)_55%)]",
            )}
          >
            {/* Thin accent seam on the left edge (desktop) to reinforce direction */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-[var(--color-accent)]/40 lg:block"
            />

            <PanelHeader
              kind="DRAFT · AI"
              channel={`GROUNDED IN ${vignette.outbound.sources.length} DOCS`}
              subject={vignette.outbound.preamble}
              tone="accent"
            />

            <div className="mt-3 flex items-start gap-2 lg:mt-6 lg:gap-3.5">
              <span
                aria-hidden
                className="mt-0.5 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-paper)] font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent-ink)] lg:inline-flex lg:h-10 lg:w-10 lg:text-[11px]"
              >
                MP
              </span>
              <div className="min-w-0 flex-1">
                {/* MindPath · Draft / Ready — desktop only; below lg: the
                    DRAFT · AI chip in the panel header already signals this. */}
                <div className="hidden flex-wrap items-baseline gap-x-2 gap-y-1 lg:flex">
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
                {/* [CHANGED 2026-04-19] Panels are side-by-side at every
                    breakpoint, so below lg: (< 1024px) each panel is narrow
                    and we keep the compact treatment: smaller type, limit
                    visible paragraphs to 2, show "· · ·" more-indicator.
                    Full desktop draft only at lg:+. */}
                {/* [CHANGED 2026-04-19] Breakpoint ladder for the draft
                    body:
                    - <md (phone, side-by-side ~170px): first 2 paras + "· · ·"
                    - md-lg (tablet ~450px/panel): first 3 paras + "· · ·"
                    - lg+ (desktop): full draft
                    Type size steps 11.5 → 13 → 15 at the same breakpoints. */}
                <div className="relative flex flex-col gap-1 rounded-[10px] rounded-tl-[2px] border border-[var(--color-accent)]/30 bg-[var(--color-paper)] p-2 text-[11.5px] leading-snug text-[var(--color-ink)] shadow-[0_1px_0_rgba(37,99,235,0.06)] md:gap-1.5 md:p-3 md:text-[13px] lg:mt-2.5 lg:gap-2.5 lg:rounded-[12px] lg:p-4 lg:text-[15px] lg:leading-relaxed">
                  {vignette.outbound.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className={cn(
                        i >= 2 && i < 3 && "hidden md:block lg:block",
                        i >= 3 && "hidden lg:block",
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {vignette.outbound.body.length > 2 && (
                    <p
                      aria-hidden
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-2)] lg:hidden",
                        vignette.outbound.body.length <= 3 && "md:hidden",
                      )}
                    >
                      · · ·
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-3 md:pt-4 lg:pt-6">
              {/* [CHANGED 2026-04-19] "Cited" rail and source chips render
                  at every breakpoint now — on phone the chips stack full-
                  width with truncation so the outbound panel has real
                  content at the bottom instead of leaving whitespace below
                  the truncated draft bubble.
                  md:+ lays them out inline in the usual wrap pattern.
                  Moves pills stay md:-only; at ~170px/panel they'd just
                  clutter the column. */}
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-muted-2)] md:text-[10px] md:tracking-[0.14em]">
                <span>Cited</span>
                <span aria-hidden className="h-px flex-1 bg-[var(--color-rule)]" />
              </div>
              <div className="mt-1.5 flex flex-col gap-1 md:mt-2 md:flex-row md:flex-wrap md:gap-1.5 lg:mt-2.5">
                {vignette.outbound.sources.map((s, i) => (
                  <SourceChip
                    key={s.filename}
                    filename={s.filename}
                    variant={prefersReduced ? "fixed" : "reveal"}
                    delay={i * 140}
                    className="w-full min-w-0 truncate px-1.5 text-[9px] tracking-[0.04em] md:w-auto md:px-2 md:text-[10px] md:tracking-[0.08em]"
                  />
                ))}
              </div>

              {/* [CHANGED 2026-04-19] Moves pills render at every breakpoint
                  now — same reasoning as the Cited rail: the outbound panel
                  otherwise has nothing beneath the bubble on narrow widths
                  and bleeds empty space when items-stretch matches the
                  longer inbound column. On phone the pills wrap into their
                  own rows with tighter padding + type. */}
              <div className="mt-2.5 flex flex-wrap gap-1 md:mt-3 md:gap-1.5 lg:mt-4">
                {vignette.moves.map((m) => (
                  <span
                    key={m}
                    className="inline-flex min-w-0 max-w-full items-center gap-1 rounded-sm border border-[var(--color-accent)]/25 bg-[var(--color-accent-tint)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-[var(--color-accent-ink)] md:px-2 md:text-[10px] md:tracking-[0.1em]"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 flex-none rounded-full bg-[var(--color-accent)]"
                    />
                    <span className="min-w-0 truncate">{m}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        );
      })}
      </div>
    </div>
  );
}
