"use client";

import { rtlGarden } from "../data/rtlGarden";
import { useState } from "react";

export default function RtlGarden() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🌿 RTL Garden</h2>
      <p className="text-muted-foreground mb-6">
        A curated collection of standalone RTL modules — structured, improved, and extended with care.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {rtlGarden.map((project) => (
          <div key={project.id} className="border rounded-2xl p-4 shadow-sm bg-white dark:bg-zinc-900">
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

            <div className="space-y-3">
              {project.phases.map((phase, idx) => (
                <PhaseCard key={idx} phase={phase} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhaseCard({ phase }: { phase: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded-xl p-3 bg-zinc-50 dark:bg-zinc-800">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">{phase.label}</p>
          <p className="text-sm text-muted-foreground">{phase.summary}</p>
        </div>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            phase.status === "Complete"
              ? "bg-green-100 text-green-700"
              : phase.status === "In Progress"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {phase.status}
        </span>
      </div>

      {phase.snippet && (
        <div className="mt-2">
          <button
            className="text-xs text-blue-600 dark:text-blue-400 mt-1 underline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Hide Code" : "Show Code"}
          </button>
          {expanded && (
            <pre className="mt-2 p-2 bg-black text-green-300 text-xs overflow-auto rounded">
              <code>{phase.snippet}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
