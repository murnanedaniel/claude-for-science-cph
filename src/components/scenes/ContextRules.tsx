"use client";

import { motion } from "motion/react";

const files = [
  ["CLAUDE.md", "Delegation is the default, not an option."],
  ["memory/no-serious-compute-on-homebox.md", "No MadGraph, event generation or heavy builds on homebox; use clusters."],
  ["skills/my-voice/SKILL.md", "Evidence before verdicts."],
];

export function ContextRules({ step }: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)]" style={{ fontFamily: "var(--font-serif)" }}>What context do my agents get?</h1>
      <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="my-auto w-full max-w-[1150px] self-center py-[3vh]">
        {step === 0 ? <div className="flex flex-col gap-[2vh]">{files.map(([name, line]) => <div key={name} className="rounded-xl border border-[#14141422] bg-[#fbf8f1] p-[2.5%]">
          <p className="text-[clamp(13px,1.25vw,21px)] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>{name}</p>
          <p className="mt-[1vh] text-[clamp(20px,2vw,32px)]">{line}</p>
        </div>)}</div> : step === 1 ? <div className="rounded-xl border border-[#14141422] bg-[#fbf8f1] p-[4%]" style={{ fontFamily: "var(--font-geist-mono)" }}>
          <p className="mb-[3vh] text-[clamp(16px,1.5vw,24px)] text-[#625d54]">Basic Model agent lab · settings.json</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-[3vw] gap-y-[3vh] text-[clamp(17px,1.7vw,28px)]">
            <dt>defaultMode</dt><dd>"acceptEdits"</dd>
            <dt>allow</dt><dd>Bash, Read, Edit, Write, Glob, Grep, WebSearch, Task</dd>
            <dt>deny Read</dt><dd>secret/, oracle/, logs/<br />course-p6-detector/**</dd>
          </dl>
          <p className="mt-[3vh] border-t border-[#14141422] pt-[3vh] text-[clamp(17px,1.7vw,28px)]">a PreToolUse guard hook</p>
        </div> : <div className="text-[clamp(27px,3vw,48px)] leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
          <p>The lab ran for hours without asking me to approve a tool.</p>
          <p className="mt-[3vh]">And the orchestrator never read the hidden universe. It worked from status messages only.</p>
        </div>}
      </motion.div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>My CLAUDE.md, memory and skills; Basic Model lab settings, KIT course 22 Oct 2026 (post-mortem)</p>
    </section>
  );
}
