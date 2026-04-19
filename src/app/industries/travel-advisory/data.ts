import type { IndustryPageData } from "@/components/industries/industry-page";

export const travelAdvisoryData: IndustryPageData = {
  slug: "travel-advisory",
  industryName: "Travel advisory",
  archetypeCode: "ARCH-06 · ADVISORY-DESK",
  headline: {
    lead: "A blossom window, a flight routing, a hotel hold.",
    muted: "Every advisor drafts like the senior, in the client's voice.",
  },
  subhead:
    "The senior advisor carries it in her head — which ryokan books out six months ahead, which Tokyo neighborhood suits teenagers, which partner airline routing dodges the 14-hour flight your client won't fly. This system captures that head once, and drafts every client email from it. Your newer advisor answers like the person who's sent a thousand clients to Japan — cited to a destination note, a vendor log, or the client's own past trip.",
  fieldReportCode: "FIELD REPORT · 016",
  fieldReportLines: [
    {
      thread: "Japan in blossom season — two weeks, teens in tow?",
      resolution: "Destination_notes.md pulled. Kyoto + Tokyo split drafted.",
    },
    {
      thread: "Flight under 11 hours, business class availability?",
      resolution: "Flight_routing.md cited. Partner fare + hold attached.",
    },
    {
      thread: "That ryokan from the Kyoto trip — still available?",
      resolution: "Client_files.md checked. Alternate ryokan pre-held.",
    },
    {
      thread: "Monsoon risk for a Bali shoot in late September?",
      resolution: "Season note cited. Drier window + dates proposed.",
    },
    {
      thread: "Can we replicate last year's safari itinerary?",
      resolution: "Client_files.md pulled. Two same-tier swaps offered.",
    },
    {
      thread: "Fare-float warning on the Tokyo partner routing?",
      resolution: "Routing log cited. Hold deadline flagged in-thread.",
    },
  ],
  scenarios: [
    {
      code: "SC-01",
      title: "A returning client asks for Japan in blossom season",
      before:
        "The junior advisor rebuilds the itinerary from a template and misses the two preferences the client noted on last trip's debrief.",
      after:
        "The draft opens with a nod to last trip's notes and swaps the formal ryokan for the quieter one — cited to the client file.",
    },
    {
      code: "SC-02",
      title: "A routing check against a stated flying-time ceiling",
      before:
        "The advisor pitches a one-stop routing that nudges over the ceiling; the client pushes back and the conversation resets.",
      after:
        "The reply routes under the ceiling with a current partner fare and a fare-float warning — cited to the routing log.",
    },
    {
      code: "SC-03",
      title: "A ryokan that books out six months ahead",
      before:
        "The advisor checks availability, finds nothing, and has to redraft the whole itinerary.",
      after:
        "The destination note flags the early-booking pattern up front, so the hold goes in with the first reply.",
    },
  ],
  capabilities: [
    {
      code: "CAP-REMEMBER",
      name: "Remember",
      blurb:
        "Past trips, stated preferences, quiet dislikes — carried forward so every follow-up with the same client opens from what you already know about them.",
    },
    {
      code: "CAP-RETRIEVE",
      name: "Retrieve",
      blurb:
        "Blossom windows, monsoon seasons, partner-fare logs, ryokan availability patterns — pulled into the draft with the destination note or log entry cited inline.",
    },
    {
      code: "CAP-SUGGEST",
      name: "Suggest",
      blurb:
        "A substitution the client didn't ask for but will prefer — drafted alongside the answer, cited to last trip's debrief or the neighborhood note.",
    },
  ],
  vignetteIntro: "A Japan-in-blossom-season thread, observed in fieldwork.",
  sourceDocs: [
    { filename: "currents_destination_notes.md", hint: "KYOTO · BLOSSOM · RYOKAN" },
    { filename: "currents_flight_routing.md", hint: "PARTNER FARES · HOLDS · LOGS" },
    { filename: "currents_client_files.md", hint: "CLIENT FILE · PAST TRIPS · PREFS" },
  ],
};
