import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export type OgImageArgs = {
  topCode: string;
  leadTitle: string;
  mutedTitle: string;
  subtitle: string;
  bottomCode?: string;
};

const INK = "#1a1a1a";
const MUTED = "#5d6370";
const MUTED_2 = "#8a94a3";
const RULE = "#d0cec5";
const PAPER = "#f2efe7";
const ACCENT = "#a0562c";

export function createOgImage({
  topCode,
  leadTitle,
  mutedTitle,
  subtitle,
  bottomCode = "MINDPATH/BI · CLASSIFIED BRIEF · PRE-LAUNCH",
}: OgImageArgs) {
  return new ImageResponse(
    (
      <div
        style={{
          background: PAPER,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          color: INK,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: "18px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: MUTED,
            paddingBottom: "16px",
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <span>{topCode}</span>
          <span>MINDPATH/BI</span>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "monospace",
              fontSize: "16px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                background: ACCENT,
                borderRadius: "999px",
              }}
            />
            CLASSIFIED · BY INVITATION
          </div>

          <div
            style={{
              fontSize: "88px",
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-2.5px",
              color: INK,
              display: "flex",
            }}
          >
            {leadTitle}
          </div>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-2.5px",
              color: MUTED_2,
              display: "flex",
            }}
          >
            {mutedTitle}
          </div>

          <div
            style={{
              fontSize: "26px",
              lineHeight: 1.5,
              color: MUTED,
              marginTop: "28px",
              maxWidth: "920px",
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: "16px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: MUTED,
            paddingTop: "16px",
            borderTop: `1px solid ${RULE}`,
          }}
        >
          <span>{bottomCode}</span>
          <span>mindpathbi.com</span>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
