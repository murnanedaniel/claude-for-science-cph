"use client";

import { motion } from "motion/react";

// Who is talking: the day job (agent safety at Halfspace), then the physics
// (NBI, CERN, Berkeley; ATLAS ML). One column per click.

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Column({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div {...fade} className="flex-1 min-w-0 border-t border-white/15 pt-6">
      <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-zinc-400">{kicker}</div>
      <div className="mt-3 text-[clamp(26px,2.4vw,40px)] leading-tight text-zinc-50" style={{ fontFamily: "var(--font-serif)" }}>
        {title}
      </div>
      <div className="mt-5 text-[clamp(17px,1.35vw,22px)] leading-[1.45] text-zinc-300">{children}</div>
    </motion.div>
  );
}

export function AboutMe({ step }: { step: number }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-[7vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <h1 className="text-[clamp(34px,3.4vw,58px)] italic text-zinc-50 mb-[7vh]" style={{ fontFamily: "var(--font-serif)" }}>
        Who is talking?
      </h1>
      <div className="flex gap-[4vw]">
        {step >= 0 && (
          <Column kicker="Day job · Halfspace" title="Making agent systems safe">
            We map agentic systems, catalogue their threat vectors, quantify the risks and add controls.
            With faculty, we attack those systems to find which controls work for which agent topologies.
          </Column>
        )}
        {step >= 1 && (
          <Column kicker="Physics · NBI, CERN, Berkeley" title="Particle physicist">
            Research affiliate at the Niels Bohr Institute, CERN and Berkeley.
            Graph neural networks for tracking; until recently ATLAS machine learning coordinator.
          </Column>
        )}
      </div>
      {step >= 2 && (
        <motion.p {...fade} className="mt-[7vh] text-[clamp(20px,1.7vw,28px)] italic text-zinc-200" style={{ fontFamily: "var(--font-serif)" }}>
          Both jobs ask the same question: what can an agent be trusted to do on its own?
        </motion.p>
      )}
    </motion.div>
  );
}
