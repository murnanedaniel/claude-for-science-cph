"use client";

import { motion } from "motion/react";

const claims = [
  { id: "A", quote: "Exact on 134 million particles.", who: "halo finder, 13:29", good: true, explanation: "Checked against a separate, slower code on every run. That check also caught one wrong halo in 73,000, and two real bugs in the rival code." },
  { id: "B", quote: "About 390 times faster than the existing GPU code.", who: "halo finder, 15:47", good: false, explanation: "The rival had been run with a setting its authors tell you to tune. Tuned, it's a tie with the best code." },
  { id: "C", quote: "The goal is met.", who: "RANGE, 16:46", good: false, explanation: "It meant: the authors' saved models give the paper's numbers. Nothing was retrained. Fourteen minutes later a plain, wider model beat both." },
];

export function ThreeClaims({ step }: { step: number }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="max-w-[1200px] text-[clamp(28px,3.2vw,54px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>Three claims from one afternoon. Which would you have believed?</h1>
      <div className="my-[3%] grid min-h-0 flex-1 grid-cols-3 gap-[2%]">
        {claims.map((claim, index) => (
          <div key={claim.id} className="rounded-xl border border-[#14141422] bg-[#fbf8f1] p-[7%]">
            <div className="flex items-center justify-between font-mono text-[clamp(14px,1.3vw,22px)] text-[#14141480]">
              <span>{claim.id}</span>
              {step >= index + 1 && <motion.span initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} aria-label={claim.good ? "Verified" : "Rejected"} className={`text-[1.6em] ${claim.good ? "text-emerald-700" : "text-red-700"}`}>{claim.good ? "✓" : "✕"}</motion.span>}
            </div>
            <blockquote className="mt-[2vh] text-[clamp(20px,2vw,34px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>&ldquo;{claim.quote}&rdquo;</blockquote>
            <p className="mt-[2vh] font-mono text-[clamp(10px,0.95vw,16px)] opacity-60">{claim.who}</p>
            {step >= index + 1 && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-[3vh] border-t border-[#14141420] pt-[2vh] text-[clamp(13px,1.25vw,20px)] leading-relaxed">{claim.explanation}</motion.p>}
          </div>
        ))}
      </div>
      {step >= 4 && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-[3%] text-[clamp(19px,2vw,32px)]" style={{ fontFamily: "var(--font-serif)" }}>Same agents, same afternoon. The first had something other than the agent to check against.</motion.p>}
      <p className="font-mono text-[clamp(10px,0.85vw,14px)] opacity-60">KIT course session logs, 22 Oct 2026</p>
    </div>
  );
}
