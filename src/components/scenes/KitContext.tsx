"use client";

import { motion } from "motion/react";

const projects = ["Halo finder", "RANGE", "The Basic Model"];

export function KitContext({ step }: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(26px,2.8vw,48px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>In October I taught an 8-hour agentic science course at Karlsruhe Institute of Technology</h1>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-[4vh]">
        <p className="max-w-[1250px] text-[clamp(22px,2.3vw,38px)] leading-snug" style={{ fontFamily: "var(--font-serif)" }}>A one-day course for physics PhD students on 22 October 2026: AI agents in practice for physics research.</p>
        {step >= 1 && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-[4vh]">
          <p className="max-w-[1200px] text-[clamp(18px,1.7vw,28px)] leading-relaxed">This is the experiment I tried. Each research project got a written brief and a goal, and agents worked on them during the day while I taught.</p>
          <div style={{ fontFamily: "var(--font-geist-mono)" }}>
            <div className="mb-[2vh] flex justify-around gap-3">{projects.map(project => <span key={project} className="rounded-full border border-[#14141430] bg-[#fbf8f1] px-[1.5vw] py-[1vh] text-[clamp(12px,1.2vw,19px)]">{project}</span>)}</div>
            <div className="rounded-md bg-[#14141412] py-[1.5vh] text-center text-[clamp(16px,1.4vw,22px)]">teaching</div>
            <div className="mt-2 flex justify-between text-[clamp(12px,1.1vw,18px)] text-[#625d54]"><span>09:00</span><span>17:00</span></div>
          </div>
        </motion.div>}
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>KIT/KSETA course, 22 Oct 2026; course post-mortems (briefs and /goal per project)</p>
    </section>
  );
}
