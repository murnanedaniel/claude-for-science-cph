"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ink = "#141414";
const muted = "#625d54";
const paper = "#fffdf8";
const blue = "#0369a1";
const tint = "#e4eceb";
const idle = "#a69f93";
const mono = { fontFamily: "var(--font-geist-mono)" };
const serif = { fontFamily: "var(--font-serif)" };

type DeviceId = "phone" | "laptop" | "home" | "hpc" | "browser";

const HUB = { x: 750, y: 290 };

const devices: Record<DeviceId, { x: number; y: number; label: string; labelDy: number }> = {
  phone: { x: 190, y: 140, label: "Phone", labelDy: 90 },
  laptop: { x: 750, y: 80, label: "Laptop", labelDy: 75 },
  home: { x: 1330, y: 140, label: "Home server", labelDy: 88 },
  hpc: { x: 1290, y: 440, label: "Perlmutter (supercomputer)", labelDy: 95 },
  browser: { x: 210, y: 440, label: "Browser session", labelDy: 95 },
};

/** Speech bubble: x is the left edge, or the right edge when align is "right". Tail points at (tx, ty). */
type Bubble = { lines: string[]; x: number; y: number; tx: number; ty: number; align?: "right"; delay: number };
type Hop = { from: DeviceId; to: DeviceId; begin: number };
type Step = { active: DeviceId[]; hops: Hop[]; bubbles: Bubble[]; caption: [string, string] };

const steps: Step[] = [
  {
    active: ["phone", "laptop", "home", "hpc", "browser"],
    hops: [],
    bubbles: [],
    caption: [
      "Remote Control makes a Claude Code session on any machine reachable from my phone",
      "and browser, and lets sessions message each other.",
    ],
  },
  {
    active: ["phone", "hpc"],
    hops: [{ from: "phone", to: "hpc", begin: 1 }],
    bubbles: [
      { lines: ["/remote-control on,", "20:36"], x: 1192, y: 425, tx: 1220, ty: 440, align: "right", delay: 0.2 },
      { lines: ["the project spec,", "2 min later"], x: 270, y: 40, tx: 218, ty: 95, delay: 1.2 },
    ],
    caption: [
      "Easter, 2 Apr 2026, 20:36: the Perlmutter session starts with /remote-control.",
      "Two minutes later the project spec arrives from my phone.",
    ],
  },
  {
    active: ["home", "hpc"],
    hops: [
      { from: "home", to: "hpc", begin: 0 },
      { from: "hpc", to: "home", begin: 1.5 },
    ],
    bubbles: [
      { lines: ["check these four quotes", "against the prompt history"], x: 1224, y: 30, tx: 1262, ty: 110, align: "right", delay: 0.2 },
      { lines: ["all four found"], x: 1192, y: 425, tx: 1220, ty: 440, align: "right", delay: 1.8 },
    ],
    caption: [
      "This morning, 12 Nov 2026: my home-server session asked the Perlmutter session",
      "to check four quotes on these slides against my prompt history. It found all four.",
    ],
  },
  {
    active: ["phone", "home", "browser"],
    hops: [
      { from: "phone", to: "home", begin: 0 },
      { from: "home", to: "browser", begin: 1.5 },
    ],
    bubbles: [
      { lines: ["link my home server", "to the browser session"], x: 270, y: 40, tx: 218, ty: 95, delay: 0.2 },
      { lines: ["answers drafted", "and checked"], x: 1224, y: 30, tx: 1262, ty: 110, align: "right", delay: 1.2 },
      { lines: ["pasted into the form,", "ready 21 min before the deadline"], x: 310, y: 445, tx: 292, ty: 452, delay: 2.2 },
    ],
    caption: [
      "31 Oct to 1 Nov 2026: from my phone I linked my home server to a browser session",
      "filling in an application form. Ready 21 minutes before the deadline.",
    ],
  },
];

function PhoneIcon() {
  return <g>
    <rect x={-32} y={-58} width={64} height={116} rx={12} fill={paper} />
    <rect x={-25} y={-46} width={50} height={84} rx={3} fill={tint} strokeWidth={2} />
    <line x1={-8} y1={-52} x2={8} y2={-52} />
    <circle cy={48} r={4} />
    <rect x={-19} y={-38} width={28} height={12} rx={5} fill={paper} strokeWidth={2} />
    <rect x={-9} y={-20} width={28} height={12} rx={5} fill={blue} stroke="none" />
    <rect x={-19} y={-2} width={22} height={12} rx={5} fill={paper} strokeWidth={2} />
  </g>;
}

