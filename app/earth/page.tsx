// app/earth/page.tsx
import React from "react";
import ThoughtTrailsSection from "./components/ThoughtTrailsSection";
import OuchSection from "./components/SetbackSection";
import CrackpotSection from "./components/CrackpotSection";

export default function EarthPage() {
  return (
    <main className="min-h-screen bg-[#F4E8D2] text-[#59200F] px-6 py-12 space-y-16">
      <ThoughtTrailsSection />
      <OuchSection />
      <CrackpotSection />
    </main>
  );
}
