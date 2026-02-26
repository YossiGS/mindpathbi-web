"use client";

import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";

const C = {
  bg: "#000000",
  sidebar: "#0a0a0a",
  card: "#1d1d1f",
  border: "rgba(255,255,255,0.08)",
  text: "#f5f5f7",
  textSec: "#a1a1a6",
  textMut: "#6e6e73",
  accent: "#2997ff",
  accentBg: "rgba(41,151,255,0.08)",
  gmail: "#EA4335",
  whatsapp: "#25D366",
  slack: "#E01E5A",
  outlook: "#0078D4",
  green: "#30d158",
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

const THREADS = [
  { from: "Sarah Johnson", ch: "Gmail", cc: C.gmail, subj: "Re: Q3 Renewal Discussion", prev: "Hi team, I've reviewed the proposal and w...", time: "2m", unread: true },
  { from: "David Chen", ch: "WhatsApp", cc: C.whatsapp, subj: "Order #4521 update", prev: "Quick question about the delivery timeline ...", time: "15m", unread: true },
  { from: "Lisa Park", ch: "Slack", cc: C.slack, subj: "#support — Integration help", prev: "Our team needs assistance setting up the ...", time: "32m", unread: false },
  { from: "Mike Torres", ch: "Outlook", cc: C.outlook, subj: "Partnership Opportunity", prev: "I'd love to explore a potential collabora...", time: "1h", unread: false },
  { from: "Emma Wilson", ch: "Gmail", cc: C.gmail, subj: "Invoice #892 — Payment Sent", prev: "Confirming that payment has been process...", time: "2h", unread: false },
];

function ThreadCard({ t, i }: { t: (typeof THREADS)[0]; i: number }) {
  return (
    <Fade delay={12 + i * 7} dx={12} dy={0}>
      <div style={{ padding: "8px 12px", borderBottom: `1px solid ${C.border}`, background: i === 0 ? C.accentBg : "transparent", borderLeft: i === 0 ? `2px solid ${C.accent}` : "2px solid transparent" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            {t.unread && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", flexShrink: 0 }} />}
            <span style={{ fontSize: 11, fontWeight: t.unread ? 600 : 400, color: C.text }}>{t.from}</span>
            <span style={{ fontSize: 8, color: t.cc, background: `${t.cc}15`, border: `1px solid ${t.cc}20`, padding: "0 4px", borderRadius: 3, fontWeight: 500, lineHeight: "14px" }}>{t.ch}</span>
          </div>
          <span style={{ fontSize: 9, color: C.textMut }}>{t.time}</span>
        </div>
        <div style={{ fontSize: 10.5, fontWeight: t.unread ? 600 : 400, color: t.unread ? C.text : C.textSec, marginTop: 2 }}>{t.subj}</div>
        <div style={{ fontSize: 10, color: C.textMut, marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{t.prev}</div>
      </div>
    </Fade>
  );
}

function ContactPanel() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const healthP = spring({ frame: frame - 55, fps, config: { damping: 22, stiffness: 80 } });
  const healthW = interpolate(healthP, [0, 1], [0, 85]);

  return (
    <Fade delay={45} dx={12} dy={0}>
      <div style={{ width: 200, borderLeft: `1px solid ${C.border}`, background: "rgba(255,255,255,0.015)", padding: 12, flexShrink: 0, overflow: "hidden" }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: C.textMut, letterSpacing: "0.05em", textTransform: "uppercase" as const, marginBottom: 10 }}>Contact</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(41,151,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: C.accent }}>SJ</div>
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: C.text }}>Sarah Johnson</div>
            <div style={{ fontSize: 9, color: C.textMut }}>VP Ops · Acme Corp</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginBottom: 12 }}>
          {[{ l: "Emails", v: "24" }, { l: "Deals", v: "$48K" }, { l: "Messages", v: "156" }, { l: "Tasks", v: "8" }].map((s) => (
            <div key={s.l} style={{ background: C.card, borderRadius: 5, border: `1px solid ${C.border}`, padding: "5px 7px" }}>
              <div style={{ fontSize: 8, color: C.textMut }}>{s.l}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ fontSize: 9, color: C.textMut }}>Health Score</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: C.green }}>85%</span>
          </div>
          <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${healthW}%`, borderRadius: 2, background: `linear-gradient(90deg, ${C.green}, ${C.accent})` }} />
          </div>
        </div>
        <div style={{ fontSize: 9, fontWeight: 600, color: C.textMut, letterSpacing: "0.05em", textTransform: "uppercase" as const, marginBottom: 7 }}>AI Insights</div>
        <Fade delay={80}>
          <div style={{ background: "rgba(41,151,255,0.06)", border: "1px solid rgba(41,151,255,0.12)", borderRadius: 6, padding: 8, marginBottom: 6 }}>
            <div style={{ fontSize: 9, fontWeight: 600, color: C.accent, marginBottom: 3 }}>Sentiment</div>
            <div style={{ fontSize: 10, color: C.textSec, lineHeight: 1.4 }}><span style={{ color: C.green, fontWeight: 600 }}>Positive</span> — Strong renewal intent</div>
          </div>
        </Fade>
        <Fade delay={95}>
          <div style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.12)", borderRadius: 6, padding: 8 }}>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#fbbf24", marginBottom: 3 }}>Action</div>
            <div style={{ fontSize: 10, color: C.textSec, lineHeight: 1.4 }}>Send pricing sheet, schedule call</div>
          </div>
        </Fade>
      </div>
    </Fade>
  );
}

export const ProductShowcase: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', display: "flex", flexDirection: "row" }}>
      {/* SIDEBAR */}
      <Fade delay={0} dx={-8} dy={0}>
        <div style={{ width: 46, height: "100%", background: C.sidebar, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 10, gap: 2, flexShrink: 0, position: "absolute", left: 0, top: 0, bottom: 0 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: "#f5f5f7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#000" }}>M</span>
          </div>
          {["inbox", "dash", "contacts", "companies", "deals", "tasks", "insights"].map((item, i) => (
            <div key={item} style={{ width: 32, height: 28, borderRadius: 5, background: i === 0 ? C.accentBg : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, border: `1.5px solid ${i === 0 ? C.accent : C.textMut}` }} />
            </div>
          ))}
        </div>
      </Fade>

      {/* MAIN */}
      <div style={{ marginLeft: 46, flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* TOPBAR */}
        <Fade delay={3}>
          <div style={{ height: 36, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", background: C.bg, flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <div style={{ width: 14, height: 1.5, background: C.textMut, borderRadius: 1 }} />
                <div style={{ width: 10, height: 1.5, background: C.textMut, borderRadius: 1 }} />
                <div style={{ width: 14, height: 1.5, background: C.textMut, borderRadius: 1 }} />
              </div>
              <div style={{ width: 1, height: 14, background: C.border }} />
              <span style={{ fontSize: 10, fontWeight: 500, color: C.textMut }}>Unified BI</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 100, height: 24, borderRadius: 5, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", padding: "0 7px" }}>
                <span style={{ fontSize: 9, color: C.textMut }}>⌘K Search...</span>
              </div>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#fff" }}>YG</div>
            </div>
          </div>
        </Fade>

        {/* CONTENT */}
        <div style={{ flex: 1, display: "flex", flexDirection: "row", overflow: "hidden" }}>
          {/* THREAD LIST */}
          <div style={{ width: 240, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", flexShrink: 0, overflow: "hidden" }}>
            <Fade delay={6}>
              <div style={{ padding: "8px 12px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.text }}>Inbox</span>
                <span style={{ fontSize: 9, color: C.accent, background: C.accentBg, padding: "1px 7px", borderRadius: 8, fontWeight: 500 }}>12 new</span>
              </div>
            </Fade>
            <Fade delay={8}>
              <div style={{ padding: "5px 10px", borderBottom: `1px solid ${C.border}`, display: "flex", gap: 3 }}>
                {["All", "Unread", "Urgent"].map((t, i) => (
                  <span key={t} style={{ fontSize: 9, padding: "2px 8px", borderRadius: 4, background: i === 0 ? C.accentBg : "transparent", color: i === 0 ? C.accent : C.textMut, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </Fade>
            {THREADS.map((t, i) => (
              <ThreadCard key={t.from} t={t} i={i} />
            ))}
          </div>

          {/* READING PANE */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <Fade delay={30}>
              <div style={{ padding: "8px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>Re: Q3 Renewal Discussion</div>
                  <div style={{ fontSize: 10, color: C.textMut, marginTop: 1 }}>Sarah Johnson · Acme Corp · 3 messages</div>
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  {["⭐", "✓", "📁"].map((ic) => (
                    <div key={ic} style={{ width: 26, height: 26, borderRadius: 5, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>{ic}</div>
                  ))}
                </div>
              </div>
            </Fade>

            <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
              <div style={{ flex: 1, padding: 14, overflow: "hidden" }}>
                <Fade delay={38}>
                  <div style={{ background: C.card, borderRadius: 8, border: `1px solid ${C.border}`, padding: 14, marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${C.gmail}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: C.gmail }}>SJ</div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: C.text }}>Sarah Johnson</div>
                        <div style={{ fontSize: 9, color: C.textMut }}>sarah@acmecorp.com · via Gmail · 2m ago</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 11, lineHeight: 1.65, color: C.textSec }}>
                      Hi team,<br /><br />
                      I&apos;ve reviewed the Q3 renewal proposal. A few questions:<br /><br />
                      1. Can we get volume pricing for 50+ seats?<br />
                      2. Is the AI copilot included in Enterprise?<br />
                      3. Timeline for SAP S/4HANA connector?<br /><br />
                      Best, Sarah
                    </div>
                  </div>
                </Fade>
                <Fade delay={70}>
                  <div style={{ background: C.card, borderRadius: 8, border: `1px solid ${C.border}`, padding: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", background: "rgba(41,151,255,0.06)", border: "1px solid rgba(41,151,255,0.12)", borderRadius: 6, marginBottom: 8 }}>
                      <span style={{ fontSize: 9 }}>✨</span>
                      <span style={{ fontSize: 10, color: C.accent, fontWeight: 500 }}>AI suggested reply</span>
                    </div>
                    <div style={{ fontSize: 10.5, lineHeight: 1.6, color: C.textSec }}>
                      Hi Sarah! 1) Volume pricing starts at 25+ seats. 2) AI Copilot is included in Enterprise. 3) SAP S/4HANA GA expected Q4...
                    </div>
                  </div>
                </Fade>
              </div>
              <ContactPanel />
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
