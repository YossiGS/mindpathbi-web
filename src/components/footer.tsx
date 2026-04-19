import * as React from "react";
import Link from "next/link";
import { APP_URL, isAppLive } from "@/lib/config";
import { BrandMark } from "@/components/brand/brand-mark";

const PRODUCT = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/product/ai", label: "The AI layer" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
];

const INDUSTRIES = [
  { href: "/industries/ecommerce", label: "E-commerce" },
  { href: "/industries/professional-services", label: "Professional services" },
  { href: "/industries/industrial-distribution", label: "Industrial distribution" },
  { href: "/industries/saas", label: "SaaS" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/dpa", label: "DPA" },
  { href: "/sla", label: "SLA" },
  { href: "/ai-terms", label: "AI Terms" },
  { href: "/subprocessors", label: "Subprocessors" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-rule)] bg-[var(--color-paper)]">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-10 md:py-20">
        {/* Top meta strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-rule)] pb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <span>[MINDPATH/BI · CLASSIFIED BRIEF]</span>
          <span className="hidden md:inline">PRE-LAUNCH · BY INVITATION</span>
          <span>v0.1 · Q1 2026</span>
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="MindPath BI — home"
            >
              <BrandMark size="lg" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              The AI layer that folds your catalog, your contracts, and your guides into the answers beside every conversation — so the rep on the phone sounds like the engineer in the room.
            </p>
            <div className="mt-6">
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-xs font-medium text-[var(--color-paper)] transition-opacity hover:opacity-85"
              >
                Request access
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <FooterCol title="Product" links={PRODUCT} num="A" />
          <FooterCol title="Industries" links={INDUSTRIES} num="B" />
          <FooterCol title="Legal" links={LEGAL} num="C" />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-rule)] pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span>© 2026 MindPath BI · All rights reserved</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="mailto:josef@mindpathbi.com"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              josef@mindpathbi.com
            </a>
            {isAppLive ? (
              <a
                href={APP_URL}
                className="transition-colors hover:text-[var(--color-ink)]"
              >
                Sign in
              </a>
            ) : (
              <Link
                href="/app"
                className="transition-colors hover:text-[var(--color-ink)]"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  num,
}: {
  title: string;
  links: { href: string; label: string }[];
  num: string;
}) {
  return (
    <div className="md:col-span-2">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
        [{num}] {title}
      </div>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
