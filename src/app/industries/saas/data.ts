import type { IndustryPageData } from "@/components/industries/industry-page";

export const data: IndustryPageData = {
  slug: "saas",
  industryName: "SaaS",
  archetypeCode: "ARCH-04 · REVENUE-OPS",
  headline: {
    lead: "A pricing question lands inside a live trial.",
    muted:
      "The AE answers it in the thread — cited, in your voice — and moves the deal.",
  },
  subhead:
    "Every AE, CSM, and support rep drafts from the same pricing doc, product guide, and FAQ the specialist would have opened. The tier boundary, the SSO caveat, the trial-to-paid step — answered in the thread, with sources your rep can verify in one click.",
  fieldReportCode: "FIELD REPORT · 014",
  fieldReportLines: [
    {
      thread: "Does Growth include SAML SSO?",
      resolution: "Cited pricing.md. AE shipped in 6 min.",
    },
    {
      thread: "When do seats prorate mid-quarter?",
      resolution: "Quoted faq.md. Same answer, every shift.",
    },
    {
      thread: "SSO + SCIM on the Starter plan?",
      resolution: "Pulled product_guide.md. No escalation.",
    },
    {
      thread: "Does the trial auto-convert on day 15?",
      resolution: "Drafted in the AE's voice. Sent in 2 min.",
    },
    {
      thread: "Rate limits if we 5× traffic next week?",
      resolution: "Cited product_guide.md. Cap + upgrade in one reply.",
    },
  ],
  scenarios: [
    {
      code: "SC-01",
      title: "A plan-boundary question inside a live trial",
      before:
        "A prospect asks whether their use case sits on Starter or Pro, and the AE pings a founder in Slack — the reply slides to tomorrow and the trial clock keeps ticking.",
      after:
        "The draft cites the exact plan tier from the pricing doc, names the two limits that decide the call, and offers the upgrade path — ready for the AE to send inside the trial window.",
    },
    {
      code: "SC-02",
      title: "A product-capability question mid-thread",
      before:
        "\"Does it actually do SSO + SCIM on this plan?\" pings the AE, who opens three tabs and still isn't sure whether the answer is current — so the answer is hedged, and the buyer re-asks.",
      after:
        "The draft pulls the current capability note from the product guide, confirms SSO and SCIM on the named tier, and stays in the team's voice — no hedging, no escalation.",
    },
    {
      code: "SC-03",
      title: "A top-of-funnel question, asked again",
      before:
        "\"How does billing work if we add seats mid-quarter?\" lands for the fifth time this week, and a CSM, an AE, and a support rep each answer it a little differently.",
      after:
        "The draft quotes the FAQ line the team already wrote, adds the prorate rule from the pricing doc, and ships in one click — same answer, every shift, no rework.",
    },
  ],
  capabilities: [
    {
      code: "CAP-CLASSIFY",
      name: "Classify",
      blurb:
        "Every inbound is tagged — pricing, plan-fit, capability, security, trial-to-paid — before a rep opens the thread. Your pipeline sorts itself before the AE's first coffee.",
    },
    {
      code: "CAP-RETRIEVE",
      name: "Retrieve",
      blurb:
        "The pricing tier, the product capability, the FAQ line — retrieved beside the thread with citations the rep can verify in a click. The AE answers the same way the founder would.",
    },
    {
      code: "CAP-SCORE",
      name: "Score",
      blurb:
        "Every drafted reply is rated for source grounding, tone fit, and thread risk before it reaches send. Weak drafts route to a senior rep; strong ones ship in one click.",
    },
  ],
  vignetteIntro: "A pricing-boundary thread, observed in fieldwork.",
  sourceDocs: [
    { filename: "pricing.md", hint: "PLAN TIERS · LIMITS · ADD-ONS" },
    { filename: "product_guide.md", hint: "FEATURES · FLOWS · LIMITS" },
    { filename: "faq.md", hint: "TOP-OF-FUNNEL COMMON ASKS" },
  ],
};
