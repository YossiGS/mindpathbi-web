import * as React from "react";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { ChannelLogo, type LogoName } from "@/components/mocks/logos";

type Connector = {
  name: string;
  kind: "channel" | "knowledge" | "system";
  logo: LogoName;
  desc: string;
  status: "live" | "soon";
};

const CONNECTORS: Connector[] = [
  { name: "Gmail", kind: "channel", logo: "gmail", desc: "OAuth · threaded history", status: "live" },
  { name: "Outlook", kind: "channel", logo: "outlook", desc: "Microsoft 365 · shared mailboxes", status: "live" },
  { name: "WhatsApp Business", kind: "channel", logo: "whatsapp", desc: "Cloud API · coexistence", status: "live" },
  { name: "Slack", kind: "channel", logo: "slack", desc: "Channels & DMs", status: "live" },
  { name: "Instagram DM", kind: "channel", logo: "instagram", desc: "Graph API", status: "live" },
  { name: "Facebook Messenger", kind: "channel", logo: "messenger", desc: "Pages · automated replies", status: "live" },
  { name: "Microsoft Teams", kind: "channel", logo: "teams", desc: "Threads · presence", status: "soon" },
  { name: "Intercom", kind: "channel", logo: "intercom", desc: "Conversations & notes", status: "soon" },
  { name: "Telegram", kind: "channel", logo: "telegram", desc: "Bot API · groups", status: "soon" },

  { name: "Google Drive", kind: "knowledge", logo: "drive", desc: "PDFs · Docs · Sheets", status: "live" },
  { name: "Manual upload", kind: "knowledge", logo: "upload", desc: "Drag-in docs · AI draft generator", status: "live" },
  { name: "Notion", kind: "knowledge", logo: "notion", desc: "Databases · pages", status: "soon" },
  { name: "Confluence", kind: "knowledge", logo: "confluence", desc: "Spaces · playbooks", status: "soon" },
  { name: "SharePoint", kind: "knowledge", logo: "sharepoint", desc: "Document libraries", status: "soon" },

  { name: "SAP", kind: "system", logo: "sap", desc: "S/4HANA · ECC modules", status: "live" },
  { name: "SAP Business One", kind: "system", logo: "sapb1", desc: "SMB ERP · inventory · finance", status: "live" },
  { name: "Priority", kind: "system", logo: "priority", desc: "ERP · orders · procurement", status: "live" },
  { name: "Shopify", kind: "system", logo: "shopify", desc: "Orders · catalog", status: "live" },
  { name: "WooCommerce", kind: "system", logo: "woo", desc: "Storefront & orders", status: "live" },
  { name: "Salesforce", kind: "system", logo: "salesforce", desc: "Accounts · opportunities", status: "soon" },
  { name: "HubSpot", kind: "system", logo: "hubspot", desc: "Contacts · pipelines", status: "soon" },
  { name: "NetSuite", kind: "system", logo: "netsuite", desc: "ERP · finance · commerce", status: "soon" },
  { name: "Microsoft Dynamics", kind: "system", logo: "dynamics", desc: "365 Sales · Business Central", status: "soon" },
  { name: "Stripe", kind: "system", logo: "stripe", desc: "Billing · invoices", status: "soon" },
];

const LANES: { code: string; label: string; sub: string; filter: Connector["kind"] }[] = [
  { code: "A", label: "Channels", sub: "Where your customers talk", filter: "channel" },
  { code: "B", label: "Knowledge", sub: "What your experts know", filter: "knowledge" },
  { code: "C", label: "Systems", sub: "Where the work lands", filter: "system" },
];

export function Integrations() {
  return (
    <Section id="integrations" rule="top" tone="paper-2" size="md">
      <Eyebrow num="CHANNELS" tag="CONNECTED SURFACES">
        One hub. Every channel your customer touches.
      </Eyebrow>

      <div className="mt-6 border-t border-[var(--color-rule)] pt-8">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-[var(--color-ink)] md:text-[40px] md:leading-[1.06]">
          We don&apos;t ask your customers to move.
          <br />
          <span className="text-[var(--color-muted)]">We bring every channel to one desk.</span>
        </h2>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
        {LANES.map((lane) => {
          const rows = CONNECTORS.filter((c) => c.kind === lane.filter);
          return (
            <div
              key={lane.code}
              className="flex flex-col gap-4 border-t border-[var(--color-rule)] pt-5 md:border-0 md:pt-0"
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    [LANE {lane.code}]
                  </div>
                  <div className="mt-1 text-base font-semibold tracking-tight text-[var(--color-ink)]">
                    {lane.label}
                  </div>
                  <div className="text-xs text-[var(--color-muted)]">{lane.sub}</div>
                </div>
              </div>

              <ul className="divide-y divide-[var(--color-rule)] border border-[var(--color-rule)] bg-[var(--color-paper)]">
                {rows.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center gap-3 px-3 py-2.5"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-muted)]">
                      <ChannelLogo
                        name={c.logo}
                        style={{ width: 14, height: 14 }}
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium text-[var(--color-ink)]">
                        {c.name}
                      </div>
                      <div className="truncate font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                        {c.desc}
                      </div>
                    </div>
                    <span
                      className={
                        "inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] " +
                        (c.status === "live"
                          ? "text-[var(--color-status-ok)]"
                          : "text-[var(--color-muted-2)]")
                      }
                    >
                      <span
                        className={
                          "h-1.5 w-1.5 rounded-full " +
                          (c.status === "live"
                            ? "bg-[var(--color-status-ok)]"
                            : "bg-[var(--color-muted-2)]")
                        }
                      />
                      {c.status === "live" ? "LIVE" : "SOON"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--color-rule)] pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)] md:grid-cols-4">
        {[
          { v: "13 live", l: "Today · more next" },
          { v: "<5 min", l: "To first connected" },
          { v: "Two-way", l: "Sync model" },
          { v: "Your plane", l: "Data residency" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-xl text-[var(--color-ink)] tracking-tight normal-case">{s.v}</div>
            <div className="mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
