"use client";

import { motion } from "motion/react";

// All text below is verbatim from the RANGE orchestrator session at the KIT
// course, 22 Oct 2026 (Claude Code 2.1.288). Times converted from UTC to CEST.
const GOAL = "Reproduce the RANGE paper as a basline, and then implement a transformer version. Get apples to apples timing comparisons";

// Minutes after 13:55 (goal set) ; goal cleared at 16:56 = 181 min.
const SPAN = 181;
const marks: { t: number; time: string; label: string; side: "up" | "down"; tone: "ink" | "muted" | "accent" }[] = [
  { t: 0, time: "13:55", label: "I type /goal", side: "up", tone: "ink" },
  { t: 6, time: "14:01", label: "check: not met", side: "down", tone: "muted" },
  { t: 50, time: "14:45", label: "Me: “Update?”", side: "up", tone: "ink" },
  { t: 171, time: "16:46", label: "Claude: “The goal is met.”", side: "up", tone: "ink" },
  { t: 181, time: "16:56", label: "check: met, goal cleared", side: "down", tone: "accent" },
];

const mono = { fontFamily: "var(--font-geist-mono)" };
const serif = { fontFamily: "var(--font-serif)" };

function Terminal() {
  return (
    <div className="w-full max-w-[1150px] rounded-xl bg-[#1c1b19] p-[2.2%] text-[clamp(13px,1.15vw,19px)] leading-relaxed text-[#e9e3d6] shadow-sm" style={mono}>
      <p className="mb-[1.2vh] text-[#8f887c]">RANGE project, KIT course, 22 Oct 2026, 13:55</p>
      <p><span className="text-[#d9a46b]">&gt; /goal</span> {GOAL}</p>
      <p className="mt-[1vh] text-[#8f887c]">Goal set: {GOAL}</p>
      <p className="mt-[1vh]"><span className="text-[#9cc79a]">Claude:</span> Goal acknowledged: reproduce RANGE as the baseline, add a transformer variant, and time them the same way. The GPU work goes to Perlmutter. I&apos;m starting a session there with a precise spec.</p>
    </div>
  );
}

function TimeBar() {
  const toneClass = (tone: string) => (tone === "accent" ? "text-[#a3654b]" : tone === "muted" ? "text-[#625d54]" : "text-[#141414]");
  const align = (t: number) => (t / SPAN < 0.1 ? "left" : t / SPAN > 0.85 ? "right" : "center");
  return (
    <div className="w-full max-w-[1150px]" style={mono}>
      <div className="relative h-[34vh]">
        <div className="absolute left-0 right-0 top-1/2 h-[1.6vh] -translate-y-1/2 rounded-full bg-[#14141414]">
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.4, ease: "easeOut" }} className="h-full rounded-full bg-[#a3654b55]" />
        </div>
        {marks.map((m, i) => {
          const pos = (m.t / SPAN) * 100;
          const a = align(m.t);
          const anchor = a === "left" ? { left: `${pos}%` } : a === "right" ? { right: `${100 - pos}%` } : { left: `${pos}%`, transform: "translateX(-50%)" };
          return (
            <motion.div key={m.time} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.25 }}>
              <div className="absolute top-1/2 h-[4.5vh] w-[2px] -translate-y-1/2 bg-[#141414]" style={{ left: `calc(${pos}% - 1px)` }} />
              <div className={`absolute whitespace-nowrap ${a === "right" ? "text-right" : a === "left" ? "text-left" : "text-center"} ${m.side === "up" ? "bottom-[calc(50%+3vh)]" : "top-[calc(50%+3vh)]"}`} style={anchor}>
                <p className="text-[clamp(11px,1vw,16px)] text-[#625d54]">{m.time}</p>
                <p className={`text-[clamp(13px,1.2vw,20px)] ${toneClass(m.tone)}`}>{m.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-[2vh] max-w-[1100px] text-[clamp(18px,1.75vw,29px)] leading-snug" style={serif}>For three hours Claude ran the GPU work in a second session on Perlmutter and checked on it by itself. I typed one message in that time.</p>
    </div>
  );
}

function JudgedAsWritten() {
  return (
    <div className="grid w-full max-w-[1150px] grid-cols-2 gap-[2.5vw]">
      <div className="rounded-2xl border border-[#14141422] bg-[#fbf8f1] p-[4%]">
        <p className="mb-[1.5vh] text-[clamp(11px,1vw,16px)] uppercase tracking-wide text-[#625d54]" style={mono}>The goal said</p>
        <p className="text-[clamp(16px,1.5vw,25px)] leading-snug" style={mono}>&ldquo;Reproduce the RANGE paper as a basline&rdquo;</p>
      </div>
      <div className="rounded-2xl border border-[#14141422] bg-[#fbf8f1] p-[4%]">
        <p className="mb-[1.5vh] text-[clamp(11px,1vw,16px)] uppercase tracking-wide text-[#625d54]" style={mono}>What counted, 16:46</p>
        <p className="text-[clamp(16px,1.5vw,25px)] leading-snug" style={mono}>&ldquo;The authors&apos; released checkpoints reproduce Table 1 in our pipeline&rdquo;</p>
      </div>
      <p className="col-span-2 text-[clamp(18px,1.7vw,28px)] leading-snug" style={serif}>The check reads the conversation and judges the goal as written. I meant retraining it. Our own retrain, 50 of the paper&apos;s 500 epochs, had an energy error of 0.485 against the paper&apos;s 0.110 (lower is better).</p>
      <p className="col-span-2 text-[clamp(14px,1.3vw,21px)] leading-snug text-[#625d54]">Same day, halo finder: goal met at 15:47. At 15:53 I asked &ldquo;Are you...... really sure about these results?&rdquo; The headline speed-up was mostly an untuned baseline.</p>
    </div>
  );
}

export function GoalDemo({ step }: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(26px,2.8vw,48px)] leading-tight" style={serif}>/goal keeps Claude working until a separate check says the goal is met</h1>
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-[3vh]">
        {step <= 0 && <motion.div key="cmd" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex w-full flex-col items-center gap-[3vh]">
          <Terminal />
          <p className="max-w-[1150px] text-[clamp(18px,1.75vw,29px)] leading-snug" style={serif}>You type one condition. Each time Claude ends a turn, a separate check reads the conversation and decides whether the condition holds. If not, Claude is sent back to work.</p>
        </motion.div>}
        {step === 1 && <motion.div key="bar" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex w-full justify-center"><TimeBar /></motion.div>}
        {step >= 2 && <motion.div key="met" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex w-full justify-center"><JudgedAsWritten /></motion.div>}
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={mono}>Claude Code session transcripts, KIT course, 22 Oct 2026 (RANGE and halo-finder sessions, times CEST); KIT post-mortems; /goal behaviour from Claude Code&apos;s own /goal messages</p>
    </section>
  );
}