function LaptopIcon() {
  return <g>
    <rect x={-62} y={-44} width={124} height={76} rx={6} fill={paper} />
    <rect x={-54} y={-36} width={108} height={60} rx={3} fill={tint} strokeWidth={2} />
    <text x={-42} y={0} fontSize={24} fill={blue} stroke="none" style={mono}>&gt;_</text>
    <path d="M -80 32 H 80 L 70 44 H -70 Z" fill={paper} />
  </g>;
}

/** A small box on the floor next to a router. */
function HomeServerIcon() {
  return <g>
    <line x1={-88} y1={50} x2={90} y2={50} stroke={muted} />
    <rect x={-80} y={-30} width={92} height={80} rx={6} fill={paper} />
    <circle cx={-66} cy={-14} r={4} fill="#15803d" stroke="none" />
    <circle cx={-54} cy={-14} r={4} fill={blue} stroke="none" />
    {[8, 20, 32].map(y => <line key={y} x1={-66} y1={y} x2={-2} y2={y} strokeWidth={2} />)}
    <line x1={36} y1={20} x2={28} y2={-16} />
    <line x1={74} y1={20} x2={82} y2={-16} />
    <rect x={24} y={20} width={62} height={30} rx={6} fill={paper} />
    {[36, 48, 60].map(x => <circle key={x} cx={x} cy={35} r={3} fill="#15803d" stroke="none" />)}
    <path d="M 44 -8 Q 55 -18 66 -8 M 38 -18 Q 55 -32 72 -18" fill="none" strokeWidth={2} />
  </g>;
}

/** Three rack cabinets. */
function SupercomputerIcon() {
  return <g>
    {[-70, -22, 26].map(x => <g key={x}>
      <rect x={x} y={-60} width={44} height={120} rx={4} fill={paper} />
      {[0, 1, 2, 3, 4, 5].map(i => <g key={i}>
        <line x1={x + 7} y1={-44 + i * 17} x2={x + 28} y2={-44 + i * 17} strokeWidth={2} />
        <circle cx={x + 35} cy={-44 + i * 17} r={2.6} fill={i % 2 ? "#15803d" : blue} stroke="none" />
      </g>)}
    </g>)}
  </g>;
}

/** A browser window with a form in it. */
function BrowserIcon() {
  return <g>
    <rect x={-80} y={-60} width={160} height={120} rx={8} fill={paper} />
    <line x1={-80} y1={-38} x2={80} y2={-38} />
    {[-66, -54, -42].map(x => <circle key={x} cx={x} cy={-49} r={3.5} fill={muted} stroke="none" />)}
    <rect x={-28} y={-55} width={98} height={12} rx={6} fill={tint} strokeWidth={2} />
    {[-26, -2].map(y => <rect key={y} x={-64} y={y} width={128} height={16} rx={3} fill={tint} strokeWidth={2} />)}
    <rect x={24} y={28} width={40} height={18} rx={4} fill={blue} stroke="none" />
  </g>;
}

const icons: Record<DeviceId, () => ReactNode> = {
  phone: PhoneIcon,
  laptop: LaptopIcon,
  home: HomeServerIcon,
  hpc: SupercomputerIcon,
  browser: BrowserIcon,
};

function SpeechBubble({ lines, x, y, tx, ty, align, delay }: Bubble) {
  const fontSize = 21;
  const pad = 18;
  const lineHeight = 27;
  const w = Math.max(...lines.map(line => line.length)) * fontSize * 0.6 + 2 * pad;
  const h = lines.length * lineHeight + 20;
  const left = align === "right" ? x - w : x;
  // Tail base sits on the side of the bubble nearest the tail point.
  let base: [number, number, number, number];
  if (tx < left) base = [left, y + h / 2 - 9, left, y + h / 2 + 9];
  else if (tx > left + w) base = [left + w, y + h / 2 - 9, left + w, y + h / 2 + 9];
  else if (ty < y) base = [tx - 9, y, tx + 9, y];
  else base = [tx - 9, y + h, tx + 9, y + h];
  const [ax, ay, bx, by] = base;
  return <motion.g initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay }}>
    <rect x={left} y={y} width={w} height={h} rx={14} fill={paper} stroke={blue} strokeWidth={2.5} />
    <polygon points={`${ax},${ay} ${bx},${by} ${tx},${ty}`} fill={paper} />
    <polyline points={`${ax},${ay} ${tx},${ty} ${bx},${by}`} fill="none" stroke={blue} strokeWidth={2.5} strokeLinejoin="round" />
    {lines.map((line, i) => <text key={line} x={left + pad} y={y + 10 + (i + 0.78) * lineHeight} fontSize={fontSize} fill={ink} style={mono}>{line}</text>)}
  </motion.g>;
}

