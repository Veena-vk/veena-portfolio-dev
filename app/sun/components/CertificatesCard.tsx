"use client";

import React, { useState } from "react";

export default function CertificatesCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-yellow-300 bg-yellow-100/40 p-6 rounded-2xl shadow-md shadow-yellow-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-yellow-700">
          Licenses & Certifications
        </h2>
        <button
          onClick={() => setOpen(!open)}
          className="text-sm text-yellow-800 underline hover:text-yellow-600"
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>

      {open && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-800">
            <thead className="bg-yellow-200 text-yellow-900 font-medium">
              <tr>
                <th className="py-2 px-3">Title</th>
                <th className="py-2 px-3">Platform</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Link</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              {certificates.map((cert, idx) => (
                <tr key={idx} className="border-t border-yellow-200">
                  <td className="py-2 px-3">{cert.title}</td>
                  <td className="py-2 px-3">{cert.platform}</td>
                  <td className="py-2 px-3">{cert.date}</td>
                  <td className="py-2 px-3">
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
                      >
                        📄 View
                      </a>
                    ) : (
                      <span className="text-gray-400 italic">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
