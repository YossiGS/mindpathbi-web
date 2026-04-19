import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Lock,
  Fingerprint,
  Layers,
  ScrollText,
  ShieldAlert,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { ClassifiedTag } from "@/components/brand/classified-tag";
import { EarlyAccess } from "@/components/early-access";
import { ArchDiagram } from "@/components/security/arch-diagram";
import { PostureHealth } from "@/components/security/posture-health";
// [DISABLED 2026-04-19] FAQ section hidden until DPO copy is refreshed.
// Re-enable by restoring these imports and the FAQ <Section> below.
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Security — MindPath BI",
  description:
    "Posture by design. Tenant-isolated. Not trained on your data. Security brief available under NDA.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const PILLARS = [
  {
    code: "α",
    icon: Globe,
    title: "Data residency",
    body: "Choose EU or US on day one. We do not replicate tenant data across regions without explicit opt-in. Your data stays in the geography you selected — full stop.",
  },
  {
    code: "β",
    icon: Lock,
    title: "Encryption in transit & at rest",
    body: "Industry-standard transport security on every connection. Data-at-rest encryption with enterprise key management. Keys are rotated on a schedule, never shared across tenants.",
  },
  {
    code: "γ",
    icon: Fingerprint,
    title: "Access & identity",
    body: "SSO and directory sync at the tenant edge. Granular, role-based access inside. Sensitive actions are audited and surfaced in your own exportable log.",
  },
  {
    code: "δ",
    icon: Layers,
    title: "Tenant isolation",
    body: "Data and network isolation between tenants. No shared-model pools. No cross-tenant inference. Your environment is yours alone.",
  },
  {
    code: "ε",
    icon: ScrollText,
    title: "Audit trail",
    body: "Every action — read, write, draft, send — recorded and exportable. Your auditor reads from your copy, not ours.",
  },
  {
    code: "ζ",
    icon: ShieldAlert,
    title: "Incident response",
    body: "24/7 on-call with named responders. Disclosure on a clock you can plan to. Post-incident review shared with affected tenants.",
  },
] as const;

const AI_BULLETS = [
  { code: "α", text: "No training on your data. Ever." },
  { code: "β", text: "No cross-tenant retrieval." },
  { code: "γ", text: "Export on demand. No lock-in." },
] as const;

// [DISABLED 2026-04-19] Source copy for the security FAQ. Restore and
// uncomment the FAQ <Section> below to surface these in the page.
// const FAQ_ITEMS = [
//   {
//     q: "Where does my data live?",
//     a: "In the region you pick on day one — EU or US. No replication outside that region without your explicit opt-in.",
//   },
//   {
//     q: "Do you train on our data?",
//     a: "No. Your corpus and conversations serve only your tenant. Corrections and edits tune the model in-tenant, never in a shared pool.",
//   },
//   {
//     q: "What certifications are you pursuing?",
//     a: "SOC 2 posture is under active audit. GDPR-aligned processing by default. HIPAA-ready for regulated tenants on request. Full roadmap in the security brief.",
//   },
//   {
//     q: "Who has access to tenant data?",
//     a: "A named, SSO-protected operations group — access is role-scoped, logged, and exportable to you. Customer-support staff never read tenant data without explicit customer consent.",
//   },
//   {
//     q: "How do I export everything?",
//     a: "A single command produces a signed, versioned archive of your conversations, your corpus, and your audit log. No portal quota. No fee.",
//   },
// ] as const;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ─── 1. Hero ─── */}
        <header className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-overlay opacity-60"
          />
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span>[FIELD REPORT · 007]</span>
              <span>MINDPATH/BI · SECURITY</span>
            </div>
            <div className="mt-3 h-px w-full bg-[var(--color-rule)]" />

            <div className="mt-10 md:mt-14">
              <ClassifiedTag label="CLASSIFIED · POSTURE NOTE · BY INVITATION" />
              <h1 className="mt-6 text-[36px] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--color-ink)] md:text-[56px]">
                Security posture —
                <br />
                you don&apos;t need to ask for.
                <br />
                <span className="text-[var(--color-muted)]">
                  Because we&apos;ve already written it down.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
                We ship to regulated buyers. The posture below is the default —
                not the upgrade. If your legal team needs the full brief,
                we&apos;ll send it under NDA.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/#waitlist?intent=security-brief"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-paper)] transition-opacity hover:opacity-85"
                >
                  Request the brief (under NDA)
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/#waitlist"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
                >
                  Request access
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* ─── 2. Six posture pillars ─── */}
        <Section rule="top" tone="paper-2" size="md">
          <Eyebrow num="01" tag="[POSTURE · SIX PILLARS]">
            What we&apos;ve locked in by default
          </Eyebrow>

          <div className="mt-8 grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] md:grid-cols-3">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.code}
                  className="flex flex-col bg-[var(--color-paper)] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      [{p.code}]
                    </span>
                    <Icon className="h-4 w-4 text-[var(--color-muted)]" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {p.body}
                  </p>
                </article>
              );
            })}
          </div>
        </Section>

        {/* ─── 3. AI data posture ─── */}
        <Section rule="top" tone="dossier" size="md">
          <Eyebrow num="02" tag="[AI · DATA POSTURE]">
            The one sentence your DPO wants to read
          </Eyebrow>

          <div className="mt-8 rounded-md border border-[var(--color-rule)] bg-[var(--color-paper)] p-8 md:p-12">
            <h3 className="text-xl font-semibold leading-snug tracking-[-0.01em] text-[var(--color-ink)] md:text-2xl">
              &ldquo;Your conversations, your documents, and your corrections
              stay in your tenant. We do not pool tenant data to train shared
              models.&rdquo;
            </h3>

            <div className="mt-8 grid gap-6 border-t border-[var(--color-rule)] pt-6 md:grid-cols-3 md:gap-4">
              {AI_BULLETS.map((b) => (
                <div key={b.code} className="flex items-start gap-2">
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    [{b.code}]
                  </span>
                  <p className="text-sm font-medium text-[var(--color-ink)]">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ─── 4. Architecture diagram ─── */}
        <Section rule="top" tone="paper" size="md">
          <Eyebrow num="03" tag="[ARCH]">
            Where the data lives, stage by stage
          </Eyebrow>
          <div className="mt-8">
            <ArchDiagram />
          </div>
        </Section>

        {/* ─── 5. Posture health gauge ─── */}
        <Section rule="top" tone="paper-2" size="md">
          <Eyebrow num="04" tag="[POSTURE HEALTH · ILLUSTRATIVE]">
            Our posture score, our dashboard
          </Eyebrow>
          <div className="mt-8">
            <PostureHealth />
          </div>
        </Section>

        {/* ─── 6. FAQ ─── [DISABLED 2026-04-19] hidden until refreshed */}
        {/*
        <Section rule="top" tone="paper" size="md">
          <Eyebrow num="05" tag="[ARCHIVE · SECURITY]">
            The five questions every DPO asks first
          </Eyebrow>

          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible>
              {FAQ_ITEMS.map((item, i) => {
                const code = String(i + 1).padStart(2, "0");
                return (
                  <AccordionItem
                    key={code}
                    value={`q-${code}`}
                    className="border-b border-[var(--color-rule)]"
                  >
                    <AccordionTrigger className="font-mono text-sm tracking-tight text-[var(--color-ink)]">
                      <span>
                        <span className="mr-2 text-[var(--color-muted)]">
                          [Q{code}]
                        </span>
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </Section>
        */}

        {/* ─── 7. Waitlist ─── */}
        <EarlyAccess source="security-brief" />
      </main>
      <Footer />
    </>
  );
}
