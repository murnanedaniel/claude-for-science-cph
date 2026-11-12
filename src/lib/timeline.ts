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
  | "close"
  | "hamletPanel"
  | "hamletMeet"
  | "hamlet"
  | "contextRules"
  | "remoteHub"
  | "easterSpec"
  | "lesson6"
  | "aboutPhysics"
  | "lesson1"
  | "lesson2"
  | "lesson3"
  | "lesson4"
  | "lesson5"
  | "kitContext"
  | "kitUniverseHistory"
  | "kitUniversePipeline"
  | "kitUniverseLab"
  | "kitUniverseLadder"
  | "basicModelResult";

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
  { id: "title", label: "Title", act: 1, startSec: 0, endSec: 8, steps: 1 },
  { id: "aboutMe", label: "Halfspace · a banking agent, risks and controls", act: 1, startSec: 8, endSec: 30, steps: 3 },
  { id: "aboutPhysics", label: "Physics · tracking, particle flow, the Higgs", act: 1, startSec: 30, endSec: 60, steps: 4 },
  { id: "rateRamp", label: "40 million per second", act: 1, startSec: 60, endSec: 105, steps: 6 },
  { id: "gnnSolution", label: "Graph tracking on a real event", act: 1, startSec: 105, endSec: 135, steps: 4 },
  { id: "speedJourney", label: "From 60 s to 100 kHz", act: 1, startSec: 135, endSec: 165, steps: 4 },

  { id: "loopsVizOuter", label: "Three loops", act: 2, startSec: 165, endSec: 187, steps: 3 },
  { id: "lesson1", label: "Lesson 1 · hypotheses and goals first", act: 2, startSec: 187, endSec: 202, steps: 2 },
  { id: "easter1Release", label: "Easter · ColliderML release", act: 2, startSec: 202, endSec: 210, steps: 1 },
  { id: "easter2Bug", label: "Easter · the bug email", act: 2, startSec: 210, endSec: 218, steps: 1 },
  { id: "easterSpec", label: "Easter · the spec I sent first", act: 2, startSec: 218, endSec: 233, steps: 2 },
  { id: "easter3SmokingGun", label: "Easter · a model that always answers zero", act: 2, startSec: 233, endSec: 255, steps: 3 },
  { id: "easterTyped", label: "Easter · what I typed", act: 2, startSec: 255, endSec: 293, steps: 5 },
  { id: "easter8Reveal", label: "Easter · the paper", act: 2, startSec: 293, endSec: 315, steps: 3 },
  { id: "lesson2", label: "Lesson 2 · Remote Control is the centre", act: 2, startSec: 315, endSec: 330, steps: 2 },
  { id: "rorvigRunPhone", label: "Easter · from my phone", act: 2, startSec: 330, endSec: 352, steps: 3 },
  { id: "easter5Dispatch", label: "Easter · terminal, phone, GPUs", act: 2, startSec: 352, endSec: 367, steps: 2 },
  { id: "remoteHub", label: "One session reaches everything", act: 2, startSec: 367, endSec: 389, steps: 3 },

  { id: "calendarFlipNow", label: "Flip · April → November 2026", act: 3, startSec: 389, endSec: 397, steps: 1 },
  { id: "projectWall", label: "The wall of projects", act: 3, startSec: 397, endSec: 412, steps: 2 },
  { id: "kitContext", label: "KIT · what I tried", act: 3, startSec: 412, endSec: 427, steps: 2 },
  { id: "kitIntro", label: "KIT · what we cooked, and when", act: 3, startSec: 427, endSec: 442, steps: 2 },
  { id: "kitGalactic", label: "Project · dark-matter halos", act: 3, startSec: 442, endSec: 464, steps: 3 },
  { id: "kitRange", label: "Project · beat RANGE", act: 3, startSec: 464, endSec: 486, steps: 3 },
  { id: "kitUniverse", label: "Project 4 · a new universe", act: 3, startSec: 486, endSec: 516, steps: 4 },
  { id: "kitUniverseHistory", label: "Project 4 · from data to laws", act: 3, startSec: 516, endSec: 531, steps: 2 },
  { id: "kitUniversePipeline", label: "Project 4 · building a universe", act: 3, startSec: 531, endSec: 553, steps: 3 },
  { id: "kitUniverseLab", label: "Project 4 · the agent lab", act: 3, startSec: 553, endSec: 561, steps: 1 },
  { id: "kitUniverseLadder", label: "Project 4 · the check ladder", act: 3, startSec: 561, endSec: 583, steps: 3 },
  { id: "basicModelResult", label: "Project 4 · how far it got", act: 3, startSec: 583, endSec: 605, steps: 3 },
  { id: "kitTimeline", label: "The afternoon, three projects", act: 3, startSec: 605, endSec: 643, steps: 5 },

  { id: "lesson3", label: "Lesson 3 · context everywhere", act: 4, startSec: 643, endSec: 658, steps: 2 },
  { id: "contextRules", label: "What context my agents get", act: 4, startSec: 658, endSec: 680, steps: 3 },
  { id: "lesson4", label: "Lesson 4 · another model family reviews", act: 4, startSec: 680, endSec: 695, steps: 2 },
  { id: "threeClaims", label: "Three claims", act: 4, startSec: 695, endSec: 733, steps: 5 },
  { id: "galacticPaper", label: "Where the halo finder got to", act: 4, startSec: 733, endSec: 755, steps: 3 },
  { id: "lesson5", label: "Lesson 5 · collaboration", act: 4, startSec: 755, endSec: 763, steps: 1 },
  { id: "hamlet", label: "HAMLET · the brain", act: 4, startSec: 763, endSec: 778, steps: 2 },
  { id: "hamletMeet", label: "HAMLET · on attendees' phones", act: 4, startSec: 778, endSec: 800, steps: 3 },
  { id: "hamletPanel", label: "HAMLET · on the projector", act: 4, startSec: 800, endSec: 815, steps: 2 },
  { id: "chatlasAsk", label: "ChATLAS · can it answer questions?", act: 4, startSec: 815, endSec: 830, steps: 2 },
  { id: "chatlasTicket", label: "ChATLAS · can it do the ticket?", act: 4, startSec: 830, endSec: 852, steps: 3 },
  { id: "lesson6", label: "Lesson 6 · talk to Claude in a doc", act: 4, startSec: 852, endSec: 867, steps: 2 },
  { id: "modelsBetter", label: "Pushback since May", act: 4, startSec: 867, endSec: 889, steps: 3 },
  { id: "close", label: "Close", act: 4, startSec: 889, endSec: 897, steps: 1 },
];

export const TOTAL_SEC = 897;

export function formatMMSS(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}
