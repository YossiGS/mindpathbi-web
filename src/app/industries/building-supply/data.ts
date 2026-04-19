import type { IndustryPageData } from "@/components/industries/industry-page";

export const buildingSupplyData: IndustryPageData = {
  slug: "building-supply",
  industryName: "Building supply",
  archetypeCode: "ARCH-04 · EXPERT-DESK",
  headline: {
    lead: "A span table, a connector callout, a Sika tube count.",
    muted: "Every rep ships all three, cited — in the senior carpenter's voice.",
  },
  subhead:
    "The knowledge is in one head — the senior carpenter who's built enough decks to know which ledger goes on stone, which Sikaflex cures around cedar, and why thermo-ash needs a different finish than pine. This system captures that head once, and drafts every pergola, deck, and fence thread from it. Your new rep answers like the person who's been on the bench for twenty years — cited, line by line.",
  fieldReportCode: "FIELD REPORT · 014",
  fieldReportLines: [
    {
      thread: "Pergola beam for a 14-foot span, cedar?",
      resolution: "Pulled span_tables.md. Beam size + ledger cited.",
    },
    {
      thread: "Ledger bracket for attaching to a stone wall?",
      resolution: "Cited wall_connectors.md. Sika tube count included.",
    },
    {
      thread: "Stain match for an existing ipe patio?",
      resolution: "Finish_matching.md pulled. In-stock tint quoted.",
    },
    {
      thread: "Cut-list for a 16×12 deck by 6am pickup?",
      resolution: "Drafted from span_tables.md. Hardware totals attached.",
    },
    {
      thread: "Sikaflex vs. polyurethane for cedar joints?",
      resolution: "Compatibility clause quoted. One reply, every counter.",
    },
    {
      thread: "Thermo-ash finish — matte or semi-gloss?",
      resolution: "Finish_matching.md cited. Sheen + tint pre-matched.",
    },
  ],
  scenarios: [
    {
      code: "SC-01",
      title: "A pergola attached to a stone wall",
      before:
        "The counter rep ropes in the senior carpenter; the customer hears \"we'll call you back\" and drifts to a competitor.",
      after:
        "The thread carries the beam size, the ledger bracket, and the Sika tube count — cited to the span table and the connector sheet, picked by Saturday morning.",
    },
    {
      code: "SC-02",
      title: "A deck stain matched to an existing patio",
      before:
        "The rep walks the aisle with the customer's phone photo; the answer changes by the day and the lighting.",
      after:
        "The finish-matching chart surfaces the nearest in-stock option alongside thermo-ash, with the tint ratio quoted and a chip pulled for the counter.",
    },
    {
      code: "SC-03",
      title: "A pro contractor prepping a 6am WhatsApp run",
      before:
        "The cut-list goes out by morning only if the veteran picked up the phone the night before — otherwise the contractor waits, or buys elsewhere.",
      after:
        "The counter ships the cut-list, the hardware totals, and the pickup time by 6:45 — cited to the product sheets every contractor already recognizes.",
    },
  ],
  capabilities: [
    {
      code: "CAP-RETRIEVE",
      name: "Retrieve",
      blurb:
        "The span table row, the connector callout, the sealant compatibility clause — pulled into the thread with the page cited, so the rep never paraphrases a spec from memory.",
    },
    {
      code: "CAP-SUGGEST",
      name: "Suggest",
      blurb:
        "A full cut list, the hardware totals, the Sika tube count — drafted alongside the answer, so the contractor walks up to a pre-picked order at the counter.",
    },
    {
      code: "CAP-REMEMBER",
      name: "Remember",
      blurb:
        "Site conditions, finish choices, which ledger went on last job — carried forward so the next thread with the same customer starts from last week's context, not from zero.",
    },
  ],
  vignetteIntro: "A pergola-on-stone-wall thread, observed in fieldwork.",
  sourceDocs: [
    { filename: "woodlab_span_tables.md", hint: "BEAMS · RAFTERS · WIND LOAD" },
    { filename: "woodlab_wall_connectors.md", hint: "LEDGERS · FLASHING · SIKA" },
    { filename: "woodlab_finish_matching.md", hint: "SPECIES · TINT · SHEEN" },
  ],
};
