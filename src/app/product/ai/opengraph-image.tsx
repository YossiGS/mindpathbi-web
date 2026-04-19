import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "The AI layer — MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[PRODUCT · AI LAYER]",
    leadTitle: "The AI layer,",
    mutedTitle: "grounded in your docs.",
    subtitle:
      "Classify, retrieve, suggest, act, learn, score — the six movements that turn every rep into a technical seller.",
  });
}
