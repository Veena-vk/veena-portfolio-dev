import React from 'react';

const educationData = [
  {
    degree: "M.Tech in VLSI & Microsystems",
    institute: "Indian Institute of Space Science and Technology",
    duration: "2022–2024",
    highlights: "CGPA: 8.24"
  },
  {
    degree: "B.E. in Electronics and Communication",
    institute: "University College of Engineering, Kanchipuram",
    duration: "2017–2021",
    highlights: "CGPA: 8.05"
  }
];

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Educational Background</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {educationData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold">{item.degree}</h3>
            <p className="text-sm text-gray-600">{item.institute}</p>
            <p className="text-sm text-gray-500">{item.duration}</p>
            <p className="mt-2 text-gray-700">{item.highlights}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
