"use client";

import { Gauge } from "@/components/brand/gauge";

const METRICS = [
  { label: "PATCH CADENCE", unit: "d" },
  { label: "INCIDENT DRILLS", unit: "/yr" },
  { label: "MEAN-TIME-TO-DETECT", unit: "min" },
] as const;

export function PostureHealth() {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        [ILLUSTRATIVE · NOT REAL]
      </p>
      <Gauge
        value={82}
        label="POSTURE SCORE"
        sub="Illustrative only"
        size={220}
      />

      <div className="mt-10 grid w-full max-w-xl grid-cols-3 gap-px overflow-hidden rounded-md border border-[var(--color-rule)] bg-[var(--color-rule)]">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="flex flex-col items-center gap-1.5 bg-[var(--color-paper)] px-3 py-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {m.label}
            </span>
            <span
              className="redacted-shimmer inline-block h-3 w-10 rounded-sm"
              aria-label="Redacted"
            />
            <span className="font-mono text-[9px] text-[var(--color-muted-2)]">
              {m.unit}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-[var(--color-muted)]">
        Real numbers shared under NDA.
      </p>
    </div>
  );
}
