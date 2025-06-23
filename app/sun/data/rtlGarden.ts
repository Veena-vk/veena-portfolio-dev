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
module lfsr_galois_16 (
    input wire clk,
    input wire rst_n,
    input wire load,
    input wire start,
    input wire [15:0] seed,
    output wire [15:0] data_out,
    output valid
    );
    
    reg [15:0] lfsr_reg;
    reg val_reg;
    wire feedback;
    assign feedback = lfsr_reg[15];
    always @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
        lfsr_reg <= 0;
        val_reg <= 0;
    end    
    else if (load) begin
        lfsr_reg <= (seed == 0)?16'h1 : seed;
        val_reg <= 0;
    end    
    else if(start) begin
        val_reg <= 1;
        lfsr_reg[0]  <= feedback;
	lfsr_reg[1]  <= lfsr_reg[0];
	lfsr_reg[2]  <= lfsr_reg[1];
	lfsr_reg[3]  <= lfsr_reg[2];
	lfsr_reg[4]  <= lfsr_reg[3];
	lfsr_reg[5]  <= lfsr_reg[4];
	lfsr_reg[6]  <= lfsr_reg[5];
	lfsr_reg[7]  <= lfsr_reg[6];
	lfsr_reg[8]  <= lfsr_reg[7];
	lfsr_reg[9]  <= lfsr_reg[8];
	lfsr_reg[10] <= lfsr_reg[9] ^ feedback;   // x¹¹
	lfsr_reg[11]  <= lfsr_reg[10];
	lfsr_reg[12] <= lfsr_reg[11] ^ feedback;  // x¹³
	lfsr_reg[13] <= lfsr_reg[12] ^ feedback;  // x¹⁴
	lfsr_reg[14] <= lfsr_reg[13] ^ feedback;  // x¹⁵
	lfsr_reg[15] <= lfsr_reg[14];             // shift MSB
    end
   end
   assign data_out = lfsr_reg;
   assign valid = val_reg;
   endmodule 
        `.trim(),
      },
      {
        label: "Improved",
        summary: "Parameterizable LFSR supporting any type(Galois, Fibonacci), width and tap mask. Planning to provision for input data for CRC and Scrambling add-ons",
        status: "In Progress",
        snippet: `// Parameterized LFSR with entropy analyzer
module lfsr_parametrized #(
  parameter LFSR_WIDTH = 16,
  parameter SEED = 16'hFFFF,
  parameter [LFSR_WIDTH-1:0] TAPS = 16'b1101010000000000
  )
  (
  input wire clk,
  input wire rst_n,
  input wire load,
  input wire start,
  input wire mode,
  input wire [LFSR_WIDTH-1:0] seed,
  output wire [LFSR_WIDTH-1:0] data_out,
  output valid
  );
    reg [LFSR_WIDTH-1:0] lfsr_reg;
    reg val_reg;
    wire feedback = (mode == 0) ? lfsr_reg[LFSR_WIDTH-1] : compute_feedback(lfsr_reg, TAPS);
    integer i;
    function automatic logic compute_feedback(
      input logic [LFSR_WIDTH-1:0] state,
      input logic [LFSR_WIDTH-1:0] taps
      );
      logic fb;
      integer j;
      begin
        fb = 1'b0;
        for (j = 0; j < LFSR_WIDTH; j = j + 1) begin
          if (taps[j])
            fb = fb ^ state[j];
          end
        return fb;
      end
    endfunction

    always @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
        lfsr_reg <= 0;
        val_reg <= 0;
    end    
    else if (load) begin
        lfsr_reg <= (seed == 0) ? (LFSR_WIDTH)'h1 : seed;
        val_reg <= 0;
    end    
    else if(start) begin
        if (mode == 0) begin   //Galois
           for (i = LFSR_WIDTH-1; i > 0; i = i - 1) begin
     	      lfsr_reg[i] <= lfsr_reg[i-1] ^ (TAPS[i] & feedback);
           end
           lfsr_reg[0] <= feedback;
           val_reg <= 1;
        end
        else begin
           lfsr_reg <= {lfsr_reg[LFSR_WIDTH-2:0],feedback};
           val_reg <= 1;
        end
    end
    end
   assign data_out = lfsr_reg;
   assign valid = val_reg;       
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
input wire clk,
input wire rst_n,
input wire start,
output wire [7:0] minutes,
output wire [7:0] seconds,
output wire time_over
);

reg [7: 0] min_reg,sec_reg = 0;
integer count = 0;
reg timeout = 0;

always @(posedge clk or negedge rst_n) begin
   if (!rst_n) begin
       min_reg <= 0;
       sec_reg <= 0;
       count <= 0;
       timeout <= 0;
   end
   else if (start) begin
       count <= count+1;
       if (count == 10000000)    //Assuming 100MHz Clock
          count <= 0;
          sec_reg <= sec_reg +1;
       end
       if (sec_reg == 59) begin
           sec_reg <= 0;
           min_reg <= min_reg + 1;
       end
       if (min_reg == 25) begin
          min_reg <= 0;
          timeout <= 1;
       end
  end
assign minutes = min_reg;
assign seconds = sec_reg;
assign time_over = timeout;
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
