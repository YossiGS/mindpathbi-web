"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  words: string[];
  interval?: number;
  className?: string;
};

export function WordRotator({ words, interval = 2500, className }: Props) {
  const prefersReduced = useReducedMotion();
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    if (prefersReduced) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [words.length, interval, prefersReduced]);

  const current = words[idx] ?? words[0];

  return (
    <span className={cn("relative inline-block align-baseline", className)}>
      <span aria-hidden className="invisible">
        {words.reduce((longest, w) => (w.length > longest.length ? w : longest), "")}
      </span>
      <span className="sr-only">{current}</span>
      <span aria-hidden className="absolute inset-0 flex items-baseline">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current}
            initial={prefersReduced ? {} : { y: "0.4em", opacity: 0 }}
            animate={prefersReduced ? {} : { y: 0, opacity: 1 }}
            exit={prefersReduced ? {} : { y: "-0.4em", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--color-accent)]"
          >
            {current}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
