/"use client";

import React, { useState } from "react";
import Section from "./Section";
import { setbacks } from "../data/setbacks";

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

function ExpandableCard({ entry }: { entry: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span>{entry.emoji}</span>
            {entry.title}
          </h3>
        </div>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-sm text-blue-600 dark:text-blue-400 underline"
        >
          {expanded ? "Hide Story" : "Read More"}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-800 dark:text-zinc-200">
          <p>{entry.fullStory}</p>
          <p className="italic text-yellow-900 dark:text-yellow-300">— {entry.lesson}</p>
        </div>
      )}
    </div>
  );
}
