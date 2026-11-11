"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";

export function GalacticPaper({ step }: { step: number }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)]" style={{ fontFamily: "var(--font-serif)" }}>How close is the halo finder to a paper?</h1>
      {step < 2 ? (
        <div className="relative my-[2%] min-h-0 flex-1">
          <motion.figure className="absolute inset-y-0 left-0 flex flex-col" initial={false} animate={{ width: step === 0 ? "100%" : "49%" }} transition={{ duration: 0.65 }}>
            <img src={asset("/galactic/fig1_scaling_clustered.png")} alt="Run time against particle count for four halo finders" className="min-h-0 w-full flex-1 object-contain" />
            <figcaption className="mx-auto mt-3 max-w-[1000px] text-center text-[clamp(15px,1.45vw,24px)] leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
              {step === 0 ? "Five hours from a paper I wanted to read: level with the best GPU code at 16.8 million particles" : "Level with the best code, not ahead"}
            </figcaption>
          </motion.figure>
          {step === 1 && <motion.figure className="absolute inset-y-0 right-0 flex w-[49%] flex-col" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={asset("/galactic/fig3_memory.png")} alt="GPU memory use compared with JZ-Tree" className="min-h-0 w-full flex-1 object-contain" />
            <figcaption className="mt-3 text-center text-[clamp(15px,1.45vw,24px)] leading-snug" style={{ fontFamily: "var(--font-serif)" }}>Still uses about 20x the GPU memory of JZ-Tree</figcaption>
          </motion.figure>}
        </div>
      ) : (
        <motion.div className="my-auto self-center rounded-xl border border-[#14141422] bg-[#fbf8f1] p-[4%]" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          <ul className="space-y-[2vh] text-[clamp(18px,2vw,32px)]" style={{ fontFamily: "var(--font-serif)" }}>
            <li>✓ Exact on every input</li>
            <li>✓ Found two bugs in the rival code</li>
            <li>○ Real simulation data never downloaded (needed a human login)</li>
            <li>→ Next: a sparse grid and fair tuning of both rivals</li>
          </ul>
        </motion.div>
      )}
      <p className="text-[clamp(10px,0.85vw,14px)] opacity-60" style={{ fontFamily: "var(--font-geist-mono)" }}>Benchmarks on one A100, Perlmutter, Oct 2026; audit 11 Nov 2026</p>
    </div>
  );
}
