import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Professional services — MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[INDUSTRY · PROFESSIONAL SERVICES]",
    leadTitle: "An engagement question lands.",
    mutedTitle: "Answered, cited, by noon.",
    subtitle:
      "Scope, rates, practice areas — associates draft the reply grounded in the engagement and services files the firm already keeps.",
  });
}
