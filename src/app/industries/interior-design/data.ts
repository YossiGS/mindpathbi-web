import type { IndustryPageData } from "@/components/industries/industry-page";

export const interiorDesignData: IndustryPageData = {
  slug: "interior-design",
  industryName: "Interior design",
  archetypeCode: "ARCH-05 · DESIGN-DESK",
  headline: {
    lead: "A Martindale rating, a lead-time window, a trade swap.",
    muted: "Every junior drafts like the principal designer, cited.",
  },
  subhead:
    "The principal designer carries it in her head — which fabrics survive dogs, which vendors ship in six weeks instead of twelve, which trade swap reads identical to the client in natural light. This system captures that head once, and drafts every client email from it. Your junior designer answers like the person who's specified three hundred projects — line by line, source on every claim.",
  fieldReportCode: "FIELD REPORT · 015",
  fieldReportLines: [
    {
      thread: "Will this boucle survive two labs and a cat?",
      resolution: "Martindale rating cited. Trade swap attached.",
    },
    {
      thread: "Lead time on the Kravet velvet, pre-April install?",
      resolution: "Vendor_leadtimes.md pulled. Latest-order date flagged.",
    },
    {
      thread: "Swap for the warm-ivory at trade price, not retail?",
      resolution: "Trade_swaps.md cited. Three same-hand options at tier.",
    },
    {
      thread: "Is this carpet too soft for a foyer install?",
      resolution: "Use-case threshold quoted. Contract-grade sub offered.",
    },
    {
      thread: "COM yardage on the Holly Hunt sectional?",
      resolution: "Spec pulled from the sample book. Yardage confirmed.",
    },
    {
      thread: "Fire-code clause for a hospitality commission?",
      resolution: "Fabric_durability.md cited. Contract-rated options listed.",
    },
  ],
  scenarios: [
    {
      code: "SC-01",
      title: "A client asks if a boucle will survive two dogs",
      before:
        "The junior asks the principal between site visits; the client waits two days and loses momentum on the install date.",
      after:
        "The draft cites the Martindale rating, the use-case threshold, and a trade-swap alternative — sent before the client's coffee has gone cold.",
    },
    {
      code: "SC-02",
      title: "A lead-time confirmation for a spring install",
      before:
        "The junior emails the vendor rep; the reply comes back when the delivery window has already shrunk by a week.",
      after:
        "Current lead time surfaces from the vendor log, with the latest order date flagged to match the install — cited to the rep call notes from last week.",
    },
    {
      code: "SC-03",
      title: "A trade swap on a warm-ivory fabric",
      before:
        "The junior pulls a swap from the last project book and misprices it at retail instead of trade.",
      after:
        "The swap shows three same-hand alternatives at the correct trade tier, with Martindale and lead-time pre-matched to the original.",
    },
  ],
  capabilities: [
    {
      code: "CAP-RETRIEVE",
      name: "Retrieve",
      blurb:
        "The Martindale rating, the fire-code clause, the confirmed lead-time window — pulled into the reply with the vendor page cited, so the junior never paraphrases a spec from a memory book.",
    },
    {
      code: "CAP-SUGGEST",
      name: "Suggest",
      blurb:
        "A same-hand trade swap, a tile alternative, a rug substitute — drafted alongside the answer, priced at the correct tier, so every email carries a B option.",
    },
    {
      code: "CAP-REMEMBER",
      name: "Remember",
      blurb:
        "Client style file, past approvals, fabric rejections — carried forward so the next email with the same client opens from their taste, not from scratch.",
    },
  ],
  vignetteIntro: "A fabric-durability thread, observed in fieldwork.",
  sourceDocs: [
    { filename: "studio_fabric_durability.md", hint: "MARTINDALE · USE CASES · CONTRACT" },
    { filename: "studio_vendor_leadtimes.md", hint: "KRAVET · ROMO · CB2 TRADE" },
    { filename: "studio_trade_swaps.md", hint: "SAME HAND · TRADE TIER · SUBS" },
  ],
};
