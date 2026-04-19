"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  filename: string;
  variant?: "fixed" | "reveal";
  delay?: number;
  className?: string;
};

export function SourceChip({ filename, variant = "fixed", delay = 0, className }: Props) {
  const prefersReduced = useReducedMotion();
  const [revealed, setRevealed] = React.useState(variant === "fixed" || !!prefersReduced);

  React.useEffect(() => {
    if (variant !== "reveal" || prefersReduced) return;
    const id = window.setTimeout(() => setRevealed(true), 600 + delay);
    return () => window.clearTimeout(id);
  }, [variant, delay, prefersReduced]);

  const mask = "•".repeat(Math.max(6, filename.length));

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border border-[var(--color-rule)] bg-[var(--color-paper-2)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-muted)]",
        className,
      )}
    >
      <span className="flex-none text-[var(--color-accent)]">[</span>
      <span className="flex-none text-[var(--color-muted-2)]">SOURCE:</span>
      <motion.span
        className="min-w-0 flex-1 truncate text-[var(--color-ink)]"
        animate={{ opacity: revealed ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
      >
        {revealed ? filename : mask}
      </motion.span>
      <span className="flex-none text-[var(--color-accent)]">]</span>
    </span>
  );
}
