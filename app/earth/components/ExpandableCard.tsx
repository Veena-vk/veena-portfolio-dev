"use client";

import { useState } from "react";

interface Props {
  title: string;
  content: string;
  details: string;
}

export default function ExpandableCard({ title, content, details }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-neutral-700/40 border border-neutral-600 p-5 rounded-xl cursor-pointer hover:bg-neutral-700 transition"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-gray-300">{open ? "–" : "+"}</span>
      </div>

      <p className="mt-2 text-gray-300">{content}</p>

      {open && (
        <div
          className="mt-4 text-gray-200 text-sm leading-relaxed space-y-3"
          dangerouslySetInnerHTML={{ __html: details }}
        />
      )}
    </div>
  );
}
