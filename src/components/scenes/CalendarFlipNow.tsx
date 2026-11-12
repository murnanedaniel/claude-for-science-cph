"use client";

import { motion, useMotionValue, useTransform, animate, type MotionValue } from "motion/react";
import { useEffect } from "react";

// April -> November 2026, light mode throughout. Self-contained (the shared
// CalendarFlip fades dark -> light and its vw-sized month names overflow the
// fixed 320px cards). Here the month name has a fixed px size that fits the
// card, and the whole strip scales together, so labels stay inside their box
// at any viewport.

const MONTHS = ["April", "May", "June", "July", "August", "September", "October", "November"];
const CARD_W = 300;
const CARD_H = 340;
const STRIDE = CARD_W + 18;
const N = MONTHS.length - 1;

export function CalendarFlipNow({ step }: { step: number }) {
  return <Flip key={step} />;
}

function Flip() {
  const phase = useMotionValue(0);
  useEffect(() => {
    const ctrl = animate(phase, 1, { duration: 4, ease: [0.42, 0, 0.45, 1] });
    return () => ctrl.stop();
  }, [phase]);
  const currentIdx = useTransform(phase, [0, 0.08, 0.84, 1], [0, 0, N, N]);
  // Scale is capped so the 340px card stays under ~65% of a 720px-high screen.
  const scale = useTransform(phase, [0, 0.06, 0.1, 0.84, 0.93, 1], [1.3, 1.3, 0.85, 0.85, 1.2, 1.2]);

  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-[#f6f1e7]"
      initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="relative" style={{ scale, width: 0, height: 0 }}>
          {MONTHS.map((month, i) => <Card key={month} i={i} month={month} currentIdx={currentIdx} />)}
        </motion.div>
      </div>
    </motion.div>
  );
}

function Card({ i, month, currentIdx }: { i: number; month: string; currentIdx: MotionValue<number> }) {
  const x = useTransform(currentIdx, c => (i - c) * STRIDE);
  const opacity = useTransform(currentIdx, c => {
    const d = Math.abs(i - c);
    if (d < 0.6) return 1;
    if (d > 2.5) return 0;
    return Math.max(0, 1 - (d - 0.6) * 0.6);
  });
  return (
    <motion.div className="absolute flex flex-col items-center justify-center overflow-hidden rounded-lg border border-[#14141420] bg-[#fbf8f1] px-[16px]"
      style={{ left: -CARD_W / 2, top: -CARD_H / 2, width: CARD_W, height: CARD_H, x, opacity, boxShadow: "0 18px 40px -20px rgba(20,20,20,0.35)" }}>
      <div className="mb-3 text-[12px] uppercase tracking-[0.35em] text-[#625d54]" style={{ fontFamily: "var(--font-geist-mono)" }}>2026</div>
      {/* 50px italic serif: "September", the longest name, is about 230px wide, inside the 268px content box. */}
      <div className="whitespace-nowrap text-center italic leading-none text-[#141414]" style={{ fontFamily: "var(--font-serif)", fontSize: 50 }}>{month}</div>
    </motion.div>
  );
}
