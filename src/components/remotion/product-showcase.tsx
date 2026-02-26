"use client";

import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Sequence,
} from "remotion";

const COLORS = {
  bg: "#0f0f0f",
  sidebar: "#1a1a1a",
  card: "#1a1a1a",
  cardHover: "#222222",
  border: "rgba(255,255,255,0.08)",
  borderLight: "rgba(255,255,255,0.12)",
  text: "#fafafa",
  textSecondary: "#a1a1aa",
  textMuted: "#71717a",
  accent: "#818cf8",
  accentBg: "rgba(129,140,248,0.1)",
  gmail: "#EA4335",
  whatsapp: "#25D366",
  slack: "#7C3AED",
  outlook: "#0078D4",
  selected: "rgba(129,140,248,0.08)",
  selectedBorder: "rgba(129,140,248,0.3)",
};

function FadeSlide({
  children,
  delay,
  direction = "up",
}: {
  children: React.ReactNode;
  delay: number;
  direction?: "up" | "right" | "left";
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 120 } });
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translate =
    direction === "up"
      ? `translateY(${interpolate(progress, [0, 1], [12, 0])}px)`
      : direction === "right"
        ? `translateX(${interpolate(progress, [0, 1], [16, 0])}px)`
        : `translateX(${interpolate(progress, [0, 1], [-16, 0])}px)`;
  return <div style={{ opacity, transform: translate }}>{children}</div>;
}

const NAV_ITEMS = [
  { label: "Inbox", active: true },
  { label: "Dashboard", active: false },
  { label: "Contacts", active: false },
  { label: "Companies", active: false },
  { label: "Deals", active: false },
  { label: "Tasks", active: false },
  { label: "Insights", active: false },
];

