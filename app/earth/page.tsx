// app/earth/page.tsx
import React from "react";
import ThoughtTrailsSection from "./components/ThoughtTrailsSection";
import OuchSection from "./components/SetbackSection";
import CrackpotSection from "./components/CrackpotSection";
import SandBackground from  "./components/SandBackground";
export default function EarthPage() {
  return (
    <SandBackground>
    <div className="relative w-full overflow-hidden">
  <svg
    className="absolute top-0 left-0 w-full h-24"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#A0C9C9"
      fillOpacity="1"
      d="M0,64L60,69.3C120,75,240,85,360,106.7C480,128,600,160,720,149.3C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>
</div>
    <main className="min-h-screen bg-[#D6C1A6] text-[#2F2B23] px-6 py-12 space-y-16">
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
    </SandBackground>
  );
}
