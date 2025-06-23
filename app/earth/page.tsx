// app/earth/page.tsx
import CrackpotFiles from "./components/CrackpotFiles";

export default function Earth() {
  return (
    <div className="relative min-h-screen text-white">
      <EarthBackground />
    <div className="min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#2c2c2c] text-white overflow-x-hidden">
      <main className="px-4 sm:px-8 md:px-16 py-20 space-y-24 max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">🌍 The Earth Corner</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A grounded space for strange overlaps — between logic and dreams, failure and insight,
            science and spirit.  
          </p>
          <p className="text-sm text-gray-500 italic">
            Disclaimer: These are not final answers. Only curious detours.
          </p>
        </header>

        {/* Sections */}
        <section className="bg-neutral-800 p-6 rounded-xl shadow-sm border border-neutral-700">
          <h2 className="text-2xl font-semibold mb-2">🗂 Crackpot Files</h2>
          <p className="text-gray-300 mb-4">
            Unverified theories, speculative thoughts, and intuitive leaps.
          </p>
          <CrackpotFiles />
        </section>

        <section className="bg-neutral-800 p-6 rounded-xl shadow-sm border border-neutral-700">
          <h2 className="text-2xl font-semibold mb-2">💥 Failures & Pivots</h2>
          <p className="text-gray-300 mb-4">
            Dead-ends, flawed builds, and things that fell apart — until they didn’t.
          </p>
          {/* TODO: <FailuresAndPivots /> */}
        </section>

        <section className="bg-neutral-800 p-6 rounded-xl shadow-sm border border-neutral-700">
          <h2 className="text-2xl font-semibold mb-2">🔁 Cross-Pollinations</h2>
          <p className="text-gray-300 mb-4">
            Where disciplines blur — coding meets poetry, logic meets myth, science meets art.
          </p>
          {/* TODO: <CrossPollinations /> */}
        </section>

        <section className="bg-neutral-800 p-6 rounded-xl shadow-sm border border-neutral-700">
          <h2 className="text-2xl font-semibold mb-2">🕳 Rabbit Holes</h2>
          <p className="text-gray-300 mb-4">
            Explorations that started with a simple question and never came back the same.
          </p>
          {/* TODO: <RabbitHoles /> */}
        </section>
      </main>
    </div>
    </div>
  );
}
