// RtlGarden.tsx — updated to restore correct link logic and show 'Coming Soon' for non-Full Bloom
"use client";

import { rtlGarden } from "../data/rtlGarden";
import { useState } from "react";
import Link from "next/link";

export default function RtlGarden() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🌿 RTL Garden</h2>
      <p className="text-muted-foreground mb-6">
        A curated collection of creative RTL modules — each exploring logic, nature, and abstraction.
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

  const rarityClass = project.rarity.includes("Wildflower")
    ? "bg-amber-50 text-amber-700"
    : project.rarity.includes("Tended Bloom")
    ? "bg-lime-50 text-lime-700"
    : project.rarity.includes("Hybrid")
    ? "bg-purple-100 text-purple-700"
    : "bg-pink-100 text-pink-700";

  const cardOpacity =
    project.status.includes("Seeded") ? "opacity-70" : "";

  return (
    <div className={`border rounded-2xl p-4 shadow-sm bg-white dark:bg-zinc-900 space-y-3 ${cardOpacity}`}>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          {project.rarity && (
            <span
              className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${rarityClass}`}
            >
              {project.rarity}
            </span>
          )}
        </div>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300">
          {project.status}
        </span>
      </div>

      <p className="text-sm text-muted-foreground">{project.description}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-blue-600 dark:text-blue-400 underline"
      >
        {expanded ? "Collapse" : "View Details"}
      </button>

      {expanded && (
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            <strong>🌍 Origin:</strong> {project.origin}
          </p>
          <p>
            <strong>🧠 RTL Design:</strong> {project.designNotes}
          </p>
          {project.status === "Full Bloom 🪷" && project.rtlLink ? (
            <p>
              <strong>📂 RTL Gist / GitHub:</strong>{" "}
              <Link
                href={project.rtlLink}
                target="_blank"
                className="text-blue-600 underline"
              >
                View Code
              </Link>
            </p>
          ) : (
            <p className="italic">📂 RTL coming soon…</p>
          )}
          {project.reflection && (
            <p>
              <strong>📓 What I Learned:</strong> {project.reflection}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
