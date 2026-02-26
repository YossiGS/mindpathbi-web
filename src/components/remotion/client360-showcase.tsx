"use client";

import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const C = {
  bg: "#000000", card: "#1d1d1f", border: "rgba(255,255,255,0.08)",
  text: "#f5f5f7", textSec: "#a1a1a6", textMut: "#6e6e73",
  blue: "#2997ff", green: "#30d158", orange: "#ff9f0a", red: "#ff453a", purple: "#bf5af2", pink: "#ff375f",
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

const TIMELINE = [
  { type: "email", text: "Sent renewal proposal via Gmail", time: "Today, 9:32 AM", color: C.blue, icon: "✉" },
  { type: "call", text: "Call with Sarah — discussed Q3 pricing", time: "Yesterday, 3:15 PM", color: C.green, icon: "📞" },
  { type: "note", text: "Added note: 'Interested in Enterprise tier'", time: "Feb 24, 11:00 AM", color: C.orange, icon: "📝" },
  { type: "whatsapp", text: "WhatsApp: 'Can you send the updated deck?'", time: "Feb 23, 5:42 PM", color: "#25D366", icon: "💬" },
  { type: "file", text: "Shared: Acme_Proposal_Q3.pdf", time: "Feb 23, 2:10 PM", color: C.purple, icon: "📄" },
  { type: "deal", text: "Deal 'Acme Q3 Renewal' moved to Proposal", time: "Feb 22, 10:30 AM", color: C.pink, icon: "🤝" },
  { type: "email", text: "Received: 'Re: Feature comparison'", time: "Feb 21, 4:18 PM", color: C.blue, icon: "✉" },
];

const FILES = [
  { name: "Acme_Proposal_Q3.pdf", size: "2.4 MB", date: "Feb 23" },
  { name: "SOW_Enterprise.docx", size: "890 KB", date: "Feb 20" },
  { name: "PricingSheet_2026.xlsx", size: "156 KB", date: "Feb 18" },
  { name: "NDA_Signed.pdf", size: "1.1 MB", date: "Jan 30" },
];

const GRAPH_NODES = [
  { x: 320, y: 180, label: "Sarah Johnson", type: "contact", color: C.blue, r: 28 },
  { x: 180, y: 100, label: "Acme Corp", type: "company", color: C.purple, r: 24 },
  { x: 460, y: 100, label: "Q3 Renewal", type: "deal", color: C.green, r: 22 },
  { x: 160, y: 260, label: "Gmail Thread", type: "comm", color: "#EA4335", r: 18 },
  { x: 320, y: 320, label: "WhatsApp Chat", type: "comm", color: "#25D366", r: 18 },
  { x: 480, y: 260, label: "Proposal.pdf", type: "file", color: C.orange, r: 18 },
  { x: 480, y: 180, label: "Task: Follow up", type: "task", color: C.pink, r: 16 },
  { x: 180, y: 180, label: "David Chen", type: "contact", color: C.blue, r: 20 },
];

const GRAPH_EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 7], [2, 5], [7, 3],
];

