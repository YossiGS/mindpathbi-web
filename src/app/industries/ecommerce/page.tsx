import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/industry-page";
import { data } from "./data";

export const metadata: Metadata = {
  title: "E-commerce · MindPath BI",
  description:
    "Every inbound — DM, chat, email, review reply — lands beside the catalog line, the finish note, and the return window that answers it, so the rep ships a specialist reply without leaving the inbox.",
};

export default function EcommerceIndustryPage() {
  return <IndustryPage data={data} />;
}
