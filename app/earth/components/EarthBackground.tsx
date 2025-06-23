// app/components/EarthBackground.tsx
'use client';

import RabbitHole from './RabbitHole';

export default function EarthBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Layer 1: Base Muddy Color */}
      <div className="absolute inset-0 bg-[#7B5E57]" />

      {/* Layer 2: Repeating Soil Bands */}
      <div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            to bottom,
            #7B5E57,
            #7B5E57 24px,
            #6a4c3d 24px,
            #6a4c3d 48px
          )`,
          opacity: 0.15,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Layer 3: Pebble-like Radial Specks */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 10%, #5c4434 2px, transparent 0),
            radial-gradient(circle at 50% 30%, #4d3a2a 1.5px, transparent 0),
            radial-gradient(circle at 80% 70%, #6a4c3d 3px, transparent 0),
            radial-gradient(circle at 30% 80%, #4b3a2a 1.5px, transparent 0)
          `,
          backgroundSize: '100% 100%',
          opacity: 0.08,
        }}
      />

      {/* Layer 4: SVG Noise Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Rabbit Animation */}
      <RabbitHole />
    </div>
  );
}
