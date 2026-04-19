import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { TechnicalSeller } from "@/components/home/technical-seller";
import { RoutingExhibit } from "@/components/home/routing-exhibit";
import { Features } from "@/components/features";
import { Integrations } from "@/components/integrations";
import { FieldReport } from "@/components/home/field-report";
import { EarlyAccess } from "@/components/early-access";
// [DISABLED 2026-04-19] FAQ hidden until copy is refreshed. Re-enable by
// restoring the import and the <FAQ /> block in the main tree below.
// import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <TechnicalSeller />
        <RoutingExhibit />
        <Features />
        <Integrations />
        <FieldReport />
        <EarlyAccess source="homepage" />
        {/* [DISABLED 2026-04-19] <FAQ /> */}
      </main>
      <Footer />
    </>
  );
}
