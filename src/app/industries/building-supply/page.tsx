import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/industry-page";
import { buildingSupplyData } from "./data";

export const metadata: Metadata = {
  title: "Building supply · MindPath BI",
  description:
    "Lumber yards and building-supply counters answer pergola, deck, and connector questions like a senior carpenter — drafted from your span tables, connector specs, and finish-matching charts, each claim cited.",
};

export default function BuildingSupplyPage() {
  return <IndustryPage data={buildingSupplyData} />;
}
