"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl w-full">
        {/* Text Block */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Veena Vijayakumar</h1>
          <p className="text-lg text-gray-300">
            It’s a digital space where I express myself with complete freedom — a collection of thoughts,
            experiments, failures, philosophies, and evolving goals.
            <br /><br />
            I made this to document my journey of realizations, constant change, and slow improvements —
            both technical and personal.
            <br /><br />
            Welcome to the layers of my mind.
          </p>
        </div>

        {/* Image Block */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="rounded-lg overflow-hidden border-4 border-gray-700 shadow-lg">
            <Image
              src="/profile.png"
              alt="Veena's profile"
              width={300}
              height={400}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Triangle Icon Menu */}
      <div className="relative w-64 h-64 mt-12">
        {/* Sun */}
        <Link href="/sun">
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #facc15" }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl cursor-pointer"
          >
           ☀️
          </motion.div>
        </Link>

        {/* Moon */}
        <Link href="/moon">
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #93c5fd" }}
            className="absolute bottom-0 left-0 text-4xl cursor-pointer"
          >
            🌙
          </motion.div>
        </Link>

        {/* Earth */}
        <Link href="/earth">
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #6ee7b7" }}
            className="absolute bottom-0 right-0 text-4xl cursor-pointer"
          >
            🌍
          </motion.div>
        </Link>
      </div>
    </main>
  );
}
