import type { LogoName } from "./logos";

/**
 * Data behind the homepage <UnifiedPipelineDiagram />.
 *
 * Shape: radial convergence. Sources arrange around a ring on the left/top/
 * bottom; knowledge sources feed from below; the MindPath node receives in
 * the center; three unified-thread outputs exit on the right.
 *
 * Labels intentionally stay high-level — no vendor/tool names beyond the
 * channel/platform that the customer already uses. Matches the plan's
 * "be vague" rule.
 */

export type PipelineNode = {
  id: string;
  label: string;
  logo: LogoName;
  /** Radial position in degrees (0 = east, counter-clockwise). */
  angle: number;
  /** Lane label rendered next to the logo stamp in the full diagram. */
  lane: "channels" | "knowledge" | "systems";
};

export const CHANNEL_NODES: PipelineNode[] = [
  { id: "slack", label: "Slack", logo: "slack", angle: 155, lane: "channels" },
  { id: "gmail", label: "Email", logo: "gmail", angle: 175, lane: "channels" },
  { id: "whatsapp", label: "WhatsApp", logo: "whatsapp", angle: 195, lane: "channels" },
  { id: "telegram", label: "Telegram", logo: "telegram", angle: 215, lane: "channels" },
  { id: "teams", label: "Teams", logo: "teams", angle: 135, lane: "channels" },
  { id: "instagram", label: "Instagram DM", logo: "instagram", angle: 115, lane: "channels" },
  { id: "intercom", label: "Live chat", logo: "intercom", angle: 95, lane: "channels" },
];

export const KNOWLEDGE_NODES: PipelineNode[] = [
  { id: "notion", label: "Notion", logo: "notion", angle: 250, lane: "knowledge" },
  { id: "confluence", label: "Confluence", logo: "confluence", angle: 270, lane: "knowledge" },
  { id: "drive", label: "Drive", logo: "drive", angle: 290, lane: "knowledge" },
  { id: "sharepoint", label: "SharePoint", logo: "sharepoint", angle: 310, lane: "knowledge" },
];

// Systems arc: 9 nodes at ~13° spacing, running 330° → 75° through 0° (east).
// Leaves a 20° gap from the last KNOWLEDGE node (sharepoint at 310°) and a
// 20° gap before the first CHANNEL node (intercom at 95°). Chord length at
// 13° spacing (~46px) clears the 36px node badge with ~10px display gap.
// ERPs (Dynamics → Priority) cluster in the top half; CRMs/Billing/Commerce
// flow through east to south.
export const SYSTEM_NODES: PipelineNode[] = [
  { id: "dynamics", label: "ERP", logo: "dynamics", angle: 75, lane: "systems" },
  { id: "netsuite", label: "ERP", logo: "netsuite", angle: 62, lane: "systems" },
  { id: "sap", label: "ERP", logo: "sap", angle: 49, lane: "systems" },
  { id: "sapb1", label: "ERP", logo: "sapb1", angle: 36, lane: "systems" },
  { id: "priority", label: "ERP", logo: "priority", angle: 23, lane: "systems" },
  { id: "salesforce", label: "CRM", logo: "salesforce", angle: 9, lane: "systems" },
  { id: "hubspot", label: "CRM", logo: "hubspot", angle: 356, lane: "systems" },
  { id: "stripe", label: "Billing", logo: "stripe", angle: 343, lane: "systems" },
  { id: "shopify", label: "Commerce", logo: "shopify", angle: 330, lane: "systems" },
];

export const ALL_PIPELINE_NODES = [
  ...CHANNEL_NODES,
  ...KNOWLEDGE_NODES,
  ...SYSTEM_NODES,
];

/** Three outbound "unified threads" exiting the MindPath node. */
export const OUTPUT_THREADS = [
  {
    id: "classify",
    title: "Classified",
    caption: "intent + priority",
  },
  {
    id: "retrieve",
    title: "Grounded",
    caption: "sources cited",
  },
  {
    id: "act",
    title: "Drafted",
    caption: "reply queued",
  },
] as const;

/** Ring radius + center for SVG layout — consumed by the component. */
export const PIPELINE_LAYOUT = {
  viewBox: { w: 960, h: 520 },
  center: { x: 420, y: 260 },
  radius: 200,
  outputX: 780,
  outputSpacing: 90,
};
