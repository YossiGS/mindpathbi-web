"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

interface Connector {
  name: string;
  desc: string;
  status?: string;
  color: string;
  icon: ReactNode;
}

function GmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 6L12 13L22 6" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#EA4335" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="#0078D4" strokeWidth="1.5" />
      <ellipse cx="10" cy="12" rx="4" ry="4.5" stroke="#0078D4" strokeWidth="1.5" />
      <path d="M14 8H20V16H14" stroke="#0078D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ImapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="#8B5CF6" strokeWidth="1.5" />
      <path d="M16 12C16 8 20 6 20 6" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 12C16 16 20 18 20 18" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 6L8 12L4 18" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 21L4.5 16C3.6 14.4 3 12.7 3 11C3 6 7 2 12 2C17 2 21 6 21 11C21 16 17 20 12 20C10.3 20 8.6 19.4 7 18.5L3 21Z" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 10C9 10 9.5 8 10.5 8C11.5 8 11.5 10 12 11C12.5 12 13 13 14 13C15 13 15 11.5 15 11.5" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="#0FAAFF" strokeWidth="1.5" />
      <text x="12" y="14.5" textAnchor="middle" fill="#0FAAFF" fontSize="7" fontWeight="700" fontFamily="system-ui">SAP</text>
    </svg>
  );
}

function PriorityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="#FF6B00" strokeWidth="1.5" />
      <text x="12" y="14.5" textAnchor="middle" fill="#FF6B00" fontSize="7" fontWeight="700" fontFamily="system-ui">PRI</text>
    </svg>
  );
}

function WooIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 16.5C16.2 16.5 15.5 17.2 15.5 18C15.5 18.8 16.2 19.5 17 19.5C17.8 19.5 18.5 18.8 18.5 18C18.5 17.2 17.8 16.5 17 16.5ZM8 18C8 18.8 7.3 19.5 6.5 19.5C5.7 19.5 5 18.8 5 18C5 17.2 5.7 16.5 6.5 16.5C7.3 16.5 8 17.2 8 18Z" stroke="#96588A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WordPressIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#21759B" strokeWidth="1.5" />
      <text x="12" y="15.5" textAnchor="middle" fill="#21759B" fontSize="10" fontWeight="700" fontFamily="system-ui">W</text>
    </svg>
  );
}

function PhoneStreamIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C17.56 21.27 14.15 20.52 11.18 18.85C8.41 17.31 6.1 15 4.56 12.23C2.88 9.23 2.12 5.79 2.44 2.33C2.48 1.78 2.93 1.33 3.49 1.33H6.49C6.98 1.33 7.4 1.68 7.49 2.16C7.65 3.15 7.93 4.12 8.34 5.04L6.6 6.78C8 9.45 10.14 11.59 12.81 12.99L14.55 11.25C15.47 11.66 16.44 11.94 17.43 12.1C17.92 12.19 18.27 12.62 18.27 13.1V16.1" stroke="#ff9f0a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 2V8M18 8L21 5M18 8L15 5" stroke="#ff9f0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M14.5 2C13.67 2 13 2.67 13 3.5V8.5C13 9.33 13.67 10 14.5 10H15.5C16.33 10 17 9.33 17 8.5V3.5C17 2.67 16.33 2 15.5 2H14.5Z" fill="#E01E5A" />
      <path d="M3.5 13C2.67 13 2 13.67 2 14.5V15.5C2 16.33 2.67 17 3.5 17H8.5C9.33 17 10 16.33 10 15.5V14.5C10 13.67 9.33 13 8.5 13H3.5Z" fill="#36C5F0" />
      <path d="M20.5 7C21.33 7 22 7.67 22 8.5V9.5C22 10.33 21.33 11 20.5 11H15.5C14.67 11 14 10.33 14 9.5V8.5C14 7.67 14.67 7 15.5 7H20.5Z" fill="#2EB67D" />
      <path d="M9.5 14C10.33 14 11 14.67 11 15.5V20.5C11 21.33 10.33 22 9.5 22H8.5C7.67 22 7 21.33 7 20.5V15.5C7 14.67 7.67 14 8.5 14H9.5Z" fill="#ECB22E" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="#E1306C" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="#E1306C" />
    </svg>
  );
}

function MessengerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.04 2 11C2 13.8 3.44 16.28 5.76 17.88V22L9.68 19.82C10.44 20.02 11.2 20.14 12 20.14C17.52 20.14 22 16.1 22 11.14C22 6.04 17.52 2 12 2Z" stroke="#0084FF" strokeWidth="1.5" />
      <path d="M8 12L10.5 9.5L13 12L15.5 9.5" stroke="#0084FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0A66C2" strokeWidth="1.5" />
      <path d="M8 11V16M8 8V8.01M12 16V11C12 11 14 9.5 16 11V16" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SalesforceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 16C3.8 16 2 14.2 2 12C2 10.2 3.2 8.6 4.9 8.1C5 5.3 7.2 3 10 3C11.9 3 13.6 4 14.6 5.5C15.3 5.2 16.1 5 17 5C19.8 5 22 7.2 22 10C22 10.3 21.97 10.6 21.9 10.9C23.2 11.6 24 13 24 14.5C24 16.4 22.4 18 20.5 18H6Z" stroke="#00A1E0" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function HubSpotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="#FF7A59" strokeWidth="1.5" />
      <path d="M12 3V9M12 15V21M3 12H9M15 12H21" stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1.5" fill="#FF7A59" />
      <circle cx="12" cy="21" r="1.5" fill="#FF7A59" />
      <circle cx="3" cy="12" r="1.5" fill="#FF7A59" />
      <circle cx="21" cy="12" r="1.5" fill="#FF7A59" />
    </svg>
  );
}

function ShopifyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M9 22L4 6H20L15 22H9Z" stroke="#96BF48" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 6V2" stroke="#96BF48" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 6C9 3.8 10.3 2 12 2C13.7 2 15 3.8 15 6" stroke="#96BF48" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ZendeskIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M21 5L12 14L3 5" stroke="#03363D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 5H21V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V5Z" stroke="#03363D" strokeWidth="1.5" />
    </svg>
  );
}

function IntercomIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="18" rx="3" stroke="#286EFA" strokeWidth="1.5" />
      <line x1="8" y1="8" x2="8" y2="14" stroke="#286EFA" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="6" x2="12" y2="14" stroke="#286EFA" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="8" x2="16" y2="14" stroke="#286EFA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TwilioIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#F22F46" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="1.5" fill="#F22F46" />
      <circle cx="15" cy="9" r="1.5" fill="#F22F46" />
      <circle cx="9" cy="15" r="1.5" fill="#F22F46" />
      <circle cx="15" cy="15" r="1.5" fill="#F22F46" />
    </svg>
  );
}

function StripeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#635BFF" strokeWidth="1.5" />
      <path d="M13 8C11 7 9 7.5 9 9.5C9 12.5 15 11 15 14.5C15 16.5 13 17 11 16" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="6" x2="12" y2="18" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function QuickBooksIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#2CA01C" strokeWidth="1.5" />
      <path d="M8 12H16M16 12L13 9M16 12L13 15" stroke="#2CA01C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="14" height="12" rx="2" stroke="#2D8CFF" strokeWidth="1.5" />
      <path d="M16 10L21 7V17L16 14" stroke="#2D8CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="#4285F4" strokeWidth="1.5" />
      <path d="M3 9H21" stroke="#4285F4" strokeWidth="1.5" />
      <path d="M8 2V5M16 2V5" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="7" y="12" width="3" height="3" rx="0.5" fill="#4285F4" />
    </svg>
  );
}

function NotionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
      <path d="M8 8H16M8 12H13M8 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground" />
    </svg>
  );
}

function JiraIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L20 12L12 22L4 12L12 2Z" stroke="#0052CC" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 8L16 12L12 16L8 12L12 8Z" stroke="#0052CC" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function SapS4Icon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="#0FAAFF" strokeWidth="1.5" />
      <text x="12" y="14.5" textAnchor="middle" fill="#0FAAFF" fontSize="6" fontWeight="700" fontFamily="system-ui">S/4</text>
    </svg>
  );
}

