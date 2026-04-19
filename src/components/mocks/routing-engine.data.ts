/**
 * Data behind the homepage <RoutingEngineDiagram />.
 *
 * Shape: left-to-right flow. Inbound threads (channels × intents) feed into
 * the routing engine, which scores them across a handful of signals and
 * assigns each thread to the right specialist on the team.
 *
 * Labels stay archetypal — initials only, role-not-person, no vendor names —
 * matching the plan's "be vague but credible" rule.
 */

export type RoutingSignal = {
  id: string;
  label: string;
  /** Normalized weight 0..1 — drives the animated bar length. */
  weight: number;
};

export type TeamMember = {
  id: string;
  initials: string;
  role: string;
  /** Small mono suffix tag, e.g. "ENG · EN/DE". */
  tag: string;
  status: "avail" | "busy" | "off";
};

export type InboundThread = {
  id: string;
  /** Two-letter channel code rendered in the channel stamp. */
  code: string;
  /** Long-form channel name (for a11y + title). */
  channel: string;
  /** Short preview copy — intentionally vague. */
  preview: string;
};

export const ROUTING_SIGNALS: RoutingSignal[] = [
  { id: "intent", label: "INTENT", weight: 0.92 },
  { id: "priority", label: "PRIORITY", weight: 0.74 },
  { id: "skill", label: "SKILL MATCH", weight: 0.88 },
  { id: "sla", label: "SLA", weight: 0.51 },
  { id: "language", label: "LANGUAGE", weight: 1.0 },
  { id: "workload", label: "WORKLOAD", weight: 0.42 },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "ek",
    initials: "EK",
    role: "Technical sales",
    tag: "ENG · EN/DE",
    status: "avail",
  },
  {
    id: "jm",
    initials: "JM",
    role: "Accounts",
    tag: "ACC · EN",
    status: "avail",
  },
  {
    id: "ro",
    initials: "RO",
    role: "Support",
    tag: "SUP · EN",
    status: "busy",
  },
  {
    id: "al",
    initials: "AL",
    role: "Support",
    tag: "SUP · ES",
    status: "avail",
  },
  {
    id: "tb",
    initials: "TB",
    role: "Billing",
    tag: "BIL · EN",
    status: "off",
  },
];

export const INBOUND_THREADS: InboundThread[] = [
  {
    id: "t1",
    code: "WA",
    channel: "WhatsApp",
    preview: "Grain match for the Salem order?",
  },
  {
    id: "t2",
    code: "EM",
    channel: "Email",
    preview: "Renewal terms — enterprise tier",
  },
  {
    id: "t3",
    code: "SL",
    channel: "Slack",
    preview: "API limits on the Pro plan?",
  },
];

/** Routing destination the loop highlights. */
export const PICKED_MEMBER_ID = "ek";
/** The inbound thread that travels through the engine in the loop. */
export const SOURCE_THREAD_ID = "t1";

/** Total length of one scored-and-assigned cycle (seconds). */
export const ROUTING_CYCLE_SECONDS = 6;

/** SVG layout anchors — consumed by the component. */
export const ROUTING_LAYOUT = {
  viewBox: { w: 960, h: 520 },
  inbound: { x: 40, w: 210, cardH: 100, cardGap: 16 },
  engine: { x: 290, y: 80, w: 360, h: 360 },
  team: { x: 680, w: 240, cardH: 64, cardGap: 10 },
};
