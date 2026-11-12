"use client";

import { motion } from "motion/react";

const events = [
  { time: "14:25", text: "Project starts; a sealed session builds a hidden universe.", blocked: false },
  { time: "15:44–15:59", text: "Universe built, then stuck at a ‘Trust this folder?’ prompt no agent may answer.", blocked: true },
  { time: "15:59", text: "Agent lab starts with only data, detector and event budget.", blocked: false },
  { time: "16:44–17:03", text: "As the course ends, the lab stops to wait for a human. Nudged, it runs on.", blocked: true },
  { time: "19:24", text: "Judge: five of six targets met, decays partial.", blocked: false },
];
const rungs = ["particles and masses", "conservation laws", "decays", "spins and charges", "interactions", "a Lagrangian"];

export function BasicModelResult({ step }: { step: number }) {
  const beat = Math.max(0, Math.min(1, step));
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>Project 4 stalled as the course ended; resumed, it met five of six targets by 19:24</h1>
      <motion.div key={beat} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-0 flex-1 flex-col justify-center">
        {beat === 0 && <div>
          <ol className="grid grid-cols-5 gap-[1.2vw]">
            {events.map(event => <li key={event.time} className={`border-t-4 px-[1vw] py-[2vh] ${event.blocked ? "border-[#bd4940] bg-[#bd494014] text-[#9d3029]" : "border-[#14141430]"}`}>
              <p className="mb-[3vh] whitespace-nowrap text-[clamp(14px,1.4vw,22px)]" style={{ fontFamily: "var(--font-geist-mono)" }}>{event.time}</p>
              <p className="text-[clamp(18px,1.7vw,27px)] leading-snug" style={{ fontFamily: "var(--font-serif)" }}>{event.text}</p>
            </li>)}
          </ol>
          <div className="mt-[5vh] flex justify-between border-t border-[#14141430] pt-3 text-[clamp(12px,1vw,16px)] text-[#14141499]" style={{ fontFamily: "var(--font-geist-mono)" }}><span>14:25</span><span>19:30</span></div>
        </div>}
        {beat === 1 && <ol className="mx-auto flex w-[85%] flex-col-reverse gap-[1.2vh] border-l-4 border-[#14141420] pl-[2vw]">
          {rungs.map((name, index) => <li key={name} className="flex items-center gap-[2vw] rounded-lg border border-[#14141420] bg-[#fbf8f1] px-[2vw] py-[1.4vh]">
            <span className="text-[clamp(16px,1.5vw,24px)] text-[#14141499]" style={{ fontFamily: "var(--font-geist-mono)" }}>M{index + 1}</span>
            <span className="text-[clamp(22px,2.1vw,34px)]" style={{ fontFamily: "var(--font-serif)" }}>{name}</span>
            <span className={`ml-auto text-[clamp(15px,1.3vw,21px)] ${index === 2 ? "text-[#995c0b]" : "text-[#136c34]"}`} style={{ fontFamily: "var(--font-geist-mono)" }}>{index === 2 ? "◐ partial" : "✓ met"}</span>
          </li>)}
        </ol>}
      </motion.div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#14141499]" style={{ fontFamily: "var(--font-geist-mono)" }}>KIT course, 22 Oct 2026; judge&apos;s score at 19:24; course post-mortem</p>
    </section>
  );
}
