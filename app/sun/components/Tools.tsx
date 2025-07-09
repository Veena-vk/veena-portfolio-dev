"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ideImages = [
  "/ide_images/ide-1.png",
  "/ide_images/ide-2.png",
  "/ide_images/ide-3.png",
  "/ide_images/ide-4.png",
  "/ide_images/ide-5.png"
];

export default function Tools() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % ideImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + ideImages.length) % ideImages.length);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🛠️ Tools & Utilities</h2>
      <p className="text-muted-foreground mb-6">
        Part of <span className="font-medium text-zinc-800 dark:text-zinc-200">Sangamam</span> — a confluence of all my HDL efforts. Each project is a <em>thuli</em> (துளி) — a drop — and <strong>Aazhi</strong> (ஆழி) represents the ocean they form together.
      </p>

      <div className="space-y-10">
        {/* HDL IDE */}
        <div className="border rounded-2xl p-5 bg-white dark:bg-zinc-900 shadow-sm">
          <div className="mb-3">
            <h3 className="text-xl font-bold">⚙️ HDL IDE</h3>
            <p className="text-sm text-muted-foreground mt-1">
              A lightweight development environment tailored for HDL design. Built with Electron + Monaco,
              and supports Yosys-based flows. Basic UI layout is scaffolded — file explorer, editor, status bar, and console views are in place.
            </p>
          </div>

          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Tabbed editor with syntax highlighting</li>
            <li>Project-aware file tree</li>
            <li>Terminal, Lint View, Simulation tabs</li>
            <li>Status bar and mode toggle (planned)</li>
          </ul>

          <div className="mt-6">
            <h4 className="font-medium text-base mb-2">🖼️ Gallery</h4>
            <div className="relative w-full max-w-xl mx-auto">
              <Image
                src={ideImages[currentIndex]}
                alt={`HDL IDE Screenshot ${currentIndex + 1}`}
                width={800}
                height={480}
                className="rounded-xl border shadow w-full object-contain"
              />
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800 text-white px-3 py-1 rounded-r opacity-80 hover:opacity-100"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800 text-white px-3 py-1 rounded-l opacity-80 hover:opacity-100"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-4">
            <Link href="https://github.com/veenavijay/hdl-ide" target="_blank" className="text-blue-600 underline">
              View Project
            </Link>
          </div>
        </div>

        {/* Aazhi IP Library */}
        <div className="border rounded-2xl p-5 bg-white dark:bg-zinc-900 shadow-sm">
          <div className="mb-3">
            <h3 className="text-xl font-bold">🌊 Aazhi IP Library</h3>
            <p className="text-sm text-muted-foreground mt-1">
              A curated collection of reusable RTL modules and testbench components written in
              Verilog/SystemVerilog.
            </p>
          </div>

          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Common RTL blocks: counters, LFSRs, timers</li>
            <li>DSP primitives: test pattern generators, filters</li>
            <li>Test utilities: streamers, assertions, scoreboards</li>
            <li>Written to support both standalone and SoC-level designs</li>
          </ul>

          <div className="mt-3">
            <Link href="https://github.com/veenavijay/aazhi" target="_blank" className="text-blue-600 underline">
              Explore Aazhi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
