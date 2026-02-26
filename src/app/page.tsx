import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { ProductDemo } from "@/components/product-demo";
import { Features } from "@/components/features";
import { Integrations } from "@/components/integrations";
import { EarlyAccess } from "@/components/early-access";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <ProductDemo />
        <Integrations />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
