"use client";

import { motion } from "motion/react";

const projects = ["Halo finder", "Fine-tuning", "RANGE", "The Basic Model", "Tracking"];

export function KitContext({ step }: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>What did I try at KIT in October?</h1>
      <div className="flex flex-1 flex-col justify-center gap-[4vh]">
        <p className="max-w-[1250px] text-[clamp(24px,2.5vw,40px)] leading-snug" style={{ fontFamily: "var(--font-serif)" }}>A one-day course for physics PhD students at KIT, 22 October 2026: AI agents in practice for physics research.</p>
        {step >= 1 && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-[4vh]">
          <p className="max-w-[1200px] text-[clamp(19px,1.8vw,29px)] leading-relaxed">The ambition: run five real research projects during the day, each aimed at a paper, and let agents run them while I taught. By evening, see how far each got.</p>
          <div style={{ fontFamily: "var(--font-geist-mono)" }}>
            <div className="mb-[2vh] flex justify-between gap-3">{projects.map(project => <span key={project} className="rounded-full border border-[#14141430] bg-[#fbf8f1] px-[1.5vw] py-[1vh] text-[clamp(12px,1.2vw,19px)]">{project}</span>)}</div>
            <div className="rounded-md bg-[#14141412] py-[1.5vh] text-center text-[clamp(16px,1.4vw,22px)]">teaching</div>
            <div className="mt-2 flex justify-between text-[clamp(12px,1.1vw,18px)] text-[#14141499]"><span>09:00</span><span>17:00</span></div>
          </div>
        </motion.div>}
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#14141499]" style={{ fontFamily: "var(--font-geist-mono)" }}>KIT/KSETA course, 22 Oct 2026</p>
    </section>
  );
}
