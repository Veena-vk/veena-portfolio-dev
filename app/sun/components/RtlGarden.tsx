// RtlGarden.tsx — updated to restore correct link logic and show 'Coming Soon' for non-Full Bloom
"use client";

import { rtlGarden } from "../data/rtlGarden";
import { useState } from "react";
import Link from "next/link";

export default function RtlGarden() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4"> RTL Garden</h2>
      <div className="prose prose-lg max-w-3xl mx-auto px-4 py-8">
      <p>
        <strong>RTL is the language of logic — and logic is everywhere.</strong>{' '}
        From the ticking of a clock to the orbits of planets, logic governs the universe in silent precision.
      </p>

      <p>
        Being an RTL engineer is more about understanding than coding. The deeper I understand something, the more
        faithfully I can describe it in a hardware description language.
      </p>

      <p>
        The modules here are not always practical, but they are intentional. They are exercises in reproducing thought —
        how much of an idea I can translate into pure logic.
      </p>

      <p>
        These designs are abstract. They may not end up on a silicon wafer, but they’ve already shaped the way I think.
      </p>

      <h2 className="mt-8 mb-4 text-xl font-semibold">🌼 My RTL Garden has different types of flowers:</h2>

      <ul className="list-none space-y-4">
        <li>
          <span className="font-medium">🌼 Common Wildflower</span> – Simple, essential designs like timers, counters, and basic FSMs.
          Ubiquitous in the digital world, yet always elegant — like dandelions that grow everywhere, humble but vital.
        </li>

        <li>
          <span className="font-medium">🌷 Tended Bloom</span> – More complete designs that take effort to nurture, such as Conway's Game of Life
          and Eclipse Predictor. These are cultivated with care, grounded in both creativity and maybe a little bit of usefulness.
        </li>

        <li>
          <span className="font-medium">🪻 Architect’s Hybrid</span> – Carefully engineered systems that explore structure and modularity:
          Sudoku solver, maze runners, etc. These reflect deliberate architecture and scalable thought.
        </li>

        <li>
          <span className="font-medium">🌸 Rare Orchid</span> – Experimental, poetic, or conceptually deep designs. Whether it's a Kolam generator
          or audio-reactive FSM — these bloom in unexpected ways, shaped more by curiosity than necessity.
        </li>
      </ul>
    </div>

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
    ? "bg-orange-50 text-orange-700"
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
