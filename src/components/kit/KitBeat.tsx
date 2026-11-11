"use client";

import { motion } from "motion/react";
import type { ComponentType } from "react";
import styles from "./KitBeat.module.css";

// KIT's custom BeatScene frame; its scenes reserve their own title/source space.
export function KitBeat({ title, source, Scene, step }: {
  title: string;
  source: string;
  Scene: ComponentType<{ step: number }>;
  step: number;
}) {
  return (
    <motion.section className={styles.beat} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <header data-region="title"><h1>{title}</h1></header>
      <div className={styles.scene} data-region="visual"><Scene step={step} /></div>
      <div className={styles.source} data-region="source">{source}</div>
    </motion.section>
  );
}
