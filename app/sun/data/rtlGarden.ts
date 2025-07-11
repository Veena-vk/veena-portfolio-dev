// rtlGarden.ts — structured list of projects by rarity and new fields
export const rtlGarden = [
  // 🌼 COMMON WILDFLOWER
  {
    id: "pomodoro-timer",
    title: "Pomodoro Timer",
    rarity: "Common Wildflower 🌼",
    status: "Full Bloom 🪷",
    description: "A cycle-based productivity timer with FSM-driven work/rest periods.",
    origin: "Based on the Pomodoro Technique for time management, reimagined as a state machine.",
    designNotes: "Uses a basic counter + FSM to alternate between work and break cycles.",
    rtlLink: "https://gist.github.com/veenavijay/pomodoro",
    reflection: "Taught me how to use modular FSMs with time counters in clean control logic."
  },
  {
    id: "haiku-meter",
    title: "Haiku Meter",
    rarity: "Common Wildflower 🌼",
    status: "Full Bloom 🪷",
    description: "Counts syllable pulses across 3 lines to validate 5-7-5 haiku structure.",
    origin: "Inspired by Japanese haiku structure and syllable metering.",
    designNotes: "Implements a 3-line FSM to count syllables and assert a haiku-valid output.",
    rtlLink: "https://gist.github.com/Veena-vk/09052f234ff33d3da72f87aaf6fff0a0",
    reflection: "Explored how FSMs can be symbolic in artistic contexts too."
  },

  // 🌿 TENDED BLOOM
  {
    id: "conway-life",
    title: "Conway's Game of Life",
    rarity: "Tended Bloom 🌿",
    status: "Sapling 🌿",
    description: "Models cellular automaton evolution using grid memory and neighbor logic.",
    origin: "Based on Conway’s rules of life from mathematics and computer science.",
    designNotes: "Implements synchronous updates to a 2D grid using neighbor counters.",
    rtlLink: "https://gist.github.com/veenavijay/life",
    reflection: "Learned to manage grid memory and simulate parallel updates."
  },
  {
    id: "eclipse-predictor",
    title: "Eclipse Predictor",
    rarity: "Tended Bloom 🌿",
    status: "Sapling 🌿",
    description: "Models celestial alignments to predict solar and lunar eclipses using minute-level phase tracking.",
    origin: "Inspired by ancient eclipse prediction techniques and orbital math.",
    designNotes: "FSM tracks lunar phases and nodal alignments for eclipse detection.",
    rtlLink: "https://gist.github.com/veenavijay/eclipse",
    reflection: "Strengthened my grasp of symbolic counters and FSMs for long-duration tracking."
  },
  {
    id: "binary-star-dance",
    title: "Binary Star Dance",
    rarity: "Tended Bloom 🌿",
    status: "Seeded 🌱",
    description: "Visualizes the orbit of two stars around a barycenter with real-time position logic.",
    origin: "Inspired by binary star motion in astronomy.",
    designNotes: "Plans to use sine/cosine lookup tables or CORDIC to animate circular paths.",
    rtlLink: "https://gist.github.com/veenavijay/star-dance"
  },
  {
    id: "helio-centric-system",
    title: "Helio Centric System",
    rarity: "Tended Bloom 🌿",
    status: "Seeded 🌱",
    description: "Models the inner solar system orbiting the sun using period-accurate cycles.",
    origin: "Built on early heliocentric models of Copernicus and Kepler’s laws.",
    designNotes: "Simplified circular orbit models with adjustable orbital periods.",
    rtlLink: "https://gist.github.com/veenavijay/helios"
  },

  // 🪻 ARCHITECT'S HYBRID
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    rarity: "Architect's Hybrid 🪻",
    status: "Seeded 🌱",
    description: "A logic solver using grid traversal, constraint propagation, and backtracking FSM.",
    origin: "Inspired by classic Sudoku puzzles and backtracking algorithms.",
    designNotes: "Grid walker with recursion emulation and cell constraint checkers.",
    rtlLink: "https://gist.github.com/veenavijay/sudoku"
  },
  {
    id: "maze-runner",
    title: "Maze Runner",
    rarity: "Architect's Hybrid 🪻",
    status: "Seeded 🌱",
    description: "Simulates an agent navigating a maze using directional FSM and path memory.",
    origin: "Based on virtual maze runners and AI agent simulations.",
    designNotes: "Direction FSMs with branch memory for junctions.",
    rtlLink: "https://gist.github.com/veenavijay/maze"
  },

  // 🌸 RARE ORCHID
  {
    id: "raga-identifier",
    title: "Raga Identifier",
    rarity: "Rare Orchid 🌸",
    status: "Seeded 🌱",
    description: "Detects Melakarta Carnatic ragas based on note sequences from audio stream.",
    origin: "From Carnatic raga classification — 72 Melakartas — and note interval logic.",
    designNotes: "Maps input note patterns to a static LUT of Melakarta swara sequences.",
    rtlLink: "https://gist.github.com/veenavijay/raga"
  },
  {
    id: "kolam-compiler",
    title: "Kolam Compiler",
    rarity: "Rare Orchid 🌸",
    status: "Seeded 🌱",
    description: "Generates chikku kolam strokes from seed points using symmetric line walkers.",
    origin: "Based on Tamil Nadu’s traditional chikku kolam art.",
    designNotes: "Uses a tracing FSM to walk symmetric paths over a grid.",
    rtlLink: "https://gist.github.com/veenavijay/kolam"
  }
];