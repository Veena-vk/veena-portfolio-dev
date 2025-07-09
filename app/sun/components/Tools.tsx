"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ideImages = [
  "/ide_images/ide-1.jpg",
  "/ide_images/ide-2.jpg",
  "/ide_images/ide-3.jpg",
  "/ide_images/ide-4.jpg",
  "/ide_images/ide-5.jpg"
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

      <section className="space-y-10">
        <div>
          <h3 className="text-xl font-bold text-yellow-800">⚙️ HDL IDE</h3>
          <p className="text-muted-foreground mt-2">
            Sangamam (Confluence): A lightweight HDL development environment built with Electron and Monaco. It supports
            Yosys-based flows, with a project-aware layout featuring editor tabs, console views, and
            status bar. Basic UI scaffolding is complete.
          </p>

          <div className="mt-4">
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

          <p className="mt-4">
            <Link href="https://github.com/veenavijay/hdl-ide" target="_blank" className="text-blue-600 underline">
              View Project
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-yellow-800">🌊 Aazhi IP Library</h3>
          <p className="text-muted-foreground mt-2">
            Aazhi (Ocean): A growing sea of reusable RTL and verification modules. From counters and streamers to
            test pattern generators, Aazhi is designed to plug into SoCs or act as standalone utilities. Planned for implementing as plug-ins to my IDE.
          </p>
          <p className="mt-1">
            <Link href="https://github.com/veenavijay/aazhi" target="_blank" className="text-blue-600 underline">
              Explore Aazhi
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
}
