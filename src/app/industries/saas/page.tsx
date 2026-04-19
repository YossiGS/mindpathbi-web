import type { Metadata } from "next";
import { IndustryPage } from "@/components/industries/industry-page";
import { data } from "./data";

export const metadata: Metadata = {
  title: "SaaS · MindPath BI",
  description:
    "Every AE, CSM, and support rep drafts from the same pricing doc, product guide, and FAQ the specialist would have opened — the tier boundary, the SSO caveat, the trial-to-paid step, answered in the thread.",
};

export default function SaaSIndustryPage() {
  return <IndustryPage data={data} />;
}
