export type SceneId =
  | "title"
  | "rateRamp"
  | "gnnSolution"
  | "speedJourney"
  | "loopsViz"
  | "quirksAside"
  | "innerLoopHistory"
  | "loopsVizMiddle"
  | "easter1Release"
  | "easter2Bug"
  | "rorvigRunPhone"
  | "easter5Dispatch"
  | "easter3SmokingGun"
  | "easter4CrossEval"
  | "easter6Architecture"
  | "easter7Discovery"
  | "easter8Reveal"
  | "easter9Thesis"
  | "easter10WhyPossible"
  | "statsFeint"
  // ── Part 2 · flip to 2028 (the concept) ──
  | "calendarFlip2028"
  | "platform2028"
  | "loopsVizOuter"
  | "nbiGraph"
  | "matchmaking"
  | "faculty2031Teaching"
  | "phdPedagogy"
  // ── Part 2 climax · flip to 2031 (the platform, external) ──
  | "calendarFlip2031"
  | "colliderLabLaunch"
  // ── Part 3 · flip back to 2026 (the real deliverables) ──
  | "calendarFlip2026back"
  | "deliverables2026"
  | "nbiAINativeCallToAction"
  | "claudeFinalSlide"
  // ── Claude for Science, Copenhagen (new scenes) ──
  | "aboutMe"
  | "calendarFlipNow"
  | "projectWall"
  | "chatlas"
  | "scienceDash"
  | "kitIntro"
  | "kitGalactic"
  | "kitFinetuning"
  | "kitRange"
  | "kitUniverse"
  | "kitServing"
  | "kitTimeline"
  | "galacticPaper"
  | "modelsBetter"
  | "lessons"
  | "thanks";

export type Theme = "dark" | "light";

export type Scene = {
  id: SceneId;
  label: string;
  act: 1 | 2 | 3 | 4;
  startSec: number;
  endSec: number;
  steps: number;
  // theme is derived from `act` in Stage.tsx (act >= 3 → light).
  theme?: Theme;
};

// Claude for Science, NBI, 12 Nov 2026. 15 minutes + 5 questions.
// Acts 1-2 dark (the LHC and the Easter paper), acts 3-4 light (since then).
export const SCENES: Scene[] = [
  // ── Act 1 · who I am, and why tracking (dark) ──
  { id: "title",            label: "Title",                               act: 1, startSec: 0,   endSec: 25,  steps: 1 },
  { id: "aboutMe",          label: "About me · Halfspace, NBI, CERN, Berkeley", act: 1, startSec: 25,  endSec: 50,  steps: 3 },
  { id: "rateRamp",         label: "40 million per second",               act: 1, startSec: 50,  endSec: 85,  steps: 6 },
  { id: "gnnSolution",      label: "Graph tracking on a real event",      act: 1, startSec: 85,  endSec: 125, steps: 4 },
  { id: "speedJourney",     label: "From 60 s to 100 kHz",                act: 1, startSec: 125, endSec: 150, steps: 4 },
  // ── Act 2 · three loops, and the Easter paper (dark) ──
  { id: "loopsVizOuter",    label: "Three loops on one slide",            act: 2, startSec: 150, endSec: 240, steps: 3 },
  { id: "easter1Release",   label: "Easter · ColliderML release (simulated with Claude)", act: 2, startSec: 240, endSec: 255, steps: 1 },
  { id: "easter2Bug",       label: "Easter · bug email",                  act: 2, startSec: 255, endSec: 275, steps: 1 },
  { id: "easter3SmokingGun",label: "Easter · beamspot + smoking gun",     act: 2, startSec: 275, endSec: 300, steps: 3 },
  { id: "easter5Dispatch",  label: "Easter · dispatching from my phone",  act: 2, startSec: 300, endSec: 335, steps: 2 },
  { id: "easter8Reveal",    label: "Easter · the paper · 16 pages",       act: 2, startSec: 335, endSec: 370, steps: 3 },
  // ── Act 3 · the seven months since (light) ──
  { id: "calendarFlipNow",  label: "Flip · April → November 2026",        act: 3, startSec: 370, endSec: 376, steps: 1 },
  { id: "projectWall",      label: "All the projects · roulette",         act: 3, startSec: 376, endSec: 392, steps: 2 },
  { id: "chatlas",          label: "ChATLAS · last week",                 act: 3, startSec: 392, endSec: 425, steps: 3 },
  { id: "scienceDash",      label: "ScienceDash runs all of it",          act: 3, startSec: 425, endSec: 445, steps: 2 },

  { id: "kitIntro",         label: "KIT · what we cooked, and when",      act: 4, startSec: 445, endSec: 465, steps: 1 },
  { id: "kitGalactic",      label: "Project · dark-matter halos",         act: 4, startSec: 465, endSec: 480, steps: 1 },
  { id: "kitFinetuning",    label: "Project · fine-tuning",               act: 4, startSec: 480, endSec: 490, steps: 1 },
  { id: "kitRange",         label: "Project · beat RANGE",                act: 4, startSec: 490, endSec: 505, steps: 1 },
  { id: "kitUniverse",      label: "Project · a new universe",            act: 4, startSec: 505, endSec: 520, steps: 1 },
  { id: "kitTimeline",      label: "Six hours, animated · where each froze", act: 4, startSec: 520, endSec: 640, steps: 6 },
  { id: "kitServing",       label: "What the projects cooked",            act: 4, startSec: 640, endSec: 660, steps: 1 },
  { id: "galacticPaper",    label: "Galactic clustering · how close to a paper", act: 4, startSec: 660, endSec: 720, steps: 3 },
  { id: "modelsBetter",     label: "Are the models getting better?",      act: 4, startSec: 720, endSec: 750, steps: 1 },
  { id: "lessons",          label: "Lessons",                             act: 4, startSec: 750, endSec: 870, steps: 3 },
  { id: "thanks",           label: "Questions",                           act: 4, startSec: 870, endSec: 900, steps: 1 },
];

export const TOTAL_SEC = 900;

export function formatMMSS(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}
