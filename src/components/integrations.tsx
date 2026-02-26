"use client";

import { motion } from "motion/react";

const connectors = [
  { name: "Gmail", desc: "OAuth 2.0 · Real-time sync", status: "live", color: "#EA4335" },
  { name: "Outlook", desc: "Microsoft Graph API", status: "live", color: "#0078D4" },
  { name: "IMAP/SMTP", desc: "Any email provider", status: "live", color: "#8B5CF6" },
  { name: "WhatsApp", desc: "Business API · Coexistence Mode", status: "live", color: "#25D366" },
  { name: "SAP B1", desc: "Service Layer API", status: "live", color: "#0FAAFF" },
  { name: "Priority", desc: "REST API integration", status: "live", color: "#FF6B00" },
  { name: "WooCommerce", desc: "Orders & customers", status: "live", color: "#96588A" },
  { name: "WordPress", desc: "Content & forms", status: "live", color: "#21759B" },
];

const futureConnectors = [
  { name: "Live Call Stream", desc: "Real-time phone → AI context", color: "#ff9f0a" },
  { name: "Slack", desc: "Channels & DMs", color: "#E01E5A" },
  { name: "SAP S/4HANA", desc: "OData v4 connector", color: "#0FAAFF" },
  { name: "Instagram", desc: "DMs & comments", color: "#E1306C" },
  { name: "Messenger", desc: "Facebook & pages", color: "#0084FF" },
  { name: "LinkedIn", desc: "InMail & connections", color: "#0A66C2" },
  { name: "Salesforce", desc: "CRM sync & contacts", color: "#00A1E0" },
  { name: "HubSpot", desc: "Deals, contacts & tickets", color: "#FF7A59" },
  { name: "Shopify", desc: "Orders & customers", color: "#96BF48" },
  { name: "Zendesk", desc: "Tickets & support", color: "#03363D" },
  { name: "Intercom", desc: "Chat & help center", color: "#286EFA" },
  { name: "Twilio", desc: "SMS & voice calls", color: "#F22F46" },
  { name: "Stripe", desc: "Payments & invoices", color: "#635BFF" },
  { name: "QuickBooks", desc: "Accounting & billing", color: "#2CA01C" },
  { name: "Zoom", desc: "Meetings & recordings", color: "#2D8CFF" },
  { name: "Google Calendar", desc: "Events & scheduling", color: "#4285F4" },
  { name: "Notion", desc: "Docs & knowledge base", color: "#f5f5f7" },
  { name: "Jira", desc: "Issues & projects", color: "#0052CC" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "live") return <span className="h-1.5 w-1.5 rounded-full bg-green-400" />;
  if (status === "beta") return <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />;
  return null;
}

export function Integrations() {
  return (
    <section id="integrations" className="relative py-28 px-6">
      <div className="mx-auto max-w-[1080px]">
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
            Connect email, messaging, ERP, and commerce in minutes — with more on the way.
          </p>
        </motion.div>

        {/* Live connectors */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                <StatusBadge status={c.status} />
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: "8", label: "Live now" },
            { value: "18+", label: "Coming soon" },
            { value: "<5 min", label: "Setup" },
            { value: "2-way", label: "Sync" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <div className="mt-0.5 text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Roadmap / Coming Soon */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium tracking-wider text-muted uppercase">Roadmap</p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            And that&apos;s just the start.
          </h3>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-muted">
            We&apos;re building connectors for every tool your team touches.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {futureConnectors.map((c, i) => (
            <motion.div
              key={c.name}
              className="group flex items-center gap-2.5 rounded-xl bg-surface/50 px-4 py-3 transition-colors hover:bg-surface"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.25, delay: i * 0.02 }}
            >
              <div className="h-2 w-2 shrink-0 rounded-full opacity-40 group-hover:opacity-80 transition-opacity" style={{ backgroundColor: c.color }} />
              <div className="min-w-0">
                <div className="text-xs font-medium text-foreground/80 truncate">{c.name}</div>
                <div className="text-[10px] text-muted/60 truncate">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
