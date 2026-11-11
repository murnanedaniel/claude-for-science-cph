"use client";

import { CalendarFlip } from "./CalendarFlip";

export function CalendarFlipNow({ step }: { step: number }) {
  return <CalendarFlip key={step} startYear={2026} startMonth={3} targetYear={2026} targetMonth={10} fromTheme="dark" toTheme="light" duration={4} label="" />;
}
