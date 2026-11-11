"use client";

import { motion } from "motion/react";

const misses = [
  { label: "never found the right page", count: 8 },
  { label: "found it, misread the tool output", count: 6 },
  { label: "never looked it up", count: 4 },
];

export function ChatlasAsk({ step }: { step: number }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)]" style={{ fontFamily: "var(--font-serif)" }}>Can it answer our colleagues&apos; questions?</h1>
      {step < 1 ? (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-auto max-w-[1100px] text-[clamp(20px,2.2vw,36px)] leading-relaxed">ATLAS has about 6,000 physicists. Questions arrive in chat, work is tracked as tickets. The first idea is always a chatbot over the documentation.</motion.p>
      ) : (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="my-auto grid grid-cols-[0.85fr_1.15fr] items-center gap-[8%] py-[4%]">
          <div>
            <div className="grid grid-cols-6 gap-[0.8vw]" role="img" aria-label="30 questions: 12 answered correctly, 18 misses">
              {Array.from({ length: 30 }, (_, index) => <div key={index} className={`aspect-square rounded-sm border-2 ${index < 12 ? "border-emerald-700 bg-emerald-700" : "border-[#14141440]"}`} />)}
            </div>
            <p className="mt-[2vh] text-[clamp(16px,1.6vw,26px)] text-emerald-800">12 answered correctly</p>
          </div>
          <div className="space-y-[3vh]">
            <p className="text-[clamp(20px,2vw,32px)]" style={{ fontFamily: "var(--font-serif)" }}>18 misses</p>
            {misses.map(({ label, count }) => (
              <div key={label}>
                <div className="mb-[0.8vh] flex justify-between gap-4 text-[clamp(14px,1.4vw,24px)]"><span>{label}</span><span className="font-mono">{count}</span></div>
                <div className="h-[1.4vh] bg-[#1414140c]"><motion.div initial={{ width: 0 }} animate={{ width: `${count / 8 * 100}%` }} transition={{ duration: 0.6 }} className="h-full bg-[#a3654b]" /></div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
      <p className="font-mono text-[clamp(10px,0.85vw,14px)] opacity-60">30 real user questions, ChATLAS chat benchmark, Nov 2026</p>
    </div>
  );
}
