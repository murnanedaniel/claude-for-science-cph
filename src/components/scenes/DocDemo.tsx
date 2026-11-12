"use client";

import { motion } from "motion/react";

const mono = { fontFamily: "var(--font-geist-mono)" } as const;
const serif = { fontFamily: "var(--font-serif)" } as const;

const comments: [string, string][] = [
  ["Is this still totally up to date with the slide and this plot?", "It wasn't. One curve had stopped early. Claude regenerated the plot from the live logs and corrected the table."],
  ["Can we caveat this with high PT performance?", "Claude added the caveat, an efficiency-against-pT plot and a new table column."],
  ["I think saying \"this is the right direction\" is too strong. We don't have the results fully firmed up yet.", "Claude retitled the slide and rewrote its lead sentence."],
];

/** Two steps: the doc Claude wrote for me to comment on, then one morning's round trip. */
export function DocDemo({ step }: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(26px,3vw,50px)] leading-tight" style={serif}>
        I review Claude's drafts by commenting on them in a doc
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
          {step >= 1 ? <>
            <p className="text-[clamp(11px,0.95vw,15px)] text-[#625d54]" style={mono}>3 Nov, a results deck: six comments from me in 19 minutes. Three of them:</p>
            {comments.map(([c, r], i) => (
            <motion.div key={c} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.25 }} className="rounded-lg border-l-4 border-[#0b6aa2] bg-[#fbf8f1] px-[1.2vw] py-[1.2vh]">
              <p className="text-[clamp(14px,1.3vw,21px)] leading-snug">&ldquo;{c}&rdquo;</p>
              <p className="mt-[0.6vh] text-[clamp(12px,1.1vw,18px)] leading-snug text-[#625d54]">{r}</p>
            </motion.div>
            ))}</> : (
            <p className="text-[clamp(18px,1.7vw,28px)] leading-snug">
              I ask for the plan or the draft as a doc. Then I comment on it line by line, the way I would on a student&apos;s draft.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
