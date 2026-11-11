"use client";

import { KitBeat } from "./KitBeat";
import { ChatlasLatest } from "./ChatlasLatest";
import { ChatlasDetailR39 } from "./r39/ChatlasDetailR39";
import { ScienceDashTourR32 } from "./r32/ScienceDashTourR32";
import { CookingR6 } from "./r6/CookingR6";
import { Galactic } from "./r35/Galactic";
import { FineTuningIntro } from "./r41/FineTuning";
import { RangeWhy } from "./r7/RangeWhy";
import { InverseProblem } from "./r9/InverseProblem";
import { ServingScene } from "./r12/Serving";
import { Quality } from "./r5/Quality";

function ChatlasWithLatest({ step }: { step: number }) {
  return step < 3 ? <ChatlasDetailR39 step={step} /> : <ChatlasLatest />;
}

export function chatlas({ step }: { step: number }) {
  return <KitBeat title={"How does chATLAS find an answer?"} source={"chATLAS draft paper (ATLAS ML Forum, Sep 2026), slides 3, 7 and 10; step 3 plot redrawn from slide 7 values read by eye; public in about two weeks"} Scene={ChatlasWithLatest} step={step} />;
}

export function scienceDash({ step }: { step: number }) {
  return <KitBeat title={"What does it look like in use?"} source={"ScienceDash screens of the track-finding project (project 5), Apr 2026, cropped to hide hostnames and paths; search screen 21 Oct 2026 · github.com/murnanedaniel/sciencedash"} Scene={ScienceDashTourR32} step={step} />;
}

export function kitIntro({ step }: { step: number }) {
  return <KitBeat title={"What will we cook today, and when?"} source={"Projects: course plan (Oct 2026), numbered in presentation order · times: today’s timeline, approximate"} Scene={CookingR6} step={step} />;
}

export function kitGalactic({ step }: { step: number }) {
  return <KitBeat title={"Project 1: how do we find dark-matter halos?"} source={"Toy points, not simulation data · friends-of-friends: Davis et al., ApJ 292 (1985) 371 · Quijote: Villaescusa-Navarro et al., ApJS 250 (2020) 2 (44,100 sims; 512³ in 1 Gpc/h; FoF b = 0.2, ≥ 20 particles) · tracer mass: our arithmetic, Ωm ρcrit V / N with Ωm = 0.3175"} Scene={Galactic} step={step} />;
}

export function kitFinetuning({ step }: { step: number }) {
  return <KitBeat title={"Project 2: how much must conspire in a tuned model?"} source={"Barbieri and Giudice, Nucl. Phys. B 306 (1988) 63 · Fichet, arXiv:1204.4940, PRD 86 (2012) 125029 · Barnard, Murnane, White, Williams, arXiv:1703.07653, JHEP 09 (2017) 049 · Fowlie and Herrera 2024, information-theoretic BG (as cited in my draft's abstract) · Halverson, Harvey, Nee, arXiv:2603.01411 (Mar 2026) · cancellation drawn schematically"} Scene={FineTuningIntro} step={step} />;
}

export function kitRange({ step }: { step: number }) {
  return <KitBeat title={"Project 3: can a transformer beat RANGE?"} source={"Idea: C. Clementi, keynote \"Modeling protein dynamics with machine learning and molecular simulations\", HAMLET 2026, 19 Aug 2026 · RANGE, and cutoffs against the reach of electrostatics: Caruso et al., Nat. Commun. 17 (2026), arXiv:2502.13797, Introduction · MD22: sgdml.org · code: github.com/ClementiGroup/range (MIT) · axes schematic"} Scene={RangeWhy} step={step} />;
}

export function kitUniverse({ step }: { step: number }) {
  return <KitBeat title={"Project 4: can agents discover the laws of a new universe?"} source={'Design: my Basic Model design notes, 20 Oct 2026. The laws stay sealed until the reveal.'} Scene={InverseProblem} step={step} />;
}

export function kitServing({ step }: { step: number }) {
  return <KitBeat title={"What did the five projects cook today?"} source={"Projects as started today: 1 to 3 this morning, 4 and 5 after lunch (5 pre-cooked) · tally counted live on stage, 22 Oct 2026"} Scene={ServingScene} step={step} />;
}

export function modelsBetter({ step }: { step: number }) {
  return <KitBeat title={"I push back on the agent less than I did in May."} source={"My own threads: 2,015 messages in 27 Perlmutter Claude Code threads, May–Oct 2026, labelled by Haiku; Sonnet re-labelled 150 of them: pushback yes/no agrees on 89% (Cohen's κ about 0.73); the 0.65 is κ over all five categories (76% raw agreement), mostly other vs instruction · Wilson 95% intervals · April (6 messages) omitted"} Scene={Quality} step={step} />;
}
