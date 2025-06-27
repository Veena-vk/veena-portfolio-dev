import Card from "./Card";

export default function CertificatesCard() {
  return (
    <Card className="w-full">
      <h3 className="text-xl font-semibold mb-4">📜 Licenses & Certifications</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-800 dark:text-gray-200">
          <thead>
            <tr className="border-b border-zinc-300 dark:border-zinc-700">
              <th className="py-2 pr-4">Title</th>
              <th className="py-2 pr-4">Platform</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td>FPGA Computing Systems</td><td>Politecnico di Milano</td><td>Jun 2025</td></tr>
            <tr className="border-b"><td>FPGA Cloud Apps (SDAccel)</td><td>Politecnico di Milano</td><td>Jun 2025</td></tr>
            <tr className="border-b"><td>Particle Accelerator Tech</td><td>Coursera</td><td>May 2025</td></tr>
            <tr className="border-b"><td>Intro to DevOps</td><td>IBM</td><td>May 2025</td></tr>
            <tr className="border-b"><td>Intro to Particle Accelerators</td><td>Coursera</td><td>May 2025</td></tr>
            <tr className="border-b"><td>SystemVerilog Essentials</td><td>Udemy</td><td>Apr 2024</td></tr>
            <tr className="border-b"><td>C-Based VLSI Design</td><td>NPTEL</td><td>Oct 2023</td></tr>
            <tr className="border-b"><td>VLSI Design Flow: RTL to GDS</td><td>NPTEL</td><td>Oct 2023</td></tr>
            <tr><td>Architectural Design of Digital ICs</td><td>NPTEL</td><td>Apr 2023</td></tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
