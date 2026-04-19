import * as React from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/brand/eyebrow";
import { ClassifiedTag } from "@/components/brand/classified-tag";
import { LegalNavbar, LegalFooter } from "@/components/legal/legal-shell";
import { cn } from "@/lib/utils";

export type LegalDocSlug =
  | "PRIVACY"
  | "TERMS"
  | "DPA"
  | "SLA"
  | "AI-TERMS"
  | "SUBPROCESSORS";

type LegalPageProps = {
  fieldReport: string;
  docSlug: LegalDocSlug;
  title: string;
  subtitle?: string;
  version?: string;
  lastUpdated: string;
  classification?: string;
  children: React.ReactNode;
};

// All prose styles are encoded as Tailwind arbitrary-selector utilities on the
// wrapper so they compile into the utilities layer with known specificity and
// never lose the cascade to preflight resets.
const PROSE_CLASSES = cn(
  // Base body text
  "text-[15px] leading-[1.75] text-[var(--color-muted)]",

  // Lede paragraph (first paragraph) — larger, stronger color
  "[&>p:first-of-type]:text-[17px] [&>p:first-of-type]:leading-[1.6] [&>p:first-of-type]:text-[var(--color-ink-soft)]",

  // Paragraphs — clear vertical rhythm
  "[&_p]:mt-5 [&>p:first-child]:mt-0 [&>p:first-of-type]:mt-0",

  // Strong — ink color, semibold
  "[&_strong]:font-semibold [&_strong]:text-[var(--color-ink)]",

  // Emphasis
  "[&_em]:text-[var(--color-ink-soft)] [&_em]:italic",

  // Links — black/ink with underline, accent on hover
  "[&_a]:text-[var(--color-ink)] [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:decoration-[color-mix(in_srgb,var(--color-rule)_180%,transparent)] [&_a]:transition-colors",
  "hover:[&_a]:text-[var(--color-accent)] hover:[&_a]:decoration-[var(--color-accent)]",

  // Unordered lists — custom [·] marker rendered via ::before
  "[&_ul]:mt-5 [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-[0.55em] [&_ul]:pl-0",
  "[&_ul>li]:relative [&_ul>li]:pl-6",
  "[&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.1em]",
  "[&_ul>li]:before:font-mono [&_ul>li]:before:text-[0.7em] [&_ul>li]:before:tracking-[0.1em] [&_ul>li]:before:text-[var(--color-muted-2)]",
  "[&_ul>li]:before:content-['[·]']",

  // Ordered lists
  "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol>li]:mt-2",

  // Inline code
  "[&_code]:font-mono [&_code]:text-[0.85em] [&_code]:bg-[var(--color-paper-2)] [&_code]:border [&_code]:border-[var(--color-rule-soft)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[var(--color-ink)]",

  // Section spacing — each LegalSection gets breathing room
  "[&_.legal-section+.legal-section]:mt-14",
);

export function LegalPage({
  fieldReport,
  docSlug,
  title,
  subtitle,
  version,
  lastUpdated,
  classification = "CLASSIFIED · LEGAL · BY INVITATION",
  children,
}: LegalPageProps) {
  return (
    <>
      <LegalNavbar />
      <main className="bg-[var(--color-paper)]">
        {/* Document header */}
        <header className="relative overflow-hidden border-b border-[var(--color-rule)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-overlay opacity-50"
          />
          <div className="mx-auto max-w-4xl px-6 pt-14 pb-14 md:px-10 md:pt-20 md:pb-20">
            {/* Top meta row */}
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span>[FIELD REPORT · {fieldReport}]</span>
              <span>MINDPATH/BI · {docSlug}</span>
            </div>
            <div className="mt-3 h-px w-full bg-[var(--color-rule)]" />

            {/* Title block */}
            <div className="mt-10 md:mt-14">
              <ClassifiedTag label={classification} />
              <h1 className="mt-6 text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--color-ink)] md:text-[52px]">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
                  {subtitle}
                </p>
              ) : null}

              {/* Bottom meta row */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
                <span>[LAST UPDATED · {lastUpdated.toUpperCase()}]</span>
                {version ? <span>[VERSION · {version}]</span> : null}
                <Link
                  href="mailto:josef@mindpathbi.com"
                  className="text-[var(--color-ink)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
                >
                  [QUESTIONS · josef@mindpathbi.com]
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Document body */}
        <article className="mx-auto max-w-4xl px-6 pt-14 pb-20 md:px-10 md:pt-20 md:pb-28">
          <div className={PROSE_CLASSES}>{children}</div>
        </article>
      </main>
      <LegalFooter />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */

type LegalSectionProps = {
  num: string;
  tag?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function LegalSection({
  num,
  tag,
  title,
  children,
  className,
}: LegalSectionProps) {
  return (
    <section className={cn("legal-section scroll-mt-24", className)}>
      <Eyebrow num={num} tag={tag} tone="muted" className="mb-5">
        {title}
      </Eyebrow>
      <div className="legal-section-body">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Table helper                                                       */
/* ------------------------------------------------------------------ */

type LegalTableProps = {
  headers: string[];
  rows: React.ReactNode[][];
  caption?: string;
};

export function LegalTable({ headers, rows, caption }: LegalTableProps) {
  return (
    <div className="mt-5 overflow-x-auto border border-[var(--color-rule)] bg-[var(--color-paper)]">
      <table className="w-full border-collapse text-left text-[13.5px]">
        {caption ? (
          <caption className="px-4 py-2 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="border-b border-[var(--color-rule)] bg-[var(--color-paper-2)]">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-t border-[var(--color-rule-soft)] first:border-t-0"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3.5 align-top text-[var(--color-ink-soft)]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Filed marker (for sealed blocks)                                   */
/* ------------------------------------------------------------------ */

export function LegalSealedBlock({
  label = "WITHHELD · DISCLOSED UNDER NDA",
  children,
}: {
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-5 border border-dashed border-[var(--color-rule)] bg-[color-mix(in_srgb,var(--color-dossier)_55%,var(--color-paper))] px-5 py-5">
      <div className="inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
        />
        {label}
      </div>
      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}
