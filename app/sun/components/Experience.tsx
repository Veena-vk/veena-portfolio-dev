import React from 'react';

const experienceData = [
  {
    role: "Project Engineer",
    company: "Centre for Development of Advanced Computing, Trivandrum",
    duration: "July 2024 - Present",
    description: "Working on real-time video processing IP integration in Zynq Ultrascale+ FPGAs for medical applications",
    tech: ["Verilog", "VHDL", "IP Integration", "Vivado", "Vitis", "Xilinx Design Flow", "Bare-metal C"]
  },
  {
    role: "VLSI Design Intern",
    company: "Bosch Global Software Technologies",
    duration: "Aug 2023 – May 2024",
    description: "Designed Synthesizable RTL of AES CMAC IP in VHDL and functionally verified along with quality checks",
    tech: ["VHDL", "Xcelium", "SimVision", "Spyglass"]
  }
];

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Experience</h2>
      <div className="space-y-4">
        {experienceData.map((exp, index) => (
          <div key={index} className="bg-white border-l-4 border-yellow-400 p-4 shadow rounded">
            <h3 className="text-lg font-bold">{exp.role}</h3>
            <p className="text-sm text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span key={i} className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
