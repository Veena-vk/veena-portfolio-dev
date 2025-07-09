export const rtlGarden = [
  // 🌼 COMMON WILDFLOWER
  {
    id: "pomodoro-timer",
    title: "Pomodoro Timer",
    rarity: "Common Wildflower 🌼",
    description: "A cycle-based productivity timer with FSM-driven work/rest periods.",
    phases: [
      {
        label: "Core FSM",
        summary: "Implements timer state machine for work and break intervals.",
        status: "Complete",
      },
    ],
  },
  {
    id: "haiku-meter",
    title: "Haiku Meter",
    rarity: "Common Wildflower 🌼",
    description: "Counts syllable pulses across 3 lines to validate 5-7-5 haiku structure.",
    phases: [
      {
        label: "Syllable Pulse FSM",
        summary: "Advances through 3-line state machine and compares line counts.",
        status: "Complete",
        snippet: `assign is_haiku = fsm_done & (line1 == 5) & (line2 == 7) & (line3 == 5);`,
      },
    ],
  },

  // 🌿 TENDED BLOOM
  {
    id: "conway-life",
    title: "Conway's Game of Life",
    rarity: "Tended Bloom 🌿",
    description: "Models cellular automaton evolution using grid memory and neighbor logic.",
    phases: [
      {
        label: "Grid Evolution Logic",
        summary: "Applies rules on each tick to evolve grid cells.",
        status: "In Progress",
      },
    ],
  },
  {
    id: "eclipse-predictor",
    title: "Eclipse Predictor",
    rarity: "Tended Bloom 🌿",
    description: "Models celestial alignments to predict solar and lunar eclipses using minute-level phase and node tracking.",
    phases: [
      {
        label: "Celestial Condition FSM",
        summary: "Detects new/full moon + node alignment to raise eclipse flags.",
        status: "In Progress",
        snippet: `assign is_new_moon  = (moon_phase < THRESHOLD) || (moon_phase > (CYCLE - THRESHOLD));
assign near_node    = (node_phase < THRESHOLD) || (node_phase > (CYCLE - THRESHOLD));
assign solar_eclipse = is_new_moon && near_node;`,
      },
    ],
  },
  {
    id: "binary-star-dance",
    title: "Binary Star Dance",
    rarity: "Tended Bloom 🌿",
    description: "Visualizes the orbit of two stars around a barycenter with real-time position logic.",
    phases: [
      {
        label: "Orbit Position Generator",
        summary: "Calculates angular positions of stars in circular or elliptical orbit.",
        status: "Planned",
      },
    ],
  },
  {
    id: "helio-centric-system",
    title: "Helio Centric System",
    rarity: "Tended Bloom 🌿",
    description: "Models inner solar system orbiting the sun with period-accurate cycles.",
    phases: [
      {
        label: "Orbital FSM",
        summary: "Drives planet positions with simplified Keplerian timing.",
        status: "Planned",
      },
    ],
  },

  // 🧩 ARCHITECT'S HYBRID
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    rarity: "Architect's Hybrid 🧩",
    description: "A logic solver for Sudoku using grid traversal, constraint propagation, and backtracking FSM.",
    phases: [
      {
        label: "Grid FSM",
        summary: "Manages traversal and number assignment through nested states.",
        status: "Planned",
      },
    ],
  },
  {
    id: "maze-runner",
    title: "Maze Runner",
    rarity: "Architect's Hybrid 🧩",
    description: "Simulates agent navigating a maze using directional FSM and path memory.",
    phases: [
      {
        label: "Direction FSM",
        summary: "Controls movement decisions based on wall inputs.",
        status: "Planned",
      },
    ],
  },

  // 🪷 RARE ORCHID
  {
    id: "raga-identifier",
    title: "Raga Identifier",
    rarity: "Rare Orchid 🪷",
    description: "Detects Melakarta Carnatic ragas based on note sequences from audio stream.",
    phases: [
      {
        label: "Melakarta Matcher",
        summary: "Compares extracted swara patterns against 72 Melakarta templates.",
        status: "Planned",
      },
    ],
  },
  {
    id: "kolam-compiler",
    title: "Kolam Compiler",
    rarity: "Rare Orchid 🪷",
    description: "Generates chikku kolam strokes from seed points using symmetric line walkers.",
    phases: [
      {
        label: "Grid Walker",
        summary: "Traces looping symmetric strokes over 2D grid.",
        status: "Planned",
      },
    ],
  },
];
