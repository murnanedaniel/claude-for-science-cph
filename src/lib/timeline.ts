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
  | "thanks"
  | "easterTyped"
  | "chatlasAsk"
  | "chatlasTicket"
  | "threeClaims"
  | "close";

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
  { id: "title", label: "Title", act: 1, startSec: 0, endSec: 20, steps: 1 },
  { id: "aboutMe", label: "About me · Halfspace, NBI, CERN, Berkeley", act: 1, startSec: 20, endSec: 50, steps: 3 },
  { id: "rateRamp", label: "40 million per second", act: 1, startSec: 50, endSec: 80, steps: 6 },
  { id: "gnnSolution", label: "Graph tracking on a real event", act: 1, startSec: 80, endSec: 110, steps: 4 },
  { id: "speedJourney", label: "From 60 s to 100 kHz", act: 1, startSec: 110, endSec: 150, steps: 4 },

  { id: "loopsVizOuter", label: "Three loops: how long until something tells you you're wrong?", act: 2, startSec: 150, endSec: 200, steps: 3 },
  { id: "easter1Release", label: "Easter · ColliderML release", act: 2, startSec: 200, endSec: 215, steps: 1 },
  { id: "easter2Bug", label: "Easter · twice as precise. A bug?", act: 2, startSec: 215, endSec: 240, steps: 1 },
  { id: "easterTyped", label: "Lesson 1 · what did I actually type?", act: 2, startSec: 240, endSec: 300, steps: 5 },
  { id: "easter3SmokingGun", label: "Easter · a model that always answers zero", act: 2, startSec: 300, endSec: 330, steps: 3 },
  { id: "easter8Reveal", label: "Easter · the paper", act: 2, startSec: 330, endSec: 350, steps: 3 },

  { id: "calendarFlipNow", label: "Flip · April → November 2026", act: 3, startSec: 350, endSec: 356, steps: 1 },
  { id: "projectWall", label: "The wall of projects (unnarrated)", act: 3, startSec: 356, endSec: 370, steps: 2 },
  { id: "chatlasAsk", label: "Lesson 2 · can it answer our colleagues' questions?", act: 3, startSec: 370, endSec: 410, steps: 2 },
  { id: "chatlasTicket", label: "Lesson 2 · can it do the ticket?", act: 3, startSec: 410, endSec: 460, steps: 3 },

  { id: "kitIntro", label: "Lesson 3 · KIT, five projects in an afternoon", act: 4, startSec: 460, endSec: 475, steps: 2 },
  { id: "kitGalactic", label: "Project · dark-matter halos", act: 4, startSec: 475, endSec: 490, steps: 3 },
  { id: "kitRange", label: "Project · beat RANGE", act: 4, startSec: 490, endSec: 505, steps: 3 },
  { id: "kitUniverse", label: "Project · a new universe", act: 4, startSec: 505, endSec: 530, steps: 4 },
  { id: "kitTimeline", label: "Lesson 3 · the afternoon, lane by lane", act: 4, startSec: 530, endSec: 620, steps: 6 },
  { id: "threeClaims", label: "Lesson 4 · three claims, which would you believe?", act: 4, startSec: 620, endSec: 690, steps: 5 },
  { id: "galacticPaper", label: "Lesson 4 · where the halo finder got to", act: 4, startSec: 690, endSec: 770, steps: 3 },
  { id: "modelsBetter", label: "Lesson 5 · are the models getting better?", act: 4, startSec: 770, endSec: 850, steps: 3 },
  { id: "close", label: "Close", act: 4, startSec: 850, endSec: 900, steps: 1 },
];

export const TOTAL_SEC = 900;

export function formatMMSS(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}
