"use client";

import { motion } from "motion/react";

export function CloseSlide({ step }: { step: number }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[7%] py-[4%] text-[#141414]">
      <div className="my-auto">
        <h1 className="text-[clamp(40px,5.6vw,96px)] italic leading-tight" style={{ fontFamily: "var(--font-serif)" }}>From Sonnet 3.5 to now.</h1>
        {step >= 0 && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-[5%] space-y-[2vh] text-[clamp(20px,2.3vw,38px)] leading-snug">
          <p>It does far more of the work.</p>
          <p>Somebody still has to ask whether the number is real.</p>
          <p>My own data says I&apos;m asking less.</p>
        </motion.div>}
      </div>
      <p className="font-mono text-[clamp(12px,1.2vw,20px)] opacity-60">Slides: danielmurnane.com/claude-for-science-cph</p>
    </div>
  );
}
