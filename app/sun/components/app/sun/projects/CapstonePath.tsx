'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Sun } from 'lucide-react';
import { capstonePhases } from './capstonePhases';

export function CapstonePath() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {capstonePhases.map((step, idx) => (
        <div key={idx} className="border-l-4 border-yellow-600 pl-6 relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            <div className="absolute -left-3 bg-yellow-400 rounded-full p-1">
              <Sun className="h-5 w-5 text-white" />
            </div>
            {expanded === idx ? <ChevronDown /> : <ChevronRight />}
            <h3 className="text-xl font-semibold text-yellow-900">
              {step.phase}: {step.title}
            </h3>
            <span className="text-xs text-yellow-800 ml-4 italic">Started: {step.started ?? '—'}</span>
          </div>

          {expanded === idx && (
            <ul className="mt-3 pl-6 text-sm space-y-2">
              {step.substeps.map((sub, i) => (
                <li key={i} className="flex items-start justify-between">
                  <span className={`text-gray-800 ${sub.done ? "line-through" : ""}`}>
                    ⦿ {sub.name}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">{sub.date ?? "⏳"}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
