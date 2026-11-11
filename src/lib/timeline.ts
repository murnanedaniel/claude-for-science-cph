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
  | "hep4m"
  | "scienceDash"
  | "kitIntro"
  | "kitProjects"
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
  { id: "calendarFlipNow",  label: "Flip · April → November 2026",        act: 3, startSec: 370, endSec: 378, steps: 1 },
  { id: "projectWall",      label: "All the projects · roulette",         act: 3, startSec: 378, endSec: 420, steps: 3 },
  { id: "chatlas",          label: "ChATLAS · last week",                 act: 3, startSec: 420, endSec: 445, steps: 2 },
  { id: "hep4m",            label: "HEP4M · months of back and forth",    act: 3, startSec: 445, endSec: 460, steps: 2 },
  { id: "scienceDash",      label: "ScienceDash runs all of it",          act: 3, startSec: 460, endSec: 480, steps: 2 },
  // ── Act 4 · KIT, October 2026 (light) ──
  { id: "kitIntro",         label: "KIT · five projects in six hours",    act: 4, startSec: 480, endSec: 505, steps: 2 },
  { id: "kitProjects",      label: "The projects, one infographic each",  act: 4, startSec: 505, endSec: 625, steps: 5 },
  { id: "kitTimeline",      label: "Six hours, animated · where each froze", act: 4, startSec: 625, endSec: 745, steps: 5 },
  { id: "galacticPaper",    label: "Galactic clustering · how close to a paper", act: 4, startSec: 745, endSec: 805, steps: 3 },
  { id: "modelsBetter",     label: "Are the models getting better?",      act: 4, startSec: 805, endSec: 845, steps: 2 },
  { id: "lessons",          label: "Lessons",                             act: 4, startSec: 845, endSec: 885, steps: 3 },
  { id: "thanks",           label: "Questions",                           act: 4, startSec: 885, endSec: 900, steps: 1 },
];

export const TOTAL_SEC = 900;

export function formatMMSS(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}