function GraphCanvas({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <Fade delay={delay}>
      <div style={{ background: C.card, borderRadius: 10, border: `1px solid ${C.border}`, padding: 12, height: "100%" }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: C.text, marginBottom: 8 }}>Relationship Graph</div>
        <svg width="100%" height="340" viewBox="0 0 640 380" style={{ overflow: "visible" }}>
          {GRAPH_EDGES.map(([from, to], ei) => {
            const a = GRAPH_NODES[from];
            const b = GRAPH_NODES[to];
            const p = spring({ frame: frame - (delay + 8 + ei * 2), fps, config: { damping: 20, stiffness: 80 } });
            return (
              <line
                key={`${from}-${to}`}
                x1={a.x} y1={a.y} x2={a.x + (b.x - a.x) * interpolate(p, [0, 1], [0, 1])} y2={a.y + (b.y - a.y) * interpolate(p, [0, 1], [0, 1])}
                stroke="rgba(255,255,255,0.06)" strokeWidth="1.5"
              />
            );
          })}
          {GRAPH_NODES.map((node, ni) => {
            const p = spring({ frame: frame - (delay + 5 + ni * 3), fps, config: { damping: 18, stiffness: 120 } });
            const scale = interpolate(p, [0, 1], [0, 1]);
            const opacity = interpolate(p, [0, 1], [0, 1]);
            return (
              <g key={node.label} transform={`translate(${node.x}, ${node.y})`} opacity={opacity}>
                <circle r={node.r * scale} fill={`${node.color}15`} stroke={node.color} strokeWidth="1.5" />
                <text y={node.r + 12} textAnchor="middle" fill={C.textSec} fontSize="8" fontFamily="-apple-system, sans-serif">
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </Fade>
  );
}

export const Client360Showcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const healthP = spring({ frame: frame - 20, fps, config: { damping: 22, stiffness: 80 } });
  const healthW = interpolate(healthP, [0, 1], [0, 85]);

  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* SIDEBAR */}
      <Fade delay={0} dx={-8} dy={0}>
        <div style={{ width: 46, height: "100%", background: "#0a0a0a", borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 10, gap: 2, position: "absolute", left: 0, top: 0, bottom: 0 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "#f5f5f7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#000" }}>M</span>
          </div>
          {["inbox", "dash", "contacts", "companies", "deals", "tasks", "insights"].map((item, i) => (
            <div key={item} style={{ width: 32, height: 28, borderRadius: 5, background: i === 2 ? "rgba(41,151,255,0.08)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, border: `1.5px solid ${i === 2 ? C.blue : C.textMut}` }} />
            </div>
          ))}
        </div>
      </Fade>

      {/* MAIN */}
      <div style={{ marginLeft: 46, flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* TOPBAR */}
        <Fade delay={3}>
          <div style={{ height: 36, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 9, color: C.textMut }}>← Contacts</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: C.text }}>Sarah Johnson</span>
              <span style={{ fontSize: 8, color: C.blue, background: "rgba(41,151,255,0.08)", padding: "1px 6px", borderRadius: 4, fontWeight: 500 }}>B2B</span>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ fontSize: 8, color: C.textMut, background: "rgba(255,255,255,0.04)", padding: "2px 8px", borderRadius: 4 }}>View Graph</span>
              <span style={{ fontSize: 8, color: C.textMut, background: "rgba(255,255,255,0.04)", padding: "2px 8px", borderRadius: 4 }}>Edit</span>
            </div>
          </div>
        </Fade>

        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* LEFT: Contact Info + Stats */}
          <div style={{ width: 220, borderRight: `1px solid ${C.border}`, padding: 12, overflow: "hidden", flexShrink: 0 }}>
            {/* Avatar */}
            <Fade delay={6}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(41,151,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: C.blue }}>SJ</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>Sarah Johnson</div>
                  <div style={{ fontSize: 9, color: C.textMut }}>VP Operations</div>
                  <div style={{ fontSize: 9, color: C.blue }}>Acme Corp</div>
                </div>
              </div>
            </Fade>

            {/* Quick stats */}
            <Fade delay={10}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginBottom: 12 }}>
                {[{ l: "Emails", v: "24", c: "#EA4335" }, { l: "Deals", v: "$48K", c: C.green }, { l: "Messages", v: "156", c: "#25D366" }, { l: "Tasks", v: "8", c: C.orange }].map((s) => (
                  <div key={s.l} style={{ background: C.card, borderRadius: 6, border: `1px solid ${C.border}`, padding: "6px 8px" }}>
                    <div style={{ fontSize: 8, color: C.textMut }}>{s.l}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: s.c }}>{s.v}</div>
                  </div>
                ))}
              </div>
            </Fade>

            {/* Health */}
            <Fade delay={14}>
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 9, color: C.textMut }}>Health Score</span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: C.green }}>85%</span>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${healthW}%`, borderRadius: 2, background: `linear-gradient(90deg, ${C.green}, ${C.blue})` }} />
                </div>
              </div>
            </Fade>

            {/* Files */}
            <Fade delay={18}>
              <div>
                <div style={{ fontSize: 9, fontWeight: 600, color: C.textMut, letterSpacing: "0.05em", textTransform: "uppercase" as const, marginBottom: 6 }}>Files</div>
                {FILES.map((f, fi) => (
                  <Fade key={f.name} delay={22 + fi * 4}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 0", borderBottom: fi < FILES.length - 1 ? `1px solid ${C.border}` : "none" }}>
                      <div style={{ width: 22, height: 22, borderRadius: 4, background: `${C.purple}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>📄</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 9.5, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{f.name}</div>
                        <div style={{ fontSize: 8, color: C.textMut }}>{f.size} · {f.date}</div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </Fade>
          </div>

          {/* MIDDLE: Activity Timeline */}
          <div style={{ flex: 1, padding: 14, overflow: "hidden", borderRight: `1px solid ${C.border}` }}>
            <Fade delay={8}>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.text, marginBottom: 12 }}>Activity Timeline</div>
            </Fade>
            {TIMELINE.map((item, ti) => (
              <Fade key={item.text} delay={12 + ti * 5}>
                <div style={{ display: "flex", gap: 10, marginBottom: 0 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${item.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>{item.icon}</div>
                    {ti < TIMELINE.length - 1 && <div style={{ width: 1.5, flex: 1, background: C.border, minHeight: 16 }} />}
                  </div>
                  <div style={{ paddingBottom: 12 }}>
                    <div style={{ fontSize: 10.5, color: C.text, lineHeight: 1.4 }}>{item.text}</div>
                    <div style={{ fontSize: 8.5, color: C.textMut, marginTop: 2 }}>{item.time}</div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {/* RIGHT: Relationship Graph */}
          <div style={{ width: 380, padding: 0, overflow: "hidden", flexShrink: 0 }}>
            <GraphCanvas delay={25} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
