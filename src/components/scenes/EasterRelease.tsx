"use client";

import { motion } from "motion/react";
import { EasterShell } from "./EasterShell";

// ColliderML release card. Sourced from the live HuggingFace readme:
//   huggingface.co/datasets/CERN/ColliderML-Release-1
// Goal of the slide: convey the *scale* + the *production stack* in one beat,
// no institution orbits.

type Tile = { label: string; sub: string };
const OBJECTS: Tile[] = [
  { label: "particles",      sub: "truth pdg_id · momentum · vertex · primary flag · perigee d0/z0" },
  { label: "tracker_hits",   sub: "silicon hits · volume / layer / surface ids · time" },
  { label: "calo_hits",      sub: "EM + hadronic cells · per-particle contributions" },
  { label: "tracks",         sub: "ACTS reco · d0, z0, phi, theta, q/p · hit list" },
];

const STACK = [
  "MadGraph5",
  "Pythia 8",
  "Geant4",
  "DD4hep",
  "Open Data Detector",
  "ACTS",
  "Key4hep / EDM4HEP",
  "Parquet",
];

const CHANNELS: { name: string; note: string }[] = [
  { name: "ttbar",        note: "pp → tt̄" },
  { name: "zee",          note: "pp → Z → e⁺e⁻" },
  { name: "zmumu",        note: "pp → Z → μ⁺μ⁻" },
  { name: "ggf",          note: "pp → H" },
  { name: "diphoton",     note: "pp → γγ" },
  { name: "dihiggs",      note: "gg → HH" },
  { name: "multijet",     note: "pp → jets" },
  { name: "susy",         note: "pp → g̃g̃ (GMSB)" },
  { name: "zprime",       note: "pp → Z′ (SSM)" },
  { name: "hiddenvalley", note: "pp → Z′ → dark" },
];

export function EasterRelease() {
  return (
    <EasterShell
      beat={1}
      headline="ColliderML · Release 1."
      hint={<>open detector simulation · 14 TeV pp · HL-LHC pileup<br />huggingface.co/datasets/CERN/ColliderML-Release-1 · CC-BY-4.0</>}
    >
      <div className="w-full max-w-[1400px] flex flex-col gap-7">
        {/* Top row: scale stat + channel chips */}
        <motion.div
          className="flex items-center justify-between gap-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        >
          <div className="flex items-baseline gap-4">
            <div className="font-serif text-ink text-[clamp(50px,6vw,96px)] leading-none tabular-nums">
              28
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-accent-warm text-[clamp(20px,2vw,30px)] uppercase tracking-wider">TB</span>
              <span className="font-mono text-ink/60 text-[10px] uppercase tracking-[0.25em]">tracker · calo · particles · tracks</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-end max-w-[58%]">
            <span className="font-mono text-[10px] text-ink px-2 py-0.5 rounded-sm border border-[#14141420] bg-[#fbf6ec]">pu0</span>
            <span className="font-mono text-[10px] text-ink px-2 py-0.5 rounded-sm border border-[#14141420] bg-[#fbf6ec]">pu200</span>
            <span className="font-mono text-[10px] text-ink/60 px-1">×</span>
            {CHANNELS.map((c) => (
              <span key={c.name} className="font-mono text-[10.5px] text-accent px-1.5 py-0.5 rounded-sm border border-sky-300/30 bg-sky-500/10 whitespace-nowrap">
                {c.name}
                <span className="ml-1 text-accent">{c.note}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Object tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {OBJECTS.map((t, i) => (
            <motion.div
              key={t.label}
              className="rounded-md border border-[#14141420] bg-[#fbf6ec] p-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.25 + i * 0.12 } }}
            >
              <div className="font-mono text-[14px] text-emerald-700 tracking-wider">
                {t.label}
              </div>
              <div className="mt-2 font-sans text-[11.5px] text-ink/60 leading-snug">
                {t.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Production-stack pipeline strip */}
        <motion.div
          className="flex items-stretch gap-1 rounded-md border border-[#14141420] bg-[#fbf6ec] p-3 overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.9 } }}
        >
          {STACK.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className="font-mono text-[12px] text-ink whitespace-nowrap px-3 py-1.5 rounded-sm bg-[#fbf6ec] border border-[#14141420]">
                {s}
              </div>
              {i < STACK.length - 1 && (
                <span className="px-1 text-ink/60 text-[12px]">→</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </EasterShell>
  );
}
