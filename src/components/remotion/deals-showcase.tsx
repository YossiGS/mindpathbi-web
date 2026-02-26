"use client";

import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const C = {
  bg: "#000000", card: "#1d1d1f", border: "rgba(255,255,255,0.08)",
  text: "#f5f5f7", textSec: "#a1a1a6", textMut: "#6e6e73",
  blue: "#2997ff", green: "#30d158", orange: "#ff9f0a", red: "#ff453a", purple: "#bf5af2",
};

function Fade({ delay, children, dx = 0, dy = 8 }: { delay: number; children: React.ReactNode; dx?: number; dy?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 120 } });
  return (
    <div style={{ opacity: interpolate(p, [0, 1], [0, 1]), transform: `translate(${interpolate(p, [0, 1], [dx, 0])}px, ${interpolate(p, [0, 1], [dy, 0])}px)` }}>
      {children}
    </div>
  );
}

const STAGES = [
  {
    name: "Lead", count: 4, value: "$32K", color: C.textMut,
    deals: [
      { name: "TechFlow Expansion", value: "$12K", contact: "Alex Kim", prob: 20 },
      { name: "DataVault Onboarding", value: "$8K", contact: "Rachel Lee", prob: 15 },
      { name: "CloudSync Pilot", value: "$7K", contact: "Tom Haines", prob: 25 },
      { name: "NovaTech Inbound", value: "$5K", contact: "Sara Ali", prob: 10 },
    ],
  },
  {
    name: "Qualification", count: 3, value: "$67K", color: C.blue,
    deals: [
      { name: "Acme Corp Renewal", value: "$48K", contact: "Sarah Johnson", prob: 60 },
      { name: "GlobalTech Support", value: "$12K", contact: "David Chen", prob: 45 },
      { name: "Vertex Analytics", value: "$7K", contact: "Lisa Park", prob: 40 },
    ],
  },
  {
    name: "Proposal", count: 2, value: "$89K", color: C.purple,
    deals: [
      { name: "MegaCorp Enterprise", value: "$65K", contact: "Mike Torres", prob: 70 },
      { name: "FinServ Pro Plan", value: "$24K", contact: "Emma Wilson", prob: 65 },
    ],
  },
  {
    name: "Negotiation", count: 2, value: "$110K", color: C.orange,
    deals: [
      { name: "BrightWave Annual", value: "$75K", contact: "James Liu", prob: 85 },
      { name: "CoreStack Scale", value: "$35K", contact: "Nina Patel", prob: 80 },
    ],
  },
  {
    name: "Closed Won", count: 3, value: "$142K", color: C.green,
    deals: [
      { name: "AlphaNet Full Suite", value: "$58K", contact: "Chris Evans", prob: 100 },
      { name: "Zenith Upgrade", value: "$48K", contact: "Diana Ross", prob: 100 },
      { name: "PulseTech Starter", value: "$36K", contact: "Ben Taylor", prob: 100 },
    ],
  },
];

function DealCard({ deal, delay }: { deal: { name: string; value: string; contact: string; prob: number }; delay: number }) {
  const probColor = deal.prob >= 80 ? C.green : deal.prob >= 50 ? C.blue : deal.prob >= 30 ? C.orange : C.textMut;
  return (
    <Fade delay={delay} dy={6}>
      <div style={{ background: C.card, borderRadius: 8, padding: "10px 12px", border: `1px solid ${C.border}`, marginBottom: 6 }}>
        <div style={{ fontSize: 10.5, fontWeight: 600, color: C.text, marginBottom: 4 }}>{deal.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{deal.value}</span>
          <span style={{ fontSize: 9, color: C.textMut }}>{deal.contact}</span>
        </div>
        <div style={{ marginTop: 6, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${deal.prob}%`, borderRadius: 2, background: probColor }} />
        </div>
        <div style={{ fontSize: 8, color: probColor, marginTop: 3, fontWeight: 500 }}>{deal.prob}% probability</div>
      </div>
    </Fade>
  );
}

export const DealsShowcase: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* SIDEBAR */}
      <Fade delay={0} dx={-8} dy={0}>
        <div style={{ width: 46, height: "100%", background: "#0a0a0a", borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 10, gap: 2, position: "absolute", left: 0, top: 0, bottom: 0 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "#f5f5f7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#000" }}>M</span>
          </div>
          {["inbox", "dash", "contacts", "companies", "deals", "tasks", "insights"].map((item, i) => (
            <div key={item} style={{ width: 32, height: 28, borderRadius: 5, background: i === 4 ? "rgba(41,151,255,0.08)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, border: `1.5px solid ${i === 4 ? C.blue : C.textMut}` }} />
            </div>
          ))}
        </div>
      </Fade>

      {/* MAIN */}
      <div style={{ marginLeft: 46, flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* TOPBAR */}
        <Fade delay={3}>
          <div style={{ height: 36, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 10, fontWeight: 500, color: C.textMut }}>Deals</span>
              <span style={{ fontSize: 9, color: C.green, background: "rgba(48,209,88,0.08)", padding: "1px 8px", borderRadius: 8, fontWeight: 500 }}>$440K pipeline</span>
            </div>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#fff" }}>YG</div>
          </div>
        </Fade>

        {/* KANBAN */}
        <div style={{ flex: 1, display: "flex", gap: 0, overflow: "hidden", padding: "12px 8px" }}>
          {STAGES.map((stage, si) => (
            <Fade key={stage.name} delay={6 + si * 5} dx={15} dy={0}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 6px", minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8, padding: "0 4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: stage.color }} />
                    <span style={{ fontSize: 10, fontWeight: 600, color: C.text }}>{stage.name}</span>
                    <span style={{ fontSize: 9, color: C.textMut, background: "rgba(255,255,255,0.04)", padding: "0 5px", borderRadius: 4 }}>{stage.count}</span>
                  </div>
                  <span style={{ fontSize: 9, fontWeight: 600, color: C.textMut }}>{stage.value}</span>
                </div>
                <div style={{ flex: 1, overflow: "hidden" }}>
                  {stage.deals.map((deal, di) => (
                    <DealCard key={deal.name} deal={deal} delay={15 + si * 5 + di * 4} />
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
