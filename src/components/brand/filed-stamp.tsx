"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  sub?: string;
  className?: string;
};

export function FiledStamp({
  label = "FILED · AWAITING CLEARANCE",
  sub = "We'll reach out.",
  className,
}: Props) {
  const prefersReduced = useReducedMotion();
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md border border-[var(--color-rule)] bg-[var(--color-paper)] px-5 py-4 text-center",
        className,
      )}
    >
      {!prefersReduced && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-[var(--color-accent-tint)] to-transparent"
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: "1200%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
            times: [0, 0.08, 0.92, 1],
          }}
        />
      )}
      <div className="inline-flex items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent-tint)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
        <motion.span
          className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
          initial={{ scale: prefersReduced ? 1 : 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        {label}
      </div>
      {sub && <div className="mt-2 text-sm text-[var(--color-muted)]">{sub}</div>}
    </div>
  );
}
