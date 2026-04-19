"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  max?: number;
  label?: string;
  sub?: string;
  size?: number;
  stroke?: number;
  className?: string;
};

export function ScoreRing({
  value,
  max = 100,
  label,
  sub,
  size = 160,
  stroke = 8,
  className,
}: Props) {
  const prefersReduced = useReducedMotion();
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, value / max));
  const offset = c - pct * c;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} role="img" aria-label={label ?? "Score ring"}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: prefersReduced ? offset : c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: prefersReduced ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="font-mono text-[28px] font-semibold tracking-tight text-[var(--color-ink)]">
          {Math.round(pct * 100)}
          <span className="text-[14px] text-[var(--color-muted)]">%</span>
        </div>
        {label && (
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {label}
          </div>
        )}
        {sub && <div className="mt-1 text-[11px] text-[var(--color-muted-2)]">{sub}</div>}
      </div>
    </div>
  );
}
