import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Pricing — sealed until launch. MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[PRICING · SEALED UNTIL LAUNCH]",
    leadTitle: "Pricing is sealed.",
    mutedTitle: "For now.",
    subtitle:
      "Three tiers, drafted in ink. Invitations open the rest. Request access for an early briefing.",
  });
}
