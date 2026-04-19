"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  label?: string;
  active?: boolean;
  className?: string;
  bars?: { top: string; left: string; width: string; height?: string }[];
};

const defaultBars: NonNullable<Props["bars"]> = [
  { top: "18%", left: "10%", width: "28%" },
  { top: "32%", left: "18%", width: "42%" },
  { top: "58%", left: "8%", width: "24%" },
  { top: "74%", left: "42%", width: "36%" },
];

export function RedactionOverlay({
  children,
  label = "FIELD REPORT · REDACTED",
  active = true,
  className,
  bars = defaultBars,
}: Props) {
  const prefersReduced = useReducedMotion();
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      {active && (
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {bars.map((b, i) => (
              <motion.div
                key={i}
                className="absolute bg-[var(--color-ink)]"
                style={{
                  top: b.top,
                  left: b.left,
                  width: b.width,
                  height: b.height ?? "10px",
                  transformOrigin: "left",
                }}
                initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: prefersReduced ? 0 : 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute right-3 top-3 border border-[var(--color-ink)] bg-[var(--color-paper)]/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink)] backdrop-blur">
            {label}
          </div>
        </>
      )}
    </div>
  );
}
