import type { IndustryPageData } from "@/components/industries/industry-page";

export const data: IndustryPageData = {
  slug: "ecommerce",
  industryName: "E-commerce",
  archetypeCode: "ARCH-01 · CATALOG-OPS",
  headline: {
    lead: "Catalog questions pile up on Mondays.",
    muted: "Your team ships the right answer, with the right doc, by 10.",
  },
  subhead:
    "Every inbound — DM, chat, email, review reply — lands beside the catalog line, the finish note, the return window that actually answers it. The rep sends a specialist reply without leaving the inbox.",
  fieldReportCode: "FIELD REPORT · 011",
  fieldReportLines: [
    {
      thread: "Is the walnut oil finish still food-safe?",
      resolution: "Cited wood_catalog.md. Spec confirmed in 4 min.",
    },
    {
      thread: "Return window on an already-shipped order?",
      resolution: "Shipping_returns.md quoted. Prepaid label queued.",
    },
    {
      thread: "Will this bowl hold up outdoors in humidity?",
      resolution: "Care-and-storage note pulled from faq.md.",
    },
    {
      thread: "Grain variation on the 3-pack — is that normal?",
      resolution: "Catalog clause cited. Merchant's explainer attached.",
    },
    {
      thread: "Shipping to Alaska — is there a surcharge?",
      resolution: "Zone rule pulled. Correct rate quoted in-thread.",
    },
  ],
  scenarios: [
    {
      code: "SC-01",
      title: "A finish swap on a live SKU",
      before:
        "A senior rep digs through the PDF catalog to confirm whether the walnut oil finish is still food-safe after the latest supplier swap — the reply goes out three hours late, once they're back from lunch.",
      after:
        "The draft cites the current finish spec from the catalog doc, confirms food-safe, and offers the grain-variation video the merchant already has on file — ready for the rep to send in one click.",
    },
    {
      code: "SC-02",
      title: "A return on an already-shipped order",
      before:
        "An agent copy-pastes a generic 14-day policy, misses that the buyer's zone qualifies for prepaid returns, and the thread pings the ops lead to untangle the refund math.",
      after:
        "The draft quotes the merchant's own returns policy — correct zone, correct window, the right remedy — and offers to queue the prepaid label before the buyer asks twice.",
    },
    {
      code: "SC-03",
      title: "A top-of-inbox question, asked again",
      before:
        "\"Does this work outdoors in high humidity?\" lands for the fourth time this week, and a different rep answers it four different ways before anyone checks the FAQ.",
      after:
        "The draft pulls the exact line from the merchant's FAQ, adds the care-and-storage note, and stays in the merchant's voice — same answer, every shift, no escalation.",
    },
  ],
  capabilities: [
    {
      code: "CAP-CLASSIFY",
      name: "Classify",
      blurb:
        "Every inbound is tagged by intent, channel, and urgency before a rep opens it — pre-sale, order status, returns, reviews, partnerships. Monday backlogs sort themselves.",
    },
    {
      code: "CAP-RETRIEVE",
      name: "Retrieve",
      blurb:
        "The catalog line, the shipping zone, the return policy, the care note — retrieved and cited beside the thread, so the rep is reading the same page the specialist would have opened.",
    },
    {
      code: "CAP-SUGGEST",
      name: "Suggest",
      blurb:
        "A draft written in the merchant's voice, grounded in the merchant's docs, with citations the rep can verify in one click before sending.",
    },
  ],
  vignetteIntro: "A returns thread, observed in fieldwork.",
  sourceDocs: [
    { filename: "intlabs_wood_catalog.md", hint: "FINISH · GRAIN · CARE" },
    {
      filename: "intlabs_shipping_returns.md",
      hint: "LEAD TIMES · REMEDIES",
    },
    { filename: "intlabs_faq.md", hint: "TOP-OF-INBOX QUESTIONS" },
  ],
};
