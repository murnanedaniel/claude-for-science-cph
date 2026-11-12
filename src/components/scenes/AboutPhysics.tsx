"use client";

import { motion } from "motion/react";

const ink = "#49483e";
const colors = ["#a85b37", "#376c83", "#647a42", "#885c81", "#b28a2e"];
const particles = colors.map((color, i) => {
  const angle = (i * 72 - 35) * Math.PI / 180;
  const end = { x: 156 * Math.cos(angle), y: 156 * Math.sin(angle) };
  const control = { x: 100 * Math.cos(angle - 0.5), y: 100 * Math.sin(angle - 0.5) };
  const point = (t: number) => ({ x: 2 * (1 - t) * t * control.x + t * t * end.x, y: 2 * (1 - t) * t * control.y + t * t * end.y });
  return { color, end, point, path: `M 0 0 Q ${control.x} ${control.y} ${end.x} ${end.y}`, angle: i * 72 - 35 };
});
const bins = Array.from({ length: 26 }, (_, i) => {
  const mass = 101 + 2 * i;
  const background = 38 * Math.exp(-i / 25) + 7;
  return { mass, background, signal: 26 * Math.exp(-0.5 * ((mass - 125) / 2.5) ** 2) };
});
const captions = [
  "Hits: millions of points per collision",
  "Tracking: which hits belong to which particle",
  "Particle flow: tracks plus energy deposits become particles",
  "Analysis: the Higgs boson as a bump at 125 GeV",
];

