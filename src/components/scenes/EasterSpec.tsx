"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";

const mono = { fontFamily: "var(--font-geist-mono)" };
const serif = { fontFamily: "var(--font-serif)" };

export function EasterSpec({ step }: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)] leading-tight" style={serif}>I started the Easter study by writing down the question, before any code</h1>
      <div className="flex min-h-0 flex-1 items-center justify-center py-[2vh]">
        {step <= 0 ? <motion.div key="message" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-[1000px] rounded-[2rem] border border-[#14141422] bg-[#fbf8f1] p-[3%] shadow-sm">
          <p className="mb-[2vh] text-[clamp(12px,1vw,17px)] text-[#625d54]" style={mono}>2 Apr 2026, 20:38</p>
          <p className="rounded-2xl rounded-tr-sm bg-[#e9e3d6] p-[3%] text-[clamp(18px,1.65vw,28px)] leading-relaxed">We are going to do quite a long and complicated study. This will be on real perlmutter systems, so don&apos;t go wasting GPU hours unless you&apos;re sure it&apos;s correct. Here&apos;s the project:</p>
          <div className="mt-[2vh] rounded-xl border border-[#14141422] bg-[#fffdf8] p-[3%] text-[clamp(14px,1.25vw,21px)] leading-relaxed" style={mono}>
            <p># ColliderML Beam Spot Study — Project Specification</p>
            <p className="mt-[1.5vh]">## Background &amp; Motivation</p>
            <p className="mt-[1.5vh]">The ColliderML dataset simulates ttbar events with a beam spot centered at (0,0,0) with a finite Gaussian smearing (~12.5 μm transverse).</p>
            <p className="mt-[1vh] text-[2em] text-[#14141440]" aria-label="Document continues">…</p>
          </div>
        </motion.div> : <motion.div key="result" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid w-full max-w-[1150px] grid-cols-[1fr_auto_1fr] items-center gap-[2.5vw]">
          <div className="rounded-2xl border border-[#14141422] bg-[#fbf8f1] p-[5%]">
            <p className="mb-[1.5vh] text-[clamp(11px,1vw,16px)] uppercase tracking-wide text-[#625d54]" style={mono}>The spec asked, 2 Apr</p>
            <p className="text-[clamp(14px,1.3vw,22px)] leading-relaxed" style={mono}>&ldquo;There is a concern that ML models trained on this data may implicitly learn the beam spot position and exploit it as a pseudo-constraint&rdquo;</p>
            <p className="mt-[2.5vh] text-[clamp(15px,1.4vw,23px)] leading-snug" style={serif}>In plain words: does the network look good only because every collision comes from the same point?</p>
          </div>
          <div className="flex flex-col items-center text-[#625d54]" style={mono}>
            <span className="text-[clamp(12px,1.05vw,17px)]">2 to 7 Apr</span>
            <span className="text-[clamp(28px,3vw,50px)] leading-none">&rarr;</span>
          </div>
          <div className="flex items-center gap-[1.5vw] rounded-2xl border border-[#14141422] bg-[#fbf8f1] p-[5%]">
            <img src={asset("/img/paper/page-01.png")} alt="First page of the 16-page beam spot paper" className="h-[30vh] w-auto shrink-0 rounded-sm border border-[#14141420] shadow-sm" />
            <div>
              <p className="mb-[1.5vh] text-[clamp(11px,1vw,16px)] uppercase tracking-wide text-[#625d54]" style={mono}>What existed, 7 Apr</p>
              <p className="text-[clamp(17px,1.6vw,27px)] leading-snug" style={serif}>A 16-page paper answering it.</p>
              <p className="mt-[1.5vh] text-[clamp(13px,1.15vw,19px)] leading-snug" style={mono}>5 Apr: &ldquo;ML is only 7% better than simply predicting d0=0.&rdquo;</p>
              <p className="mt-[0.8vh] text-[clamp(12px,1vw,16px)] leading-snug text-[#625d54]">d0: how far a track passes from the beam line</p>
            </div>
          </div>
        </motion.div>}
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={mono}>Claude Code transcript export of the Easter study, 2 to 7 Apr 2026 (first 600 characters of the spec kept; paper as reported in the final message)</p>
    </section>
  );
}
