"use client";

import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Sequence,
} from "remotion";

function InboxMessage({
  from,
  channel,
  channelColor,
  subject,
  preview,
  delay,
}: {
  from: string;
  channel: string;
  channelColor: string;
  subject: string;
  preview: string;
  delay: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateX = interpolate(progress, [0, 1], [40, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${translateX}px)`,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: `linear-gradient(135deg, ${channelColor}40, ${channelColor}20)`,
          border: `1px solid ${channelColor}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 600,
          color: channelColor,
          flexShrink: 0,
        }}
      >
        {from[0]}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 2,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: "#f9fafb" }}>
            {from}
          </span>
          <span
            style={{
              fontSize: 10,
              color: channelColor,
              background: `${channelColor}15`,
              border: `1px solid ${channelColor}25`,
              padding: "1px 6px",
              borderRadius: 4,
              fontWeight: 500,
            }}
          >
            {channel}
          </span>
        </div>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#d1d5db" }}>
          {subject}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#6b7280",
            marginTop: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {preview}
        </div>
      </div>
    </div>
  );
}

function AIInsight({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const scale = interpolate(progress, [0, 1], [0.9, 1]);
  const pulseOpacity = interpolate(
    Math.sin((frame - delay) * 0.15),
    [-1, 1],
    [0.6, 1]
  );

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        background:
          "linear-gradient(135deg, rgba(129,140,248,0.12), rgba(167,139,250,0.06))",
        border: "1px solid rgba(129,140,248,0.2)",
        borderRadius: 12,
        padding: "12px 16px",
        marginTop: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 6,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#818cf8",
            opacity: pulseOpacity,
          }}
        />
        <span
          style={{ fontSize: 11, fontWeight: 600, color: "#818cf8" }}
        >
          AI COPILOT
        </span>
      </div>
      <div style={{ fontSize: 12, color: "#c7d2fe", lineHeight: 1.5 }}>
        Customer sentiment: <strong style={{ color: "#34d399" }}>Positive</strong>
        . Detected intent: <strong>renewal inquiry</strong>. Suggested action:
        send pricing update.
      </div>
    </div>
  );
}

function ContactCard({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [20, 0]);

  const healthProgress = spring({
    frame: frame - delay - 15,
    fps,
    config: { damping: 20, stiffness: 80 },
  });

  const healthWidth = interpolate(healthProgress, [0, 1], [0, 85]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        background: "rgba(17, 24, 39, 0.8)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12,
        padding: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "linear-gradient(135deg, #818cf8, #a78bfa)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          SJ
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#f9fafb" }}>
            Sarah Johnson
          </div>
          <div style={{ fontSize: 11, color: "#6b7280" }}>
            Acme Corp — VP Operations
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginBottom: 12,
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
              background: "rgba(255,255,255,0.03)",
              borderRadius: 8,
              padding: "8px 10px",
            }}
          >
            <div style={{ fontSize: 10, color: "#6b7280" }}>{stat.label}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#f9fafb" }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <span style={{ fontSize: 11, color: "#9ca3af" }}>Health Score</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#34d399" }}>
            85%
          </span>
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
    </div>
  );
}

export const ProductShowcase: React.FC = () => {
  const frame = useCurrentFrame();

  const headerOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#0a0a0f",
        fontFamily: "system-ui, sans-serif",
        padding: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 16,
          height: "100%",
        }}
      >
        {/* Left: Inbox panel */}
        <div
          style={{
            flex: 1.2,
            background: "rgba(17, 24, 39, 0.6)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              opacity: headerOpacity,
              padding: "14px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 700, color: "#f9fafb" }}>
              Unified Inbox
            </span>
            <span
              style={{
                fontSize: 11,
                color: "#818cf8",
                background: "rgba(129,140,248,0.1)",
                padding: "2px 8px",
                borderRadius: 6,
                fontWeight: 500,
              }}
            >
              12 new
            </span>
          </div>

          <Sequence from={10}>
            <InboxMessage
              from="Sarah Johnson"
              channel="Gmail"
              channelColor="#EA4335"
              subject="Re: Q3 Renewal Discussion"
              preview="Hi team, I've reviewed the proposal and would like to discuss..."
              delay={0}
            />
          </Sequence>
          <Sequence from={30}>
            <InboxMessage
              from="David Chen"
              channel="WhatsApp"
              channelColor="#25D366"
              subject="Order #4521 inquiry"
              preview="Quick question about the delivery timeline for our latest..."
              delay={0}
            />
          </Sequence>
          <Sequence from={50}>
            <InboxMessage
              from="Lisa Park"
              channel="Slack"
              channelColor="#E01E5A"
              subject="#support — Integration help"
              preview="Our team needs assistance setting up the SAP connector..."
              delay={0}
            />
          </Sequence>
          <Sequence from={70}>
            <InboxMessage
              from="Mike Torres"
              channel="Outlook"
              channelColor="#0078D4"
              subject="Partnership Opportunity"
              preview="I'd love to explore a potential collaboration between our..."
              delay={0}
            />
          </Sequence>

          <Sequence from={100}>
            <div style={{ padding: "8px 16px" }}>
              <AIInsight delay={0} />
            </div>
          </Sequence>
        </div>

        {/* Right: Client 360 */}
        <div
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              opacity: headerOpacity,
              fontSize: 13,
              fontWeight: 600,
              color: "#9ca3af",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
            }}
          >
            Client 360
          </div>
          <Sequence from={40}>
            <ContactCard delay={0} />
          </Sequence>

          <Sequence from={120}>
            <div
              style={{
                background: "rgba(17, 24, 39, 0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                padding: 14,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#9ca3af",
                  marginBottom: 8,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase" as const,
                }}
              >
                Active Channels
              </div>
              {["Gmail", "WhatsApp", "Slack"].map((ch, i) => {
                const cProgress = spring({
                  frame: frame - 120 - i * 8,
                  fps: 30,
                  config: { damping: 15, stiffness: 120 },
                });
                return (
                  <div
                    key={ch}
                    style={{
                      opacity: interpolate(cProgress, [0, 1], [0, 1]),
                      transform: `translateX(${interpolate(cProgress, [0, 1], [20, 0])}px)`,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "6px 0",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#34d399",
                      }}
                    />
                    <span style={{ fontSize: 12, color: "#d1d5db" }}>
                      {ch}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: "#6b7280",
                        marginLeft: "auto",
                      }}
                    >
                      Connected
                    </span>
                  </div>
                );
              })}
            </div>
          </Sequence>
        </div>
      </div>
    </AbsoluteFill>
  );
};
