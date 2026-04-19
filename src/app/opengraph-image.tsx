import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "MindPath BI — Every rep, a technical seller. A classified brief on the unified inbox.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[HOME · MINDPATH/BI]",
    leadTitle: "Every rep,",
    mutedTitle: "a technical seller.",
    subtitle:
      "Your catalog, your contracts, your guides — answering beside every conversation.",
  });
}
