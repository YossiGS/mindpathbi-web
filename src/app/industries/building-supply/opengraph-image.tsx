import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Building supply — MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[INDUSTRY · BUILDING SUPPLY]",
    leadTitle: "A span, a connector, a Sika count.",
    mutedTitle: "In the senior carpenter's voice.",
    subtitle:
      "Span tables, connector sheets, finish-match charts — captured from your expert once, drafted for every rep. Expert selling, cited from your own docs.",
  });
}
