"use client";

import { motion } from "motion/react";

export function EarlyAccess() {
  return (
    <section id="early-access" className="relative py-28 px-6">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-surface">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
            <rect x="2" y="4" width="20" height="16" rx="3" />
            <path d="M2 7l10 6 10-6" />
          </svg>
        </div>

        <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-[48px] lg:leading-[1.08]">
          Let&apos;s talk.
        </h2>

        <p className="mt-4 text-lg text-muted">
          We&apos;re working with a small group of early partners to shape the
          future of SMB business intelligence. If that sounds like you, reach out.
        </p>

        <div className="mt-8">
          <a
            href="mailto:mindpathbi@proton.me?subject=Early%20Access%20Request&body=Hi%20MindPath%20BI%20team%2C%0A%0AI%27m%20interested%20in%20early%20access.%20Here%27s%20a%20bit%20about%20us%3A%0A%0ACompany%3A%20%0ATeam%20size%3A%20%0ACurrent%20tools%3A%20%0A%0AThanks!"
            className="inline-flex rounded-full bg-foreground px-7 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
        </div>

        <p className="mt-5 text-xs text-muted">
          mindpathbi@proton.me
        </p>
      </motion.div>
    </section>
  );
}
