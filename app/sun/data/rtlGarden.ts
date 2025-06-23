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
];
