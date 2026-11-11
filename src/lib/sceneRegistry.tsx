import type { ReactElement } from "react";
import type { SceneId } from "@/lib/timeline";
import { TitleScene } from "@/components/scenes/TitleScene";
import { placeholder } from "@/components/scenes/PlaceholderScene";

export type SceneComponent = (props: { step: number; onAdvance?: () => void }) => ReactElement;

// Single source of truth for SceneId → component. A missing entry is a type
// error, so a scene cannot be added to the timeline without a component.
export const SCENE_COMPONENTS: Record<SceneId, SceneComponent> = {
  title: TitleScene,
  halfspace: placeholder("halfspace"),
  rate: placeholder("rate"),
  graph: placeholder("graph"),
  speed: placeholder("speed"),
  loops: placeholder("loops"),
  "easter-bug": placeholder("easter-bug"),
  "easter-phone": placeholder("easter-phone"),
  "easter-paper": placeholder("easter-paper"),
  since: placeholder("since"),
  chatlas: placeholder("chatlas"),
  hep4m: placeholder("hep4m"),
  sciencedash: placeholder("sciencedash"),
  kit: placeholder("kit"),
  "kit-projects": placeholder("kit-projects"),
  "kit-scorecard": placeholder("kit-scorecard"),
  "galactic-paper": placeholder("galactic-paper"),
  "galactic-plots": placeholder("galactic-plots"),
  better: placeholder("better"),
  patterns: placeholder("patterns"),
  platform: placeholder("platform"),
  thanks: placeholder("thanks"),
};
