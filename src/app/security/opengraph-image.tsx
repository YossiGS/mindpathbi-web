import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Security posture — MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[POSTURE · CLASSIFIED]",
    leadTitle: "Isolation, by default.",
    mutedTitle: "No training on your data.",
    subtitle:
      "A quiet posture brief — tenant isolation, least-privileged retrieval, private inference. NDA-gated detail on request.",
  });
}
