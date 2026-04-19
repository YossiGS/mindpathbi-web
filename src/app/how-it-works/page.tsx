import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { ClassifiedTag } from "@/components/brand/classified-tag";
import { GridOverlay } from "@/components/brand/grid-overlay";
import { EarlyAccess } from "@/components/early-access";
import { OnboardingTimeline } from "@/components/how-it-works/onboarding-timeline";

export const metadata: Metadata = {
  title: "How it works — MindPath BI",
  description:
    "Day 1 to Day 90: what turns on, in what order, as your team connects channels and knowledge.",
};

const GATES = [
  {
    code: "GATE \u03b1",
    title: "Autonomous send",
    body: "OFF by default. Enable per intent, per account.",
  },
  {
    code: "GATE \u03b2",
    title: "New channels",
    body: "Each new channel requires explicit admin approval.",
  },
  {
    code: "GATE \u03b3",
    title: "Knowledge updates",
    body: "Every corpus change is versioned and auditable.",
  },
  {
    code: "GATE \u03b4",
    title: "Model swap",
    body: "Choose which model serves drafts for each intent.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <main>
        {/* ---- Hero ---- */}
        <header className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <GridOverlay />

          <div className="mx-auto max-w-7xl px-6 md:px-10">
            {/* Editorial strip */}
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span>[FIELD REPORT {"\u00b7"} 005]</span>
              <span className="hidden md:inline">BY INVITATION</span>
              <span>MINDPATH/BI {"\u00b7"} ONBOARDING</span>
            </div>
            <div className="mt-3 h-px w-full bg-[var(--color-rule)]" />

            <div className="mt-10 max-w-3xl md:mt-14">
              <ClassifiedTag />

              <h1 className="mt-6 text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] md:text-[56px]">
                <span className="text-[var(--color-ink)]">
                  From blank desk to technical-sales floor
                </span>
                {" \u2014 "}
                <span className="text-[var(--color-muted)]">
                  in ninety days.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
                We don&apos;t roll you out in one explosion. Capabilities turn on
                as your corpus grows and your team adapts. Here&apos;s the
                sequence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/#waitlist"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-paper)] transition-opacity hover:opacity-85"
                >
                  Request access
                  <span aria-hidden>{"\u2192"}</span>
                </Link>
                <Link
                  href="/product/ai"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
                >
                  See capabilities
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* ---- Onboarding Timeline ---- */}
        <OnboardingTimeline />

        {/* ---- Gating controls ---- */}
        <Section rule="top" tone="paper-2" size="md">
          <Eyebrow num="04" tag="GATES">
            Controls you hold, not us
          </Eyebrow>

          <div className="mt-8 grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] md:grid-cols-4">
            {GATES.map((g) => (
              <div
                key={g.code}
                className="bg-[var(--color-paper)] p-6"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  [{g.code}]
                </div>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-[var(--color-ink)]">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {g.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ---- Waitlist ---- */}
        <EarlyAccess source="how-it-works" />
      </main>
      <Footer />
    </>
  );
}