/** Four reversible steps. All geometry is deterministic and visibility follows step. */
export function AboutPhysics({ step }: { step: number }) {
  const stage = Math.max(0, Math.min(3, step));
  return <motion.div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.35 } }}>
    <div className="relative w-[78%] max-w-[1100px] aspect-[16/10]">
      <div className="absolute inset-0 flex flex-col p-[6%] text-ink" style={{ fontFamily: "var(--font-serif)" }}>
        <h1 className="shrink-0 text-[clamp(30px,3.2vw,54px)] italic leading-tight">And as a particle physicist?</h1>
        <p className="mt-3 shrink-0 max-w-[95%] text-[clamp(14px,1.1vw,17px)] leading-relaxed text-ink/75">Research affiliate at the Niels Bohr Institute, CERN and Berkeley. Until recently ATLAS machine learning coordinator.</p>
        <svg viewBox="0 0 960 430" className="mt-3 min-h-0 w-full flex-1" role="img" aria-label={captions[stage]} fontFamily="var(--font-geist-mono)">
          {['Hits', 'Tracking', 'Particle flow', 'Analysis'].map((label, i) => <g key={label} opacity={stage >= i ? 1 : 0.25}>
            <text x={35 + i * 240} y={22} fontSize={15} fill={ink}>{`0${i + 1} / ${label}`}</text>
            {i < 3 && <path d={`M ${200 + i * 240} 17 h 45 m -6 -4 6 4 -6 4`} stroke={ink} fill="none" />}
          </g>)}
          <motion.g initial={false} animate={{ x: stage === 3 ? 170 : 260, y: 220, scale: stage === 3 ? 0.7 : 1 }} transition={{ duration: 1.8, ease: "easeInOut" }}>
            {[32, 55, 80, 110, 140, 162, 180].map((r, i) => <circle key={r} r={r} fill={i === 0 ? "#e4dfd0" : "none"} stroke={ink} strokeWidth={i > 4 ? 7 : 1} opacity={i > 4 ? 0.16 : 0.25} />)}
            {Array.from({ length: 36 }, (_, i) => <path key={i} d="M 150 0 H 188" transform={`rotate(${i * 10})`} stroke={ink} opacity={0.12} />)}
            {/* Quiet background hits suggest the occupancy of a real collision. */}
            {Array.from({ length: 80 }, (_, i) => {
              const angle = i * 2.39996, r = 26 + ((i * 37) % 119);
              return <motion.circle key={i} cx={Math.cos(angle) * r} cy={Math.sin(angle) * r} r={1.6} fill={ink} initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 1.5, delay: (i % 9) * 0.06 }} />;
            })}
            {particles.map(particle => <g key={particle.color}>
              {Array.from({ length: 8 }, (_, j) => {
                const point = particle.point((j + 1) / 9);
                return <motion.circle key={j} cx={point.x} cy={point.y} r={3} initial={{ opacity: 0 }} animate={{ opacity: 1, fill: stage >= 1 ? particle.color : ink }} transition={{ duration: 1.5, delay: j * 0.06 }} />;
              })}
              <motion.path d={particle.path} fill="none" stroke={particle.color} strokeWidth={2.5} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: stage >= 1 ? 1 : 0, opacity: stage >= 1 ? 1 : 0 }} transition={{ duration: 2 }} />
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: stage >= 2 ? 1 : 0 }} transition={{ duration: 1.8 }}>
                <path d={`M ${particle.end.x} ${particle.end.y} L ${180 * Math.cos(particle.angle * Math.PI / 180)} ${180 * Math.sin(particle.angle * Math.PI / 180)}`} stroke={particle.color} strokeWidth={2} strokeDasharray="3 3" />
                <path d="M 158 -7 L 195 -9 L 195 9 L 158 7 Z" transform={`rotate(${particle.angle})`} fill={particle.color} opacity={0.7} />
              </motion.g>
            </g>)}
            {[16, 160].map((angle, i) => <motion.g key={angle} initial={{ opacity: 0 }} animate={{ opacity: stage >= 2 ? 1 : 0 }} transition={{ duration: 2, delay: 0.3 }}>
              <path d="M 158 -8 L 202 -11 L 202 11 L 158 8 Z" transform={`rotate(${angle})`} fill={i ? "#647a42" : "#b28a2e"} />
            </motion.g>)}
            <circle r={4} fill={ink} />
          </motion.g>
          {stage < 3 && <motion.g key={stage} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.8 }} fill={ink}>
            <path d="M 480 210 H 530 m -8 -5 8 5 -8 5" stroke={ink} fill="none" opacity={0.5} />
            <text x={560} y={175} fontSize={20} fontFamily="var(--font-serif)" fontStyle="italic">{['A collision leaves traces.', 'Curves reveal charged particles.', 'Combine the measurements.'][stage]}</text>
            {(stage === 2 ? ['Track + tower → charged particle', 'Tower alone → photon / neutral hadron', 'One reconstructed particle list'] : stage === 1 ? ['Same colour, same particle', 'Curvature → momentum', 'Magnetic field bends the paths'] : ['Concentric detector layers', 'Each dot is a measured hit', 'Transverse view of the barrel']).map((line, i) => <text key={line} x={560} y={218 + i * 30} fontSize={13}>{line}</text>)}
          </motion.g>}
          {stage === 3 && <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <text x={170} y={368} textAnchor="middle" fontSize={13} fill={ink}>Reconstructed particles</text>
            <path d="M 315 220 H 375 m -8 -5 8 5 -8 5" stroke={ink} fill="none" />
            <text x={635} y={65} fontSize={18} fill={ink} textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic">Many collisions → two-photon mass</text>
            <path d="M 425 95 V 335 H 900" stroke={ink} fill="none" />
            <text x={408} y={210} transform="rotate(-90 408 210)" fontSize={12} fill={ink} textAnchor="middle">Events</text>
            {bins.map((bin, i) => {
              const x = 430 + i * 17.5, height = (bin.background + bin.signal) * 3.2;
              return <g key={bin.mass}>
                <motion.rect x={x} width={15} fill={bin.signal > 5 ? "#a85b37" : "#526c76"} fillOpacity={0.65} initial={{ y: 335, height: 0 }} animate={{ y: 335 - height, height }} transition={{ duration: 2.5, delay: i * 0.015 }} />
                {[0, 1, 2].map(j => <motion.circle key={j} cx={x + 7.5} r={2.5} fill={ink} initial={{ cy: 95, opacity: 0 }} animate={{ cy: [95, 335 - height], opacity: [0, 1, 1, 0] }} transition={{ duration: 1.5, delay: j * 0.45 + (i % 4) * 0.1 }} />)}
              </g>;
            })}
            <path d={`M ${bins.map((bin, i) => `${437.5 + i * 17.5} ${335 - bin.background * 3.2}`).join(' L ')}`} stroke={ink} strokeWidth={2} strokeDasharray="5 4" fill="none" />
            <text x={680} y={105} fontSize={14} fill="#a85b37">125 GeV</text>
            <path d="M 670 110 L 650 135" stroke="#a85b37" />
            {[100, 110, 120, 130, 140, 150].map((mass, i) => <text key={mass} x={430 + i * 87.5} y={354} fontSize={11} fill={ink} textAnchor="middle">{mass}</text>)}
            <text x={665} y={380} textAnchor="middle" fontSize={13} fill={ink}>Diphoton invariant mass [GeV]</text>
            <text x={665} y={404} textAnchor="middle" fontSize={10} fill={ink} opacity={0.6}>Illustrative distribution · dashed line: background</text>
          </motion.g>}
        </svg>
        <motion.p key={stage} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="mt-2 shrink-0 text-center text-[clamp(16px,1.4vw,22px)] italic">{captions[stage]}</motion.p>
      </div>
    </div>
  </motion.div>;
}
