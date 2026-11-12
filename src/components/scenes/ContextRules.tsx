"use client";

import { motion } from "motion/react";

const mono = { fontFamily: "var(--font-geist-mono)" };

type Example = {
  kind: string;
  what: string;
  file: string;
  excerpt: string;
  bullets: string[];
};

const examples: Example[] = [
  {
    kind: "CLAUDE.md",
    what: "instructions Claude Code loads into every session",
    file: "~/.claude/CLAUDE.md",
    excerpt:
      "Every app I run should be reachable over Tailscale unless I say otherwise. ... \"it runs on localhost\" is never a finished result.",
    bullets: [
      "My sessions run on a home server and I steer them from my laptop or phone. I have no browser on that server, so a page on its localhost is invisible to me.",
      "Tailscale is a private network between my own devices. The rule says to serve there, never publicly, and to write http:// in the link, since a browser that switches it to https shows a blank page.",
    ],
  },
  {
    kind: "memory",
    what: "a one-fact note Claude writes for itself, read by later sessions",
    file: "memory/cluster-work-needs-remote.md",
    excerpt:
      "Before a cluster maintenance window, every repo or directory of our work on that cluster must have a remote (a private GitHub repo) and be pushed. Reports alone are not enough.",
    bullets: [
      "21 Oct 2026, the day before my KIT course: Perlmutter, the NERSC supercomputer, went down for maintenance at 13:00 UTC.",
      "Three pieces of course code existed only on its disk, one a benchmark repo with no remote. Only the reports had been copied off.",
      "The note tells agents to create the private remote when they start work on a cluster and to push at every milestone.",
    ],
  },
  {
    kind: "skill",
    what: "a packaged set of instructions Claude loads when a task calls for it",
    file: "skills/my-voice/SKILL.md",
    excerpt:
      "instruments, models, and tests never take human action verbs. Not \"the classifier picks up / localises the failure\" but \"the classifier allows us to identify the failure\".",
    bullets: [
      "my-voice was built from 1738 of my own messages (Mar 2024 to Aug 2026), so text written for me follows how I write.",
      "This rule came from my correction, 27 Aug 2026: \"A classifier doesn't pick up anything. That's a human verb.\"",
      "On 14 Oct 2026 I called a grant section Claude drafted \"too claudey\". A memory now sends every text for me through this skill's self-check.",
    ],
  },
];

export function ContextRules({ step }: { step: number }) {
  const i = Math.max(0, Math.min(examples.length - 1, step));
  const ex = examples[i];
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(26px,3vw,50px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
        Three files my agents read, and what went wrong before each rule
      </h1>
      <div className="mt-[2vh] flex gap-[1vw] text-[clamp(12px,1.1vw,18px)]" style={mono}>
        {examples.map((e, k) => (
          <span key={e.kind} className={`rounded-full border px-[1.2vw] py-[0.6vh] ${k === i ? "border-[#141414] bg-[#141414] text-[#f6f1e7]" : "border-[#14141430] text-[#625d54]"}`}>
            {e.kind}
          </span>
        ))}
      </div>
      <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="my-auto flex w-full max-w-[1200px] flex-col gap-[2.6vh] self-center py-[2vh]">
        <p className="text-[clamp(18px,1.7vw,28px)] leading-snug">
          <span style={mono}>{ex.kind}</span>
          <span className="text-[#625d54]">: {ex.what}.</span>
        </p>
        <div className="rounded-xl border border-[#14141422] bg-[#fbf8f1] px-[2.5%] py-[2vh]">
          <p className="text-[clamp(11px,0.95vw,16px)] text-[#625d54]" style={mono}>{ex.file}</p>
          <p className="mt-[1vh] text-[clamp(14px,1.3vw,22px)] leading-snug" style={mono}>{ex.excerpt}</p>
        </div>
        <ul className="flex flex-col gap-[1.6vh] text-[clamp(16px,1.45vw,24px)] leading-snug">
          {ex.bullets.map(b => (
            <li key={b} className="flex gap-[1vw]">
              <span className="text-[#625d54]">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <p className="text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={mono}>
        Excerpts verbatim from my ~/.claude/CLAUDE.md, memory/cluster-work-needs-remote.md, skills/my-voice/SKILL.md; dates and incidents as recorded in those files
      </p>
    </section>
  );
}
