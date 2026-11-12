"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";

const mono = { fontFamily: "var(--font-geist-mono)" };

// Real output of `sd.py search "perlmutter maintenance"`, 12 Nov 2026.
// Machine label and thread links removed; snippets verbatim.
const hits: [string, string][] = [
  ["2026-11-11", "The same is not true for Perlmutter. If Perlmutter closes for maintenance…"],
  ["2026-10-23", "Noted, I'll do the compute on Perlmutter. Reading…"],
  ["2026-10-22", "1. Use the Perlmutter session (fastest). Open `perlmutter` and approve my message…"],
];

// Screenshots of the live dashboard, 12 Nov 2026 (Playwright, read-only).
const shots: { src: string; alt: string; title: string; text: string; note: string }[] = [
  {
    src: "/sciencedash/projects.png",
    alt: "ScienceDash projects page with six project cards",
    title: "Each project has a card with its question, status, tags and next steps",
    text: "When a session starts inside a project's folder, a hook (a script Claude Code runs automatically) pulls that project's brief into the session.",
    note: "Six of my 41 projects shown; the rest are hidden for privacy.",
  },
  {
    src: "/sciencedash/hypotheses.png",
    alt: "Hypotheses tab of the ML track-finding review, each hypothesis with a GPU-hour budget",
    title: "Each project is split into hypotheses with a GPU-hour budget",
    text: "The track-finding review has seven hypotheses. Each one has a written statement and a compute budget, e.g. 300 GPU-hours for comparing binned and learned tokens.",
    note: "An agent picking this up can read what is being tested and how much it may spend before it starts.",
  },
  {
    src: "/sciencedash/autonomy.png",
    alt: "Autonomy settings for agents on one project: ask, propose or auto per action",
    title: "Each project sets what its agents may do without asking me",
    text: "Per action I choose ask, propose or auto. On this project, raising a hypothesis's GPU budget only proposes, and agent spend is capped at 50 GPU-hours.",
    note: "This is the control panel. No agents were registered on it when I took the screenshot.",
  },
];

const sources = [
  "Screen recording of my ScienceDash instance, 12 Nov 2026; private projects, machine names and paths hidden · github.com/murnanedaniel/sciencedash",
  "ScienceDash projects page, 12 Nov 2026; project count from its portfolio page (36 idea, 3 active, 2 parked)",
  "ScienceDash, track-finding review project, Hypotheses & Runs tab, 12 Nov 2026",
  "ScienceDash, track-finding review project, Autonomy panel, 12 Nov 2026",
  "Real output of the sciencedash skill CLI, run 12 Nov 2026; machine label and thread links removed",
];

const frame =
  "overflow-hidden rounded-lg border border-[#14141422] bg-white shadow-[0_10px_24px_-14px_rgba(20,20,20,0.3)]";

export function ContextSecondBrain({ step }: { step: number }) {
  const s = Math.max(0, Math.min(4, step));
  const shot = s >= 1 && s <= 3 ? shots[s - 1] : null;
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(24px,2.8vw,46px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
        Every project and every past session is written down where a new session can read it
      </h1>
      <motion.div key={s} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-0 w-full max-w-[1200px] flex-1 flex-col justify-center self-center py-[2vh]">
        {s === 0 ? (
          <div className="grid min-h-0 grid-cols-[1fr_1.9fr] items-center gap-[3vw]">
            <div className="flex flex-col gap-[2.5vh] text-[clamp(16px,1.5vw,25px)] leading-snug">
              <p>ScienceDash is a dashboard I built. It holds my research projects and the transcript of every Claude Code session I run, on every machine, and any new session can query it.</p>
              <p className="text-[#625d54]">A walk through it: projects, one project&apos;s hypotheses, the agent settings, then a search over past sessions.</p>
            </div>
            <div className={frame}>
              <video
                src={asset("/sciencedash/walkthrough.webm")}
                autoPlay
                muted
                loop
                playsInline
                className="block max-h-[58vh] w-full"
              />
            </div>
          </div>
        ) : shot ? (
          <div className="grid min-h-0 grid-cols-[1.9fr_1fr] items-center gap-[3vw]">
            <div className={frame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(shot.src)} alt={shot.alt} className="block max-h-[58vh] w-full object-contain" />
            </div>
            <div className="flex flex-col gap-[2.2vh]">
              <h2 className="text-[clamp(18px,1.7vw,28px)] leading-snug" style={{ fontFamily: "var(--font-serif)" }}>{shot.title}</h2>
              <p className="text-[clamp(14px,1.3vw,21px)] leading-snug">{shot.text}</p>
              <p className="text-[clamp(13px,1.15vw,19px)] leading-snug text-[#625d54]">{shot.note}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[3vh]">
            <p className="text-[clamp(17px,1.6vw,26px)] leading-snug">A skill (a set of instructions plus a script that Claude Code can call) gives every session one command to search all past conversations. A real search, run today:</p>
            <div className="rounded-xl bg-[#1c1b19] px-[2.5%] py-[2.5vh] text-[clamp(13px,1.2vw,20px)] leading-relaxed text-[#ece6da]" style={mono}>
              <p className="text-[#a8e0b0]">$ sd.py search &quot;perlmutter maintenance&quot;</p>
              <p className="text-[#b9b2a5]">5 conversation(s) matching &apos;perlmutter maintenance&apos;:</p>
              {hits.map(([d, t]) => (
                <p key={d} className="mt-[1vh]"><span className="text-[#b9b2a5]">• [{d}]</span> {t}</p>
              ))}
            </div>
            <p className="text-[clamp(15px,1.35vw,22px)] leading-snug text-[#625d54]">Each hit links to the full thread. Secrets are redacted from transcripts when they are ingested.</p>
          </div>
        )}
      </motion.div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={mono}>{sources[s]}</p>
    </section>
  );
}
