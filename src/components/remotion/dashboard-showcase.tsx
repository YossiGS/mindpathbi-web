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

function AnimatedNumber({ delay, target }: { delay: number; target: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: { damping: 20, stiffness: 100 } });
  return <>{Math.round(interpolate(p, [0, 1], [0, target]))}</>;
}

function StatCard({ label, value, change, color, delay, prefix = "", suffix = "" }: { label: string; value: number; change: string; color: string; delay: number; prefix?: string; suffix?: string }) {
  return (
    <Fade delay={delay}>
      <div style={{ background: C.card, borderRadius: 10, padding: "14px 16px", border: `1px solid ${C.border}` }}>
        <div style={{ fontSize: 10, color: C.textMut, marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: "-0.02em" }}>
          {prefix}<AnimatedNumber delay={delay} target={value} />{suffix}
        </div>
        <div style={{ fontSize: 9, color, marginTop: 4, fontWeight: 500 }}>{change}</div>
      </div>
    </Fade>
  );
}

function BarChart({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bars = [65, 48, 82, 55, 70, 90, 42];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <Fade delay={delay}>
      <div style={{ background: C.card, borderRadius: 10, padding: 16, border: `1px solid ${C.border}` }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: C.text, marginBottom: 12 }}>Messages This Week</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 80 }}>
          {bars.map((h, i) => {
            const p = spring({ frame: frame - (delay + 5 + i * 3), fps, config: { damping: 15, stiffness: 100 } });
            const height = interpolate(p, [0, 1], [0, h]);
            return (
              <div key={days[i]} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: "100%", height, borderRadius: 3, background: i === 5 ? C.blue : "rgba(255,255,255,0.08)" }} />
                <span style={{ fontSize: 8, color: C.textMut }}>{days[i]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}

const ACTIVITIES = [
  { type: "email", text: "Sarah Johnson sent an email about renewal", time: "2m ago", color: C.blue },
  { type: "deal", text: "Deal 'Acme Q3' moved to Negotiation", time: "15m ago", color: C.green },
  { type: "alert", text: "TechFlow Inc health dropped to 45%", time: "1h ago", color: C.red },
  { type: "task", text: "Follow up with David Chen — overdue", time: "2h ago", color: C.orange },
  { type: "note", text: "Lisa Park added a note on #support", time: "3h ago", color: C.purple },
];

const INSIGHTS = [
  { title: "3 accounts at risk of churn", desc: "Health scores dropped >20% this week", color: C.red },
  { title: "Renewal opportunity: $125K", desc: "5 accounts up for renewal in 30 days", color: C.green },
  { title: "Response time improving", desc: "Avg. reply time down 40% from last week", color: C.blue },
];

export const DashboardShowcase: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* SIDEBAR */}
      <Fade delay={0} dx={-8} dy={0}>
        <div style={{ width: 46, height: "100%", background: "#0a0a0a", borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 10, gap: 2, position: "absolute", left: 0, top: 0, bottom: 0 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "#f5f5f7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#000" }}>M</span>
          </div>
          {["inbox", "dash", "contacts", "companies", "deals", "tasks", "insights"].map((item, i) => (
            <div key={item} style={{ width: 32, height: 28, borderRadius: 5, background: i === 1 ? "rgba(41,151,255,0.08)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, border: `1.5px solid ${i === 1 ? C.blue : C.textMut}` }} />
            </div>
          ))}
        </div>
      </Fade>

      {/* MAIN */}
      <div style={{ marginLeft: 46, flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* TOPBAR */}
        <Fade delay={3}>
          <div style={{ height: 36, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", flexShrink: 0 }}>
            <span style={{ fontSize: 10, fontWeight: 500, color: C.textMut }}>Dashboard</span>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#fff" }}>YG</div>
          </div>
        </Fade>

        <div style={{ flex: 1, padding: 16, overflow: "hidden" }}>
          {/* GREETING */}
          <Fade delay={5}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>Good morning, Yossi</div>
              <div style={{ fontSize: 11, color: C.textMut, marginTop: 2 }}>Wednesday, Feb 26 · 3 action items today</div>
            </div>
          </Fade>

          {/* STAT CARDS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 14 }}>
            <StatCard label="Total Contacts" value={847} change="↑ 12 this week" color={C.green} delay={10} />
            <StatCard label="Unread Threads" value={23} change="↓ 5 from yesterday" color={C.blue} delay={13} />
            <StatCard label="Pipeline Value" value={342} change="↑ $48K added" color={C.green} delay={16} prefix="$" suffix="K" />
            <StatCard label="Health Score" value={78} change="↑ 3% avg improvement" color={C.green} delay={19} suffix="%" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 280px", gap: 10 }}>
            {/* CHART */}
            <BarChart delay={25} />

            {/* AI INSIGHTS */}
            <Fade delay={35}>
              <div style={{ background: C.card, borderRadius: 10, padding: 14, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: C.text, marginBottom: 10 }}>AI Insights</div>
                {INSIGHTS.map((ins, i) => (
                  <Fade key={ins.title} delay={40 + i * 8}>
                    <div style={{ padding: "8px 0", borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: ins.color }}>{ins.title}</div>
                      <div style={{ fontSize: 9, color: C.textMut, marginTop: 2 }}>{ins.desc}</div>
                    </div>
                  </Fade>
                ))}
              </div>
            </Fade>

            {/* ACTIVITY FEED */}
            <Fade delay={30}>
              <div style={{ background: C.card, borderRadius: 10, padding: 14, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: C.text, marginBottom: 10 }}>Activity Feed</div>
                {ACTIVITIES.map((a, i) => (
                  <Fade key={a.text} delay={35 + i * 6}>
                    <div style={{ display: "flex", gap: 8, padding: "6px 0", borderBottom: i < 4 ? `1px solid ${C.border}` : "none" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.color, marginTop: 4, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 10, color: C.textSec, lineHeight: 1.4 }}>{a.text}</div>
                        <div style={{ fontSize: 8, color: C.textMut, marginTop: 2 }}>{a.time}</div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
