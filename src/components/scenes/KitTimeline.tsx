"use client";

import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import data from "@/lib/kitTimeline.json";

const ink = "#203e58";
const colors: Record<string, string> = { running: ink, waiting: "#d5a03b", stalled: "#bd4940", idle: "#e3dfd6" };
const minutes = (time: string) => { const [h, m] = time.split(":").map(Number); return h * 60 + m - 720; };
const x = (minute: number) => 420 + Math.min(300, Math.max(0, minute)) * 3.52;
const endpoints = [0, 60, 180, 300, 300];
function wrap(text: string, limit = 37) {
  const lines: string[] = [];
  for (const word of text.split(" ")) {
    if (!lines.length || (lines[lines.length - 1] + " " + word).length > limit) lines.push(word);
    else lines[lines.length - 1] += " " + word;
  }
  return lines;
}

export function KitTimeline({ step }: { step: number }) {
  const beat = Math.max(0, Math.min(4, step));
  const previous = useRef(0);
  const forward = beat > previous.current;
  useEffect(() => { previous.current = beat; }, [beat]);
  // A fresh clock per step prevents a cancelled sweep leaking into an earlier view.
  return <Timeline key={beat} step={beat} start={forward && beat <= 3 ? endpoints[beat - 1] : endpoints[beat]} />;
}

