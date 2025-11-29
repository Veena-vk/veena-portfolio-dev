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
      className="bg-[#59200F] p-5 rounded-xl text-white shadow-md max-w-xl cursor-pointer transition border border-[#76301A]/50"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-[#F4E8D2]">
          {open ? "Collapse" : "Expand"}
        </span>
      </div>

      <p className="text-sm text-orange-100 mt-2">{content}</p>

      {open && (
        <div
          className="mt-4 text-[#F4E8D2] text-sm leading-relaxed space-y-3"
          dangerouslySetInnerHTML={{ __html: details }}
        />
      )}
    </div>
  );
}
