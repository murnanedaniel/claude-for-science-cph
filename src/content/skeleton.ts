// Skeleton content: what each scene will show, and where it comes from.
// Delete an entry once the scene has its own component.
import type { SceneId } from "@/lib/timeline";

export const SKELETON: Partial<Record<SceneId, { headline: string; plan: string[]; from: string }>> = {
  halfspace: { headline: "Why do I also work at Halfspace?", plan: ["What Halfspace is", "Why it matters for this work", "What I do there"], from: "new · need Daniel's 20-second version" },
  rate: { headline: "Why do we need to be fast?", plan: ["Bunch crossing every 25 ns", "40 million per second, keep a sliver", "Decide in microseconds"], from: "KIT eth-rate / NBI rateRamp" },
  graph: { headline: "How do we find tracks?", plan: ["One collision: 350,000 hits", "Treat the hits as a graph"], from: "KIT eth-gnn / NBI gnnSolution" },
  speed: { headline: "How fast did we get?", plan: ["60 s per event → 100 kHz", "We come back to tracking in a minute"], from: "KIT eth-speed / NBI speedJourney" },
  loops: { headline: "Which loops can an agent close?", plan: ["Inner: one experiment", "Middle: experiments to a paper", "Outer: running a programme"], from: "KIT three-loops / NBI loopsViz" },
  "easter-bug": { headline: "What happened the day after we released our dataset?", plan: ["ColliderML release", "The bug email"], from: "NBI easter1Release, easter2Bug" },
  "easter-phone": { headline: "What did agents find over Easter?", plan: ["Dispatching from my phone", "The beam spot had moved: the smoking gun"], from: "NBI easter3SmokingGun, rorvigRunPhone, easter5Dispatch" },
  "easter-paper": { headline: "Four days later: a 16-page paper.", plan: ["The paper", "Caveat: seven months ago"], from: "NBI easter8Reveal" },
  since: { headline: "What happened in the seven months since?", plan: ["Calendar flip: April → November", "A wall of projects", "Three to zoom into"], from: "new · NBI calendarFlip as the transition" },
  chatlas: { headline: "How do 6,000 physicists find their own documentation?", plan: ["ChATLAS", "Last week's result"], from: "KIT ex-chatlas + NEW results from Daniel" },
  hep4m: { headline: "Can a particle physics paper be written with Claude Code?", plan: ["The HEP4M prompting paper", "What the agent wrote vs what I wrote"], from: "KIT ex-hep4m + paper details from Daniel" },
  sciencedash: { headline: "How do I keep track of all of it?", plan: ["ScienceDash: projects, runs, decisions", "Every thread searchable"], from: "KIT ex-sciencedash-tour" },
  kit: { headline: "October: what if we ran five real projects in six hours?", plan: ["Teaching at KIT", "Five paper-ready projects, live"], from: "KIT cooking" },
  "kit-projects": { headline: "Which five projects?", plan: ["Dark-matter halos on GPU", "Fine-tuning as information", "RANGE force fields", "A new universe", "Tracking vs the Kalman filter"], from: "KIT p-galactic, p-finetuning, p-range, p-newuniverse, p-tracking" },
  "kit-scorecard": { headline: "How many worked?", plan: ["One of five", "Data behind a login, trust prompt nobody saw, a tool nobody checked", "The failures sat around the science"], from: "post-mortems (PUBLIC-DRAFT.md)" },
  "galactic-paper": { headline: "How far did the halo finder get?", plan: ["Paper to benchmark to draft in one afternoon", "The draft"], from: "gpu-fof repo · the draft paper" },
  "galactic-plots": { headline: "Was it really 390 times faster?", plan: ["The first claim", "'Are you really sure?' → untuned baseline", "About 11x after tuning (one case); a tie with JZ-Tree"], from: "gpu-fof plots" },
  better: { headline: "Are the models getting better?", plan: ["I push back less than in May", "Longer runs, more projects at once"], from: "KIT quality / what-changed" },
  patterns: { headline: "What works?", plan: ["Dry-run the night before", "Write down every human step", "Check every claim"], from: "KIT post-mortems + one-lesson" },
  platform: { headline: "One platform for all three loops.", plan: ["Experiments, papers, programme"], from: "NBI platform2028 / ScienceDash" },
  thanks: { headline: "Which question do you want to ask first?", plan: ["danielmurnane.com"], from: "KIT thanks" },
};
