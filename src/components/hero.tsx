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

        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:mindpathbi@proton.me?subject=MindPath%20BI%20Inquiry&body=Hi%20MindPath%20BI%20team%2C%0A%0AI%27d%20like%20to%20learn%20more.%20Here%27s%20a%20bit%20about%20us%3A%0A%0ACompany%3A%20%0ATeam%20size%3A%20%0ACurrent%20tools%3A%20%0A%0AThanks!"
            className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
          <a
            href="#preview"
            className="flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            See how it works
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
