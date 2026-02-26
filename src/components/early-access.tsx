"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

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
          shape the future of SMB business intelligence. Join the waitlist.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-5 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 sm:w-80"
            />
            <button
              type="submit"
              className="glow h-12 w-full cursor-pointer rounded-full bg-gradient-to-r from-accent to-accent-bright px-8 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-accent/20 sm:w-auto"
            >
              Request Access
            </button>
          </form>
        ) : (
          <motion.div
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-6 py-3 text-sm text-green-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            You&apos;re on the list! We&apos;ll be in touch soon.
          </motion.div>
        )}

        <p className="mt-4 text-xs text-muted/60">
          No spam. We&apos;ll only reach out when we&apos;re ready for you.
        </p>
      </motion.div>
    </section>
  );
}
