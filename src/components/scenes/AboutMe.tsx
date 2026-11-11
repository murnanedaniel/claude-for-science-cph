"use client";

import { motion } from "motion/react";

// Who is talking, written on the title's paper (the PaperRollOverlay stays flat
// for this scene and rolls up into the beam on rateRamp). Text sits in the same
// box as TitleSlide so it lands on the paper. One column per click.

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Column({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div {...fade} className="flex-1 min-w-0 border-t border-ink/20 pt-5">
      <div className="text-[12px] uppercase tracking-[0.14em] text-ink/55" style={{ fontFamily: "var(--font-geist-mono)" }}>
        {kicker}
      </div>
      <div className="mt-2 text-[clamp(22px,2.2vw,36px)] leading-tight text-ink">{title}</div>
      <div className="mt-4 text-[clamp(15px,1.25vw,20px)] leading-[1.45] text-ink/75" style={{ fontFamily: "var(--font-sans, inherit)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function AboutMe({ step }: { step: number }) {
  return (
    <motion.div
      className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <div className="relative w-[78%] max-w-[1100px] aspect-[16/10]">
        <div className="absolute inset-0 flex flex-col justify-center p-[6%] text-ink" style={{ fontFamily: "var(--font-serif)" }}>
          <h1 className="text-[clamp(30px,3.2vw,54px)] italic leading-tight">Who is talking?</h1>
          <div className="mt-[5%] flex gap-[5%]">
            <Column kicker="Day job · Halfspace" title="Making agent systems safe">
              We map agentic systems, catalogue their threat vectors, quantify the risks and add controls.
              With faculty, we attack those systems to find which controls work for which agent topologies.
            </Column>
            {step >= 1 && (
              <Column kicker="Physics · NBI, CERN, Berkeley" title="Particle physicist">
                Research affiliate at the Niels Bohr Institute, CERN and Berkeley. Graph neural networks
                for tracking; until recently ATLAS machine learning coordinator.
              </Column>
            )}
          </div>
          {step >= 2 && (
            <motion.p {...fade} className="mt-[5%] text-[clamp(18px,1.6vw,26px)] italic text-ink/85">
              Both jobs ask the same question: what can an agent be trusted to do on its own?
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
