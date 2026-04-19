import { createOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "E-commerce — MindPath BI.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOgImage({
    topCode: "[INDUSTRY · E-COMMERCE]",
    leadTitle: "Catalog questions pile up.",
    mutedTitle: "Your team ships the answer, cited.",
    subtitle:
      "Finishes, grain, lead times, returns — every reply grounded in the catalog and policy files your team already wrote.",
  });
}
