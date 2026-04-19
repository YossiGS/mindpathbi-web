import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { ClassifiedTag } from "@/components/brand/classified-tag";
import { FiledStamp } from "@/components/brand/filed-stamp";
import { TechnicalSellingMock } from "@/components/mocks/technical-selling";
import type { IndustrySlug } from "@/components/mocks/technical-selling.data";
import { EarlyAccess } from "@/components/early-access";

export type IndustryScenario = {
  code: string;
  title: string;
  before: string;
  after: string;
};

export type IndustryCapability = {
  code: string;
  name: string;
  blurb: string;
};

/**
 * A single row in the field report card: a thread that came in, and a short
 * resolution line describing what the system produced.
 *
 *   thread      — the inbound question, written as the subject line of a real
 *                 thread in that industry's voice. Rendered in quotes.
 *   resolution  — one short sentence: verb + source doc + outcome. References
 *                 a filename from `sourceDocs` when possible so the card and
 *                 the "source docs" section reinforce each other.
 */
export type FieldReportEntry = { thread: string; resolution: string };

export type IndustryPageData = {
  slug: IndustrySlug;
  industryName: string;
  archetypeCode: string;
  headline: {
    lead: string;
    muted: string;
  };
  subhead: string;
  fieldReportCode: string;
  /**
   * A log of inbound threads observed in that industry's inbox and what the
   * system produced in response. Rendered as the "FIELD REPORT" card in the
   * page header.
   */
  fieldReportLines: FieldReportEntry[];
  scenarios: IndustryScenario[];
  capabilities: IndustryCapability[];
  vignetteIntro: string;
  sourceDocs: { filename: string; hint: string }[];
};

