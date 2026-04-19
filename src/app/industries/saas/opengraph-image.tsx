import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "SaaS — MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[INDUSTRY · SAAS]",
    leadTitle: "A tier-boundary question, live.",
    mutedTitle: "Your AE answers it in-thread.",
    subtitle:
      "Pricing pages, product guides, frequent asks — every reply grounded in the docs your team already publishes.",
  });
}
