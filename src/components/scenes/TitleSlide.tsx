"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";
import { RotatingLoop } from "./RotatingLoop";

// The paper-roll effect is no longer handled here — it lives in
// <PaperRollOverlay> at the Stage level, so it can persist into RateRamp's
// proton/flicker steps and fade only when the grid scene begins.
// TitleSlide now just fades the CSS paper out on exit; the overlay's rolling
// animation starts as soon as the scene advances past this one.

const LOOPS = [
  { radius: 95, period: 2, stroke: "#85502e", width: 2.5, title: "experiment" },
  { radius: 175, period: 6, stroke: "#425c65", width: 2.5, title: "paper" },
  { radius: 255, period: 18, stroke: "#52634a", width: 2.5, title: "programme" },
];

function TitleLoops() {
  return (
    <svg viewBox="-290 -300 580 620" className="absolute right-[4%] top-[25%] w-[34%]" role="img" aria-label="Three rotating loops: experiment, paper, programme">
      <defs>
        {LOOPS.map(loop => <marker key={loop.title} id={`title-${loop.title}`} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill={loop.stroke} /></marker>)}
      </defs>
      {LOOPS.map(loop => <RotatingLoop key={loop.title} loop={loop} visible markerId={`title-${loop.title}`} />)}
      {LOOPS.map(loop => <g key={loop.title} transform={`translate(0, ${-loop.radius})`}>
        <rect x={-75} y={-13} width={150} height={26} rx={5} fill="#f6f1e7" />
        <text textAnchor="middle" y={6} fill={loop.stroke} fontSize={19} fontFamily="var(--font-geist-mono)">{loop.title}</text>
      </g>)}
      <circle r={3} fill="#3b3933" />
    </svg>
  );
}

export function TitleSlide({ step: _step }: { step: number }) {
  // The cream paper rectangle is rendered by <PaperRollOverlay> at z-30.
  // TitleSlide holds only the text, positioned identically (w-[78%],
  // max-w-[1100px], aspect-[16/10]) so text sits on top of the overlay paper.
  // z-40 keeps text above the overlay; on exit, only the text fades.
  return (
    <motion.div
      className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <div className="relative w-[78%] max-w-[1100px] aspect-[16/10]">
        <div
          className="absolute inset-0 flex flex-col justify-between p-[5%] text-ink"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <div className="flex items-start justify-between text-[13px] tracking-wide text-ink/60">
            <span>Claude for Science · Niels Bohr Institute · 12 November 2026</span>
            <span>15 minutes</span>
          </div>

          <TitleLoops />

          <div className="px-[4%]">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }}
            >
              <h1 className="max-w-[60%] text-[clamp(36px,4.6vw,74px)] leading-[1.05] text-ink">
                Doing physics with Claude
              </h1>
              <h2 className="max-w-[60%] text-[clamp(22px,2.5vw,40px)] leading-[1.1] mt-3 text-ink/70 italic">
                From Sonnet 3.5 to now
              </h2>
            </motion.div>

            <motion.div
              className="mt-12 flex items-baseline gap-4 text-[clamp(14px,1.3vw,20px)] text-ink/70"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
            >
              <span className="text-ink">Daniel Murnane</span>
              <span className="text-ink/40">·</span>
              <span>Halfspace</span>
              <span className="text-ink/40">·</span>
              <span>Niels Bohr Institute</span>
            </motion.div>
          </div>

          <div className="absolute top-[9%] right-[5%] flex gap-[2.5%]" style={{ fontFamily: "var(--font-geist-mono)" }}>
            {[["/qr-talk.svg", "These slides"], ["/qr-kit-course.svg", "The KIT course"]].map(([src, label]) => (
              <div key={src} className="flex flex-col items-center gap-1">
                <img src={asset(src)} alt={`QR code: ${label}`} className="w-[clamp(60px,6vw,96px)]" />
                <span className="text-[clamp(9px,0.75vw,12px)] text-ink/60">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
