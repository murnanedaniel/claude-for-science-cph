import * as KitScenes from "@/components/kit/scenes";
import type { SceneId } from "@/lib/timeline";
import { TitleSlide } from "@/components/scenes/TitleSlide";
import { RateRamp } from "@/components/scenes/RateRamp";
import { GnnSolution } from "@/components/scenes/GnnSolution";
import { SpeedJourney } from "@/components/scenes/SpeedJourney";
import { InnerLoopHistory } from "@/components/scenes/InnerLoopHistory";
import { QuirksAside } from "@/components/scenes/QuirksAside";
import { LoopsVizMiddle } from "@/components/scenes/LoopsVizMiddle";
import { LoopsVizOuter } from "@/components/scenes/LoopsVizOuter";
import { EasterRelease } from "@/components/scenes/EasterRelease";
import { EasterBug } from "@/components/scenes/EasterBug";
import { RorvigRunPhone } from "@/components/scenes/RorvigRunPhone";
import { EasterSmokingGun } from "@/components/scenes/EasterSmokingGun";
import { EasterCrossEval } from "@/components/scenes/EasterCrossEval";
import { EasterDispatch } from "@/components/scenes/EasterDispatch";
import { EasterArchitecture } from "@/components/scenes/EasterArchitecture";
import { EasterDiscovery } from "@/components/scenes/EasterDiscovery";
import { EasterReveal } from "@/components/scenes/EasterReveal";
import { EasterThesis } from "@/components/scenes/EasterThesis";
import { EasterWhyPossible } from "@/components/scenes/EasterWhyPossible";
import { StatsFeint } from "@/components/scenes/StatsFeint";
import { NbiGraph } from "@/components/scenes/NbiGraph";
import { Matchmaking } from "@/components/scenes/Matchmaking";
import { Faculty2031Teaching } from "@/components/scenes/Faculty2031Teaching";
import { PhDPedagogy } from "@/components/scenes/PhDPedagogy";
import { NBIAINativeCallToAction } from "@/components/scenes/NBIAINativeCallToAction";
import { ClaudeFinalSlide } from "@/components/scenes/ClaudeFinalSlide";
import { CalendarFlip2028, CalendarFlip2031, CalendarFlip2026Back } from "@/components/scenes/CalendarFlip";
import { Platform2028 } from "@/components/scenes/Platform2028";
import { ColliderLabLaunch } from "@/components/scenes/ColliderLabLaunch";
import { Deliverables2026 } from "@/components/scenes/Deliverables2026";
import { LoopsViz } from "@/components/scenes/LoopsViz";
import { CalendarFlipNow } from "@/components/scenes/CalendarFlipNow";
import { ProjectWall } from "@/components/scenes/ProjectWall";
import { KitTimeline } from "@/components/scenes/KitTimeline";
import { GalacticPaper } from "@/components/scenes/GalacticPaper";
import { EasterTyped } from "@/components/scenes/EasterTyped";
import { ChatlasAsk } from "@/components/scenes/ChatlasAsk";
import { ChatlasTicket } from "@/components/scenes/ChatlasTicket";
import { ThreeClaims } from "@/components/scenes/ThreeClaims";
import { CloseSlide } from "@/components/scenes/CloseSlide";
import { AboutMe } from "@/components/scenes/AboutMe";
import { AboutPhysics } from "@/components/scenes/AboutPhysics";
import { Lesson1, Lesson2, Lesson3, Lesson4, Lesson5, Lesson6 } from "@/components/scenes/LessonCard";
import { KitContext } from "@/components/scenes/KitContext";
import { BasicModelResult } from "@/components/scenes/BasicModelResult";
import { EasterSpec } from "@/components/scenes/EasterSpec";
import { RemoteHub } from "@/components/scenes/RemoteHub";
import { ContextRules } from "@/components/scenes/ContextRules";
import { ContextSecondBrain } from "@/components/scenes/ContextSecondBrain";

export type SceneComponent = (props: {
  step: number;
  onAdvance?: () => void;
}) => React.ReactElement;

