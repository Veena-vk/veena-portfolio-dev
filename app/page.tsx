'use client'

import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Left Side */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-center px-6 space-y-8">
        <h1 className="text-4xl font-bold">Veena Vijayakumar</h1>
        <p className="text-lg text-gray-300 max-w-md">
          This is not just a portfolio — it’s a digital space to express myself with free will.
          A living archive of realizations, reflections, and constant transformation.
        </p>

        {/* Icons with Labels */}
        <div className="flex gap-10 text-white text-center">
          <div className="flex flex-col items-center">
            <button className="text-3xl hover:scale-110 transition-transform"☀️</button>
            <span className="text-sm mt-1 text-gray-400">Professional</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="text-3xl hover:scale-110 transition-transform">🌙</button>
            <span className="text-sm mt-1 text-gray-400">Creative</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="text-3xl hover:scale-110 transition-transform">🌍</button>
            <span className="text-sm mt-1 text-gray-400">Intersections</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full relative">
        <Image
          src="/profile.png"
          alt="Veena's profile"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
}
