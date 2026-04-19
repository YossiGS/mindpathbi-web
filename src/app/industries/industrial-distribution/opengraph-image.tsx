import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Industrial distribution — MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[INDUSTRY · INDUSTRIAL DISTRIBUTION]",
    leadTitle: "A part, a spec, a quote.",
    mutedTitle: "Shipped by the close of day.",
    subtitle:
      "Parts catalog, tolerances, quoting terms — the desk rep replies like the senior engineer, cited and consistent.",
  });
}
