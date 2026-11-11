"use client";

import { SceneFrame } from "@/components/kit/SceneFrame";
import { SKELETON } from "@/content/skeleton";
import { SCENES, formatMMSS, type SceneId } from "@/lib/timeline";

// Skeleton scene: shows the headline, the plan revealed per step, the line to
// say, and where the real scene will be ported from.
export function placeholder(id: SceneId) {
  return function Placeholder({ step }: { step: number }) {
    const s = SKELETON[id]!;
    const scene = SCENES.find((x) => x.id === id)!;
    return (
      <SceneFrame headline={s.headline} source={`skeleton · from: ${s.from}`}>
        <div className="flex h-full flex-col justify-center gap-[3vh] px-[5vw]">
          <ul className="t-body space-y-[1.5vh]">
            {s.plan.map((p, i) => (
              <li key={i} style={{ opacity: i <= step ? 1 : 0.15 }}>{p}</li>
            ))}
          </ul>
          <p className="t-label text-faint">
            {formatMMSS(scene.startSec)}–{formatMMSS(scene.endSec)} · say: {scene.line}
          </p>
        </div>
      </SceneFrame>
    );
  };
}
