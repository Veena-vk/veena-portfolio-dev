// app/earth/page.tsx
import React from "react";
import ThoughtTrailsSection from "./components/ThoughtTrailsSection";
import OuchSection from "./components/SetbackSection";
import CrackpotSection from "./components/CrackpotSection";

export default function EarthPage() {
  return (
    <main className="min-h-screen bg-[#F4E8D2] text-[#59200F] px-6 py-12 space-y-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#59200F] text-center mb-1">
    	The Earth Section</h1>
      <p className="text-md md:text-lg text-center italic text-[#8F7C60] mb-8 max-w-2xl mx-auto">
        A space for evolution — of logic, life, and the lessons between.
      </p>
      <ThoughtTrailsSection />
      <OuchSection />
      <CrackpotSection />
    </main>
  );
}
