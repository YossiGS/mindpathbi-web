"use client";

import { Player } from "@remotion/player";
import { ProductShowcase } from "./remotion/product-showcase";
import { DashboardShowcase } from "./remotion/dashboard-showcase";
import { DealsShowcase } from "./remotion/deals-showcase";

const compositions = {
  inbox: ProductShowcase,
  dashboard: DashboardShowcase,
  deals: DealsShowcase,
} as const;

export default function RemotionPlayerWrapper({ scene = "inbox" }: { scene?: keyof typeof compositions }) {
  return (
    <Player
      component={compositions[scene]}
      durationInFrames={210}
      compositionWidth={1280}
      compositionHeight={720}
      fps={30}
      style={{ width: "100%", height: "100%" }}
      loop
      autoPlay
      controls={false}
      acknowledgeRemotionLicense
    />
  );
}
