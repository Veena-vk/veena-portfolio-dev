"use client";

import React, { useState } from "react";
import Section from "./Section";
import { setbacks } from "./setbacks";

export default function SetbackSection() {
  return (
    <Section
      icon="💥"
      title="Ouch – But I Grew"
      subtitle="Retreating Tides"
    >
      <div className="space-y-4">
        {setbacks.map((entry) => (
          <ExpandableCard key={entry.id} entry={entry} />
        ))}
      </div>
    </Section>
  );
}

function SetbackCard({ entry }: { entry: any }) {
  return (
    <div className="border-none bg-[#59200F] text-[#FDF5E6] rounded-2xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
        <span>{entry.emoji}</span>
        {entry.title}
      </h3>
      <div className="space-y-3 text-sm leading-relaxed text-[#FCEFD4]">
        <p>{entry.fullStory}</p>
        <p className="italic text-[#BFA173] dark:text-[#E9D8B4]">— {entry.lesson}</p>
      </div>
    </div>
  );
}

