# MindPath BI — Landing Page

Public-facing marketing site for **MindPath BI**, deployed at [mindpathbi.com](https://mindpathbi.com).

The actual application lives at [app.mindpathbi.com](https://app.mindpathbi.com) and its source code is at:

```
/Users/yossigueta/Developer/Unified-BI-System/
├── apps/web/          → Next.js frontend (the real app)
├── backend/           → FastAPI backend (Python)
└── docs/              → Architecture docs
```

This landing page is a separate, standalone project. It does **not** share code with the main app — it's purpose-built for marketing, investor demos, and SEO.

---

## Tech Stack

| Layer        | Technology                            |
|-------------|---------------------------------------|
| Framework   | Next.js 16 (Turbopack)                |
| Styling     | Tailwind CSS v4                       |
| Animations  | Motion (Framer Motion) + Remotion     |
| Hosting     | Vercel                                |
| Repo        | github.com/YossiGS/mindpathbi-web    |
| Domain      | mindpathbi.com (Spaceship → Vercel DNS) |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              → Root layout, SEO metadata, theme script
│   ├── page.tsx                → Landing page (composes all sections)
│   ├── icon.svg                → Favicon (SVG)
│   ├── opengraph-image.tsx     → Dynamic OG image for social sharing
│   ├── twitter-image.tsx       → Twitter card (reuses OG image)
│   ├── globals.css             → Theme variables (dark + light mode)
│   ├── privacy/page.tsx        → Privacy policy
│   └── terms/page.tsx          → Terms of service
│
├── components/
│   ├── navbar.tsx              → Fixed top nav with theme toggle
│   ├── hero.tsx                → Hero headline + scroll indicator
│   ├── problem.tsx             → 8 pain-point cards (red accents)
│   ├── features.tsx            → 12 capability cards (4×3 grid)
│   ├── product-demo.tsx        → 4 Remotion animations with descriptions
│   ├── integrations.tsx        → 8 live + 18 roadmap connectors with icons
│   ├── early-access.tsx        → "Let's talk" CTA section
│   ├── footer.tsx              → Footer links
│   ├── theme-toggle.tsx        → System/Dark/Light toggle (localStorage)
│   ├── remotion-player-wrapper.tsx → Dynamic Remotion Player loader
│   └── remotion/
│       ├── product-showcase.tsx    → Inbox animation
│       ├── dashboard-showcase.tsx  → Dashboard animation
│       ├── deals-showcase.tsx      → Deal pipeline animation
│       └── client360-showcase.tsx  → Client 360 animation
│
└── public/                     → (empty — all assets are inline SVGs)
```

---

## Page Flow (scroll order)

1. **Hero** — "One platform. Every customer touchpoint." No buttons — just a scroll indicator.
2. **The Problem** — 8 real pain-point scenarios (red icons). Covers: one-person teams, slow replies, bots, zero context, hidden churn, blind health, knowledge gaps, tribal knowledge.
3. **Capabilities** — 12 feature cards in a 4×3 grid: Unified Inbox, Client 360, AI Copilot, Knowledge Base, Smart Routing, AI Classification, Response Templates, Workflow Automations, Identity Resolution, Ontology Platform, Global Search, Analytics.
4. **Product Preview** — 4 Remotion animations in alternating layout (Inbox, Client 360, Dashboard, Deals). Disclaimer: *"Animations are conceptual illustrations."*
5. **Integrations** — 8 live connectors with brand icons + stats (8 live, 18+ roadmap, <5 min setup, 2-way sync) + 18 roadmap connectors in a 6-col grid.
6. **Let's Talk** — CTA with mailto link.
7. **Footer** — Privacy, Terms, Contact, Sign In links.

---

## Features Showcased on Landing Page

These features exist in the real app at `/Users/yossigueta/Developer/Unified-BI-System/apps/web/`:

| Landing Page Feature    | Real App Route                        | Status    |
|------------------------|---------------------------------------|-----------|
| Unified Inbox          | `/inbox`                              | Built     |
| Client 360             | `/contacts/[id]`                      | Built     |
| AI Copilot             | Inbox reading pane sidebar            | Built     |
| Knowledge Base         | `/settings/knowledge-base`            | Built     |
| Smart Routing          | `/settings/routing`                   | Built     |
| AI Classification      | `/settings/classification-rules`      | Built     |
| Response Templates     | `/settings/templates`                 | Built     |
| Workflow Automations   | `/ontology/workflows`                 | Built     |
| Identity Resolution    | `/contacts/duplicates`                | Built     |
| Ontology Platform      | `/ontology`                           | Built     |
| Global Search          | Cmd+K (SearchModal)                   | Built     |
| Analytics & Reporting  | `/analytics`                          | Built     |
| Dashboard              | `/` (main dashboard)                  | Built     |
| Deal Pipeline          | `/deals`                              | Built     |

### Features in the real app NOT on the landing page

| Feature              | Route                          | Notes                               |
|---------------------|-------------------------------|---------------------------------------|
| Tasks               | `/tasks`                       | Task management with filters          |
| Companies           | `/companies`                   | Company directory + detail + graph    |
| AI Insights          | `/insights`                    | Dedicated AI insights page            |
| Object Explorer      | `/ontology/explorer`           | Cross-entity search and charting      |
| Data Pipeline        | `/ontology/pipeline`           | Pipeline stages and health            |
| Team Management      | `/settings/team`               | Members, roles, invitations           |
| AI Configuration     | `/settings/ai-config`          | Model tiers (Fast/Standard/Premium)   |
| Usage & Plan         | `/settings/usage-plan`         | Billing, limits, trial                |
| API Keys            | `/settings/api-keys`           | API key management                    |
| Onboarding          | `/onboarding`                  | 5-step setup wizard                   |
| Real-time Presence   | WebSocket                     | Who is viewing what                   |
| Notifications        | NotificationBell              | Notification dropdown                 |
| Smart Folders        | Inbox sidebar                 | Urgent, Needs Reply, Follow-up, FYI   |
| SLA Badges           | Inbox threads                 | SLA countdown and breach indicators   |

---

## Live Integrations

| Connector    | Protocol               | Landing Page | Real App |
|-------------|------------------------|:------------:|:--------:|
| Gmail       | OAuth 2.0              | ✓            | ✓        |
| Outlook     | Microsoft Graph API    | ✓            | ✓        |
| IMAP/SMTP   | Generic email          | ✓            | ✓        |
| WhatsApp    | Business Cloud API + Coexistence Mode | ✓ | ✓       |
| SAP B1      | Service Layer API      | ✓            | ✓        |
| Priority    | REST API               | ✓            | ✓        |
| WooCommerce | REST API               | ✓            | ✓        |
| WordPress   | REST API               | ✓            | ✓        |

### Roadmap Integrations (on landing page)

Live Call Stream, Slack, SAP S/4HANA, Instagram, Messenger, LinkedIn, Salesforce, HubSpot, Shopify, Zendesk, Intercom, Twilio, Stripe, QuickBooks, Zoom, Google Calendar, Notion, Jira

---

## Theme System

- **Default:** Follows OS preference (`prefers-color-scheme`)
- **Toggle:** Cycles System → Dark → Light (saved to `localStorage`)
- **Implementation:** CSS variables in `globals.css`, overridden by `html.light` class
- **Important:** Uses `@theme` (not `@theme inline`) so Tailwind utilities reference CSS variables that can be overridden at runtime

---

## Legal Pages

| Page     | Route      | Notes                                                    |
|----------|-----------|----------------------------------------------------------|
| Privacy  | `/privacy` | Covers data collection, security, rights. States no cookies on landing page. |
| Terms    | `/terms`   | Standard ToS. Governed by Israeli law.                   |

No cookies page — this site doesn't collect cookies, analytics, or tracking data.

---

## Domain & Deployment

- **Registrar:** Spaceship
- **DNS:** Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`)
- **Vercel project:** `mindpathbi-web`
- **Domains:** `mindpathbi.com`, `www.mindpathbi.com`
- **App domain:** `app.mindpathbi.com` (separate Vercel project for the real app)

---

## Commands

```bash
npm run dev     # Start dev server (Turbopack)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

---

## Contact

- **Email:** mindpathbi@proton.me
- **App:** app.mindpathbi.com
- **Main codebase:** /Users/yossigueta/Developer/Unified-BI-System/
