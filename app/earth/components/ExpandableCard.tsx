"use client";
import React, { useState } from "react";

interface Props {
  title: string;
  content: string;
  details: string;
}

const ExpandableCard: React.FC<Props> = ({ title, content, details }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 rounded-xl border border-gray-300 shadow-md bg-white mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </button>

      {open && (
        <div className="mt-3 text-gray-700 whitespace-pre-line">
          {details}
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
