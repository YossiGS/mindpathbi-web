"use client";

import { motion } from "motion/react";

const connectors = [
  {
    name: "Gmail",
    description: "OAuth 2.0 · Real-time sync",
    color: "#EA4335",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    status: "live",
  },
  {
    name: "Outlook",
    description: "Microsoft Graph API",
    color: "#0078D4",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 8l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    status: "live",
  },
  {
    name: "IMAP/SMTP",
    description: "Any email provider",
    color: "#8B5CF6",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    status: "live",
  },
  {
    name: "WhatsApp",
    description: "Business API · Cloud hosted",
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    status: "live",
  },
  {
    name: "Slack",
    description: "Channels & DMs",
    color: "#E01E5A",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.5 10H19v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9.5C10 10.33 9.33 11 8.5 11h-5C2.67 11 2 10.33 2 9.5S2.67 8 3.5 8h5c.83 0 1.5.67 1.5 1.5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 3.5C8 2.67 8.67 2 9.5 2S11 2.67 11 3.5 10.33 5 9.5 5 8 4.33 8 3.5z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    status: "live",
  },
  {
    name: "Messenger",
    description: "Facebook & Instagram",
    color: "#0084FF",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    status: "soon",
  },
  {
    name: "SAP Business One",
    description: "Service Layer API",
    color: "#0FAAFF",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    status: "live",
  },
  {
    name: "SAP S/4HANA",
    description: "OData v4 connector",
    color: "#0FAAFF",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    status: "beta",
  },
  {
    name: "Priority ERP",
    description: "REST API integration",
    color: "#FF6B00",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    status: "live",
  },
  {
    name: "WooCommerce",
    description: "Orders, products, customers",
    color: "#96588A",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    status: "live",
  },
];

function StatusBadge({ status }: { status: string }) {
  const config = {
    live: { label: "Live", bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-400" },
    beta: { label: "Beta", bg: "bg-amber-500/10", text: "text-amber-400", dot: "bg-amber-400" },
    soon: { label: "Soon", bg: "bg-white/[0.06]", text: "text-muted", dot: "bg-muted/50" },
  }[status] ?? { label: status, bg: "bg-white/5", text: "text-muted", dot: "bg-muted/50" };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-medium ${config.bg} ${config.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="relative overflow-hidden py-32 px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 20%, rgba(129,140,248,0.05), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
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
            One hub. Every channel.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Connect email, messaging, ERP, and commerce platforms in minutes.
            Every conversation, order, and insight flows into one place.
          </p>
        </motion.div>

        {/* Connector grid */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {connectors.map((c, i) => (
            <motion.div
              key={c.name}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <div
                className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: c.color }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                    style={{
                      background: `${c.color}12`,
                      color: c.color,
                    }}
                  >
                    {c.icon}
                  </div>
                  <StatusBadge status={c.status} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{c.name}</h3>
                <p className="mt-1 text-xs text-muted/70">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-8 sm:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "10", label: "Connectors" },
            { value: "<5min", label: "Setup time" },
            { value: "2-way", label: "Data sync" },
            { value: "OAuth", label: "Secure auth" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold tracking-tight text-foreground">{stat.value}</div>
              <div className="mt-1 text-xs text-muted/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
