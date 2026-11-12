"use client";

import { motion } from "motion/react";

type StepProps = { step: number };

// Cards with a sub line have two steps; cards without one have one step.
export function LessonCard({ n, text, sub, step }: StepProps & { n: number; text: string; sub?: string }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[7%] py-[5%] text-[#141414]">
      <div className="text-[clamp(80px,12vw,190px)] leading-none text-[#14141440]" style={{ fontFamily: "var(--font-geist-mono)" }}>{n}</div>
      <div className="my-auto max-w-[1250px]">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-[clamp(36px,4.4vw,72px)] leading-[1.15]" style={{ fontFamily: "var(--font-serif)" }}>{text}</motion.h1>
        {sub && <motion.p initial={false} animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 8 }} aria-hidden={step < 1} className="mt-[4vh] max-w-[1050px] text-[clamp(20px,2.1vw,34px)] leading-relaxed text-[#625d54]">{sub}</motion.p>}
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>Source: my lessons from working with Claude</p>
    </section>
  );
}

export const Lesson1 = ({ step }: StepProps) => <LessonCard n={1} text="Write down your hypotheses and goals before you talk to Claude." sub={'Even a dumb /goal, like "test my hypothesis until Gemini Carbon is satisfied", turns a two-hour attempt into a two-day one.'} step={step} />;
export const Lesson2 = ({ step }: StepProps) => <LessonCard n={2} text="Make Remote Control the centre of everything." sub="Phone, laptop, home server, HPC cluster and browser share one context. Any dashboard should sit on top of it." step={step} />;
export const Lesson3 = ({ step }: StepProps) => <LessonCard n={3} text="Still put context everywhere." sub="Rules, skills and CLAUDE.md files still prevent mistakes, even with the newest models, self-critique and orchestration." step={step} />;
export const Lesson4 = ({ step }: StepProps) => <LessonCard n={4} text="Have a different model family review Claude's work." sub="Claude reviewing Claude misses the same things. I ask Astra and Gemini Carbon." step={step} />;
export const Lesson5 = ({ step }: StepProps) => <LessonCard n={5} text="In collaborations, Claude delivers real value." step={step} />;
export const Lesson6 = ({ step }: StepProps) => <LessonCard n={6} text="Talk to Claude in a doc." sub="Write the plan, then comment on it." step={step} />;
