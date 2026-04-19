import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Interior design — MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[INDUSTRY · INTERIOR DESIGN]",
    leadTitle: "A Martindale, a lead time, a trade swap.",
    mutedTitle: "In the principal designer's voice.",
    subtitle:
      "Fabric durability, vendor lead times, trade-tier alternatives — captured from your principal once, drafted for every junior. Expert selling, cited from your own docs.",
  });
}
