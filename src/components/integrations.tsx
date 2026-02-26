"use client";

import { motion } from "motion/react";

const connectors = [
  { name: "Gmail", desc: "OAuth 2.0 · Real-time sync", status: "live" },
  { name: "Outlook", desc: "Microsoft Graph API", status: "live" },
  { name: "IMAP/SMTP", desc: "Any email provider", status: "live" },
  { name: "WhatsApp", desc: "Business API · Cloud", status: "live" },
  { name: "Slack", desc: "Channels & DMs", status: "live" },
  { name: "Messenger", desc: "Facebook & Instagram", status: "soon" },
  { name: "SAP B1", desc: "Service Layer API", status: "live" },
  { name: "SAP S/4HANA", desc: "OData v4 connector", status: "beta" },
  { name: "Priority", desc: "REST API integration", status: "live" },
  { name: "WooCommerce", desc: "Orders & customers", status: "live" },
];

function StatusDot({ status }: { status: string }) {
  const color = status === "live" ? "bg-green-400" : status === "beta" ? "bg-amber-400" : "bg-muted/40";
  return <span className={`h-1.5 w-1.5 rounded-full ${color}`} />;
}

export function Integrations() {
  return (
    <section id="integrations" className="relative py-28 px-6">
      <div className="mx-auto max-w-[980px]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-muted">Integrations</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-[48px] lg:leading-[1.08]">
            One hub. Every channel.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
            Connect email, messaging, ERP, and commerce platforms in minutes.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {connectors.map((c, i) => (
            <motion.div
              key={c.name}
              className="rounded-2xl bg-surface p-5 transition-colors hover:bg-surface-light"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                <StatusDot status={c.status} />
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: "10", label: "Connectors" },
            { value: "<5 min", label: "Setup" },
            { value: "2-way", label: "Sync" },
            { value: "OAuth", label: "Auth" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <div className="mt-0.5 text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
