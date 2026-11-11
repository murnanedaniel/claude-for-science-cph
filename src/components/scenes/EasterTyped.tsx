"use client";

import { motion } from "motion/react";

const exchanges = [
  { when: "Sun 5 Apr 19:06", replyAt: "19:12", elapsed: "6 min", me: 'lets check what a "model" would perform if it just predicted d0 and z0 to be 0,0 all the time', agent: "ML is only 7% better than simply predicting d0 = 0." },
  { when: "Sun 5 Apr 20:00", replyAt: "20:02", elapsed: "2 min", me: "One thing I want to be incredibky sure about: ... is there any possibikity that the training data of the nominal set is overkapping with any events used in evaluating the generalisabikity?", agent: "Yes, there is overlap." },
  { when: "Sun 5 Apr 22:03", replyAt: "22:05", elapsed: "2 min", me: 'Im afraid of getting too ezcited about the generalisability result: is ut possible the nornalization is "cheating"?', agent: "You're right to be concerned. There IS a bug here." },
  { when: "Mon 6 Apr 17:51", replyAt: "17:52", elapsed: "1 min", me: "a keen reviewer would point out that the comparison of v10 to v11 is a little unfair", agent: "Excellent point. That's a clean ablation control we definitely want." },
];

export function EasterTyped({ step }: { step: number }) {
  const visible = Math.max(0, Math.min(4, step));
  return (
    <div className="absolute inset-0 flex flex-col bg-[#050607] px-[5%] py-[3%] text-zinc-100">
      <h1 className="font-serif text-[clamp(26px,3.3vw,44px)] italic leading-tight">What did I actually type?</h1>
      {visible === 0 ? (
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="my-auto max-w-[900px] text-[clamp(20px,2.2vw,36px)] leading-relaxed">
          89 messages from me, 2 to 7 April. Most of them are &apos;where are we at?&apos;. Four of them are why I believe the paper.
        </motion.p>
      ) : (
        <div className="my-[1.2%] flex min-h-0 flex-1 flex-col justify-center gap-[1vh]">
          {exchanges.slice(0, visible).map((exchange, index) => (
            <motion.div key={exchange.when} initial={{ opacity: 0, y: 10 }} animate={{ opacity: index === visible - 1 ? 1 : 0.6, y: 0 }} transition={{ duration: 0.35 }} className="flex flex-col gap-[0.3vh] text-[clamp(11px,1.05vw,18px)] leading-snug">
              <div className="ml-auto w-[76%] rounded-2xl rounded-br-sm bg-blue-600 px-[1.1vw] py-[0.5vh]">
                <div className="mb-[0.2vh] font-mono text-[0.72em] text-blue-100">Me · {exchange.when}</div>
                <p>{exchange.me}</p>
              </div>
              <div className="self-center font-mono text-[0.7em] text-zinc-400">{exchange.elapsed}</div>
              <div className="mr-auto max-w-[76%] rounded-2xl rounded-bl-sm border border-white/10 bg-zinc-800 px-[1.1vw] py-[0.5vh]">
                <span className="mr-3 font-mono text-[0.72em] text-zinc-400">Agent · {exchange.replyAt}</span>
                {exchange.agent}
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <p className="shrink-0 font-mono text-[clamp(10px,0.85vw,14px)] text-zinc-500">Claude Code transcript of the Easter study, 2 to 7 April 2026; my messages typed on my phone</p>
    </div>
  );
}
