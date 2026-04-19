/**
 * Four archetype vignettes backing <TechnicalSellingMock />.
 *
 * Each vignette represents a real customer archetype seeded in
 * `backend/src/seed/data/`. Every [SOURCE: filename] chip MUST map to a
 * file that actually exists in that folder — if you change a chip,
 * re-verify in backend/src/seed/data/.
 *
 * The narrative anchor (plan §Positioning): every rep answers like a
 * technical seller because the AI pulls from the company's own
 * catalog / contracts / guides.
 */

export type SourceChip = {
  /** Filename shown in the `[SOURCE: …]` chip. */
  filename: string;
  /** Short human label under the chip (optional). */
  hint?: string;
};

export type TechnicalSellingVignette = {
  id: string;
  /** Industry slug — matches /industries/<slug>. */
  industry:
    | "ecommerce"
    | "interior-design"
    | "travel-advisory"
    | "professional-services"
    | "industrial-distribution"
    | "building-supply"
    | "saas";
  /** Short archetype label surfaced in the vignette chip. */
  archetype: string;
  /** Inbound customer message (raw voice-of-customer). */
  inbound: {
    channel: string;
    customer: string;
    body: string;
  };
  /** Model-drafted, knowledge-grounded reply. Rendered as one paragraph per entry. */
  outbound: {
    preamble: string;
    body: string[];
    sources: SourceChip[];
  };
  /** Three "technical" moves the AI makes (surface as pill chips). */
  moves: string[];
};

