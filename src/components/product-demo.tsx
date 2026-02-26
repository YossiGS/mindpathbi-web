"use client";

import { lazy, Suspense } from "react";
import { motion } from "motion/react";

const RemotionPlayer = lazy(() => import("./remotion-player-wrapper"));

export function ProductDemo() {
  return (
    <section id="demo" className="relative py-28 px-6">
      <div className="mx-auto max-w-[980px]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-muted">See it in action</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-[48px] lg:leading-[1.08]">
            Your entire operation. <span className="text-muted">One screen.</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 overflow-hidden rounded-2xl bg-surface"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            </div>
            <div className="ml-3 flex-1 rounded-md bg-white/[0.04] px-3 py-1 text-center text-[11px] text-muted">
              app.mindpathbi.com
            </div>
          </div>

          <div className="aspect-video w-full">
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-foreground" />
                </div>
              }
            >
              <RemotionPlayer />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
