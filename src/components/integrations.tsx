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

      {/* [CHANGED 2026-04-19] Three lanes stay side-by-side at every
          breakpoint — previously the grid collapsed to a single column
          < md, which produced three long vertical stacks. Mobile rows
          adopt a compact shape: smaller 24px logo tile, the descriptor
          line is hidden, and the LIVE/SOON chip collapses to just its
          status dot. At md+ everything returns to the full desktop row. */}
      <div className="mt-10 grid grid-cols-3 gap-2 md:gap-8">
        {LANES.map((lane) => {
          const rows = CONNECTORS.filter((c) => c.kind === lane.filter);
          return (
            <div
              key={lane.code}
              className="flex min-w-0 flex-col gap-3 border-t border-[var(--color-rule)] pt-4 md:gap-4 md:border-0 md:pt-0"
            >
              <div className="flex items-baseline justify-between">
                <div className="min-w-0">
                  <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-accent)] md:text-[10px] md:tracking-[0.18em]">
                    [LANE {lane.code}]
                  </div>
                  <div className="mt-1 truncate text-[13px] font-semibold tracking-tight text-[var(--color-ink)] md:text-base">
                    {lane.label}
                  </div>
                  <div className="hidden text-xs text-[var(--color-muted)] md:block">
                    {lane.sub}
                  </div>
                </div>
              </div>

              <ul className="divide-y divide-[var(--color-rule)] border border-[var(--color-rule)] bg-[var(--color-paper)]">
                {rows.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center gap-2 px-2 py-2 md:gap-3 md:px-3 md:py-2.5"
                  >
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-muted)] md:h-8 md:w-8">
                      <ChannelLogo
                        name={c.logo}
                        style={{ width: 12, height: 12 }}
                        className="md:!h-[14px] md:!w-[14px]"
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[12px] font-medium text-[var(--color-ink)] md:text-sm">
                        {c.name}
                      </div>
                      <div className="truncate font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-muted)] md:text-[10px] md:tracking-[0.14em]">
                        {c.desc}
                      </div>
                    </div>
                    {/* Status — desktop keeps the LIVE/SOON text, mobile
                        collapses to just the coloured dot so 3 lanes can
                        co-exist on a narrow viewport. */}
                    <span
                      title={c.status === "live" ? "LIVE" : "SOON"}
                      className={
                        "inline-flex flex-none items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] " +
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
                      <span className="hidden md:inline">
                        {c.status === "live" ? "LIVE" : "SOON"}
                      </span>
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