// Single source of truth for SceneId → component. Consumed by both the live
// deck (Stage) and the chrome-less /embed route used by the reading article.
export const SCENE_COMPONENTS: Partial<Record<SceneId, SceneComponent>> = {
  chatlas: KitScenes.chatlas as unknown as SceneComponent,
  scienceDash: KitScenes.scienceDash as unknown as SceneComponent,
  kitIntro: KitScenes.kitIntro as unknown as SceneComponent,
  kitGalactic: KitScenes.kitGalactic as unknown as SceneComponent,
  kitFinetuning: KitScenes.kitFinetuning as unknown as SceneComponent,
  kitRange: KitScenes.kitRange as unknown as SceneComponent,
  kitUniverse: KitScenes.kitUniverse as unknown as SceneComponent,
  kitServing: KitScenes.kitServing as unknown as SceneComponent,
  modelsBetter: KitScenes.modelsBetter as unknown as SceneComponent,

  title: TitleSlide,
  contextSecondBrain: ContextSecondBrain as unknown as SceneComponent,
  ercJudges: KitScenes.ercJudges as unknown as SceneComponent,
  aboutPhysics: AboutPhysics as unknown as SceneComponent,
  lesson1: Lesson1 as unknown as SceneComponent,
  lesson2: Lesson2 as unknown as SceneComponent,
  lesson3: Lesson3 as unknown as SceneComponent,
  lesson4: Lesson4 as unknown as SceneComponent,
  lesson5: Lesson5 as unknown as SceneComponent,
  lesson6: Lesson6 as unknown as SceneComponent,
  kitContext: KitContext as unknown as SceneComponent,
  basicModelResult: BasicModelResult as unknown as SceneComponent,
  easterSpec: EasterSpec as unknown as SceneComponent,
  remoteHub: RemoteHub as unknown as SceneComponent,
  contextRules: ContextRules as unknown as SceneComponent,
  kitUniverseHistory: KitScenes.kitUniverseHistory as unknown as SceneComponent,
  kitUniversePipeline: KitScenes.kitUniversePipeline as unknown as SceneComponent,
  kitUniverseLab: KitScenes.kitUniverseLab as unknown as SceneComponent,
  kitUniverseLadder: KitScenes.kitUniverseLadder as unknown as SceneComponent,
  hamlet: KitScenes.hamlet as unknown as SceneComponent,
  hamletMeet: KitScenes.hamletMeet as unknown as SceneComponent,
  hamletPanel: KitScenes.hamletPanel as unknown as SceneComponent,
  aboutMe: AboutMe as unknown as SceneComponent,
  easterTyped: EasterTyped as unknown as SceneComponent,
  chatlasAsk: ChatlasAsk as unknown as SceneComponent,
  chatlasTicket: ChatlasTicket as unknown as SceneComponent,
  threeClaims: ThreeClaims as unknown as SceneComponent,
  close: CloseSlide as unknown as SceneComponent,
  calendarFlipNow: CalendarFlipNow as unknown as SceneComponent,
  projectWall: ProjectWall as unknown as SceneComponent,
  kitTimeline: KitTimeline as unknown as SceneComponent,
  galacticPaper: GalacticPaper as unknown as SceneComponent,
  rateRamp: RateRamp,
  gnnSolution: GnnSolution,
  speedJourney: SpeedJourney,
  loopsViz: LoopsViz as unknown as SceneComponent,
  quirksAside: QuirksAside as unknown as SceneComponent,
  innerLoopHistory: InnerLoopHistory as unknown as SceneComponent,
  loopsVizMiddle: LoopsVizMiddle as unknown as SceneComponent,
  loopsVizOuter: LoopsVizOuter as unknown as SceneComponent,
  easter1Release: EasterRelease as unknown as SceneComponent,
  easter2Bug: EasterBug as unknown as SceneComponent,
  rorvigRunPhone: RorvigRunPhone as unknown as SceneComponent,
  easter3SmokingGun: EasterSmokingGun as unknown as SceneComponent,
  easter4CrossEval: EasterCrossEval as unknown as SceneComponent,
  easter5Dispatch: EasterDispatch as unknown as SceneComponent,
  easter6Architecture: EasterArchitecture as unknown as SceneComponent,
  easter7Discovery: EasterDiscovery as unknown as SceneComponent,
  easter8Reveal: EasterReveal as unknown as SceneComponent,
  easter9Thesis: EasterThesis as unknown as SceneComponent,
  easter10WhyPossible: EasterWhyPossible as unknown as SceneComponent,
  statsFeint: StatsFeint as unknown as SceneComponent,
  calendarFlip2028: CalendarFlip2028 as unknown as SceneComponent,
  platform2028: Platform2028 as unknown as SceneComponent,
  nbiGraph: NbiGraph as unknown as SceneComponent,
  matchmaking: Matchmaking as unknown as SceneComponent,
  faculty2031Teaching: Faculty2031Teaching as unknown as SceneComponent,
  phdPedagogy: PhDPedagogy as unknown as SceneComponent,
  calendarFlip2031: CalendarFlip2031 as unknown as SceneComponent,
  colliderLabLaunch: ColliderLabLaunch as unknown as SceneComponent,
  calendarFlip2026back: CalendarFlip2026Back as unknown as SceneComponent,
  deliverables2026: Deliverables2026 as unknown as SceneComponent,
  nbiAINativeCallToAction: NBIAINativeCallToAction as unknown as SceneComponent,
  claudeFinalSlide: ClaudeFinalSlide as unknown as SceneComponent,
};
