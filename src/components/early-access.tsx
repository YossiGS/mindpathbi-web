"use client";

import { motion } from "motion/react";

export function EarlyAccess() {
  return (
    <section id="early-access" className="relative py-32 px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(129,140,248,0.06), transparent)",
        }}
      />

      <motion.div
        className="relative mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Alpha — Accepting early partners
        </span>

        <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Be the first to experience
          <br />
          <span className="gradient-text">unified intelligence.</span>
        </h2>

        <p className="mt-4 text-lg text-muted">
          We&apos;re working closely with a small group of early partners to
          shape the future of SMB business intelligence.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:mindpathbi@proton.me?subject=Early%20Access%20Request&body=Hi%20MindPath%20BI%20team%2C%0A%0AI%27m%20interested%20in%20early%20access.%20Here%27s%20a%20bit%20about%20us%3A%0A%0ACompany%3A%20%0ATeam%20size%3A%20%0ACurrent%20tools%3A%20%0A%0AThanks!"
            className="glow group inline-flex h-12 items-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-bright px-8 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-accent/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <path d="M2 7l10 6 10-6" />
            </svg>
            Get in Touch
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <p className="mt-5 text-xs text-muted/60">
          mindpathbi@proton.me — We reply within 24 hours.
        </p>
      </motion.div>
    </section>
  );
}
