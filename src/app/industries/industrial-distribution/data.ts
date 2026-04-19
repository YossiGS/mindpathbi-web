import type { IndustryPageData } from "@/components/industries/industry-page";

export const industrialDistributionData: IndustryPageData = {
  slug: "industrial-distribution",
  industryName: "Industrial distribution",
  archetypeCode: "ARCH-03 · QUOTING-DESK",
  headline: {
    lead: "A part number, a torque spec, a quote by close of day.",
    muted: "Your inside-sales desk ships all three, cited, by eleven.",
  },
  subhead:
    "Every inbound lands next to the catalog line, the clause in the quoting terms, or the answer in the FAQ that settles it. The desk rep answers like the senior applications engineer — because the docs are already open.",
  fieldReportCode: "FIELD REPORT · 013",
  fieldReportLines: [
    {
      thread: "Cross-ref for McMaster 94415A255, grade 8?",
      resolution: "Pulled parts_catalog.md. Family + MOQ + COO in-thread.",
    },
    {
      thread: "Rush lead-time on 400 units by Thursday?",
      resolution: "Cited quoting_terms.md. Surcharge + freight class.",
    },
    {
      thread: "Substitution for the discontinued 3/8-16 hex?",
      resolution: "Spec-matched from catalog. Sub memo drafted.",
    },
    {
      thread: "Can you hold 62 units until Saturday?",
      resolution: "Stock rule pulled. Hold notice ready to send.",
    },
    {
      thread: "Net-30 eligibility for a new buyer?",
      resolution: "Quoted quoting_terms.md. Net-30 confirmed in-thread.",
    },
    {
      thread: "Minimum order on IF-2214 zinc-plated?",
      resolution: "Quoted faq.md. Same number, every desk.",
    },
  ],
  scenarios: [
    {
      code: "SC-01",
      title: "A cross-reference on a grade-8 fastener",
      before:
        "The desk rep pings the applications engineer; the thread sits until someone is back at a bench.",
      after:
        "A cited reply lands in-thread — family, MOQ, country-of-origin, compliance doc — pulled from the parts catalog.",
    },
    {
      code: "SC-02",
      title: "A rush RFQ with a Net-30 ask",
      before:
        "The rep promises a lead time they cannot confirm and walks it back on the next call.",
      after:
        "The draft pairs the rush surcharge, the freight class, and the Net-30 eligibility in one reply, cited to the quoting terms.",
    },
    {
      code: "SC-03",
      title: "A new buyer asks about minimums",
      before:
        "The rep paraphrases the minimum from memory; the next rep on the desk says something slightly different.",
      after:
        "The desk answers once, cited to the FAQ — and every rep after that says the same thing.",
    },
  ],
  capabilities: [
    {
      code: "CAP-CLASSIFY",
      name: "Classify",
      blurb:
        "Every inbound is tagged the moment it arrives — RFQ, cross-reference, lead-time exception, status chase, substitution ask. The desk sees what it is before it sees who it is for.",
    },
    {
      code: "CAP-RETRIEVE",
      name: "Retrieve",
      blurb:
        "The SKU line, the freight class, the restocking clause — the exact page from your own docs is opened in-thread, with the citation attached to every claim.",
    },
    {
      code: "CAP-ACT",
      name: "Act",
      blurb:
        "The next obvious step is drafted without being asked — the quote reply, the substitution memo, the hold-the-stock note — ready for the rep to read, sign off, and send.",
    },
  ],
  vignetteIntro:
    "A torque-spec thread, observed in fieldwork.",
  sourceDocs: [
    { filename: "ironforge_parts_catalog.md", hint: "SKUS · SPECS · TOLERANCES" },
    { filename: "ironforge_quoting_terms.md", hint: "LEAD TIMES · TERMS · SLAS" },
    { filename: "ironforge_faq.md", hint: "DESK-LEVEL COMMON ASKS" },
  ],
};
