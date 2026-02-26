"use client";

import { motion } from "motion/react";

const scenarios = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "One person, five roles",
    description:
      "Your best rep handles sales, support, onboarding, renewals, and billing. When they're on a call, everything else stops. When they're sick — nobody knows what's going on.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Slow replies kill deals",
    description:
      'A prospect emails at 9 AM. Nobody sees it until 2 PM because it\'s buried in a shared inbox. By then they\'ve already replied "we went with someone else."',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Bots everywhere, humans nowhere",
    description:
      'Every tool your customer touches has an auto-reply, a chatbot, or a "we\'ll get back to you" message. They don\'t want another bot — they want someone who actually knows their name.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: '"Can you repeat that?"',
    description:
      "Your customer explains their issue on WhatsApp. Then again over email. Then again to your colleague. Three conversations, zero context carried over.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Churn you never saw coming",
    description:
      "A $40K account hasn't logged in for 3 weeks. Their last email was a complaint. Nobody connected the dots because the data lives in 4 different tools.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Flying blind on customer health",
    description:
      "You have no dashboard, no score, no signal. Just a gut feeling about which accounts are happy. By the time you realize one isn't — they've already left.",
  },
];

export function Problem() {
  return (
    <section className="relative py-32 px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(239,68,68,0.04), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest text-red-400/80 uppercase">
            The problem
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Small teams. Big expectations.
            <br />
            <span className="text-muted">Zero margin for error.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            SMB teams are expected to deliver enterprise-level customer experience
            with a fraction of the people, budget, and tools. Here&apos;s what that
            actually looks like.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative flex flex-col border-white/[0.03] p-8 transition-colors hover:bg-white/[0.02]"
              style={{
                borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.03)" : undefined,
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.03)" : undefined,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/[0.07] text-red-400/70 transition-colors group-hover:bg-red-500/10 group-hover:text-red-400">
                {s.icon}
              </div>
              <h3 className="mt-5 text-[15px] font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted/80">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 text-sm">
            {["Gmail", "Outlook", "WhatsApp", "Slack", "Sheets", "SAP", "HubSpot", "Zendesk"].map((tool) => (
              <span key={tool} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                {tool}
              </span>
            ))}
            <span className="mx-1 text-accent">→</span>
            <span className="rounded-md border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              MindPath BI
            </span>
          </div>
          <p className="mt-4 text-sm text-muted/60">
            Stop juggling. Start knowing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
