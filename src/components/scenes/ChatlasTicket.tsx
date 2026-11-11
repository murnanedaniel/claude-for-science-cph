"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";

export function ChatlasTicket({ step }: { step: number }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#f6f1e7] px-[5%] py-[3%] text-[#141414]">
      <h1 className="text-[clamp(28px,3.2vw,54px)]" style={{ fontFamily: "var(--font-serif)" }}>Can it do the ticket instead?</h1>
      <p className="mt-[1%] max-w-[1200px] text-[clamp(15px,1.5vw,24px)] leading-snug">Someone tags the bot on a ticket. It reads the ticket, asks one question, and opens a draft change for a human to approve.</p>
      <div className="my-[2%] grid min-h-0 flex-1 grid-cols-[0.9fr_1.1fr] gap-[3%]">
        <img src={asset("/chatlas/mm-thread-pair.png")} width={2200} height={1548} alt="Mattermost ticket conversation with the ChATLAS bot" className="h-full min-h-0 w-full object-contain" />
        <div className="relative min-h-0">
          {step >= 1 && <motion.img src={asset("/chatlas/mr14-overview.png")} width={1440} height={900} alt="GitLab draft merge request 14 overview" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="absolute inset-0 h-full w-full object-contain" />}
          {step >= 2 && <motion.figure initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="absolute inset-0 flex flex-col justify-center bg-[#f6f1e7]">
            <img src={asset("/chatlas/mr14-diff-tight.png")} width={1548} height={464} alt="The one-line change in merge request 14" className="min-h-0 w-full object-contain shadow-lg" />
            <figcaption className="mt-[3vh] text-[clamp(18px,1.8vw,30px)] leading-snug" style={{ fontFamily: "var(--font-serif)" }}>The whole change: one line. I can check it in ten seconds.</figcaption>
          </motion.figure>}
        </div>
      </div>
      <div className="shrink-0 space-y-[1vh]">
        {step >= 1 && <p className="text-[clamp(11px,1vw,16px)] opacity-70">Sandbox, one test ticket: ten runs gave the same edit. One live run from my phone, 10 Nov.</p>}
        <p className="font-mono text-[clamp(10px,0.85vw,14px)] opacity-60">ChATLAS bot, ATLAS Mattermost and GitLab sandbox, Nov 2026</p>
      </div>
    </div>
  );
}
