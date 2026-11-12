"use client";

import { LoopsViz } from "./LoopsViz";

// Build from the inner loop to all three loops over the three steps.
export function LoopsVizOuter({ step = 0 }: { step?: number }) {
  return (
    <div className="absolute inset-0">
      <LoopsViz step={Math.min(step, 2)} theme="light" hideHeadline />
    </div>
  );
}
