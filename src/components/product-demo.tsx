"use client";

import { lazy, Suspense } from "react";
import { motion } from "motion/react";

const RemotionPlayer = lazy(() => import("./remotion-player-wrapper"));

export function ProductDemo() {
  return (
    <section id="demo" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest text-accent uppercase">
            See it in action
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Your entire operation.{" "}
            <span className="text-muted">One screen.</span>
          </h2>
        </motion.div>

        <motion.div
          className="glow-strong mt-12 overflow-hidden rounded-2xl border border-white/10 bg-surface"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
            </div>
            <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-center text-xs text-muted/60">
              app.mindpathbi.com
            </div>
          </div>

          <div className="aspect-video w-full">
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
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
