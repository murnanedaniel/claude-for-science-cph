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

// Real SessionStart hook output (cached context files), trimmed; em dashes -> hyphens.
const brief = [
  "## ScienceDash - project context",
  "# Project Brief - A review of ML-based track finding",
  "  for the high luminosity era",
  "status: active",
  "## Primary metric",
  "Tracking efficiency (%) - direction: higher",
  "## Next steps",
  "- Compile all algorithms and papers to be ablated",
];
const unsure = [
  "This session isn't confidently tied to one project.",
  "It may belong to:",
  "- AI Agents in Practice for Physics Research:",
  "  KIT/KSETA one-day course (2026-10-22)",
  "- (two other projects)",
];

const sources = [
  "ScienceDash hypotheses screen, track-finding project, Apr 2026 (KIT course deck) · github.com/murnanedaniel/sciencedash",
  "Real output of the sciencedash skill CLI, run 12 Nov 2026; machine label and thread links removed",
  "~/.claude/hooks/sciencedash-session-start.py and its cached output, trimmed, dashes normalised; two project names withheld",
];

export function ContextSecondBrain({ step }: { step: number }) {
  const s = Math.max(0, Math.min(2, step));
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(26px,3vw,50px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
        Every past session is searchable from every new one
      </h1>
      <motion.div key={s} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-0 w-full max-w-[1200px] flex-1 flex-col justify-center self-center py-[2.5vh]">
        {s === 0 ? (
          <div className="grid min-h-0 grid-cols-[1fr_1.1fr] items-center gap-[3vw]">
            <div className="flex flex-col gap-[2.5vh] text-[clamp(17px,1.6vw,26px)] leading-snug">
              <p>ScienceDash is a dashboard I built. It pulls in the transcript of every Claude Code session, from every machine I work on, into one searchable store.</p>
              <p>It also holds my projects, split into hypotheses, runs and decisions.</p>
              <p className="text-[#625d54]">Any session can query it. That makes it my second brain: what one agent learned last month, the next one can look up.</p>
            </div>
            <div className="h-[52vh] overflow-hidden rounded-lg border border-[#14141422] bg-white shadow-[0_10px_24px_-14px_rgba(20,20,20,0.3)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/kit/r3x/sd-hypotheses.jpg")} alt="ScienceDash: a project split into hypotheses, each with a compute budget" className="block w-full" />
            </div>
          </div>
        ) : s === 1 ? (
          <div className="flex flex-col gap-[3vh]">
            <p className="text-[clamp(17px,1.6vw,26px)] leading-snug">A skill gives every session one command to search all past conversations. A real search, run today:</p>
            <div className="rounded-xl bg-[#1c1b19] px-[2.5%] py-[2.5vh] text-[clamp(13px,1.2vw,20px)] leading-relaxed text-[#ece6da]" style={mono}>
              <p className="text-[#a8e0b0]">$ sd.py search &quot;perlmutter maintenance&quot;</p>
              <p className="text-[#b9b2a5]">5 conversation(s) matching &apos;perlmutter maintenance&apos;:</p>
              {hits.map(([d, t]) => (
                <p key={d} className="mt-[1vh]"><span className="text-[#b9b2a5]">• [{d}]</span> {t}</p>
              ))}
            </div>
            <p className="text-[clamp(15px,1.35vw,22px)] leading-snug text-[#625d54]">Each hit links to the full thread. Secrets are redacted from transcripts when they are ingested.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-[2.5vh]">
            <p className="text-[clamp(17px,1.6vw,26px)] leading-snug">A hook, a script Claude Code runs automatically when a session starts, sends the folder and git repo to ScienceDash. The project brief comes back into the session.</p>
            <div className="grid grid-cols-2 gap-[2vw] text-[clamp(11px,1vw,17px)] leading-relaxed" style={mono}>
              {[["matched a project", brief], ["no confident match", unsure]].map(([label, lines]) => (
                <div key={label as string} className="flex flex-col gap-[1vh]">
                  <p className="text-[#625d54]">{label as string}</p>
                  <div className="rounded-xl bg-[#1c1b19] px-[5%] py-[2vh] text-[#ece6da]">
                    {(lines as string[]).map((l, k) => <p key={k} className="whitespace-pre-wrap">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[clamp(15px,1.35vw,22px)] leading-snug text-[#625d54]">If the dashboard is down, the hook uses its last cached copy, and if that fails it adds nothing rather than blocking the session.</p>
          </div>
        )}
      </motion.div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={mono}>{sources[s]}</p>
    </section>
  );
}