export const VIGNETTES: TechnicalSellingVignette[] = [
  {
    id: "intlabs",
    industry: "ecommerce",
    archetype: "IntLabs — specialty e-commerce",
    inbound: {
      channel: "Instagram DM",
      customer: "Maya R.",
      body:
        "Hey! I want to order the 3-pack bowl set in walnut. Can you ship to Haifa and is the oil food-safe? Also do you take returns if I don't love the grain?",
    },
    outbound: {
      preamble: "Draft ready — grounded in 3 docs",
      body: [
        "Hey Maya, all good on those three.",
        "The walnut 3-pack ships from our Tel Aviv workshop to Haifa in 2–4 business days.",
        "Finish is food-safe: mineral oil + beeswax, no chemical sealant.",
        "Returns are on us for 30 days if the grain isn't a match. No two bowls come out alike, so we plan for that.",
        "Want me to queue the order, or send you a short grain-variation video first?",
      ],
      sources: [
        { filename: "intlabs_wood_catalog.md", hint: "walnut finish spec" },
        { filename: "intlabs_shipping_returns.md", hint: "Haifa zone · 30-day policy" },
        { filename: "intlabs_faq.md", hint: "grain variation FAQ" },
      ],
    },
    moves: ["Classify: order intent", "Retrieve: catalog + policy", "Suggest: video upsell"],
  },
  {
    id: "northline",
    industry: "interior-design",
    archetype: "Northline Studio — boutique interior design",
    inbound: {
      channel: "Email",
      customer: "Sarah M., Pacific Heights remodel",
      body:
        "Hi — question on the Kravet boucle for the living room sofa. Two dogs and a toddler, is the Martindale rating enough? Can it ship to SF in time for the April 18 install? And you mentioned we could save with a trade swap — pull something in the same warm-ivory?",
    },
    outbound: {
      preamble: "Draft ready — grounded in 3 docs",
      body: [
        "Sarah, good questions — all three answerable.",
        "Kravet 12345: Martindale is 40K, above the 30K residential heavy-use threshold. Holds up to dogs + toddler per the durability guide.",
        "Lead time confirmed at 8 weeks from order (Kravet rep, 3/2), so place by March 24 for the April 18 install. Doable if we finalize color by Friday.",
        "Trade swap: Romo 'Linara' in Chalk hits the same warm-ivory, similar hand, 22% under Kravet at our trade tier. 52K Martindale, same delivery window.",
        "Want me to queue both as memo samples so you can eye them in natural light?",
      ],
      sources: [
        { filename: "studio_fabric_durability.md", hint: "Martindale · use cases" },
        { filename: "studio_vendor_leadtimes.md", hint: "Kravet rep · 3/2 call" },
        { filename: "studio_trade_swaps.md", hint: "same-hand · trade tier" },
      ],
    },
    moves: ["Retrieve: fabric rating", "Check: lead-time window", "Suggest: trade swap"],
  },
  {
    id: "currents",
    industry: "travel-advisory",
    archetype: "Currents — bespoke travel advisory",
    inbound: {
      channel: "Email",
      customer: "Lena V., returning client",
      body:
        "Planning 10 days in Japan for cherry blossom season next year — two teenagers, mid-luxury budget, must include Kyoto. Tokyo and maybe one ryokan in Hakone. Can you draft and check flight routing? Our girls can't do 14-hour direct.",
    },
    outbound: {
      preamble: "Draft ready — grounded in 3 docs",
      body: [
        "Lena, love this one — first pass below.",
        "Blossom timing: Kyoto peaks around March 28–April 3; I've pinned 5 nights there to straddle the window. Tokyo 3 nights up front, Hakone ryokan 2 nights at the end to decompress.",
        "Flight routing: United 2-stop via Houston–Narita, 11h on the longest leg — under the 14-hour ceiling. Premium economy held for four at the current fare, 72-hour float.",
        "Hotels: The Thousand Kyoto (walkable to Nishiki, good teen-sized rooms), Aman Tokyo, Gora Kadan in Hakone. Gora Kadan books out early for blossom season — I'd lock this week.",
        "One edit from last trip's notes: your girls preferred the quieter ryokan to the formal one, so Gora Kadan over Tawaraya. Send the full itinerary + hold requests to all three?",
      ],
      sources: [
        { filename: "currents_destination_notes.md", hint: "Kyoto · blossom window" },
        { filename: "currents_flight_routing.md", hint: "partner fares · holds" },
        { filename: "currents_client_files.md", hint: "Lena V · past trips" },
      ],
    },
    moves: ["Remember: last trip", "Retrieve: blossom window", "Suggest: ryokan substitution"],
  },
  {
    id: "legalflex",
    industry: "professional-services",
    archetype: "LegalFlex — boutique legal practice",
    inbound: {
      channel: "Email",
      customer: "Daniel K., COO at a Series B",
      body:
        "Following up on our scoping call — can you send the MSA draft for the design-partner engagement, and clarify how your fee structure handles the quarterly scope review?",
    },
    outbound: {
      preamble: "Draft ready — grounded in 3 docs",
      body: [
        "Daniel, good follow-up.",
        "Attached is the MSA draft pre-filled for a design-partner engagement. Flat quarterly fee, not hourly, with a scope true-up at each QBR.",
        "Here's how the review works in practice: we log delta-hours weekly, your team signs off at the end of the quarter, and any overage converts to a fixed uplift. No surprise invoices.",
        "The current rate card is included as an exhibit.",
        "Want to jump on 15 minutes Thursday to walk through the true-up clause?",
      ],
      sources: [
        { filename: "legalflex_engagement_billing.md", hint: "quarterly true-up clause" },
        { filename: "legalflex_services.md", hint: "design-partner scope" },
        { filename: "legalflex_faq.md", hint: "rate card exhibit" },
      ],
    },
    moves: ["Retrieve: engagement terms", "Suggest: QBR walkthrough", "Remember: prior scoping call"],
  },
  {
    id: "ironforge",
    industry: "industrial-distribution",
    archetype: "IronForge — industrial distribution",
    inbound: {
      channel: "WhatsApp",
      customer: "Procurement @ regional fabricator",
      body:
        "Need 40× SKU IF-2214 hex bolts, grade 8, 3/8\"-16 × 1-1/2\". Urgent — rig down. What's your stock and quote for pickup today?",
    },
    outbound: {
      preamble: "Draft ready — grounded in 3 docs",
      body: [
        "Got it, confirming IF-2214. Grade 8 hex, 3/8\"-16 × 1-1/2\", zinc-plated.",
        "62 in stock at the east-yard counter. At 40 units you clear volume-2: $142.80 + tax.",
        "Pickup-ready in 20 min. Net-30 on your account, PO #IF-RF-0291.",
        "Lock the reservation and notify the yard?",
      ],
      sources: [
        { filename: "ironforge_parts_catalog.md", hint: "IF-2214 spec" },
        { filename: "ironforge_quoting_terms.md", hint: "volume break 2" },
        { filename: "ironforge_faq.md", hint: "pickup SLA" },
      ],
    },
    moves: ["Classify: urgent order", "Retrieve: part + pricing", "Act: reserve stock"],
  },
  {
    id: "woodlab",
    industry: "building-supply",
    archetype: "Woodlab — building supply + lumber yard",
    inbound: {
      channel: "WhatsApp",
      customer: "Amit R., DIY homeowner",
      body:
        "Shalom — planning a 4×3m pergola attached to my stone wall, south side. What beams / spacing do I need, what goes between the wood and the stone so water doesn't get in, and can you match a finish to my existing thermo-ash deck? Picking up Saturday if possible.",
    },
    outbound: {
      preamble: "Draft ready — grounded in 3 docs",
      body: [
        "Hey Amit, happy to plan that out.",
        "Spans: 6×16cm primary beams + 5×10cm rafters at 50cm centers. Clears the 3m span with margin for the south-coast wind load.",
        "Wall interface: LG-200 galvanized ledger brackets every 80cm, bedded to the stone with Sikaflex-11FC. Keeps water out and lets the joint move a little without cracking the sealant.",
        "Finish match: thermo-ash reads warm brown, low sheen. Closest in our pine pergola stock is Rubio Monocoat 'Pure' on thermowood pine — I'll pull a chip next to a piece of thermo-ash so you can eye it on Saturday.",
        "Want me to send the cut list + LG-200 count + Sika tube total so it's picked and waiting at the counter?",
      ],
      sources: [
        { filename: "woodlab_span_tables.md", hint: "beam + rafter · wind load" },
        { filename: "woodlab_wall_connectors.md", hint: "LG-200 ledger · Sika-11FC" },
        { filename: "woodlab_finish_matching.md", hint: "thermowood pine · thermo-ash" },
      ],
    },
    moves: ["Retrieve: span + load", "Retrieve: connector + sealant", "Match: finish to existing"],
  },
  {
    id: "acme",
    industry: "saas",
    archetype: "Acme — mid-market SaaS",
    inbound: {
      channel: "Live chat",
      customer: "Priya S., Head of CX at a 200-seat prospect",
      body:
        "We're comparing your Growth plan against two others. Does it include SSO + API quotas we can actually grow into? And do you meter by seat or by workspace?",
    },
    outbound: {
      preamble: "Draft ready — grounded in 3 docs",
      body: [
        "Priya, good news on both.",
        "Growth includes SAML SSO + SCIM at no add-on. API quotas start at 100k/day and auto-raise on usage, not on contract.",
        "Metering is per active workspace member, so inactive seats don't count. Most teams your size land 15–20% under their seat estimate.",
        "Want me to send a short plan-fit note with your actual traffic shape plugged in?",
      ],
      sources: [
        { filename: "pricing.md", hint: "Growth plan details" },
        { filename: "product_guide.md", hint: "SSO + API quota specifics" },
        { filename: "faq.md", hint: "metering model" },
      ],
    },
    moves: ["Classify: buying question", "Retrieve: plan + product guide", "Score: fit signal"],
  },
];

export type IndustrySlug = TechnicalSellingVignette["industry"];

export function getVignetteByIndustry(slug: IndustrySlug) {
  return VIGNETTES.find((v) => v.industry === slug) ?? VIGNETTES[0];
}
