import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Travel advisory — MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[INDUSTRY · TRAVEL ADVISORY]",
    leadTitle: "A blossom, a routing, a ryokan hold.",
    mutedTitle: "In the senior advisor's voice.",
    subtitle:
      "Destination notes, partner-fare logs, client preferences — captured from your senior once, drafted for every advisor. Expert selling, cited from your own docs.",
  });
}
