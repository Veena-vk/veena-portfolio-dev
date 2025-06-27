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
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const [expanded, setExpanded] = useState(false);

  const rarityClass = project.rarity?.includes("Wildflower")
    ? "bg-amber-50 text-amber-700"
    : project.rarity?.includes("Tended Bloom")
    ? "bg-orange-50 text-orange-700"
    : project.rarity?.includes("Hybrid")
    ? "bg-purple-100 text-purple-700"
    : "bg-pink-100 text-pink-700";

  return (
    <div className="border rounded-2xl p-4 shadow-sm bg-white dark:bg-zinc-900 space-y-3">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          {project.rarity && (
            <span className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${rarityClass}`}>
              {project.rarity}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">{project.description}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-blue-600 dark:text-blue-400 underline"
      >
        {expanded ? "Collapse" : "View Details"}
      </button>

      {expanded && (
        <div className="space-y-3">
          {project.phases.map((phase: any, idx: number) => (
            <PhaseCard key={idx} phase={phase} />
          ))}
        </div>
      )}
    </div>
  );
}

function PhaseCard({ phase }: { phase: any }) {
  const [expanded, setExpanded] = useState(false);

  const statusClass =
    phase.status === "Complete"
      ? "bg-green-100 text-green-700"
      : phase.status === "In Progress"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-gray-200 text-gray-700";

  return (
    <div className="border rounded-xl p-3 bg-zinc-50 dark:bg-zinc-800">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">{phase.label}</p>
          <p className="text-sm text-muted-foreground">{phase.summary}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusClass}`}>
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