function Timeline({ step, start }: { step: number; start: number }) {
  const clock = useMotionValue(start);
  const [time, setTime] = useState(start);
  const id = useId().replace(/:/g, "");
  useMotionValueEvent(clock, "change", setTime);
  useEffect(() => {
    const control = animate(clock, endpoints[step], { duration: start === endpoints[step] ? 0 : 4, ease: "linear" });
    return () => control.stop();
  }, [clock, start, step]);
  const clockLabel = `${String(12 + Math.floor(time / 60)).padStart(2, "0")}:${String(Math.floor(time % 60)).padStart(2, "0")}`;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#f6f1e7] text-[#141414]">
      <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-labelledby={`${id}-title ${id}-notes`}>
        <title id={`${id}-title`}>What did the three running projects do all afternoon?</title>
        <desc id={`${id}-notes`}>{data.notes.join("\n")}</desc>
        <defs>
          <pattern id={`${id}-idle`} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="8" height="8" fill="#eeebe3" /><line y2="8" stroke="#ded9ce" strokeWidth="2" /></pattern>
          <clipPath id={`${id}-reveal`}><rect x="420" y="190" width={Math.max(0, x(time) - 420)} height="590" /></clipPath>
        </defs>
        <text x="70" y="90" fontSize="43" fontFamily="var(--font-serif)">What did the three running projects do all afternoon?</text>
        <g fontFamily="var(--font-geist-mono)" fontSize="15">
          {Object.entries(colors).map(([state, color], i) => <g key={state} transform={`translate(${420 + i * 170}, 130)`}><rect width="16" height="12" rx="2" fill={state === "idle" ? `url(#${id}-idle)` : color} /><text x="24" y="12" fill="#555">{state}</text></g>)}
          {Array.from({ length: 6 }, (_, i) => <g key={i}><line x1={x(i * 60)} x2={x(i * 60)} y1="185" y2="770" stroke="#141414" strokeOpacity="0.1" /><text x={x(i * 60)} y="177" textAnchor="middle">{String(12 + i).padStart(2, "0")}:00</text></g>)}
        </g>
        {data.projects.filter(project => ["galactic", "range", "basic-model"].includes(project.id)).map((project, row) => {
          const y = 250 + row * 180;
          return <g key={project.id}>
            <g>
              <text x="70" y={y - 4} fontSize="25" fontFamily="var(--font-serif)">{project.name}</text>
              {step > 0 && <text x="70" y={y + 21} fontSize="15" fill="#666">{wrap(project.oneLine).map((line, i) => <tspan key={line} x="70" dy={i ? 18 : 0}>{line}</tspan>)}</text>}
            </g>
            <line x1="420" x2="1476" y1={y + 16} y2={y + 16} stroke="#141414" strokeOpacity="0.08" />
            <g clipPath={`url(#${id}-reveal)`}>
              {project.segments.map(segment => <rect key={segment.start} x={x(minutes(segment.start))} y={y} width={x(minutes(segment.end)) - x(minutes(segment.start))} height="36" fill={segment.state === "idle" ? `url(#${id}-idle)` : colors[segment.state]}><title>{`${project.name}: ${segment.state}, ${segment.start} to ${segment.end}`}</title></rect>)}
            </g>
            {project.milestones.map((milestone, index) => {
              const isClaim = milestone.kind === "claim";
              const isCorrection = milestone.kind === "correction";
              const significant = isClaim || isCorrection;
              const beyond = minutes(milestone.t) > 300;
              if (step === 0 || (beyond || minutes(milestone.t) > time)) return null;
              const mx = x(minutes(milestone.t));
              const color = isClaim ? "#c57717" : isCorrection ? "#28754c" : ink;
              // Separate label lanes keep closely spaced events readable.
              let label = milestone.label;
              let lx = mx;
              let ly = y - 12;
              let anchor: "start" | "middle" | "end" = "middle";
              if (project.id === "galactic") {
                if (milestone.t === "15:47") { label = "390x"; lx = 1190; ly = y - 24; }
                if (milestone.t === "15:53") { label = "Really sure?"; lx = 1390; ly = y - 24; }
                if (milestone.t === "15:54") { label = "Rival untuned"; lx = 1390; ly = y + 61; }
                if (beyond) { label = "17:04: tie"; lx = 1476; ly = y - 24; anchor = "end"; }
              } else if (project.id === "range") {
                if (milestone.t === "14:47") { label = "Saved models match"; lx = 1060; ly = y - 24; }
                if (milestone.t === "16:46") { label = "Goal is met"; lx = 1400; ly = y - 24; }
                if (milestone.t === "17:00") { label = "Plain wider model beats both"; lx = 1476; ly = y + 61; anchor = "end"; }
              }
              const showLabel = significant && step < 4;
              return <g key={`${milestone.t}-${index}`}>
                <circle cx={mx} cy={y + 14} r={significant ? 5 : 3} fill={color}><title>{`${milestone.t}: ${milestone.label}`}</title></circle>
                {showLabel && <><path d={`M ${mx} ${y + 14} L ${lx} ${ly > y ? ly - 16 : ly + 5}`} fill="none" stroke={color} strokeOpacity="0.6" /><text x={lx} y={ly} textAnchor={anchor} fill={color} fontSize="16" fontFamily="var(--font-geist-mono)">{label}</text></>}
              </g>;
            })}
            {step === 4 && project.freeze && <g>
              <line x1={x(minutes(project.freeze.t))} x2={x(minutes(project.freeze.t))} y1={y - 12} y2={y + 43} stroke="#bd4940" strokeWidth="3" />
              <text x={x(minutes(project.freeze.t)) - 10} y={y + 76} textAnchor="end" fontSize="19" fill="#a93630">
                {project.id === "range" ? "Multi-GPU startup hung; unnoticed for 10 minutes" : "“Trust this folder?” needed a human"}
                <title>{project.freeze.reason}</title>
              </text>
            </g>}
          </g>;
        })}
        {step < 4 && <g fontFamily="var(--font-geist-mono)"><line x1={x(time)} x2={x(time)} y1="195" y2="770" stroke={ink} strokeWidth="2" /><rect x={x(time) - 36} y="777" width="72" height="27" rx="4" fill={ink} /><text x={x(time)} y="796" textAnchor="middle" fontSize="16" fill="white">{clockLabel}</text></g>}
        {step >= 4 && <text x="70" y="810" fontSize="17" fill="#666" fontFamily="var(--font-geist-mono)">Two more barely started: fine-tuning ran in Claude Science, where we couldn't see inside; tracking never launched.</text>}
        <text x="70" y="855" fontSize="14" fill="#666" fontFamily="var(--font-geist-mono)">Reconstructed from session logs of the KIT course, 22 Oct 2026; some times estimated (see notes)</text>
      </svg>
    </div>
  );
}
