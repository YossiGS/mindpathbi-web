import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/industry-page";
import { interiorDesignData } from "./data";

export const metadata: Metadata = {
  title: "Interior design · MindPath BI",
  description:
    "Boutique design studios answer fabric, lead-time, and trade-swap questions like the principal designer — drafted from your durability guides, vendor logs, and client style files, each claim cited.",
};

export default function InteriorDesignPage() {
  return <IndustryPage data={interiorDesignData} />;
}
