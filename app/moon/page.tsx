'use client';

import MoonBackground from './components/MoonBackground';
import Poetry from './components/Poetry';
import RandomNotes from './components/RandomNotes';

export default function MoonPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-20">
      <MoonBackground />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Reflections Under the Moon</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          A quiet space for poetry, thought, and the slow unraveling of the self.
        </p>
      </div>

      <section className="relative z-10 mt-16 max-w-3xl mx-auto space-y-16">
        <Poetry />
        <RandomNotes />
      </section>
    </main>
  );
}
