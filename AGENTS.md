# AGENTS.md

## Learned User Preferences

- When copying design inspiration from other sites (Kinso, Bifrost, Searchable, etc.), rewrite all copy so the page does not resemble the source — different wording, different framing.
- Keep public marketing copy customer-focused; never include investor-pitch content (no TAM/funding stats, "MVP shipped", "SaaS-grade margins", dollar figures, etc.).
- Be vague about security internals on public pages; do not name specific tools or implementation details (e.g. don't say "ClamAV").
- When delegating to subagents, use Opus 4.7 "high" — never "max".
- Pricing is intentionally closed pre-launch; show "Soon" or similar placeholder instead of real numbers.
- Prefer consolidating multiple planning docs in `.cursor/plans/` into a single plan when asked, instead of leaving duplicates.
- Refuse to fabricate official government documents (e.g. Israeli תעודת התאגדות / תקנון חברה); direct the user to the Israeli Companies Registrar instead.

## Learned Workspace Facts

- Product is MindPath BI: unified communications inbox (Gmail / WhatsApp / Outlook), AI Copilot, health scores, and a deal pipeline built on communication data; positioning emphasizes a knowledge-base-driven "technical sales" angle.
- Stack: Next.js (App Router) + Tailwind CSS v4 + Framer Motion + shadcn/ui; interactive components use `"use client"`.
- Tailwind v4 separates the CSS `translate` property from `transform` — never combine `-translate-x-1/2 -translate-y-1/2` with an inline `style.transform: translate(...)`; it double-translates. Use `inset-0 m-auto` for centering when an inline `transform` is also needed.
- Current design direction codename is "The Classified Brief" (classified-dossier / tax-form aesthetic); CSS custom properties defined in `src/app/globals.css` — `--color-paper`, `--color-paper-2`, `--color-dossier`, `--color-ink`, `--color-muted`, `--color-rule`, `--color-rule-soft`, `--color-accent`, `--color-accent-tint` — with Tailwind theme aliases `border`, `border-light`, `muted`, `foreground`.
- Inbox/routing schematics group integrations into three categories — `[CHANNELS]`, `[KNOWLEDGE]`, `[SYSTEMS]`; currently-live brands to display are Gmail, Outlook, WhatsApp Business, Slack, Instagram DM, Facebook Messenger (channels) and SAP, SAP Business One, Priority, Shopify, WooCommerce (systems/eCommerce).
- Primary site files: `src/app/page.tsx` as the main page, section components in `src/components/` (e.g. `features.tsx`, `faq.tsx`, `footer.tsx`, `early-access.tsx`); keep `README.md` in sync with site changes.
- Design inspiration references: Bifrost (`getmaxim.ai/bifrost`, Framer Sites + Lenis + Framer Motion) and Searchable (`searchable.com`, Next.js 15 + shadcn/ui + Radix + Framer Motion + Recharts + PostHog + Vercel Analytics).
- Product scope covers 4 industries seeded in the related backend monorepo at `/Users/yossigueta/Developer/Unified-BI-System/backend/src/seed`; pitch-deck material lives at `/Users/yossigueta/Developer/Unified-BI-System/pitch-deck/`.
- Planning docs live under `.cursor/plans/` as `mindpath-website-elevation_*.plan.md`.
- Sections follow a shared pattern: small label pill + two-line heading + subtitle, with fade-in-on-scroll staggered motion.
- Git signatures and marketing emails live in `email-signatures/` (HTML); treat as source files, not build artifacts.
