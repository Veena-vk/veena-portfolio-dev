'use client';

import { useEffect, useState } from 'react';

export default function MoonBackground() {
  const [stars, setStars] = useState<string[]>([]);

  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < 60; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const opacity = Math.random();
      starArray.push(
        `<div style="
          position: absolute;
          top: ${y}%;
          left: ${x}%;
          width: ${size}px;
          height: ${size}px;
          background: white;
          opacity: ${opacity};
          border-radius: 50%;
          animation: twinkle ${2 + Math.random() * 3}s infinite ease-in-out;
        "></div>`
      );
    }
    setStars(starArray);
  }, []);

  return (
    <>
      {/* Glowing Moon */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200 rounded-full shadow-2xl shadow-yellow-400 animate-pulse z-10" />

      {/* Animated Stars */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        dangerouslySetInnerHTML={{ __html: stars.join('') }}
      />

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>
    </>
  );
}
