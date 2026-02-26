"use client";

import { lazy, Suspense } from "react";
import { motion } from "motion/react";

const RemotionPlayer = lazy(() => import("./remotion-player-wrapper"));

const demos = [
  {
    scene: "inbox" as const,
    label: "Unified Inbox",
    title: "Every conversation.",
    subtitle: "One timeline.",
    description: "Gmail, Outlook, WhatsApp, Slack — all in one place. AI suggests replies, classifies messages, and surfaces the context you need.",
    route: "inbox",
  },
  {
    scene: "client360" as const,
    label: "Client 360",
    title: "The full picture.",
    subtitle: "Every touchpoint.",
    description: "Activity timeline, relationship graph, files, deals, health scores — everything about a contact on one screen. See how every communication, document, and interaction connects.",
    route: "contacts/sarah-johnson",
  },
  {
    scene: "dashboard" as const,
    label: "Dashboard",
    title: "Your pulse.",
    subtitle: "At a glance.",
    description: "Real-time stats, AI insights, activity feed, and health scores. Know exactly what needs your attention the moment you open the app.",
    route: "",
  },
  {
    scene: "deals" as const,
    label: "Deal Pipeline",
    title: "Every deal.",
    subtitle: "Every stage.",
    description: "Visual Kanban pipeline with probability tracking, contact links, and automated stage transitions. Never lose track of revenue.",
    route: "deals",
  },
];

function Loader() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-border border-t-foreground" />
    </div>
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="ml-3 flex-1 rounded-md bg-surface px-3 py-1 text-center text-[11px] text-muted">
        {url}
      </div>
    </div>
  );
}

export function ProductDemo() {
  return (
    <section id="preview" className="relative py-28 px-6">
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-muted">Product preview</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-[48px] lg:leading-[1.08]">
            Four screens. <span className="text-muted">One platform.</span>
          </h2>
        </motion.div>

        <div className="mt-16 space-y-24">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.scene}
              className={`flex flex-col items-center gap-10 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full shrink-0 lg:w-[38%]">
                <span className="text-xs font-medium tracking-wider text-accent uppercase">{demo.label}</span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight lg:text-3xl">
                  {demo.title}
                  <br />
                  <span className="text-muted">{demo.subtitle}</span>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {demo.description}
                </p>
              </div>

              <div className="w-full overflow-hidden rounded-2xl bg-surface lg:w-[62%]">
                <BrowserChrome url={`app.mindpathbi.com/${demo.route}`} />
                <div className="aspect-video w-full">
                  <Suspense fallback={<Loader />}>
                    <RemotionPlayer scene={demo.scene} />
                  </Suspense>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-[11px] text-muted/50">
          * Animations are conceptual illustrations of the platform. Actual product interface may differ.
        </p>
      </div>
    </section>
  );
}