function Envelope({ path, begin }: { path: string; begin: number }) {
  return <g>
    <rect x={-17} y={-12} width={34} height={24} rx={3} fill={paper} stroke={blue} strokeWidth={2.5} />
    <path d="M -17 -12 L 0 3 L 17 -12" fill="none" stroke={blue} strokeWidth={2.5} strokeLinejoin="round" />
    <animateMotion path={path} dur="3s" begin={`${begin}s`} repeatCount="indefinite" />
  </g>;
}

export function RemoteHub({ step }: { step: number }) {
  const reducedMotion = useReducedMotion();
  const current = steps[Math.min(Math.max(step, 0), steps.length - 1)];
  const on = (id: DeviceId) => current.active.includes(id);
  const engaged = (id: DeviceId) => step > 0 && on(id);
  const hopPath = ({ from, to }: Hop) => `M ${devices[from].x} ${devices[from].y} L ${HUB.x} ${HUB.y} L ${devices[to].x} ${devices[to].y}`;
  const ids = Object.keys(devices) as DeviceId[];
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)]" style={serif}>My sessions on different machines message each other</h1>
      <div className="min-h-0 flex-1 py-[1.5vh]">
        <svg viewBox="0 0 1500 690" className="h-full w-full" role="img" aria-label={`Remote Control hub linking a phone, laptop, home server, the Perlmutter supercomputer and a browser session. ${current.caption.join(" ")}`}>
          {ids.map(id => <motion.line key={id} x1={HUB.x} y1={HUB.y} x2={devices[id].x} y2={devices[id].y}
            initial={false} animate={{ opacity: on(id) ? 1 : 0.2 }} transition={{ duration: 0.5 }}
            stroke={engaged(id) ? blue : idle} strokeWidth={engaged(id) ? 4 : 2.5} strokeDasharray={engaged(id) ? undefined : "7 7"} />)}

          {!reducedMotion && step === 0 && <g fill={idle}>
            {ids.map((id, i) => <circle key={id} r={5}>
              <animateMotion path={`M ${HUB.x} ${HUB.y} L ${devices[id].x} ${devices[id].y}`} dur="3.5s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </circle>)}
          </g>}
          {!reducedMotion && step > 0 && <g key={`hops-${step}`}>
            {current.hops.map(hop => <Envelope key={`${hop.from}-${hop.to}`} path={hopPath(hop)} begin={hop.begin} />)}
          </g>}

          <g>
            <rect x={HUB.x - 150} y={HUB.y - 55} width={300} height={110} rx={24} fill={tint} stroke={blue} strokeWidth={2.5} />
            <text x={HUB.x} y={HUB.y - 2} textAnchor="middle" fontSize={34} fill={ink} style={serif}>Remote Control</text>
            <text x={HUB.x} y={HUB.y + 32} textAnchor="middle" fontSize={18} fill={muted} style={mono}>Claude Code sessions</text>
          </g>

          {ids.map(id => {
            const { x, y, label, labelDy } = devices[id];
            const Icon = icons[id];
            return <motion.g key={id} initial={false} animate={{ opacity: on(id) ? 1 : 0.22 }} transition={{ duration: 0.5 }}>
              <g transform={`translate(${x} ${y})`} stroke={engaged(id) ? blue : ink} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                <Icon />
              </g>
              <text x={x} y={y + labelDy} textAnchor="middle" fontSize={22} fill={ink} style={mono}>{label}</text>
            </motion.g>;
          })}

          <g key={`bubbles-${step}`}>
            {current.bubbles.map(bubble => <SpeechBubble key={bubble.lines[0]} {...bubble} />)}
          </g>

          <motion.g key={`caption-${step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {current.caption.map((line, i) => <text key={i} x={40} y={622 + i * 46} fontSize={32} fill={ink} style={serif}>{line}</text>)}
          </motion.g>
        </svg>
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={mono}>Sources: Perlmutter prompt history; cross-session messages, 12 Nov 2026; home-server session transcript, 31 Oct to 1 Nov 2026</p>
    </section>
  );
}
