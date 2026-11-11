// The storyboard. One row per scene, in talk order. Single source of truth for
// order, reveal steps and time budget. 15 minutes = 900 s, then 5 min questions.
// line: the one sentence said on this scene. Skeleton: scenes render as
// placeholders (src/content/skeleton.ts) until each is built or ported.

export type Theme = "light";

export type Scene = {
  id: string;
  label: string;
  part: string;
  theme: Theme;
  steps: number;
  startSec: number;
  endSec: number;
  line: string;
};

export const SCENES = [
  // Open (50 s)
  { id: "title",          label: "Title",                        part: "open",    theme: "light", steps: 1, startSec: 0,   endSec: 30,  line: "Who I am." },
  { id: "halfspace",      label: "Halfspace",                    part: "open",    theme: "light", steps: 2, startSec: 30,  endSec: 50,  line: "What Halfspace is, why it matters that I work there, what I do there." },
  // 1. LHC tracking (2 min)
  { id: "rate",           label: "40 million per second",        part: "tracking", theme: "light", steps: 3, startSec: 50,  endSec: 95,  line: "Every 25 ns the beams cross; we keep a tiny fraction, and decide in microseconds." },
  { id: "graph",          label: "Tracks as a graph",            part: "tracking", theme: "light", steps: 2, startSec: 95,  endSec: 135, line: "Treat the hits as a graph, and a GNN finds the tracks." },
  { id: "speed",          label: "60 s to 100 kHz",              part: "tracking", theme: "light", steps: 2, startSec: 135, endSec: 170, line: "It took years of work to make that fast enough. Hold on to tracking; we come back to it." },
  // 2. Three loops (90 s)
  { id: "loops",          label: "Three loops",                  part: "loops",   theme: "light", steps: 3, startSec: 170, endSec: 260, line: "Inner loop: one experiment. Middle loop: experiments to a paper. Outer loop: running a programme." },
  // 3. The Easter paper (2 min)
  { id: "easter-bug",     label: "Easter: the bug email",        part: "easter",  theme: "light", steps: 2, startSec: 260, endSec: 300, line: "Seven months ago: a bug report on our tracking dataset, the day after release." },
  { id: "easter-phone",   label: "Easter: agents from my phone", part: "easter",  theme: "light", steps: 2, startSec: 300, endSec: 345, line: "Over Easter, from my phone, agents found the cause: the beam spot had moved." },
  { id: "easter-paper",   label: "Easter: 16 pages",             part: "easter",  theme: "light", steps: 1, startSec: 345, endSec: 380, line: "Four days later: a 16-page paper. That was the middle loop, closed once." },
  // 4. Seven months on (90 s)
  { id: "since",          label: "Seven months on",              part: "since",   theme: "light", steps: 3, startSec: 380, endSec: 415, line: "Fast forward through seven months: what else got built." },
  { id: "chatlas",        label: "ChATLAS",                      part: "since",   theme: "light", steps: 2, startSec: 415, endSec: 440, line: "ChATLAS: how 6,000 physicists find their own documentation." },
  { id: "hep4m",          label: "HEP4M paper",                  part: "since",   theme: "light", steps: 2, startSec: 440, endSec: 455, line: "A prompting-for-particle-physics paper, almost entirely written with Claude Code." },
  { id: "sciencedash",    label: "ScienceDash",                  part: "since",   theme: "light", steps: 2, startSec: 455, endSec: 470, line: "And I run all of it from ScienceDash." },
  // 5. KIT: five projects in six hours (5 min)
  { id: "kit",            label: "October: KIT",                 part: "kit",     theme: "light", steps: 2, startSec: 470, endSec: 500, line: "October 2026: teaching at KIT, I ran five real, paper-ready projects in six hours." },
  { id: "kit-projects",   label: "The five projects",            part: "kit",     theme: "light", steps: 5, startSec: 500, endSec: 620, line: "Halos, fine-tuning, RANGE, a new universe, tracking: one per click." },
  { id: "kit-scorecard",  label: "One of five",                  part: "kit",     theme: "light", steps: 3, startSec: 620, endSec: 680, line: "One worked. The failures sat around the science, not in it." },
  { id: "galactic-paper", label: "Galactic: where it got to",    part: "kit",     theme: "light", steps: 2, startSec: 680, endSec: 740, line: "Galactic clustering: paper to benchmark to draft in an afternoon." },
  { id: "galactic-plots", label: "Galactic: are you really sure?", part: "kit",   theme: "light", steps: 3, startSec: 740, endSec: 800, line: "The first speed-up was 390x. I asked 'are you really sure?' and it found an untuned baseline." },
  // 6. Takeaways (85 s)
  { id: "better",         label: "Are models getting better?",   part: "close",   theme: "light", steps: 2, startSec: 800, endSec: 830, line: "Yes: I push back on the agent less than I did in May." },
  { id: "patterns",       label: "Patterns that work",           part: "close",   theme: "light", steps: 3, startSec: 830, endSec: 865, line: "Dry-run the night before, write down every human step, check every claim." },
  { id: "platform",       label: "The platform",                 part: "close",   theme: "light", steps: 1, startSec: 865, endSec: 885, line: "Experiments, papers, programme: one platform for all three loops." },
  { id: "thanks",         label: "Questions",                    part: "close",   theme: "light", steps: 1, startSec: 885, endSec: 900, line: "Thank you. Questions." },
] as const satisfies readonly Scene[];

export type SceneId = (typeof SCENES)[number]["id"];
export const TOTAL_SEC = SCENES[SCENES.length - 1].endSec;

export function formatMMSS(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
