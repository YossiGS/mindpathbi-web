"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type GaugeProps = {
  value: number;
  max?: number;
  min?: number;
  label?: string;
  sub?: string;
  unit?: string;
  size?: number;
  className?: string;
};

export function Gauge({
  value,
  max = 100,
  min = 0,
  label,
  sub,
  unit,
  size = 180,
  className,
}: GaugeProps) {
  const prefersReduced = useReducedMotion();
  const normalized = Math.max(0, Math.min(1, (value - min) / (max - min)));
  const start = Math.PI * 0.8;
  const end = Math.PI * 2.2;
  const arc = end - start;
  const tickCount = 24;

  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 14;

  const needleAngle = start + normalized * arc;

  const needleX = round(cx + (r - 18) * Math.cos(needleAngle));
  const needleY = round(cy + (r - 18) * Math.sin(needleAngle));

  return (
    <div className={cn("inline-flex flex-col items-center", className)} style={{ width: size }}>
      <svg width={size} height={size * 0.72} viewBox={`0 0 ${size} ${size * 0.72}`} aria-label={label}>
        <g transform={`translate(0, ${-size * 0.14})`}>
          {/* Arc background */}
          <path
            d={describeArc(cx, cy, r, start, end)}
            fill="none"
            stroke="var(--color-rule)"
            strokeWidth={4}
            strokeLinecap="round"
          />
          {/* Ticks */}
          {Array.from({ length: tickCount }).map((_, i) => {
            const t = i / (tickCount - 1);
            const a = start + t * arc;
            const r1 = r - 2;
            const r2 = r - (i % 4 === 0 ? 12 : 7);
            const x1 = round(cx + r1 * Math.cos(a));
            const y1 = round(cy + r1 * Math.sin(a));
            const x2 = round(cx + r2 * Math.cos(a));
            const y2 = round(cy + r2 * Math.sin(a));
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={t <= normalized ? "var(--color-accent)" : "var(--color-rule)"}
                strokeWidth={1}
              />
            );
          })}
          {/* Needle */}
          <motion.line
            x1={cx}
            y1={cy}
            x2={needleX}
            y2={needleY}
            stroke="var(--color-ink)"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: prefersReduced ? 1 : 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: prefersReduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <circle cx={cx} cy={cy} r={4} fill="var(--color-ink)" />
        </g>
      </svg>
      <div className="mt-1 flex items-baseline gap-1 font-mono text-[20px] font-semibold text-[var(--color-ink)]">
        {Math.round(normalized * 100)}
        <span className="text-[11px] text-[var(--color-muted)]">{unit ?? "%"}</span>
      </div>
      {label && (
        <div className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
          {label}
        </div>
      )}
      {sub && <div className="mt-0.5 text-center text-[11px] text-[var(--color-muted-2)]">{sub}</div>}
    </div>
  );
}

function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

function polar(cx: number, cy: number, r: number, angle: number) {
  return {
    x: round(cx + r * Math.cos(angle)),
    y: round(cy + r * Math.sin(angle)),
  };
}

function describeArc(cx: number, cy: number, r: number, start: number, end: number) {
  const s = polar(cx, cy, r, start);
  const e = polar(cx, cy, r, end);
  const largeArc = end - start <= Math.PI ? 0 : 1;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`;
}
