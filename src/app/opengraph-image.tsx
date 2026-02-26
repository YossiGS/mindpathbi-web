import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MindPath BI — Unified Business Intelligence for SMBs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#f5f5f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1d1d1f"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.02em",
            }}
          >
            MindPath BI
          </span>
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#f5f5f7",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          One platform.
        </h1>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#86868b",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Every customer touchpoint.
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#86868b",
            textAlign: "center",
            marginTop: "32px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Unified inbox, Client 360, AI copilot, and deep integrations — built
          for teams that refuse to lose another customer.
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {["Inbox", "Client 360", "AI Copilot", "Integrations"].map((t) => (
            <div
              key={t}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#86868b",
                fontSize: "16px",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            color: "#86868b",
            fontSize: "16px",
          }}
        >
          mindpathbi.com
        </div>
      </div>
    ),
    { ...size }
  );
}
