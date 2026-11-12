"use client";

import { motion } from "motion/react";

const mono = { fontFamily: "var(--font-geist-mono)" } as const;
const serif = { fontFamily: "var(--font-serif)" } as const;

const steps: [string, string][] = [
  ["08:30", "Claude turns the paper section into a doc"],
  ["08:52", "I open it and leave comments in the margin"],
  ["08:53 to 08:55", "Claude reads the comments and makes three edits"],
  ["after", "Each change goes back into the LaTeX and up to Overleaf"],
];

/** Two steps: the doc Claude wrote for me to comment on, then one morning's round trip. */
export function DocDemo({ step }: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(26px,3vw,50px)] leading-tight" style={serif}>
        Yesterday I reviewed a paper section with Claude by commenting on a doc
      </h1>
      <div className="my-auto grid w-full max-w-[1300px] grid-cols-[1.25fr_1fr] items-center gap-[3vw] self-center">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-[#14141422] bg-white p-[4%] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <p className="text-[clamp(20px,2vw,34px)] leading-tight" style={serif}>ML Tracking Review: Baselines section (draft)</p>
          <p className="mt-[1vh] text-[clamp(11px,0.95vw,15px)] text-[#625d54]" style={mono}>11 Nov 2026 · Claude Doc</p>
          <p className="mt-[3vh] text-[clamp(15px,1.35vw,22px)]" style={serif}>How this doc maps to Overleaf</p>
          <p className="mt-[1.5vh] text-[clamp(14px,1.25vw,20px)] leading-snug text-[#3a3731]">
            This is the Baselines section (<span style={mono}>sections/baselines.tex</span>) of the Overleaf project, including today&apos;s unpushed local edits. Edit inline or comment here; I carry every change back into the .tex and push it to Overleaf, and pull Overleaf edits back into this doc.
          </p>
          <p className="mt-[2.5vh] text-[clamp(11px,0.95vw,15px)] text-[#625d54]" style={mono}>the first lines of the doc, as Claude wrote them</p>
        </motion.div>
        <div className="flex flex-col gap-[2.2vh]">
          {step >= 1 ? steps.map(([t, text], i) => (
            <motion.div key={t} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.25 }} className="flex gap-[1.2vw]">
              <span className="w-[8.5vw] shrink-0 pt-[0.3vh] text-[clamp(12px,1.05vw,17px)] text-[#625d54]" style={mono}>{t}</span>
              <span className="text-[clamp(17px,1.6vw,26px)] leading-snug">{text}</span>
            </motion.div>
          )) : (
            <p className="text-[clamp(18px,1.7vw,28px)] leading-snug">
              I ask for the plan or the draft as a doc. Then I comment on it line by line, the way I would on a student&apos;s draft.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
