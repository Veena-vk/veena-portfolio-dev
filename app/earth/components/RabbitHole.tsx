// app/components/RabbitHole.tsx
'use client';

import { motion } from 'framer-motion';

export default function RabbitHole() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
      {/* Hole */}
      <div className="w-24 h-6 bg-black rounded-full opacity-70" />

      {/* Rabbit */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 6,
        }}
        className="w-10 h-10 bg-white rounded-full relative -mt-6"
      >
        {/* Ears */}
        <div className="w-2 h-6 bg-gray-300 rounded-full absolute -left-1 top-[-12px] rotate-[20deg]" />
        <div className="w-2 h-6 bg-gray-300 rounded-full absolute -right-1 top-[-12px] rotate-[-20deg]" />

        {/* Eyes */}
        <div className="w-1 h-1 bg-black rounded-full absolute left-2 top-3" />
        <div className="w-1 h-1 bg-black rounded-full absolute right-2 top-3" />
      </motion.div>
    </div>
  );
}
