import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "How it works — Day 1, Day 30, Day 90. MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[ONBOARDING · DAY 01 → 30 → 90]",
    leadTitle: "First answer in week one.",
    mutedTitle: "Shipped on your docs.",
    subtitle:
      "A ninety-day field briefing — from ingestion to cited reply, measured by the week.",
  });
}