export function IndustryPage({ data }: { data: IndustryPageData }) {
  const {
    slug,
    industryName,
    archetypeCode,
    headline,
    subhead,
    fieldReportCode,
    fieldReportLines,
    scenarios,
    capabilities,
    vignetteIntro,
    sourceDocs,
  } = data;

  return (
    <>
      <Navbar />
      <main>
        {/* ===== Hero ===== */}
        <header className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-overlay opacity-60"
          />
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span>[INDUSTRY · {industryName.toUpperCase()}]</span>
              <span className="hidden md:inline">
                CLASSIFIED · PRE-LAUNCH · BY INVITATION
              </span>
              <span>MINDPATH/BI · {archetypeCode}</span>
            </div>
            <div className="mt-3 h-px w-full bg-[var(--color-rule)]" />
          </div>

          <div className="relative mx-auto mt-10 grid max-w-7xl gap-10 px-6 md:mt-14 md:grid-cols-12 md:gap-12 md:px-10">
            <div className="md:col-span-7">
              <ClassifiedTag />
              <h1 className="mt-6 text-[40px] font-semibold leading-[1.02] tracking-[-0.02em] text-[var(--color-ink)] md:text-[60px]">
                {headline.lead}
                <br />
                <span className="text-[var(--color-muted)]">
                  {headline.muted}
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
                {subhead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`/#waitlist?industry=${slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-paper)] transition-opacity hover:opacity-85"
                >
                  Request access
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
                >
                  See how it works
                </Link>
              </div>
            </div>

            {/* Field Report card */}
            <div className="md:col-span-5">
              <div className="relative rounded-md border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5 md:p-6">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  <span>[{fieldReportCode}]</span>
                  <span>RESOLVED · N={fieldReportLines.length}</span>
                </div>
                <ol className="mt-4 space-y-3.5">
                  {fieldReportLines.map((entry, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[3px] shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted-2)]">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="text-[13px] leading-[1.45] text-[var(--color-ink)]">
                          &ldquo;{entry.thread}&rdquo;
                        </p>
                        <p className="flex items-start gap-1.5 text-[11px] leading-[1.5] text-[var(--color-muted)]">
                          <span
                            aria-hidden
                            className="font-mono text-[var(--color-accent)]"
                          >
                            →
                          </span>
                          <span>{entry.resolution}</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 border-t border-[var(--color-rule)] pt-3 text-xs leading-relaxed text-[var(--color-muted)]">
                  {`Thread shapes observed in ${industryName} inboxes. Each drafted from the team's own docs, cited, in under 10 minutes.`}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ===== Scenarios ===== */}
        <Section
          id="scenarios"
          rule="top"
          tone="paper-2"
          size="md"
        >
          <Eyebrow num="SCENARIOS" tag="BEFORE / AFTER · THREE MOVES">
            What changes on the drafting surface
          </Eyebrow>

          <div className="mt-6 border-t border-[var(--color-rule)] pt-8">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-[var(--color-ink)] md:text-[40px] md:leading-[1.06]">
              Three threads that used to escalate —
              <br />
              <span className="text-[var(--color-muted)]">
                now ship in one reply.
              </span>
            </h2>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] md:grid-cols-3">
            {scenarios.map((s) => (
              <article
                key={s.code}
                className="flex min-h-[320px] flex-col bg-[var(--color-paper)] p-6"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  <span>[{s.code}]</span>
                  <span className="text-[var(--color-accent)]">·SHIFT</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--color-ink)]">
                  {s.title}
                </h3>

                <div className="mt-5 flex flex-col gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
                      BEFORE
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                      {s.before}
                    </p>
                  </div>
                  <div className="border-t border-dashed border-[var(--color-rule)] pt-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
                      AFTER
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink)]">
                      {s.after}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ===== Locked vignette ===== */}
        <Section id="vignette" rule="top" tone="paper" size="md">
          <Eyebrow num="FIELD REPORT · 011" tag="ONE THREAD · OBSERVED">
            {vignetteIntro}
          </Eyebrow>

          <div className="mt-6 border-t border-[var(--color-rule)] pt-8">
            <div className="grid gap-8 md:grid-cols-12 md:items-start">
              <div className="md:col-span-7">
                <h2 className="text-2xl font-semibold tracking-[-0.01em] text-[var(--color-ink)] md:text-[32px] md:leading-[1.08]">
                  Grounded in the docs your team already wrote.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
                  Every citation here points at a real file in the tenant. The
                  same pages your senior rep opens when a question hits.
                </p>
              </div>

              <div className="flex flex-col gap-2 md:col-span-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  [SOURCE FILES · IN SCOPE]
                </div>
                <ul className="flex flex-col gap-1.5 border-t border-[var(--color-rule)] pt-3">
                  {sourceDocs.map((d) => (
                    <li
                      key={d.filename}
                      className="flex flex-col gap-0.5 border-b border-dashed border-[var(--color-rule)] pb-2"
                    >
                      <span className="font-mono text-[11px] text-[var(--color-ink)]">
                        [SOURCE: {d.filename}]
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                        {d.hint}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <TechnicalSellingMock lockedIndex={slug} />
            </div>
          </div>
        </Section>

        {/* ===== Capability chips ===== */}
        <Section
          id="capabilities"
          rule="top"
          tone="paper-2"
          size="md"
        >
          <Eyebrow num="CAPABILITIES" tag="WHAT LIGHTS UP FIRST">
            The three movements that matter most here
          </Eyebrow>

          <div className="mt-10 grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] md:grid-cols-3">
            {capabilities.map((c) => (
              <article
                key={c.code}
                className="flex min-h-[200px] flex-col bg-[var(--color-paper)] p-6"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  <span>[{c.code}]</span>
                  <span className="text-[var(--color-accent)]">·ON · DAY 01</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {c.blurb}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* ===== Closing waitlist CTA (industry pre-filled) ===== */}
        <EarlyAccess defaultIndustry={slug} source={`industry-${slug}`} />

        {/* ===== Small FiledStamp closer ===== */}
        <Section rule="top" tone="dossier" size="sm">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="max-w-md text-sm text-[var(--color-muted)]">
              Every {industryName.toLowerCase()} thread is a little different.
              We&apos;ll walk through yours, on your docs, on the access call.
            </p>
            <FiledStamp
              label="[FILED · AWAITING CLEARANCE]"
              sub="One-line note on the access form is enough."
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