const connectors: Connector[] = [
  { name: "Gmail", desc: "OAuth 2.0 · Real-time sync", status: "live", color: "#EA4335", icon: <GmailIcon /> },
  { name: "Outlook", desc: "Microsoft Graph API", status: "live", color: "#0078D4", icon: <OutlookIcon /> },
  { name: "IMAP/SMTP", desc: "Any email provider", status: "live", color: "#8B5CF6", icon: <ImapIcon /> },
  { name: "WhatsApp", desc: "Business API · Coexistence Mode", status: "live", color: "#25D366", icon: <WhatsAppIcon /> },
  { name: "SAP B1", desc: "Service Layer API", status: "live", color: "#0FAAFF", icon: <SapIcon /> },
  { name: "Priority", desc: "REST API integration", status: "live", color: "#FF6B00", icon: <PriorityIcon /> },
  { name: "WooCommerce", desc: "Orders & customers", status: "live", color: "#96588A", icon: <WooIcon /> },
  { name: "WordPress", desc: "Content & forms", status: "live", color: "#21759B", icon: <WordPressIcon /> },
];

const futureConnectors: Connector[] = [
  { name: "Live Call Stream", desc: "Real-time phone → AI context", color: "#ff9f0a", icon: <PhoneStreamIcon /> },
  { name: "Slack", desc: "Channels & DMs", color: "#E01E5A", icon: <SlackIcon /> },
  { name: "SAP S/4HANA", desc: "OData v4 connector", color: "#0FAAFF", icon: <SapS4Icon /> },
  { name: "Instagram", desc: "DMs & comments", color: "#E1306C", icon: <InstagramIcon /> },
  { name: "Messenger", desc: "Facebook & pages", color: "#0084FF", icon: <MessengerIcon /> },
  { name: "LinkedIn", desc: "InMail & connections", color: "#0A66C2", icon: <LinkedInIcon /> },
  { name: "Salesforce", desc: "CRM sync & contacts", color: "#00A1E0", icon: <SalesforceIcon /> },
  { name: "HubSpot", desc: "Deals, contacts & tickets", color: "#FF7A59", icon: <HubSpotIcon /> },
  { name: "Shopify", desc: "Orders & customers", color: "#96BF48", icon: <ShopifyIcon /> },
  { name: "Zendesk", desc: "Tickets & support", color: "#03363D", icon: <ZendeskIcon /> },
  { name: "Intercom", desc: "Chat & help center", color: "#286EFA", icon: <IntercomIcon /> },
  { name: "Twilio", desc: "SMS & voice calls", color: "#F22F46", icon: <TwilioIcon /> },
  { name: "Stripe", desc: "Payments & invoices", color: "#635BFF", icon: <StripeIcon /> },
  { name: "QuickBooks", desc: "Accounting & billing", color: "#2CA01C", icon: <QuickBooksIcon /> },
  { name: "Zoom", desc: "Meetings & recordings", color: "#2D8CFF", icon: <ZoomIcon /> },
  { name: "Google Calendar", desc: "Events & scheduling", color: "#4285F4", icon: <CalendarIcon /> },
  { name: "Notion", desc: "Docs & knowledge base", color: "#f5f5f7", icon: <NotionIcon /> },
  { name: "Jira", desc: "Issues & projects", color: "#0052CC", icon: <JiraIcon /> },
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

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {connectors.map((c, i) => (
            <motion.div
              key={c.name}
              className="group rounded-2xl bg-surface p-5 transition-colors hover:bg-surface-light"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-background">
                {c.icon}
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                {c.status && <StatusBadge status={c.status} />}
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">{c.desc}</p>
            </motion.div>
          ))}
        </div>

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

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {futureConnectors.map((c, i) => (
            <motion.div
              key={c.name}
              className="group flex flex-col items-center gap-2 rounded-xl bg-surface/50 px-3 py-4 text-center transition-colors hover:bg-surface"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.25, delay: i * 0.02 }}
            >
              <div className="opacity-50 transition-opacity group-hover:opacity-100">
                {c.icon}
              </div>
              <div className="text-xs font-medium text-foreground/80">{c.name}</div>
              <div className="text-[10px] leading-tight text-muted/60">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
