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
  | "goalDemo"
  | "kitProjectsBrief"
  | "homeHardware"
  | "contextSecondBrain"
  | "ercJudges"
  | "reviewFinding"
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

export type Lesson = 1 | 2 | 3 | 4 | 5 | 6;

export type Scene = {
  id: SceneId;
  label: string;
  act: 1 | 2 | 3 | 4;
  startSec: number;
  endSec: number;
  steps: number;
  // theme is derived from `act` in Stage.tsx (act >= 2 → light).
  theme?: Theme;
  // Which of the six lessons this scene belongs to. Stage.tsx shows a
  // signpost chip on every lesson-tagged scene except the lesson cards.
  lesson?: Lesson;
  // Extra word after "Lesson N" in the chip, e.g. "again" for the KIT
  // scenes that revisit lesson 1.
  lessonNote?: string;
};

// Short lesson names for the signpost chip. Full card texts live in
// src/components/scenes/LessonCard.tsx.
export const LESSON_SHORT: Record<Lesson, string> = {
  1: "Write down hypotheses and goals first",
  2: "Remote Control at the centre",
  3: "Still put context everywhere",
  4: "Have another model family review",
  5: "Claude for collaboration and project management",
  6: "Talk to Claude in a doc",
};

// Claude for Science, NBI, 12 Nov 2026. 15 minutes + 5 questions.
// Act 1 dark (who I am, tracking); acts 2-4 light. Scenes are grouped by
// lesson so the chip in Stage.tsx can say which lesson we are on.
// Duration per scene = 7.5 s per step, rounded (1→8, 2→15, 3→22, 4→30, 6→45).
export const SCENES: Scene[] = [
  // ── Act 1 · who I am, and why tracking (dark) ──
  { id: "title", label: "Title", act: 1, startSec: 0, endSec: 8, steps: 1 },
  { id: "aboutMe", label: "Halfspace · a banking agent, risks and controls", act: 1, startSec: 8, endSec: 30, steps: 3 },
  { id: "aboutPhysics", label: "Physics · tracking, particle flow, the Higgs", act: 1, startSec: 30, endSec: 60, steps: 4 },
  { id: "rateRamp", label: "40 million per second", act: 1, startSec: 60, endSec: 105, steps: 6 },
  { id: "gnnSolution", label: "Graph tracking on a real event", act: 1, startSec: 105, endSec: 135, steps: 4 },
  { id: "speedJourney", label: "From 60 s to 100 kHz", act: 1, startSec: 135, endSec: 165, steps: 4 },
  { id: "loopsVizOuter", label: "Three loops", act: 1, startSec: 165, endSec: 187, steps: 3 },
  { id: "lesson1", label: "Lesson 1 · hypotheses and goals first", act: 2, startSec: 187, endSec: 202, steps: 2, lesson: 1 },
  { id: "easter1Release", label: "Easter · ColliderML release", act: 2, startSec: 202, endSec: 210, steps: 1, lesson: 1 },
  { id: "easter2Bug", label: "Easter · the bug email", act: 2, startSec: 210, endSec: 218, steps: 1, lesson: 1 },
  { id: "easterSpec", label: "Easter · the spec I sent first", act: 2, startSec: 218, endSec: 233, steps: 2, lesson: 1 },
  { id: "easter8Reveal", label: "Easter · the paper", act: 2, startSec: 233, endSec: 255, steps: 3, lesson: 1 },
  { id: "calendarFlipNow", label: "Flip · April → November 2026", act: 3, startSec: 255, endSec: 263, steps: 1, lesson: 1 },
  { id: "kitContext", label: "KIT · what I tried", act: 3, startSec: 263, endSec: 278, steps: 2, lesson: 1 },
  { id: "goalDemo", label: "/goal · what it is and what it does", act: 3, startSec: 278, endSec: 300, steps: 3, lesson: 1 },
  { id: "kitProjectsBrief", label: "Projects 1 and 3 · from a brief and a goal", act: 3, startSec: 300, endSec: 315, steps: 2, lesson: 1 },
  { id: "kitUniverse", label: "Project 4 · a new universe", act: 3, startSec: 315, endSec: 345, steps: 4, lesson: 1 },
  { id: "kitUniverseHistory", label: "Project 4 · from data to laws", act: 3, startSec: 345, endSec: 360, steps: 2, lesson: 1 },
  { id: "kitUniversePipeline", label: "Project 4 · building a universe", act: 3, startSec: 360, endSec: 382, steps: 3, lesson: 1 },
  { id: "kitUniverseLab", label: "Project 4 · the agent lab", act: 3, startSec: 382, endSec: 390, steps: 1, lesson: 1 },
  { id: "kitUniverseLadder", label: "Project 4 · the check ladder", act: 3, startSec: 390, endSec: 412, steps: 3, lesson: 1 },
  { id: "basicModelResult", label: "Project 4 · how far it got", act: 3, startSec: 412, endSec: 427, steps: 2, lesson: 1 },
  { id: "lesson2", label: "Lesson 2 · Remote Control is the centre", act: 2, startSec: 427, endSec: 442, steps: 2, lesson: 2 },
  { id: "rorvigRunPhone", label: "Easter · from my phone", act: 2, startSec: 442, endSec: 464, steps: 3, lesson: 2 },
  { id: "easter5Dispatch", label: "Easter · terminal, phone, GPUs", act: 2, startSec: 464, endSec: 479, steps: 2, lesson: 2 },
  { id: "homeHardware", label: "What a home server needs to be", act: 2, startSec: 479, endSec: 501, steps: 3, lesson: 2 },
  { id: "remoteHub", label: "One session reaches everything", act: 2, startSec: 501, endSec: 531, steps: 4, lesson: 2 },
  { id: "lesson3", label: "Lesson 3 · context everywhere", act: 4, startSec: 531, endSec: 546, steps: 2, lesson: 3 },
  { id: "contextRules", label: "What context my agents get", act: 4, startSec: 546, endSec: 568, steps: 3, lesson: 3 },
  { id: "contextSecondBrain", label: "ScienceDash · every past session is searchable", act: 4, startSec: 568, endSec: 590, steps: 3, lesson: 3 },
  { id: "lesson4", label: "Lesson 4 · another model family reviews", act: 4, startSec: 590, endSec: 605, steps: 2, lesson: 4 },
  { id: "ercJudges", label: "ERC · a panel of outside-family judges", act: 4, startSec: 605, endSec: 627, steps: 3, lesson: 4 },
  { id: "lesson5", label: "Lesson 5 · collaboration", act: 4, startSec: 627, endSec: 635, steps: 1, lesson: 5 },
  { id: "hamlet", label: "HAMLET · the brain", act: 4, startSec: 635, endSec: 650, steps: 2, lesson: 5 },
  { id: "hamletMeet", label: "HAMLET · on attendees' phones", act: 4, startSec: 650, endSec: 672, steps: 3, lesson: 5 },
  { id: "hamletPanel", label: "HAMLET · on the projector", act: 4, startSec: 672, endSec: 687, steps: 2, lesson: 5 },
  { id: "lesson6", label: "Lesson 6 · talk to Claude in a doc", act: 4, startSec: 687, endSec: 702, steps: 2, lesson: 6 },
  { id: "close", label: "Close", act: 4, startSec: 702, endSec: 710, steps: 1 },
];

export const TOTAL_SEC = 710;

export function formatMMSS(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}
