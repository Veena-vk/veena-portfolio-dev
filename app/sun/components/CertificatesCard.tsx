import React from "react";
import { certificates } from "./data/certificates";

export default function CertificatesCard() {
  return (
    <div className="border border-gray-300 bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
        Licenses & Certifications
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-gray-100 text-gray-700 font-medium">
            <tr>
              <th className="py-2 px-3">Title</th>
              <th className="py-2 px-3">Platform</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Link</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {certificates.map((cert, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-2 px-3">{cert.title}</td>
                <td className="py-2 px-3">{cert.platform}</td>
                <td className="py-2 px-3">{cert.date}</td>
                <td className="py-2 px-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
                  >
                    📄 View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
