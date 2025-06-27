// app/components/WaveDivider.tsx

"use client";
import React from "react";
import clsx from "clsx";

interface WaveDividerProps {
  position?: "top" | "bottom";
  withFoam?: boolean;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ position = "bottom", withFoam = true }) => {
  const waveClass = clsx(
    "absolute w-full h-full",
    position === "top" ? "top-0" : "bottom-0"
  );

  return (
    <div className="relative w-full overflow-hidden h-24">
      {/* Base wave */}
      <svg
        className={waveClass}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#A0C9C9"
          d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,154.7C840,160,960,192,1080,202.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L0,320Z"
        />
      </svg>

      {/* Foam (white crest overlay) */}
      {withFoam && (
        <svg
          className={clsx(waveClass, "opacity-30")}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,154.7C840,160,960,192,1080,202.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L0,320Z"
          />
        </svg>
      )}
    </div>
  );
};

export default WaveDivider;
