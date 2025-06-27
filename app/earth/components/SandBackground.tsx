import React from "react";
import "./sand.css"; // Import the animation styles

export default function SandBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#D6C1A6] overflow-hidden">
      {/* Animated Sand Texture Overlay */}
      <div className="absolute inset-0 z-0 sand-texture pointer-events-none" />

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

}
