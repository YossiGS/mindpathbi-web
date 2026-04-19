"use client";

import * as React from "react";
import {
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { ScoreRing } from "@/components/brand/score-ring";

const STAGES = [
  { id: "classify", label: "Classify", num: "01" },
  { id: "retrieve", label: "Retrieve", num: "02" },
  { id: "suggest", label: "Suggest", num: "03" },
  { id: "act", label: "Act", num: "04" },
  { id: "learn", label: "Learn", num: "05" },
  { id: "score", label: "Score", num: "06" },
] as const;

export function AIPipelineMock() {
  const prefersReduced = useReducedMotion() ?? false;
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const [p, setP] = React.useState(0);

  React.useEffect(() => {
    if (prefersReduced) {
      setP(1);
      return;
    }
    return progress.on("change", (v: number) => setP(v));
  }, [progress, prefersReduced]);

  const activeIdx = Math.min(5, Math.floor(p * 6));

  return (
    <Section rule="top" tone="paper-2" size="lg">
      <Eyebrow num="02" tag="[PIPELINE]">
        How one message moves through
      </Eyebrow>

      {/* [CHANGED 2026-04-19] `min-h-[200vh]` is the scroll-runway for the
          desktop sticky pipeline — the outer div is 2× viewport so the
          inner `md:sticky md:top-24` content stays pinned while the user
          scrolls through the stage progression. On mobile there is no
          sticky (see `md:sticky` below), so a 200vh reservation just
          leaves ~1000px of blank paper-2 under the vertical stage list.
          Scope the runway to md:+ only. */}
      <div ref={ref} className="relative mt-10 md:min-h-[200vh]">
        <div className="md:sticky md:top-24">
          {/* ---- Desktop: horizontal pipeline ---- */}
          <div className="hidden md:block">
            <div className="rounded-lg border border-[var(--color-rule)] bg-[var(--color-paper)] p-6">
              {/* Stat panels */}
              <div className="grid grid-cols-6 gap-3">
                {STAGES.map((stage, i) => (
                  <div
                    key={stage.id}
                    className="transition-opacity duration-300"
                    style={{ opacity: i <= activeIdx ? 1 : 0.12 }}
                  >
                    <StagePanel stageId={stage.id} />
                  </div>
                ))}
              </div>

              {/* Track */}
              <div className="relative mt-6 h-12">
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[var(--color-rule)]" />
                <div
                  className="absolute top-1/2 left-0 h-px -translate-y-1/2 bg-[var(--color-accent)]"
                  style={{ width: `${Math.min(p * 100, 100)}%` }}
                />

                {STAGES.map((stage, i) => {
                  const pct = (i / 5) * 100;
                  const lit = i <= activeIdx;
                  return (
                    <div
                      key={stage.id}
                      className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${pct}%` }}
                    >
                      <div
                        className="h-3 w-3 rounded-full border-2"
                        style={{
                          borderColor: lit
                            ? "var(--color-accent)"
                            : "var(--color-rule)",
                          backgroundColor: lit
                            ? "var(--color-accent)"
                            : "var(--color-paper)",
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Labels */}
              <div className="mt-2 grid grid-cols-6 gap-3">
                {STAGES.map((stage, i) => (
                  <div
                    key={stage.id}
                    className="text-center font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{
                      color:
                        i <= activeIdx
                          ? "var(--color-ink)"
                          : "var(--color-muted-2)",
                    }}
                  >
                    [{stage.num}] {stage.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Mobile: vertical pipeline ---- */}
          <div className="md:hidden">
            <div className="relative border-l-2 border-[var(--color-rule)] pl-6">
              {STAGES.map((stage, i) => {
                const lit = i <= activeIdx;
                return (
                  <div key={stage.id} className="relative pb-8 last:pb-0">
                    <div
                      className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2"
                      style={{
                        borderColor: lit
                          ? "var(--color-accent)"
                          : "var(--color-rule)",
                        backgroundColor: lit
                          ? "var(--color-accent)"
                          : "var(--color-paper-2)",
                      }}
                    />
                    <div
                      className="font-mono text-[10px] uppercase tracking-[0.18em]"
                      style={{
                        color: lit
                          ? "var(--color-ink)"
                          : "var(--color-muted-2)",
                      }}
                    >
                      [{stage.num}] {stage.label}
                    </div>
                    <div
                      className="mt-2"
                      style={{ opacity: lit ? 1 : 0.2 }}
                    >
                      <StagePanel stageId={stage.id} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Per-stage stat panels                                             */
/* ------------------------------------------------------------------ */

function StagePanel({ stageId }: { stageId: string }) {
  switch (stageId) {
    case "classify":
      return (
        <div className="rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-3">
          <div className="space-y-1.5 font-mono text-[10px] text-[var(--color-muted)]">
            <div className="flex items-center justify-between">
              <span>intent</span>
              <span className="redacted-shimmer inline-block h-3 w-14 rounded-sm" />
            </div>
            <div className="flex items-center justify-between">
              <span>urgency</span>
              <span className="redacted-shimmer inline-block h-3 w-8 rounded-sm" />
            </div>
            <div className="flex items-center justify-between">
              <span>confidence</span>
              <span className="redacted-shimmer inline-block h-3 w-16 rounded-sm" />
            </div>
          </div>
        </div>
      );

    case "retrieve":
      return (
        <div className="rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-3">
          <div className="space-y-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
            <div className="rounded bg-[var(--color-paper)] px-1.5 py-0.5">
              [SOURCE: catalog.md]
            </div>
            <div className="rounded bg-[var(--color-paper)] px-1.5 py-0.5">
              [SOURCE: pricing.md]
            </div>
            <div className="rounded bg-[var(--color-paper)] px-1.5 py-0.5">
              [SOURCE: policy.md]
            </div>
          </div>
        </div>
      );

    case "suggest":
      return (
        <div className="rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-3">
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded-sm bg-[var(--color-rule)]" />
            <div className="h-2 w-4/5 rounded-sm bg-[var(--color-rule)]" />
            <div className="h-2 w-3/5 rounded-sm bg-[var(--color-rule-soft)]" />
          </div>
          <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--color-muted-2)]">
            DRAFT PREVIEW
          </div>
        </div>
      );

    case "act":
      return (
        <div className="rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-3">
          <code className="block font-mono text-[9px] text-[var(--color-muted)]">
            POST /orders/quote
          </code>
          <div className="mt-1 font-mono text-[8px] text-[var(--color-accent)]">
            → 201 ACCEPTED
          </div>
        </div>
      );

    case "learn":
      return (
        <div className="rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-3">
          <svg
            viewBox="0 0 80 32"
            className="w-full"
            aria-label="Improvement trend line"
          >
            <polyline
              points="0,28 16,24 32,18 48,12 64,7 80,4"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="mt-1 flex justify-between font-mono text-[8px] text-[var(--color-muted-2)]">
            <span>DAY 1</span>
            <span>DAY 90</span>
          </div>
        </div>
      );

    case "score":
      return (
        <div className="flex items-center justify-center rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-2">
          <ScoreRing value={76} size={56} stroke={4} />
        </div>
      );

    default:
      return null;
  }
}
