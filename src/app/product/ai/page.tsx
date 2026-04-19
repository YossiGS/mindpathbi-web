import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { EarlyAccess } from "@/components/early-access";
import { AIHero } from "@/components/product-ai/ai-hero";
import { CapabilityDeepDive } from "@/components/product-ai/capability-deep-dive";
import { AIPipelineMock } from "@/components/product-ai/ai-pipeline-mock";
import { GaugeGrid } from "@/components/product-ai/gauge-grid";

export const metadata = {
  title: "The AI layer — MindPath BI",
  description:
    "An AI layer that turns your team's knowledge into every rep's answer. Classify, retrieve, suggest, act, learn, score.",
};

export default function ProductAIPage() {
  return (
    <>
      <Navbar />
      <main>
        <AIHero />
        <CapabilityDeepDive />
        <AIPipelineMock />
        <GaugeGrid />

        {/* 5 — Classification schema */}
        <Section rule="top" tone="dossier" size="md">
          <Eyebrow num="04" tag="[SCHEMA · CLASSIFIED]">
            How a thread is tagged
          </Eyebrow>

          <div className="mt-10 overflow-x-auto rounded border border-[var(--color-rule)] bg-[var(--color-paper)] p-5 font-mono text-[12px] leading-[2.4] text-[var(--color-muted)]">
            <SchemaLine label="intent" barWidth={128} />
            <SchemaLine label="urgency" barWidth={40} />
            <SchemaLine label="account_tier" barWidth={64} />
            <SchemaLine label="channel" value="whatsapp" />
            <SchemaLine label="language" value="en" />
            <SchemaLine label="sentiment" barWidth={80} />
            <SchemaLine label="routing_hint" barWidth={96} />
            <SchemaLine label="owner" barWidth={80} />
            <SchemaLine label="sla_bucket" barWidth={24} />
            <SchemaLine label="confidence" prefix="0." barWidth={24} />
          </div>

          <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-[var(--color-muted)]">
            Fields visible above are the schema shape. Values are redacted
            &mdash; the taxonomy is yours, not ours.
          </p>
        </Section>

        {/* 6 — Waitlist */}
        <EarlyAccess source="product-ai" />
      </main>
      <Footer />
    </>
  );
}

function SchemaLine({
  label,
  value,
  prefix,
  barWidth,
}: {
  label: string;
  value?: string;
  prefix?: string;
  barWidth?: number;
}) {
  return (
    <div className="flex items-center">
      <span className="inline-block w-32 shrink-0 text-[var(--color-muted-2)]">
        {label}:
      </span>
      {value ? (
        <span className="text-[var(--color-ink)]">{value}</span>
      ) : (
        <>
          {prefix && <span>{prefix}</span>}
          <span
            className="redacted-shimmer inline-block h-3.5 rounded-sm align-middle"
            style={{ width: barWidth }}
          />
        </>
      )}
    </div>
  );
}
