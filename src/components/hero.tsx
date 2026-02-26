"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(129,140,248,0.4) 0%, rgba(167,139,250,0.2) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Currently in Alpha — Early Access Open
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          One Platform.
          <br />
          <span className="gradient-text">Every Customer Touchpoint.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Unified inbox, Client&nbsp;360, AI&nbsp;copilot, and deep
          integrations&nbsp;— built for SMB teams that refuse to lose another
          customer to fragmented tools.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="mailto:mindpathbi@proton.me?subject=Early%20Access%20Request&body=Hi%20MindPath%20BI%20team%2C%0A%0AI%27m%20interested%20in%20early%20access.%20Here%27s%20a%20bit%20about%20us%3A%0A%0ACompany%3A%20%0ATeam%20size%3A%20%0ACurrent%20tools%3A%20%0A%0AThanks!"
            className="glow group relative inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-bright px-8 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-accent/20"
          >
            Get in Touch
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#demo"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/10"
          >
            <svg
              className="h-4 w-4 text-accent"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Demo
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
