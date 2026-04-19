# AGENTS.md

## Learned User Preferences

- When copying design inspiration from other sites (Kinso, Bifrost, Searchable, etc.), rewrite all copy so the page does not resemble the source — different wording, different framing.
- Keep public marketing copy customer-focused; never include investor-pitch content (no TAM/funding stats, "MVP shipped", "SaaS-grade margins", dollar figures, etc.).
- Be vague about security internals on public pages; do not name specific tools or implementation details (e.g. don't say "ClamAV"); keep the Subprocessors & Service Providers list to only legally required disclosures; never publish an uptime commitment or SLA number (no "99%" claims).
- When delegating to subagents, use Opus 4.7 "high" — never "max".
- Pricing is intentionally closed pre-launch; show "Soon" or similar placeholder instead of real numbers.
- Prefer consolidating multiple planning docs in `.cursor/plans/` into a single plan when asked, instead of leaving duplicates.
- Refuse to fabricate official government documents (e.g. Israeli תעודת התאגדות / תקנון חברה); direct the user to the Israeli Companies Registrar instead.
- Commits use Conventional Commits (`type(scope): description`, lowercase, imperative, ≤72 chars) via the `/commit` workflow — review diff, then `git add -A`, commit, and `git push`.

## Learned Workspace Facts

- Product is MindPath BI: unified communications inbox (Gmail / WhatsApp / Outlook), AI Copilot, health scores, and a deal pipeline built on communication data; positioning emphasizes a knowledge-base-driven "technical sales" angle.
- Stack: Next.js (App Router, v16+) + Tailwind CSS v4 + Framer Motion + shadcn/ui; interactive components use `"use client"`.
- Tailwind v4 separates the CSS `translate` property from `transform` — never combine `-translate-x-1/2 -translate-y-1/2` with an inline `style.transform: translate(...)`; it double-translates. Use `inset-0 m-auto` for centering when an inline `transform` is also needed.
- Design direction codename is "The Classified Brief" (classified-dossier / tax-form aesthetic); CSS custom properties in `src/app/globals.css` — `--color-paper`, `--color-paper-2`, `--color-dossier`, `--color-ink`, `--color-muted`, `--color-rule`, `--color-rule-soft`, `--color-accent`, `--color-accent-tint` — with Tailwind theme aliases `border`, `border-light`, `muted`, `foreground`. Site runs light-only; dark mode is intentionally disabled on public pages.
- BrandMark (logo) is the letter "A" styled with a Path-glyph mark; the browser tab favicon and every logo instance must use this mark (not the old "M/").
- Inbox/routing schematics group integrations into `[CHANNELS]`, `[KNOWLEDGE]`, `[SYSTEMS]`; live brands to display are Gmail, Outlook, WhatsApp Business, Slack, Instagram DM, Facebook Messenger (channels) and SAP, SAP Business One, Priority, Shopify, WooCommerce (systems/eCommerce).
- Seven industry pages live under `src/app/industries/`: `saas`, `ecommerce`, `professional-services`, `travel-advisory`, `interior-design`, `building-supply`, `industrial-distribution`; keep this count in sync with the nav dropdown and marketing copy.
- "Field Report" sections must represent real customer inboxes we've observed and answered using our system — never generic or fabricated FAQs; names, quantities, and account codes stay redacted.
- Primary site files: `src/app/page.tsx` plus section components in `src/components/` (e.g. `features.tsx`, `faq.tsx`, `footer.tsx`, `early-access.tsx`); legal pages (`/privacy`, `/terms`, `/dpa`, `/sla`, `/ai-terms`, `/subprocessors`) use their own dedicated mini-site navigation separate from the main marketing nav; keep `README.md` in sync with site changes.
- Section visual convention: small label pill + two-line heading + subtitle with fade-in-on-scroll staggered motion; nav and label text uses `font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground`.
- Design inspiration references: Bifrost (`getmaxim.ai/bifrost`, Framer Sites + Lenis + Framer Motion) and Searchable (`searchable.com`, Next.js 15 + shadcn/ui + Radix + Framer Motion + Recharts + PostHog + Vercel Analytics); rewrite all copy when borrowing layouts.
- Related backend monorepo at `/Users/yossigueta/Developer/Unified-BI-System/backend/src/seed`; pitch-deck lives at `/Users/yossigueta/Developer/Unified-BI-System/pitch-deck/`; planning docs live under `.cursor/plans/` as `mindpath-website-elevation_*.plan.md`; git signatures and marketing emails live in `email-signatures/` (HTML, treated as source files, not build artifacts).
