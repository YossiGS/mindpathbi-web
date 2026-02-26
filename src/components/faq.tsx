"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const questions = [
  {
    q: "What makes MindPath BI different from a traditional CRM?",
    a: "Traditional CRMs store contact records. MindPath BI connects every channel — email, WhatsApp, ERP, e-commerce — into a single timeline per customer. Add an AI Copilot that surfaces answers from your knowledge base in real time, health scores that flag churn before it happens, and a deal pipeline built on actual communication data — not manual data entry.",
  },
  {
    q: "How does the AI Copilot work?",
    a: "When a message comes in, the Copilot reads the conversation in real time and checks it against your uploaded knowledge base — product specs, pricing rules, installation guides, anything you've added. If it detects a technical or product question, it pulls the right answer and presents it to your rep instantly. No searching, no asking a colleague, no delays.",
  },
  {
    q: "Do my contacts know I'm using MindPath BI?",
    a: "No. Messages sent through MindPath BI arrive natively on whatever platform your contact uses — Gmail, Outlook, WhatsApp, or any connected channel. To them it looks and feels exactly like a normal message. Your communication stays seamless and personal.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams connect their first channel in under five minutes. The onboarding wizard walks you through linking email accounts, WhatsApp, and your ERP. Once connected, historical conversations sync automatically so you start with full context — not an empty screen.",
  },
  {
    q: "Is my company's data secure?",
    a: "Yes. All data is encrypted in transit and at rest using enterprise-grade protocols. MindPath BI does not sell or share your information. AI models process context only to serve your team's messages — never to train external systems.",
  },
  {
    q: "Can I try MindPath BI before committing?",
    a: "We're onboarding teams in stages to ensure quality and dedicated support. Reach out to us and we'll set up a walkthrough tailored to your business. No generic demo — we show you your actual use case with your channels and workflows.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-5 shrink-0">
      <span className="absolute inset-0 m-auto block h-[1.5px] w-4 rounded-full bg-muted transition-colors group-hover:bg-foreground" />
      <span
        className="absolute inset-0 m-auto block h-[1.5px] w-4 rounded-full bg-muted transition-all duration-200 group-hover:bg-foreground"
        style={{ transform: `rotate(${open ? "0deg" : "90deg"})` }}
      />
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="mx-auto max-w-[720px]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-muted">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-[48px] lg:leading-[1.08]">
            Common questions.
            <br />
            <span className="text-muted">Straight answers.</span>
          </h2>
        </motion.div>

        <div className="mt-14 flex flex-col gap-3">
          {questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className="group rounded-2xl border border-border transition-colors hover:border-border-light"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] font-medium leading-snug">
                    {item.q}
                  </span>
                  <PlusIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14px] leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
