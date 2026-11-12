"use client";

import { motion } from "motion/react";

export function EasterSpec({ step }: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)]" style={{ fontFamily: "var(--font-serif)" }}>What did I send first?</h1>
      <div className="flex min-h-0 flex-1 items-center justify-center py-[2vh]">
        {step === 0 ? <motion.div key="message" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-[1000px] rounded-[2rem] border border-[#14141422] bg-[#fbf8f1] p-[3%] shadow-sm">
          <p className="mb-[2vh] text-[clamp(12px,1vw,17px)] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>2 Apr 2026, 20:38</p>
          <p className="rounded-2xl rounded-tr-sm bg-[#e9e3d6] p-[3%] text-[clamp(18px,1.65vw,28px)] leading-relaxed">We are going to do quite a long and complicated study. This will be on real perlmutter systems, so don&apos;t go wasting GPU hours unless you&apos;re sure it&apos;s correct. Here&apos;s the project:</p>
          <div className="mt-[2vh] rounded-xl border border-[#14141422] bg-[#fffdf8] p-[3%] text-[clamp(14px,1.25vw,21px)] leading-relaxed" style={{ fontFamily: "var(--font-geist-mono)" }}>
            <p># ColliderML Beam Spot Study — Project Specification</p>
            <p className="mt-[1.5vh]">## Background &amp; Motivation</p>
            <p className="mt-[1.5vh]">The ColliderML dataset simulates ttbar events with a beam spot centered at (0,0,0) with a finite Gaussian smearing (~12.5 μm transverse).</p>
            <p className="mt-[1vh] text-[2em] text-[#14141440]" aria-label="Document continues">…</p>
          </div>
        </motion.div> : <motion.p key="annotation" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-[1000px] text-[clamp(32px,4vw,64px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>A written project spec, before any code. The agent worked from it for five days.</motion.p>}
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>Claude Code transcript export of the Easter study, 2 Apr 2026 (first 400 characters of the message kept)</p>
    </section>
  );
}
