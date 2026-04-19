import type { IndustryPageData } from "@/components/industries/industry-page";

export const data: IndustryPageData = {
  slug: "professional-services",
  industryName: "Professional services",
  archetypeCode: "ARCH-02 · ENGAGEMENT-OPS",
  headline: {
    lead: "Another engagement question lands on a partner's desk.",
    muted: "Your associates answer it, cited, by noon.",
  },
  subhead:
    "A junior associate becomes a technical authority on the firm — drafting replies grounded in your engagement letters, services catalog, and client FAQ. The lead attorney reviews, not rewrites.",
  fieldReportCode: "FIELD REPORT · 012",
  fieldReportLines: [
    {
      thread: "Does the quarterly scope review move our cap?",
      resolution: "True-up clause cited. Cap holds, filed in 20 min.",
    },
    {
      thread: "Why was the retainer drawn down mid-month?",
      resolution: "Top-up rule quoted from faq.md. MTD hours attached.",
    },
    {
      thread: "Flat-fee vs. hourly for the next phase?",
      resolution: "Services.md cited. Flat-fee package named + scoped.",
    },
    {
      thread: "Can you handle this new matter type?",
      resolution: "Practice-area fit drafted. Lead attorney + slot attached.",
    },
    {
      thread: "Hourly rate for paralegal time on this matter?",
      resolution: "Engagement_billing.md quoted. Rate confirmed in-thread.",
    },
  ],
  scenarios: [
    {
      code: "SC-01",
      title: "A scope clarification on a live matter",
      before:
        "A client asks whether the quarterly scope review moves their cap; the associate pulls the lead attorney into a twenty-minute call to confirm.",
      after:
        "The draft reply cites the true-up clause from the engagement letter, confirms the cap holds, and offers a short walkthrough — filed before the partner opens the thread.",
    },
    {
      code: "SC-02",
      title: "A practice-area fit question from a warm lead",
      before:
        "The intake associate copy-pastes a generic services list and promises to check whether the firm handles the matter; triage slips by two days.",
      after:
        "The draft names the flat-fee package, the lead attorney who owns it, and the next intake slot — grounded in the live services catalog, ready to send.",
    },
    {
      code: "SC-03",
      title: "A repeat ask on retainer mechanics",
      before:
        "A client asks why the retainer balance was drawn down mid-month; the associate forwards to billing and waits.",
      after:
        "The draft quotes the retainer top-up rule from the client FAQ, shows month-to-date hours, and closes with the lead attorney's next availability.",
    },
  ],
  capabilities: [
    {
      code: "CAP-RETRIEVE",
      name: "Retrieve",
      blurb:
        "Every inbound thread arrives paired with the sections of your engagement letters, services catalog, and FAQ that actually answer it. No grep through a shared drive, no reply-by-memory.",
    },
    {
      code: "CAP-SUGGEST",
      name: "Suggest",
      blurb:
        "Drafts land in the firm's voice — flat-fee package names, lead-attorney attributions, and the clauses your engagement letter already uses. Your associate edits, doesn't compose.",
    },
    {
      code: "CAP-REMEMBER",
      name: "Remember",
      blurb:
        "Prior-matter precedent and client-specific engagement terms carry across threads, so the second question on the same matter never starts from zero — and the third one never reaches the partner.",
    },
  ],
  vignetteIntro: "A scope thread, observed in fieldwork.",
  sourceDocs: [
    {
      filename: "legalflex_engagement_billing.md",
      hint: "RATES · SCOPE · BILLING",
    },
    {
      filename: "legalflex_services.md",
      hint: "PRACTICE AREAS · FLAT-FEE TIERS",
    },
    {
      filename: "legalflex_faq.md",
      hint: "CLIENT-FACING COMMON ASKS",
    },
  ],
};
