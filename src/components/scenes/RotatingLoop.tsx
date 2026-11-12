"use client";

import { motion } from "motion/react";

// Build a near-full arc path (sweep ~340°) with a small gap where the
// arrowhead lives. Arc starts at angle gapEnd (deg) and ends at gapStart.
function arcPath(radius: number, gapDeg = 18) {
  // Place the gap at angle 0° (3 o'clock position). Arc goes clockwise
  // from angle (gapDeg/2) all the way around to (-gapDeg/2 + 360).
  const half = gapDeg / 2;
  const startDeg = half;
  const endDeg = 360 - half;
  const start = polar(radius, startDeg);
  const end = polar(radius, endDeg);
  // large-arc-flag = 1 (sweep > 180°), sweep-flag = 1 (clockwise)
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${radius} ${radius} 0 1 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

function polar(r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
}

// Shared geometry and motion; callers own labels and arrow marker definitions.
export function RotatingLoop({ loop, visible, markerId }: {
  loop: { radius: number; period: number; stroke: string; width: number };
  visible: boolean;
  markerId: string;
}) {
  return (
    <motion.g
      initial={{ rotate: 0, opacity: 0, scale: 0.92 }}
      animate={{
        rotate: 360,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.92,
      }}
      transition={{
        rotate: { duration: loop.period, ease: "linear", repeat: Infinity },
        opacity: { duration: 0.7 },
        scale: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
      }}
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
    >
      <path
        d={arcPath(loop.radius)}
        fill="none"
        stroke={loop.stroke}
        strokeWidth={loop.width}
        strokeLinecap="round"
        markerEnd={`url(#${markerId})`}
      />
    </motion.g>
  );
}
