// app/earth/page.tsx
import React from "react";
import ThoughtTrailsSection from "./components/ThoughtTrailsSection";
import OuchSection from "./components/SetbackSection";
import CrackpotSection from "./components/CrackpotSection";
import SandBackground from  "./components/SandBackground";
import WaveDivider from "./components/WaveDivider";

export default function EarthPage() {
  return (
    <SandBackground>
    <div className="bg-[#D6C1A6] relative">
     <WaveDivider position="top" inverted withFoam />
     <main className="min-h-screen text-[#2F2B23] px-6 py-12 space-y-16">
      <div className="text-center mb-6">
  	<h1 className="text-4xl md:text-5xl font-extrabold text-[#2F2B23]">
    	The Earth Section
  	</h1>
  	<p className="text-md md:text-lg italic text-[#3E2C19] mt-1">
    	A space for evolution — of logic, life, and the lessons between.
  	</p>
	</div>
      <ThoughtTrailsSection />
      <OuchSection />
      <CrackpotSection />
    </main>
    <WaveDivider position="bottom" withFoam />
    </div>
    </SandBackground>
  );
}
