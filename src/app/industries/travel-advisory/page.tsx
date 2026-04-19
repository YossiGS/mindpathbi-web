import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/industry-page";
import { travelAdvisoryData } from "./data";

export const metadata: Metadata = {
  title: "Travel advisory · MindPath BI",
  description:
    "Bespoke travel advisors draft destination, routing, and ryokan replies like the senior — grounded in your destination notes, partner-fare logs, and client files, each recommendation cited.",
};

export default function TravelAdvisoryPage() {
  return <IndustryPage data={travelAdvisoryData} />;
}
