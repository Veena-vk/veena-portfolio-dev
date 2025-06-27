'use client';

import RabbitHole from './RabbitHole';

export default function EarthBackground() {
  return (
    <div className="absolute inset-0 bg-[#C1702C] overflow-hidden z-0">
      {/* Noise Texture via SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Rabbit animation */}
      <RabbitHole />
    </div>
  );
}
