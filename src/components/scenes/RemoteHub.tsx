"use client";

import { motion, useReducedMotion } from "motion/react";

const devices = [
  { label: "Phone", x: 160, y: 100 },
  { label: "Laptop", x: 550, y: 55 },
  { label: "Home server", x: 940, y: 100 },
  { label: "Perlmutter (HPC)", x: 900, y: 355 },
  { label: "Browser", x: 200, y: 355 },
];
const captions = [
  "",
  "Easter, 2 Apr 20:36: the session on Perlmutter starts with /remote-control. Two minutes later the project spec arrives from my phone.",
  "This morning: my home-server session asked the Perlmutter session to check four quotes on these slides against my prompt history. It found all four.",
];

export function RemoteHub({ step }: { step: number }) {
  const reducedMotion = useReducedMotion();
  const active = (label: string) => step === 1 ? label === "Phone" || label === "Perlmutter (HPC)" : step >= 2 ? label === "Home server" || label === "Perlmutter (HPC)" : true;
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)]" style={{ fontFamily: "var(--font-serif)" }}>How does one session reach everything?</h1>
      <div className="min-h-0 flex-1 py-[2vh]">
        <svg viewBox="0 0 1100 430" className="h-full w-full" role="img" aria-label={`Claude Code sessions joined by Remote Control connect Phone, Laptop, Home server, Perlmutter and Browser. ${step === 1 ? 'Phone to Perlmutter highlighted.' : step >= 2 ? 'Home server and Perlmutter highlighted.' : 'Messages flow both ways.'}`}>
          {devices.map(({ label, x, y }, i) => <g key={label} opacity={active(label) ? 1 : 0.25}>
            <line x1={550} y1={220} x2={x} y2={y} stroke={step > 0 && active(label) ? "#0369a1" : "#a69f93"} strokeWidth={step > 0 && active(label) ? 4 : 2} />
            {[0, 1].map(direction => <motion.circle key={`${step}-${direction}`} r={5} fill={active(label) ? "#0369a1" : "#625d54"}
              initial={false} animate={reducedMotion ? { cx: (550 + x) / 2, cy: (220 + y) / 2 } : { cx: direction ? [x, 550] : [550, x], cy: direction ? [y, 220] : [220, y] }}
              transition={reducedMotion ? { duration: 0 } : { duration: 2.8, repeat: Infinity, ease: "linear", delay: i * 0.2 + direction * 1.4 }} />)}
            <rect x={x - 118} y={y - 29} width={236} height={58} rx={14} fill="#fbf8f1" stroke={step > 0 && active(label) ? "#0369a1" : "#a69f93"} strokeWidth={2} />
            <text x={x} y={y + 7} textAnchor="middle" fontSize={20} fill="#141414" style={{ fontFamily: "var(--font-geist-mono)" }}>{label}</text>
          </g>)}
          <rect x={335} y={167} width={430} height={106} rx={22} fill="#e4eceb" stroke="#0369a1" strokeWidth={2} />
          <text x={550} y={210} textAnchor="middle" fontSize={27} fill="#141414" style={{ fontFamily: "var(--font-serif)" }}>
            <tspan x={550}>Claude Code sessions,</tspan><tspan x={550} dy={34}>joined by Remote Control</tspan>
          </text>
        </svg>
      </div>
      <div className="min-h-[14vh]">
        {step > 0 && <motion.p key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-[1200px] text-[clamp(20px,2vw,32px)] leading-snug">{captions[Math.min(step, 2)]}</motion.p>}
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>Prompt history on Perlmutter (~/.claude/history.jsonl); cross-session messages, 12 Nov 2026</p>
    </section>
  );
}
