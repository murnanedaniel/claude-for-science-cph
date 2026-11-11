"use client";

import { Canvas, C, T } from "./g1/kit";
import { asset } from "./lib/asset";

export function ChatlasLatest() {
  return (
    <Canvas style={{ gap: "2vh" }}>
      <div style={{ display: "flex", flex: 1, minHeight: 0, alignItems: "center", justifyContent: "center", gap: "3vw" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/chatlas/mm-thread-pair.png")} alt="ChATLAS ticket conversation with the bot" style={{ width: "24%", height: "100%", objectFit: "contain" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/chatlas/mr14-overview.png")} alt="Draft merge request 14 opened by ChATLAS" style={{ width: "70%", height: "100%", objectFit: "contain" }} />
      </div>
      <p style={{ fontSize: T.body, lineHeight: 1.3, textAlign: "center", color: C.ink }}>
        Last week: tag the bot on a ticket, it asks one question, opens a draft merge request
      </p>
    </Canvas>
  );
}
