"use client";

import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { Gauge } from "@/components/brand/gauge";

const DIALS = [
  {
    greek: "α",
    title: "Ground-truth accuracy",
    value: 87,
    caption:
      "How often the draft's cited facts match the source material verbatim.",
  },
  {
    greek: "β",
    title: "First-draft acceptance",
    value: 74,
    caption:
      "Percentage of AI-drafted replies sent by the rep without major edits.",
  },
  {
    greek: "γ",
    title: "Escalation rate",
    value: 18,
    caption:
      "Threads requiring senior-rep override. Lower is better — this dial inverts.",
  },
  {
    greek: "δ",
    title: "Knowledge freshness",
    value: 92,
    caption:
      "Corpus sync recency, normalized. High means the knowledge base is current.",
  },
] as const;

export function GaugeGrid() {
  return (
    <Section rule="top" tone="paper" size="md">
      <Eyebrow num="03" tag="[POSTURE · ILLUSTRATIVE]">
        The four dials we watch for you
      </Eyebrow>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {DIALS.map((d) => (
          <div
            key={d.greek}
            className="flex flex-col items-center rounded-md border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6"
          >
            <div className="self-start font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
              [{d.greek}]
            </div>
            <div className="mt-2 text-center text-sm font-medium text-[var(--color-ink)]">
              {d.title}
            </div>
            <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
              [ILLUSTRATIVE · NOT REAL]
            </div>
            <Gauge value={d.value} label={d.title} className="mt-4" />
            <p className="mt-3 max-w-xs text-center text-[12px] leading-relaxed text-[var(--color-muted)]">
              {d.caption}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
