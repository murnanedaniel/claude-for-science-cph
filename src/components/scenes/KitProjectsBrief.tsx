"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";

const mono = { fontFamily: "var(--font-geist-mono)" };
const serif = { fontFamily: "var(--font-serif)" };

type Project = {
  label: string;
  problem: string;
  brief: { time: string; kind: string; text: string }[];
  doneBy: string;
  results: string[];
  figure?: { src: string; alt: string };
};

const projects: Project[] = [
  {
    label: "Project 1 · GPU halo finder",
    problem: "Find dark-matter halos by linking simulated particles that sit closer than a set distance (friends-of-friends). The fastest GPU codes for this are recent and still competing.",
    brief: [
      { time: "12:23", kind: "brief", text: "Any surprising speedup is a bug until membership and timing method are checked." },
      { time: "13:41", kind: "/goal", text: "a rigorous apples to apples comparison of FRNN and jFOF on AT LEAST some toy synthetic data. Present this as a project slides pdf." },
    ],
    doneBy: "By 17:06",
    results: [
      "Exact against an independent reference on every input.",
      "157x faster than tuned jFoF on a clustered box of 2 million particles.",
      "Level with JZ-Tree, the strongest rival, at 16.8 million.",
      "At 134 million, JZ-Tree was about 2x faster.",
      "A 6-page draft paper. Real simulation data never arrived (needed a human login).",
    ],
    figure: { src: "/galactic/fig1_scaling_clustered.png", alt: "Run time against particle count for four halo finders" },
  },
  {
    label: "Project 3 · RANGE",
    problem: "RANGE is a published add-on that gives machine-learned molecular force fields long-range interactions. Does it reproduce, and can a transformer do the same job?",
    brief: [
      { time: "13:55", kind: "/goal", text: "Reproduce the RANGE paper as a basline, and then implement a transformer version. Get apples to apples timing comparisons" },
      { time: "13:56", kind: "brief", text: "with the official mlcg/range code and Zenodo configs first" },
    ],
    doneBy: "By 17:22",
    results: [
      "The authors' released models give the paper's accuracy numbers in our pipeline.",
      "Retraining on the paper's schedule needs about 30 hours of compute, so it didn't happen that day.",
      "On a 10x shorter schedule, a wider plain network with the same parameter count beat RANGE and the attention version.",
    ],
  },
];

export function KitProjectsBrief({ step }: { step: number }) {
  return (
    <section className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(26px,2.6vw,46px)] leading-tight" style={serif}>Projects 1 and 3 each ran the afternoon from a written brief and a /goal</h1>
      <p className="mt-[0.8vh] text-[clamp(11px,0.95vw,16px)] text-[#625d54]" style={mono}>/goal sets a target that Claude keeps working towards until it is met</p>
      <div className="mt-[2.5vh] grid min-h-0 flex-1 grid-cols-2 gap-[4%]">
        {projects.map(project => (
          <div key={project.label} className="flex min-h-0 flex-col">
            <p className="text-[clamp(12px,1.05vw,18px)] uppercase tracking-wide text-[#625d54]" style={mono}>{project.label}</p>
            <p className="mt-[1vh] text-[clamp(14px,1.2vw,21px)] leading-snug" style={serif}>{project.problem}</p>
            <div className="mt-[1.5vh] space-y-[0.8vh] rounded-lg border border-[#14141422] bg-[#fbf8f1] px-[1vw] py-[1.2vh]">
              {project.brief.map(line => (
                <p key={line.time} className="text-[clamp(11px,0.9vw,15px)] leading-snug" style={mono}>
                  <span className="text-[#625d54]">{line.time} {line.kind}: </span>&ldquo;{line.text}&rdquo;
                </p>
              ))}
            </div>
            {step >= 1 && (
              <motion.div className="mt-[1.8vh] flex min-h-0 flex-1 flex-col" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="text-[clamp(11px,0.95vw,16px)] text-[#625d54]" style={mono}>{project.doneBy}</p>
                <ul className="mt-[0.6vh] space-y-[0.5vh] text-[clamp(13px,1.1vw,19px)] leading-snug" style={serif}>
                  {project.results.map(result => <li key={result}>{result}</li>)}
                </ul>
                {project.figure && <img src={asset(project.figure.src)} alt={project.figure.alt} className="mt-[1vh] min-h-0 w-full flex-1 object-contain object-left" />}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-[1vh] text-[clamp(10px,0.85vw,14px)] text-[#625d54]" style={mono}>Halo timings on one A100 GPU, synthetic particle boxes; RANGE on the MD22 DHA molecule dataset; KIT course, 22 Oct 2026</p>
    </section>
  );
}
