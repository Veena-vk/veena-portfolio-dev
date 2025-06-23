"use client";

import { useState } from "react";

export default function CrackpotFiles() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-6">
      <div
        className="cursor-pointer bg-neutral-700/50 p-5 rounded-lg border border-neutral-600 hover:bg-neutral-700 transition"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            🧠 Mind: The Time-Travelling Entity
          </h3>
          <span className="text-sm text-gray-400">{expanded ? "Collapse" : "Expand"}</span>
        </div>

        <p className="mt-2 text-gray-300">
          Can the brain — with memory and prediction — be considered a time-travelling mechanism?
        </p>

        {expanded && (
          <div className="mt-4 text-gray-200 space-y-4 text-sm leading-relaxed">
            <p>
              The classical notion of mind–body dualism — that the mind exists independently of the
              body — has long been challenged. Modern neuroscience reveals that what we experience
              as “mind” is deeply rooted in the structure of the brain itself.
            </p>

            <p>
              Damage to specific regions of the brain — like the frontal lobe or hippocampus —
              alters personality, memory, and identity. The “self” is not a separate soul; it’s
              emergent from neural circuitry.
            </p>

            <p>
              Yet this neural machine isn’t bound to the present. It recalls the past through
              memory, and projects possible futures through imagination and predictive modeling.
              These temporal leaps allow the mind to simulate timelines far beyond the now.
            </p>

            <p>
              In that sense, the brain behaves like a subjective time machine — folding moments into
              memory, extending seconds into thought, and leaping across experience in nonlinear
              ways.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
