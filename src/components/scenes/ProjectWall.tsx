"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import titles from "@/lib/projectWall.json";

const winner = titles.indexOf("ChATLAS for Automatic ATLAS Analysis");

export function ProjectWall({ step }: { step: number }) {
  // Remounting cancels the roulette and restores the wall on backward navigation.
  return <Wall key={step >= 1 ? "roulette" : "wall"} play={step >= 1} />;
}

function Wall({ play }: { play: boolean }) {
  const [selected, setSelected] = useState(-1);
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    if (!play) return;
    const start = performance.now();
    let timer: ReturnType<typeof setTimeout>;
    let tick = 0;
    function next() {
      const elapsed = performance.now() - start;
      if (elapsed >= 3000) {
        setSelected(winner);
        setSettled(true);
        return;
      }
      // A deterministic shuffle, with increasingly long pauses before landing.
      setSelected((tick * 17 + tick * tick * 3 + 7) % titles.length);
      tick++;
      timer = setTimeout(next, Math.min(3000 - elapsed, 45 + 340 * (elapsed / 3000) ** 2));
    }
    next();
    return () => clearTimeout(timer);
  }, [play]);

  return (
    <div className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(26px,2.8vw,48px)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>These are the research projects I am working on now</h1>
      <div className="my-[2%] grid min-h-0 flex-1 grid-cols-7 grid-rows-6 gap-[0.65vw]">
        {titles.map((title, i) => (
          <motion.div key={title} className="relative flex items-center overflow-hidden rounded border p-[0.5vw] text-[clamp(8px,0.72vw,12px)] leading-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: settled && i !== winner ? 0.18 : 1, y: 0, scale: settled && i === winner ? 1.55 : 1,
              backgroundColor: selected === i ? "#203e58" : "#fbf8f1", color: selected === i ? "#ffffff" : "#141414",
              borderColor: selected === i ? "#203e58" : "#14141422" }}
            transition={{ opacity: { duration: 0.3, delay: play ? 0 : i * 0.025 }, y: { delay: play ? 0 : i * 0.025 }, scale: { duration: 0.5 }, backgroundColor: { duration: 0.06 }, color: { duration: 0.06 } }}
            style={{ zIndex: selected === i ? 10 : 0, transformOrigin: i % 7 === 0 ? "left center" : "center" }}>
            {title}
          </motion.div>
        ))}
      </div>
      <p className="text-[clamp(10px,0.85vw,14px)] opacity-60" style={{ fontFamily: "var(--font-geist-mono)" }}>Projects in my ScienceDash, 11 Nov 2026</p>
    </div>
  );
}
