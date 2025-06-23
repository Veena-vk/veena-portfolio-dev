import React from 'react';

const skills = {
  Languages: ["Verilog", "VHDL", "C", "Python"],
  Tools: ["Vivado", "ModelSim", "Yosys", "Verdi"],
  Domains: ["FPGA", "ASIC", "RTL Design", "Compiler Basics"]
};

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Technical Skills</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index}>
            <h3 className="font-semibold text-yellow-600">{category}</h3>
            <ul className="mt-2 space-y-1">
              {items.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
