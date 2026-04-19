import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/industry-page";
import { industrialDistributionData } from "./data";

export const metadata: Metadata = {
  title: "Industrial distribution · MindPath BI",
  description:
    "Inside-sales desks answer RFQs, cross-references, and lead-time asks from the parts catalog, the quoting terms, and the FAQ already on your shelf.",
};

export default function IndustrialDistributionPage() {
  return <IndustryPage data={industrialDistributionData} />;
}
