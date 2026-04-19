import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { ClassifiedTag } from "@/components/brand/classified-tag";
import { EarlyAccess } from "@/components/early-access";
// [DISABLED 2026-04-19] Pricing FAQ hidden until copy is refreshed.
// import { PricingFaq } from "@/components/pricing/pricing-faq";

export const metadata = {
  title: "Pricing — MindPath BI",
  description:
    "Sealed until public launch. Design-partner cohorts are onboarded by invitation.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

// [SEALED 2026-04-19] Concrete per-tier features are intentionally withheld
// while pricing is pre-launch. The page now renders redacted capability rows
// in place of the feature bullet lists. To restore, re-add a `features` array
// on each tier and swap the redacted block in the tier <article> for an <ul>.
const TIERS = [
  {
    code: "TIER A",
    name: "Starter",
    tagline: "For the first technical-sales desk.",
    recommended: false,
    bars: [
      { w: "w-32", caption: "[PER SEAT · MONTH]" },
      { w: "w-20", caption: "[PLATFORM FEE]" },
      { w: "w-24", caption: "[ONBOARDING]" },
    ],
    capabilityCount: 4,
  },
  {
    code: "TIER B",
    name: "Scale",
    tagline: "For the multi-channel revenue team.",
    recommended: true,
    bars: [
      { w: "w-32", caption: "[PER SEAT · MONTH]" },
      { w: "w-20", caption: "[PLATFORM FEE]" },
      { w: "w-24", caption: "[ONBOARDING]" },
    ],
    capabilityCount: 5,
  },
  {
    code: "TIER C",
    name: "Sovereign",
    tagline: "For regulated industries and private deployments.",
    recommended: false,
    bars: [
      { w: "w-32", caption: "[PER SEAT · MONTH]" },
      { w: "w-20", caption: "[PLATFORM FEE]" },
      { w: "w-28", caption: "[DEPLOYMENT · SETUP]" },
    ],
    capabilityCount: 6,
  },
] as const;

// Pseudo-random but stable widths per row so the redacted capability bars
// look like varied content instead of identical lines. Indexed by row number.
const CAPABILITY_BAR_WIDTHS = [
  "w-44",
  "w-36",
  "w-40",
  "w-32",
  "w-48",
  "w-36",
] as const;

const BULLETS = [
  {
    code: "α",
    heading: "Capped for design partners",
    body: "A fixed, capped arrangement for the first cohort. No per-message fees.",
  },
  {
    code: "β",
    heading: "Nothing locked behind exports",
    body: "Your knowledge base, your conversations, your audit trail — exportable any day.",
  },
  {
    code: "γ",
    heading: "EU and US residency",
    body: "Pick your region on day one. Move between them on request.",
  },
  {
    code: "δ",
    heading: "No training on your data",
    body: "We do not pool tenant data to train shared models. Your corpus stays in your tenant.",
  },
  {
    code: "ε",
    heading: "Transparent retention windows",
    body: "Default retention is published; tighter windows available by request.",
  },
  {
    code: "ζ",
    heading: "One number, not a stack",
    body: "We don\u2019t charge separately for AI, storage, or seats. One rate, all in.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ---- 1 · Hero ---- */}
        <header className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-overlay opacity-60"
          />

          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span>[FIELD REPORT · 004]</span>
              <span className="hidden md:inline">
                CLASSIFIED · PRE-LAUNCH · BY INVITATION
              </span>
              <span>MINDPATH/BI · PRICING</span>
            </div>
            <div className="mt-3 h-px w-full bg-[var(--color-rule)]" />
          </div>

          <div className="mx-auto mt-10 max-w-7xl px-6 md:mt-14 md:px-10">
            <ClassifiedTag />

            <h1 className="mt-6 text-[42px] font-semibold leading-[1.02] tracking-[-0.02em] text-[var(--color-ink)] md:text-[60px]">
              Pricing is sealed.
              <br />
              <span className="text-[var(--color-muted)]">
                Published when we open public access.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              Design-partner cohorts are onboarded by invitation with a capped,
              fixed arrangement. Public pricing lands when we do.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-85"
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
        </header>

        {/* ---- 2 · Three locked tier cards ---- */}
        <Section rule="top" tone="paper-2" size="md">
          <Eyebrow num="01" tag="TIERS · LOCKED">
            Three shapes we&apos;re opening in Q1 2026
          </Eyebrow>

          <div className="mt-8 grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] md:grid-cols-3">
            {TIERS.map((tier) => (
              <article
                key={tier.code}
                className="relative flex flex-col bg-[var(--color-paper)] p-6 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    [{tier.code}]
                  </span>
                  <span className="inline-flex items-center gap-1.5 border border-[var(--color-accent)] bg-[var(--color-accent-tint)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
                    [LOCKED]
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                      {tier.name}
                    </h3>
                    {tier.recommended && (
                      <span className="inline-flex items-center gap-1 border border-[var(--color-accent)] bg-[var(--color-accent-tint)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
                        <span
                          className="inline-block h-1 w-1 rounded-full bg-[var(--color-accent)]"
                          aria-hidden
                        />
                        RECOMMENDED
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {tier.tagline}
                  </p>
                </div>

                <div className="mt-6 space-y-3 border-t border-[var(--color-rule)] pt-5">
                  {tier.bars.map((bar) => (
                    <div key={bar.caption} className="flex items-center gap-3">
                      <span
                        className={`redacted-shimmer h-5 rounded-sm ${bar.w}`}
                        aria-label="Redacted price"
                      />
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
                        {bar.caption}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex-1 border-t border-[var(--color-rule)] pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
                      [CAPABILITIES]
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
                      [SEALED]
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {Array.from({ length: tier.capabilityCount }).map((_, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span
                          className="mt-px font-mono text-[10px] text-[var(--color-muted-2)]"
                          aria-hidden
                        >
                          [·]
                        </span>
                        <span
                          className={`redacted-shimmer h-4 rounded-sm ${CAPABILITY_BAR_WIDTHS[i % CAPABILITY_BAR_WIDTHS.length]}`}
                          aria-label="Capability sealed"
                        />
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-[var(--color-muted-2)]">
                    Walked through on the access call.
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--color-rule)] pt-5">
                  <Link
                    href="/#waitlist"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    Request pricing <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ---- 3 · What we can tell you now ---- */}
        <Section rule="top" tone="paper" size="md">
          <Eyebrow num="02" tag="WHAT WE CAN SAY">
            A few things that aren&apos;t sealed
          </Eyebrow>

          <div className="mt-8 grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] md:grid-cols-2">
            {BULLETS.map((b) => (
              <article
                key={b.code}
                className="bg-[var(--color-paper)] p-6 md:p-7"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
                  [{b.code}]
                </span>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-[var(--color-ink)]">
                  {b.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {b.body}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* ---- 4 · Pricing FAQ ---- [DISABLED 2026-04-19] */}
        {/* <PricingFaq /> */}

        {/* ---- 5 · Waitlist ---- */}
        <EarlyAccess source="pricing" />
      </main>
      <Footer />
    </>
  );
}
