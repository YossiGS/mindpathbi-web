"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { cn } from "@/lib/utils";

const ARCHIVE_LINKS: ReadonlyArray<{
  href: string;
  label: string;
  short: string;
}> = [
  { href: "/privacy", label: "Privacy", short: "PR-01" },
  { href: "/terms", label: "Terms", short: "TR-01" },
  { href: "/dpa", label: "DPA", short: "DPA-01" },
  { href: "/sla", label: "SLA", short: "SLA-01" },
  { href: "/ai-terms", label: "AI Terms", short: "AI-01" },
  { href: "/subprocessors", label: "Subprocessors", short: "SP-01" },
];

export function LegalNavbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)]/85 backdrop-blur-xl">
      {/* Hairline ribbon above the bar */}
      <div
        aria-hidden
        className="h-[3px] w-full bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_6px,transparent_6px_12px)] opacity-[0.08]"
      />

      <div className="mx-auto flex h-14 max-w-[1140px] items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="MindPath BI — home"
        >
          <BrandMark size="md" />
          <span
            aria-hidden
            className="hidden h-4 w-px bg-[var(--color-rule)] sm:block"
          />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] sm:inline">
            Archive · Legal
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {ARCHIVE_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                  active
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                )}
              >
                {link.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-2 -bottom-[3px] h-px bg-[var(--color-ink)]"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
        >
          <span className="hidden sm:inline">Back to mindpathbi.com</span>
          <span className="sm:hidden">Main site</span>
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      </div>

      {/* Mobile doc strip */}
      <div className="border-t border-[var(--color-rule)] md:hidden">
        <div className="mx-auto max-w-[1140px] overflow-x-auto px-5">
          <div className="flex min-w-max items-center gap-1 py-2">
            {ARCHIVE_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                    active
                      ? "bg-[color-mix(in_srgb,var(--color-accent-tint)_85%,transparent)] text-[var(--color-accent-ink)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

export function LegalFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--color-rule)] bg-[var(--color-paper-2)]">
      <div className="mx-auto max-w-4xl px-6 pt-14 pb-10 md:px-10">
        {/* Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
            />
            [END OF DOCUMENT · FILED]
          </span>
          <span>MINDPATH/BI · ARCHIVE · LEGAL</span>
        </div>

        <div className="mt-3 h-px w-full bg-[var(--color-rule)]" />

        {/* Document register */}
        <div className="mt-6 grid gap-x-10 gap-y-3 text-[13px] text-[var(--color-muted)] sm:grid-cols-2">
          <ul className="flex flex-col gap-1.5">
            {ARCHIVE_LINKS.slice(0, 3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
                    [{link.short}]
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-1.5">
            {ARCHIVE_LINKS.slice(3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
                    [{link.short}]
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 h-px w-full bg-[var(--color-rule)]" />

        {/* Meta line */}
        <div className="mt-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span>© {new Date().getFullYear()} MindPath BI · All rights reserved</span>
          <span className="inline-flex items-center gap-4">
            <a
              href="mailto:josef@mindpathbi.com"
              className="text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
            >
              josef@mindpathbi.com
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              Main site
              <ArrowUpRight className="size-3" aria-hidden />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
