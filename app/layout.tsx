// app/layout.tsx
'use client';

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-black text-white relative font-sans">
        {/* Top Bar with Hamburger */}
        <div className="w-full flex justify-end px-6 py-4 absolute top-0 left-0 z-50">
          <button
            className="text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Slide-Out Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 border-l border-gray-700 z-40 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 space-y-6">
            <Link href="/" onClick={() => setMenuOpen(false)}  className="text-xl hover:text-yellow-400">
               🏠 Home
	    </Link>
            <Link href="/sun" onClick={() => setMenuOpen(false)} className="text-xl hover:text-yellow-400">
              ☀️ Profession
            </Link>
            <Link href="/moon" onClick={() => setMenuOpen(false)} className="text-xl hover:text-yellow-400">
              🌙 Arts and Passion
            </Link>
            <Link href="/earth" onClick={() => setMenuOpen(false)} className="text-xl hover:text-yellow-400">
              🌍 Crossroads
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
