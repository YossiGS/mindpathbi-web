"use client";

import { motion } from "motion/react";

const painPoints = [
  { stat: "9.5", label: "Average SaaS tools per SMB team", icon: "🧩" },
  { stat: "40%", label: "Of customer context lost between tools", icon: "📉" },
  { stat: "3.2h", label: "Wasted daily switching between apps", icon: "⏰" },
];

export function Problem() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest text-accent uppercase">
            The problem
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Your team is drowning in tools.
            <br />
            <span className="text-muted">Your customers feel it.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.label}
              className="gradient-border flex flex-col items-center p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-4xl">{point.icon}</span>
              <span className="mt-4 text-4xl font-bold gradient-text">
                {point.stat}
              </span>
              <span className="mt-2 text-sm text-muted">{point.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/5 bg-surface p-4 text-sm text-muted">
            {[
              "Gmail",
              "Outlook",
              "WhatsApp",
              "Slack",
              "Sheets",
              "SAP",
              "HubSpot",
              "Zendesk",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs"
              >
                {tool}
              </span>
            ))}
            <span className="text-accent">→</span>
            <span className="rounded-md border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              MindPath BI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
