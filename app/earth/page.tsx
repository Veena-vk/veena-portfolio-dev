// app/earth/page.tsx
import React from "react";
import ThoughtTrailsSection from "./components/ThoughtTrailsSection";
import OuchSection from "./components/SetbackSection";
import CrackpotSection from "./components/CrackpotSection";

export default function EarthPage() {
  return (
    <main className="min-h-screen bg-[#F4E8D2] text-[#59200F] px-6 py-12 space-y-16">
      <div className="text-center mb-6">
  	<h1 className="text-4xl md:text-5xl font-extrabold text-[#59200F]">
    	The Earth Section
  	</h1>
  	<p className="text-md md:text-lg italic text-[#8F7C60] mt-1">
    	A space for evolution — of logic, life, and the lessons between.
  	</p>
	</div>
      <ThoughtTrailsSection />
      <OuchSection />
      <CrackpotSection />
    </main>
  );
}
