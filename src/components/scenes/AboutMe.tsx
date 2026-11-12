"use client";

import { motion } from "motion/react";

const ink = "#49483e", red = "#a63d35", green = "#386b4c", paper = "#f6f1e7";
const tools = [
  { title: "Accounts database", y: 125, risk: ["Leaks another", "customer’s data"] },
  { title: "Payments API", y: 235, risk: ["Unauthorised transfer"] },
  { title: "Email inbox", y: 345, risk: ["Injected instructions", "in an email"] },
  { title: "Web search", y: 455, risk: ["Poisoned web page"] },
];

function Shield({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x},${y})`}><path d="M -10 -12 L 10 -12 L 10 1 Q 8 10 0 15 Q -8 10 -10 1 Z" fill={paper} stroke={green} strokeWidth={2} /><path d="m -5 0 4 4 6 -8" fill="none" stroke={green} strokeWidth={2} /></g>;
}

function Label({ x, y, lines, color = ink }: { x: number; y: number; lines: string[]; color?: string }) {
  return <text x={x} y={y} fill={color} fontSize={12} textAnchor="middle">{lines.map((line, i) => <tspan key={line} x={x} dy={i ? 16 : 0}>{line}</tspan>)}</text>;
}

function BankingAgent({ step }: { step: number }) {
  return <svg viewBox="0 0 600 530" className="h-full w-full" role="img" aria-label={`Banking agent: ${step >= 2 ? "controls stop the email attack" : step >= 1 ? "email attack reaches payments" : "customer request flows through tools"}`} fontFamily="var(--font-geist-mono)">
    <g fill="none" stroke={ink} strokeWidth={1.5} opacity={0.55}>
      <motion.path d="M 100 80 L 100 210 M 122 210 L 122 80" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
      {tools.map((tool, i) => <motion.path key={tool.title} d={`M 185 245 C 270 245 280 ${tool.y} 410 ${tool.y}`} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: i * 0.15 }} />)}
      <path d="M 490 105 V 25 H 140 V 42" strokeDasharray="4 4" />
    </g>
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <rect x={40} y={42} width={145} height={38} rx={12} fill={paper} stroke={ink} />
      <Label x={112} y={66} lines={["Customer · chat"]} />
      <rect x={35} y={210} width={150} height={70} rx={14} fill="#e5e2d5" stroke={ink} />
      <Label x={110} y={239} lines={["Banking agent", "LLM"]} />
      <Label x={92} y={118} lines={["“Pay my rent”"]} />
      {tools.map(tool => <g key={tool.title}><rect x={410} y={tool.y - 20} width={180} height={40} rx={8} fill={paper} stroke={ink} /><Label x={500} y={tool.y + 4} lines={[tool.title]} /></g>)}
    </motion.g>
    {step === 0 && <g fill="#526c76">
      <circle r={4}><animateMotion path="M 100 80 L 100 210" dur="2s" repeatCount="indefinite" /></circle>
      {[125, 235].map((y, i) => <circle key={y} r={4}><animateMotion path={`M 185 245 C 270 245 280 ${y} 410 ${y}`} dur="2.5s" begin={`${i * 0.8}s`} repeatCount="indefinite" /></circle>)}
      <circle r={4}><animateMotion path="M 122 210 L 122 80" dur="2.5s" begin="1s" repeatCount="indefinite" /></circle>
    </g>}
    {step >= 1 && <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {tools.map(tool => <g key={tool.title}><circle cx={418} cy={tool.y + 30} r={7} fill={red} /><text x={418} y={tool.y + 34} textAnchor="middle" fontSize={10} fill={paper}>!</text><Label x={510} y={tool.y + 39} lines={tool.risk} color={red} /></g>)}
      <circle cx={315} cy={25} r={7} fill={red} />
      <circle key={step >= 2 ? "blocked" : "attack"} r={5} fill={red}>
        <animateMotion path={step >= 2 ? "M 410 345 C 385 345 365 340 344 326" : "M 410 345 C 280 345 270 245 185 245 C 270 245 280 235 410 235"} dur="2.5s" repeatCount="indefinite" />
        {step >= 2 && <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.8;0.9;1" dur="2.5s" repeatCount="indefinite" />}
      </circle>
    </motion.g>}
    {step >= 2 && <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <Shield x={122} y={158} /><Label x={240} y={78} lines={["Data filter", "on replies"]} color={green} />
      <path d="M 205 86 L 135 153" stroke={green} strokeDasharray="3 3" fill="none" />
      <Shield x={185} y={260} /><Label x={112} y={307} lines={["Tool allowlist", "per task"]} color={green} />
      <Shield x={325} y={238} /><Label x={313} y={170} lines={["Human approves", "payments over", "a limit"]} color={green} />
      <Shield x={337} y={322} /><Shield x={337} y={414} />
      <Label x={212} y={420} lines={["Untrusted content", "stays out of", "instructions"]} color={green} />
    </motion.g>}
    <Label x={300} y={522} lines={[step >= 2 ? "03 / Add controls" : step >= 1 ? "02 / Map the risks" : "01 / Follow the task"]} />
  </svg>;
}

/** Three presentation steps: system, threats, controls. */
export function AboutMe({ step }: { step: number }) {
  return <motion.div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.35 } }}>
    <div className="relative w-[78%] max-w-[1100px] aspect-[16/10]">
      <div className="absolute inset-0 flex flex-col p-[6%] text-ink" style={{ fontFamily: "var(--font-serif)" }}>
        <h1 className="text-[clamp(30px,3.2vw,54px)] italic leading-tight">What do I do at Halfspace?</h1>
        <div className="mt-[3%] flex min-h-0 flex-1 items-center gap-[5%]">
          <p className="w-[35%] text-[clamp(15px,1.2vw,19px)] leading-[1.55] text-ink/75">We map agentic systems, catalogue their threat vectors, quantify the risks and add controls. With faculty, we attack those systems to find which controls work for which agent topologies.</p>
          <div className="h-full w-[60%]"><BankingAgent step={step} /></div>
        </div>
      </div>
    </div>
  </motion.div>;
}
