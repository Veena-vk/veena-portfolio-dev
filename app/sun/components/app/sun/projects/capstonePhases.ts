export const capstonePhases = [
  {
    phase: "Dawn",
    title: "ISA + Pipeline Design",
    started: "2025-05-15",
    substeps: [
      { name: "Studied RISC-V User-Level ISA (RV32I)", done: true, date: "2025-05-18" },
      { name: "Explored privilege spec and CSR map", done: false, date: null },
      { name: "Built opcode decode table for RV32I", done: true, date: "2025-05-20" },
      { name: "Drafted 5-stage pipeline datapath sketch", done: false, date: null },
      { name: "Identified basic hazards (data + control)", done: false, date: null },
    ],
  },
  {
    phase: "Morning",
    title: "AXI Interface Integration",
    started: "2025-06-10",
    substeps: [
      { name: "Instruction memory AXI master FSM", done: true, date: "2025-06-13" },
      { name: "Data AXI interface sketch", done: false, date: null },
      { name: "AXI bus fabric prototype", done: false, date: null },
    ],
  },
  {
    phase: "Noon",
    title: "AXI4-Lite Peripherals",
    started: "2025-06-15",
    substeps: [
      { name: "AXI-Lite Timer FSM design", done: true, date: "2025-06-20" },
      { name: "Testbench and assertions", done: true, date: "2025-06-21" },
      { name: "DMA planning (S2MM)", done: false, date: null },
      { name: "GPIO peripheral sketch", done: false, date: null },
    ],
  },
  {
    phase: "Afternoon",
    title: "SoC Integration",
    started: "2025-06-22",
    substeps: [
      { name: "Memory map plan", done: false, date: null },
      { name: "Bus decoder logic", done: false, date: null },
      { name: "Top-level integration block", done: false, date: null },
    ],
  },
  {
    phase: "Dusk",
    title: "Simulation + Debug",
    started: null,
    substeps: [
      { name: "SystemVerilog/UVM testbench", done: false, date: null },
      { name: "Instruction trace monitor", done: false, date: null },
      { name: "Cycle-accurate waveform debug", done: false, date: null },
    ],
  },
  {
    phase: "Twilight",
    title: "FPGA Deployment",
    started: null,
    substeps: [
      { name: "Vivado SoC constraints", done: false, date: null },
      { name: "Bootloader ROM design", done: false, date: null },
      { name: "Test programs on board", done: false, date: null },
    ],
  },
];
