import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/industry-page";
import { data } from "./data";

export const metadata: Metadata = {
  title: "Professional services · MindPath BI",
  description:
    "A junior associate becomes a technical authority on the firm — drafting replies grounded in your engagement letters, services catalog, and client FAQ.",
};

export default function ProfessionalServicesIndustryPage() {
  return <IndustryPage data={data} />;
}
