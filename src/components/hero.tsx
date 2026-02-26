"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-12">
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.h1
          className="text-5xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[80px]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          One platform.
          <br />
          <span className="text-muted">Every customer touchpoint.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Unified inbox, Client&nbsp;360, AI&nbsp;copilot, and deep
          integrations&nbsp;— built for teams that refuse to lose another
          customer to fragmented tools.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted/40"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <polyline points="7 13 12 18 17 13" />
          <polyline points="7 6 12 11 17 6" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
