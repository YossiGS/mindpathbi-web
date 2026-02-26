"use client";

import { motion } from "motion/react";

const integrations = [
  { name: "Gmail", color: "#EA4335" },
  { name: "Outlook", color: "#0078D4" },
  { name: "WhatsApp", color: "#25D366" },
  { name: "Slack", color: "#E01E5A" },
  { name: "SAP B1", color: "#0FAAFF" },
  { name: "SAP S/4", color: "#0FAAFF" },
  { name: "Priority", color: "#FF6B00" },
  { name: "WooCommerce", color: "#96588A" },
  { name: "WordPress", color: "#21759B" },
];

function IntegrationPill({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-surface px-5 py-3 whitespace-nowrap">
      <div
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

export function Integrations() {
  const doubled = [...integrations, ...integrations];

  return (
    <section id="integrations" className="relative overflow-hidden py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest text-accent uppercase">
            Integrations
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Connects to your entire stack.
          </h2>
          <p className="mt-4 text-lg text-muted">
            9 connectors across email, messaging, ERP, and e-commerce — with
            more shipping every month.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll row */}
      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex w-max gap-4"
          style={{
            animation: "slide-logos 30s linear infinite",
          }}
        >
          {doubled.map((integration, i) => (
            <IntegrationPill
              key={`${integration.name}-${i}`}
              name={integration.name}
              color={integration.color}
            />
          ))}
        </div>
      </div>

      {/* Grid of integration details */}
      <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
        {[
          {
            category: "Email",
            items: ["Gmail (OAuth)", "Outlook (OAuth)", "IMAP/SMTP"],
          },
          {
            category: "Messaging",
            items: ["WhatsApp Business", "Slack", "Messenger (soon)"],
          },
          {
            category: "ERP & Commerce",
            items: ["SAP Business One", "SAP S/4HANA", "WooCommerce"],
          },
        ].map((group, i) => (
          <motion.div
            key={group.category}
            className="rounded-xl border border-white/5 bg-surface p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-accent">
              {group.category}
            </h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <svg
                    className="h-3.5 w-3.5 text-accent"
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
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
