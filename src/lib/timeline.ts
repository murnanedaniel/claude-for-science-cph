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
  5: "Claude in collaborations",
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

  // ── Act 2 · Lesson 1 · the Easter paper ──
  { id: "lesson1", label: "Lesson 1 · hypotheses and goals first", act: 2, startSec: 187, endSec: 202, steps: 2, lesson: 1 },
  { id: "easter1Release", label: "Easter · ColliderML release", act: 2, startSec: 202, endSec: 210, steps: 1, lesson: 1 },
  { id: "easter2Bug", label: "Easter · the bug email", act: 2, startSec: 210, endSec: 218, steps: 1, lesson: 1 },
  { id: "easterSpec", label: "Easter · the spec I sent first", act: 2, startSec: 218, endSec: 233, steps: 2, lesson: 1 },
  { id: "easter8Reveal", label: "Easter · the paper", act: 2, startSec: 233, endSec: 255, steps: 3, lesson: 1 },

  // ── Act 2 · Lesson 2 · Remote Control ──
  { id: "lesson2", label: "Lesson 2 · Remote Control is the centre", act: 2, startSec: 255, endSec: 270, steps: 2, lesson: 2 },
  { id: "rorvigRunPhone", label: "Easter · from my phone", act: 2, startSec: 270, endSec: 292, steps: 3, lesson: 2 },
  { id: "easter5Dispatch", label: "Easter · terminal, phone, GPUs", act: 2, startSec: 292, endSec: 307, steps: 2, lesson: 2 },
  { id: "remoteHub", label: "One session reaches everything", act: 2, startSec: 307, endSec: 337, steps: 4, lesson: 2 },

  // ── Act 3 · Lesson 1 again · the KIT afternoon ──
  { id: "calendarFlipNow", label: "Flip · April → November 2026", act: 3, startSec: 337, endSec: 345, steps: 1, lesson: 1, lessonNote: "again" },
  { id: "kitContext", label: "KIT · what I tried", act: 3, startSec: 345, endSec: 360, steps: 2, lesson: 1, lessonNote: "again" },
  { id: "kitIntro", label: "KIT · what we cooked, and when", act: 3, startSec: 360, endSec: 375, steps: 2, lesson: 1, lessonNote: "again" },
  { id: "kitGalactic", label: "Project · dark-matter halos", act: 3, startSec: 375, endSec: 397, steps: 3, lesson: 1, lessonNote: "again" },
  { id: "galacticPaper", label: "Where the halo finder got to", act: 3, startSec: 397, endSec: 419, steps: 3, lesson: 1, lessonNote: "again" },
  { id: "kitRange", label: "Project · beat RANGE", act: 3, startSec: 419, endSec: 441, steps: 3, lesson: 1, lessonNote: "again" },
  { id: "kitUniverse", label: "Project 4 · a new universe", act: 3, startSec: 441, endSec: 471, steps: 4, lesson: 1, lessonNote: "again" },
  { id: "kitUniverseHistory", label: "Project 4 · from data to laws", act: 3, startSec: 471, endSec: 486, steps: 2, lesson: 1, lessonNote: "again" },
  { id: "kitUniversePipeline", label: "Project 4 · building a universe", act: 3, startSec: 486, endSec: 508, steps: 3, lesson: 1, lessonNote: "again" },
  { id: "kitUniverseLab", label: "Project 4 · the agent lab", act: 3, startSec: 508, endSec: 516, steps: 1, lesson: 1, lessonNote: "again" },
  { id: "kitUniverseLadder", label: "Project 4 · the check ladder", act: 3, startSec: 516, endSec: 538, steps: 3, lesson: 1, lessonNote: "again" },
  { id: "basicModelResult", label: "Project 4 · how far it got", act: 3, startSec: 538, endSec: 553, steps: 2, lesson: 1, lessonNote: "again" },

  // ── Act 4 · Lesson 3 · context ──
  { id: "lesson3", label: "Lesson 3 · context everywhere", act: 4, startSec: 553, endSec: 568, steps: 2, lesson: 3 },
  { id: "contextRules", label: "What context my agents get", act: 4, startSec: 568, endSec: 590, steps: 3, lesson: 3 },
  { id: "contextSecondBrain", label: "ScienceDash · every past session is searchable", act: 4, startSec: 590, endSec: 612, steps: 3, lesson: 3 },

  // ── Act 4 · Lesson 4 · another model family ──
  { id: "lesson4", label: "Lesson 4 · another model family reviews", act: 4, startSec: 612, endSec: 627, steps: 2, lesson: 4 },
  { id: "ercJudges", label: "ERC · a panel of outside-family judges", act: 4, startSec: 627, endSec: 649, steps: 3, lesson: 4 },

  // ── Act 4 · Lesson 5 · collaborations ──
  { id: "lesson5", label: "Lesson 5 · collaboration", act: 4, startSec: 649, endSec: 657, steps: 1, lesson: 5 },
  { id: "hamlet", label: "HAMLET · the brain", act: 4, startSec: 657, endSec: 672, steps: 2, lesson: 5 },
  { id: "hamletMeet", label: "HAMLET · on attendees' phones", act: 4, startSec: 672, endSec: 694, steps: 3, lesson: 5 },
  { id: "hamletPanel", label: "HAMLET · on the projector", act: 4, startSec: 694, endSec: 709, steps: 2, lesson: 5 },
  { id: "projectWall", label: "The wall of projects", act: 4, startSec: 709, endSec: 724, steps: 2, lesson: 5 },
  { id: "chatlas", label: "chATLAS · how it finds an answer", act: 4, startSec: 724, endSec: 754, steps: 4, lesson: 5 },

  // ── Act 4 · Lesson 6 · docs ──
  { id: "lesson6", label: "Lesson 6 · talk to Claude in a doc", act: 4, startSec: 754, endSec: 769, steps: 2, lesson: 6 },

  // ── Act 4 · close ──
  { id: "close", label: "Close", act: 4, startSec: 769, endSec: 777, steps: 1 },
];

export const TOTAL_SEC = 777;

export function formatMMSS(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}
