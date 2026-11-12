"use client";

import { motion } from "motion/react";

// Same wording as the six lesson cards. Copied from the `text` props in
// src/components/scenes/LessonCard.tsx (Lesson1..Lesson6); keep in sync.
const LESSONS = [
  "Write down your hypotheses and goals before you talk to Claude.",
  "Make Remote Control the centre of everything.",
  "Still put context everywhere.",
  "Have a different model family review Claude's work.",
  "In collaborations, Claude delivers real value.",
  "Talk to Claude in a doc.",
];

export function CloseSlide(_props: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[7%] py-[4%] text-[#141414]">
      <div className="my-auto">
        <h1 className="text-[clamp(32px,3.6vw,64px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>Six things I&apos;d tell you to do</h1>
        <motion.ol initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-[4vh] space-y-[1.6vh]">
          {LESSONS.map((text, i) => (
            <li key={i} className="flex items-baseline gap-[1.4vw] text-[clamp(17px,1.75vw,30px)] leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="w-[1.6em] shrink-0 text-[0.8em] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>{i + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </motion.ol>
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>http://www.danielmurnane.com/claude-for-science-cph/</p>
    </section>
  );
}
