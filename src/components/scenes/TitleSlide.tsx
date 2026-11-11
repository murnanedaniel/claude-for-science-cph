"use client";

import { motion } from "motion/react";

// The paper-roll effect is no longer handled here — it lives in
// <PaperRollOverlay> at the Stage level, so it can persist into RateRamp's
// proton/flicker steps and fade only when the grid scene begins.
// TitleSlide now just fades the CSS paper out on exit; the overlay's rolling
// animation starts as soon as the scene advances past this one.

// Three loops (experiment, paper, programme), each with a dot orbiting at its
// own pace: the talk's structure, drawn live because this deck is a web page.
const LOOPS = [
  { r: 46, label: "experiment", dur: 4, color: "#b45309" },
  { r: 86, label: "paper", dur: 9, color: "#1d4ed8" },
  { r: 126, label: "programme", dur: 18, color: "#047857" },
];

function TitleLoops() {
  return (
    <svg
      viewBox="-150 -150 300 300"
      className="absolute right-[4%] top-[8%] w-[28%] pointer-events-none"
      aria-hidden
    >
      {LOOPS.map((l, i) => (
        <motion.g
          key={l.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.9, delay: 0.5 + i * 0.35, ease: [0.22, 1, 0.36, 1] } }}
        >
          <circle r={l.r} fill="none" stroke={l.color} strokeOpacity={0.35} strokeWidth={1.5} strokeDasharray={i === 0 ? "" : "3 4"} />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: l.dur, repeat: Infinity, ease: "linear" }}
          >
            <circle cx={l.r} cy={0} r={5} fill={l.color} />
            <circle cx={l.r} cy={0} r={11} fill={l.color} fillOpacity={0.15} />
          </motion.g>
          <text
            x={0}
            y={-l.r - 6}
            textAnchor="middle"
            fontSize={10}
            fill={l.color}
            style={{ fontFamily: "var(--font-geist-mono)", letterSpacing: "0.08em" }}
          >
            {l.label}
          </text>
        </motion.g>
      ))}
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
              <h1 className="text-[clamp(36px,5.2vw,84px)] leading-[1.05] text-ink">
                Doing physics with Claude
              </h1>
              <h2 className="text-[clamp(22px,2.8vw,44px)] leading-[1.1] mt-3 text-ink/70 italic">
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

        </div>
      </div>
    </motion.div>
  );
}
