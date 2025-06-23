export const rtlGarden = [
  {
    id: "lfsr",
    title: "Parameterizable LFSR",
    description: "Explores pseudo-random bit generation using 16-bit Fibonacci and Galois LFSRs, extended to a configurable and reusable LFSR with entropy estimation.",
    phases: [
      {
        label: "Baseline",
        summary: "16-bit Fibonacci and Galois LFSRs with fixed taps and seed. Compared for behavior and hardware usage.",
        status: "Complete",
        snippet: `// 16-bit Galois LFSR (X^16 + X^14 + X^13 + X^11 + 1)
module galois_lfsr (
  input clk, rst,
  output reg [15:0] out
);
  always @(posedge clk or posedge rst) begin
    if (rst)
      out <= 16'hACE1;
    else begin
      out[0]  <= out[15];
      out[1]  <= out[0];
      out[2]  <= out[1];
      out[3]  <= out[2] ^ out[15];
      out[4]  <= out[3] ^ out[15];
      out[5]  <= out[4] ^ out[15];
      out[15:6] <= out[14:5];
    end
  end
endmodule
        `.trim(),
      },
      {
        label: "Improved",
        summary: "Parameterizable LFSR supporting any width and tap mask. Adds entropy estimation module.",
        status: "In Progress",
        snippet: `// Parameterized LFSR with entropy analyzer
module param_lfsr #(
  parameter WIDTH = 16,
  parameter TAPS = 16'hD008,
  parameter SEED = 16'hACE1
)(
  input clk, rst,
  output reg [WIDTH-1:0] out
);
  integer i;
  wire feedback = ^(out & TAPS);

  always @(posedge clk or posedge rst) begin
    if (rst)
      out <= SEED;
    else
      out <= {out[WIDTH-2:0], feedback};
  end
endmodule
        `.trim(),
      },
      {
        label: "Add-ons",
        summary: "CRC wrapper and data scrambler integration using LFSR core.",
        status: "Planned",
      },
    ],
    tags: ["rng", "bit-manipulation", "modular"],
  },
   {
    id: "pomodoro",
    title: "Pomodoro Timer",
    description: "A countdown timer for productivity, based on the Pomodoro technique.",
    phases: [
      {
        label: "Baseline",
        summary: "25-minute countdown with start/reset. Displays status via LED.",
        status: "Complete",
        snippet: `
module pomodoro_timer (
  input clk, rst, start,
  output reg [7:0] minutes,
  output reg active
);
  reg [25:0] counter;

  always @(posedge clk or posedge rst) begin
    if (rst) begin
      minutes <= 25;
      counter <= 0;
      active <= 0;
    end else if (start) begin
      active <= 1;
      if (counter == 60_000_000) begin
        counter <= 0;
        if (minutes > 0)
          minutes <= minutes - 1;
        else
          active <= 0;
      end else begin
        counter <= counter + 1;
      end
    end
  end
endmodule
        `.trim(),
      },
      {
        label: "Improved",
        summary: "Custom durations for work/break + visual indicator (LED blink patterns).",
        status: "Planned",
      },
      {
        label: "Add-ons",
        summary: "AXI-lite interface for configuration from a soft CPU.",
        status: "Planned",
      },
    ],
    tags: ["timer", "productivity", "axi-lite"],
  },

  {
    id: "morse",
    title: "Morse Code Generator",
    description: "Converts text to Morse code and outputs as LED or serial waveform.",
    phases: [
      {
        label: "Baseline",
        summary: "Hardcoded ROM-based message blinking on LED.",
        status: "Complete",
        snippet: `
module morse_led (
  input clk, rst,
  output reg led
);
  reg [31:0] rom [0:15] = {
    32'b10111000000000000000000000000000, // S
    32'b11101110111000000000000000000000  // O
  };
  reg [3:0] idx;
  reg [5:0] bit;

  always @(posedge clk or posedge rst) begin
    if (rst) begin
      idx <= 0; bit <= 0; led <= 0;
    end else begin
      led <= rom[idx][31 - bit];
      bit <= bit + 1;
      if (bit == 31) begin
        bit <= 0; idx <= idx + 1;
      end
    end
  end
endmodule
        `.trim(),
      },
      {
        label: "Improved",
        summary: "ASCII text decoder using lookup table.",
        status: "Planned",
      },
      {
        label: "Add-ons",
        summary: "UART input, audio waveform generation.",
        status: "Planned",
      },
    ],
    tags: ["fun", "communication", "led"],
  },

  {
    id: "pattern-gen",
    title: "Video Pattern Generator",
    description: "Generates standard test patterns for video signal pipelines.",
    phases: [
      {
        label: "Baseline",
        summary: "640×480 checkerboard using VGA timing generator.",
        status: "Complete",
        snippet: `
module checkerboard_gen (
  input clk, rst,
  output [7:0] red, green, blue,
  output hsync, vsync
);
  // Timing gen + checker pattern omitted for brevity
endmodule
        `.trim(),
      },
      {
        label: "Improved",
        summary: "Adds multiple patterns: color bars, gradients, resolution selection.",
        status: "Planned",
      },
      {
        label: "Add-ons",
        summary: "Dynamic pattern select via register interface.",
        status: "Planned",
      },
    ],
    tags: ["video", "vga", "testbench"],
  },

  {
    id: "sudoku",
    title: "Sudoku Solver",
    description: "Solves Sudoku puzzles in hardware using DFS backtracking.",
    phases: [
      {
        label: "Baseline",
        summary: "Fixed 9x9 puzzle, brute-force depth-first backtracking in RTL.",
        status: "Planned",
      },
      {
        label: "Improved",
        summary: "Configurable board loader and modular solver core.",
        status: "Planned",
      },
      {
        label: "Add-ons",
        summary: "AXI interface to load puzzle and trigger solve from host CPU.",
        status: "Planned",
      },
    ],
    tags: ["algorithmic", "search", "experimental"],
  },
];
