// app/earth/page.tsx or pages/earth.tsx
import EarthBackground from "./components/EarthBackground";
import EarthFloatingLayer from "./components/EarthFloatingLayer";
import EarthImageDebris from "./components/EarthImageDebris";

export default function Earth() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden hover:animate-shake">
      <EarthBackground />
      <EarthFloatingLayer />
      <EarthImageDebris />
      <div className="relative z-10 p-8 space-y-16">
        <h1 className="text-4xl font-bold">🌍 The Earth Corner</h1>

        <section>
          <h2 className="text-2xl mb-4">🗂 Crackpot Files</h2>
          <p className="text-base text-gray-300">Hover to reveal theories that may (or may not) change the world.</p>
          {/* Later: <CrackpotFiles /> */}
        </section>

        <section>
          <h2 className="text-2xl mb-4">💥 Failures & Pivots</h2>
          {/* Later: <FailuresAndPivots /> */}
        </section>

        <section>
          <h2 className="text-2xl mb-4">🔁 Cross-Pollinations</h2>
          {/* Later: <CrossPollinations /> */}
        </section>

        <section>
          <h2 className="text-2xl mb-4">🕳 Rabbit Holes</h2>
          {/* Later: <RabbitHoles /> */}
        </section>
      </div>
    </div>
  );
}