function Sidebar({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 20, stiffness: 100 } });
  const opacity = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        opacity,
        width: 48,
        background: COLORS.sidebar,
        borderRight: `1px solid ${COLORS.border}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 12,
        gap: 2,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: "linear-gradient(135deg, #818cf8, #a78bfa)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>M</span>
      </div>
      {NAV_ITEMS.map((item, i) => (
        <div
          key={item.label}
          style={{
            width: 36,
            height: 32,
            borderRadius: 6,
            background: item.active ? COLORS.accentBg : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 1,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: item.label === "Inbox" ? 3 : 4,
              border: `1.5px solid ${item.active ? COLORS.accent : COLORS.textMuted}`,
              opacity: item.active ? 1 : 0.5,
            }}
          />
        </div>
      ))}
    </div>
  );
}

const THREADS = [
  {
    from: "Sarah Johnson",
    initials: "SJ",
    channel: "Gmail",
    channelColor: COLORS.gmail,
    subject: "Re: Q3 Renewal Discussion",
    preview: "Hi team, I've reviewed the proposal and would like to discuss the pricing...",
    time: "2m",
    unread: true,
  },
  {
    from: "David Chen",
    initials: "DC",
    channel: "WhatsApp",
    channelColor: COLORS.whatsapp,
    subject: "Order #4521 update",
    preview: "Quick question about the delivery timeline for our latest order...",
    time: "15m",
    unread: true,
  },
  {
    from: "Lisa Park",
    initials: "LP",
    channel: "Slack",
    channelColor: COLORS.slack,
    subject: "#support — Integration help",
    preview: "Our team needs assistance setting up the SAP connector for...",
    time: "32m",
    unread: false,
  },
  {
    from: "Mike Torres",
    initials: "MT",
    channel: "Outlook",
    channelColor: COLORS.outlook,
    subject: "Partnership Opportunity",
    preview: "I'd love to explore a potential collaboration between our companies...",
    time: "1h",
    unread: false,
  },
  {
    from: "Emma Wilson",
    initials: "EW",
    channel: "Gmail",
    channelColor: COLORS.gmail,
    subject: "Invoice #892 — Payment Sent",
    preview: "Confirming that payment has been processed for the latest invoice...",
    time: "2h",
    unread: false,
  },
];

function ThreadCard({
  thread,
  selected,
  delay,
}: {
  thread: (typeof THREADS)[0];
  selected: boolean;
  delay: number;
}) {
  return (
    <FadeSlide delay={delay} direction="right">
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          padding: "10px 14px",
          borderBottom: `1px solid ${COLORS.border}`,
          background: selected ? COLORS.selected : "transparent",
          borderLeft: selected ? `2px solid ${COLORS.accent}` : "2px solid transparent",
          cursor: "pointer",
        }}
      >
        {thread.unread && (
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#3b82f6",
              marginTop: 7,
              flexShrink: 0,
            }}
          />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: thread.unread ? 600 : 500,
                  color: COLORS.text,
                }}
              >
                {thread.from}
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: thread.channelColor,
                  background: `${thread.channelColor}15`,
                  border: `1px solid ${thread.channelColor}25`,
                  padding: "0px 5px",
                  borderRadius: 3,
                  fontWeight: 500,
                  lineHeight: "16px",
                }}
              >
                {thread.channel}
              </span>
            </div>
            <span style={{ fontSize: 10, color: COLORS.textMuted, flexShrink: 0 }}>
              {thread.time}
            </span>
          </div>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: thread.unread ? 600 : 400,
              color: thread.unread ? COLORS.text : COLORS.textSecondary,
              marginTop: 2,
            }}
          >
            {thread.subject}
          </div>
          <div
            style={{
              fontSize: 11,
              color: COLORS.textMuted,
              marginTop: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {thread.preview}
          </div>
        </div>
      </div>
    </FadeSlide>
  );
}

function ThreadList({ delay }: { delay: number }) {
  return (
    <div
      style={{
        width: 280,
        borderRight: `1px solid ${COLORS.border}`,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <FadeSlide delay={delay} direction="up">
        <div
          style={{
            padding: "10px 14px",
            borderBottom: `1px solid ${COLORS.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>Inbox</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                fontSize: 10,
                color: COLORS.accent,
                background: COLORS.accentBg,
                padding: "2px 8px",
                borderRadius: 10,
                fontWeight: 500,
              }}
            >
              12 new
            </span>
          </div>
        </div>
      </FadeSlide>

      <FadeSlide delay={delay + 5} direction="up">
        <div style={{ padding: "6px 10px", borderBottom: `1px solid ${COLORS.border}` }}>
          <div
            style={{
              display: "flex",
              gap: 4,
              fontSize: 10,
              fontWeight: 500,
            }}
          >
            {["All", "Unread", "Urgent"].map((tab, i) => (
              <span
                key={tab}
                style={{
                  padding: "3px 10px",
                  borderRadius: 5,
                  background: i === 0 ? COLORS.accentBg : "transparent",
                  color: i === 0 ? COLORS.accent : COLORS.textMuted,
                }}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </FadeSlide>

      {THREADS.map((thread, i) => (
        <ThreadCard
          key={thread.from}
          thread={thread}
          selected={i === 0}
          delay={delay + 10 + i * 8}
        />
      ))}
    </div>
  );
}

function ReadingPane({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <FadeSlide delay={delay} direction="up">
        <div
          style={{
            padding: "10px 18px",
            borderBottom: `1px solid ${COLORS.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.text }}>
              Re: Q3 Renewal Discussion
            </div>
            <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>
              Sarah Johnson · Acme Corp · 3 messages
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {["⭐", "✓", "📁"].map((icon) => (
              <div
                key={icon}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  border: `1px solid ${COLORS.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </FadeSlide>

      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Message content */}
        <div style={{ flex: 1, padding: "16px 20px", overflow: "hidden" }}>
          <Sequence from={delay + 10}>
            <FadeSlide delay={0} direction="up">
              <div
                style={{
                  background: COLORS.card,
                  borderRadius: 10,
                  border: `1px solid ${COLORS.border}`,
                  padding: 16,
                  marginBottom: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: `${COLORS.gmail}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 600,
                      color: COLORS.gmail,
                    }}
                  >
                    SJ
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.text }}>
                      Sarah Johnson
                    </div>
                    <div style={{ fontSize: 10, color: COLORS.textMuted }}>
                      sarah@acmecorp.com · via Gmail · 2 min ago
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.textSecondary }}>
                  Hi team,
                  <br />
                  <br />
                  I&apos;ve reviewed the Q3 renewal proposal and I&apos;m excited about the new features. A few
                  quick questions:
                  <br />
                  <br />
                  1. Can we get volume pricing for 50+ seats?
                  <br />
                  2. Is the AI copilot included in the enterprise tier?
                  <br />
                  3. Timeline for the SAP S/4HANA connector?
                  <br />
                  <br />
                  Looking forward to discussing this further.
                  <br />
                  <br />
                  Best,
                  <br />
                  Sarah
                </div>
              </div>
            </FadeSlide>
          </Sequence>

          <Sequence from={delay + 30}>
            <FadeSlide delay={0} direction="up">
              <div
                style={{
                  background: COLORS.card,
                  borderRadius: 10,
                  border: `1px solid ${COLORS.border}`,
                  padding: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    background: "rgba(129,140,248,0.06)",
                    border: `1px solid rgba(129,140,248,0.15)`,
                    borderRadius: 8,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: COLORS.accentBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: 10 }}>✨</span>
                  </div>
                  <span style={{ fontSize: 11, color: COLORS.accent, fontWeight: 500 }}>
                    AI suggested reply generated
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    lineHeight: 1.6,
                    color: COLORS.textSecondary,
                    padding: "4px 0",
                  }}
                >
                  Hi Sarah, thanks for your feedback! Here are the answers: 1) Yes, volume pricing
                  starts at 25+ seats. 2) AI copilot is included in Enterprise. 3) SAP S/4HANA is
                  in beta, GA in Q4...
                </div>
              </div>
            </FadeSlide>
          </Sequence>
        </div>

        {/* Copilot / Contact sidebar */}
        <Sequence from={delay + 20}>
          <CopilotPanel delay={0} />
        </Sequence>
      </div>
    </div>
  );
}

function CopilotPanel({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const healthProgress = spring({
    frame: frame - delay - 25,
    fps,
    config: { damping: 20, stiffness: 80 },
  });
  const healthWidth = interpolate(healthProgress, [0, 1], [0, 85]);

  return (
    <FadeSlide delay={delay} direction="right">
      <div
        style={{
          width: 220,
          borderLeft: `1px solid ${COLORS.border}`,
          background: "rgba(255,255,255,0.02)",
          padding: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: COLORS.textMuted,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Contact
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(129,140,248,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 700,
              color: COLORS.accent,
            }}
          >
            SJ
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>Sarah Johnson</div>
            <div style={{ fontSize: 10, color: COLORS.textMuted }}>VP Operations · Acme Corp</div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 6,
            marginBottom: 14,
          }}
        >
          {[
            { label: "Emails", value: "24" },
            { label: "Deals", value: "$48K" },
            { label: "Messages", value: "156" },
            { label: "Tasks", value: "8" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: COLORS.card,
                borderRadius: 6,
                border: `1px solid ${COLORS.border}`,
                padding: "6px 8px",
              }}
            >
              <div style={{ fontSize: 9, color: COLORS.textMuted }}>{stat.label}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <span style={{ fontSize: 10, color: COLORS.textMuted }}>Health Score</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#34d399" }}>85%</span>
          </div>
          <div
            style={{
              height: 4,
              borderRadius: 2,
              background: "rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${healthWidth}%`,
                borderRadius: 2,
                background: "linear-gradient(90deg, #34d399, #818cf8)",
              }}
            />
          </div>
        </div>

        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: COLORS.textMuted,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 8,
            marginTop: 4,
          }}
        >
          AI Insights
        </div>

        <Sequence from={delay + 30}>
          <FadeSlide delay={0} direction="up">
            <div
              style={{
                background: "rgba(129,140,248,0.06)",
                border: `1px solid rgba(129,140,248,0.15)`,
                borderRadius: 8,
                padding: 10,
                marginBottom: 8,
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 600, color: COLORS.accent, marginBottom: 4 }}>
                Sentiment
              </div>
              <div style={{ fontSize: 11, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                <span style={{ color: "#34d399", fontWeight: 600 }}>Positive</span> — Customer
                shows strong renewal intent
              </div>
            </div>
          </FadeSlide>
        </Sequence>

        <Sequence from={delay + 40}>
          <FadeSlide delay={0} direction="up">
            <div
              style={{
                background: "rgba(251,191,36,0.06)",
                border: "1px solid rgba(251,191,36,0.15)",
                borderRadius: 8,
                padding: 10,
              }}
            >
              <div
                style={{ fontSize: 10, fontWeight: 600, color: "#fbbf24", marginBottom: 4 }}
              >
                Suggested Action
              </div>
              <div style={{ fontSize: 11, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                Send volume pricing sheet and schedule a call this week
              </div>
            </div>
          </FadeSlide>
        </Sequence>
      </div>
    </FadeSlide>
  );
}

function Topbar({ delay }: { delay: number }) {
  return (
    <FadeSlide delay={delay} direction="up">
      <div
        style={{
          height: 40,
          borderBottom: `1px solid ${COLORS.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px 0 12px",
          background: COLORS.bg,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 18,
              height: 14,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  height: 1.5,
                  width: i === 1 ? 12 : 18,
                  background: COLORS.textMuted,
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
          <div
            style={{ width: 1, height: 16, background: COLORS.border }}
          />
          <span style={{ fontSize: 11, fontWeight: 500, color: COLORS.textMuted }}>
            Unified BI
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 120,
              height: 26,
              borderRadius: 6,
              border: `1px solid ${COLORS.border}`,
              display: "flex",
              alignItems: "center",
              padding: "0 8px",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 10, color: COLORS.textMuted }}>⌘K Search...</span>
          </div>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #818cf8, #a78bfa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            YG
          </div>
        </div>
      </div>
    </FadeSlide>
  );
}

export const ProductShowcase: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <Sequence from={0}>
          <Sidebar delay={0} />
        </Sequence>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Sequence from={5}>
            <Topbar delay={0} />
          </Sequence>

          <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
            <Sequence from={10}>
              <ThreadList delay={0} />
            </Sequence>

            <Sequence from={25}>
              <ReadingPane delay={0} />
            </Sequence>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
