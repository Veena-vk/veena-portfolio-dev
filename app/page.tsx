'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-black text-white flex flex-col">
      
      {/* Top Header with Full Width Name */}
      <header className="w-full text-center py-6">
        <h1 className="text-5xl font-extrabold tracking-wide">Veena Vijayakumar</h1>
      </header>

      {/* Split Section */}
      <div className="flex flex-col md:flex-row flex-1">

        {/* Left Side */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-center px-6 space-y-8">
          <p className="text-lg text-gray-300 max-w-md">
            This is not just a portfolio — it's a digital space to express myself with free will.  
            A living archive of realizations, reflections, and constant transformation.
          </p>
        </div>
          {/* Icons with Labels */}
         <div className="flex gap-10 text-white text-center">
         <div className="flex flex-col items-center">
         <Link href="/sun" className="text-3xl hover:scale-110 transition-transform">☀️</Link>
   	 <span className="text-sm mt-1 text-gray-400">Radiance</span>
 	 </div>
 	 <div className="flex flex-col items-center">
 	   <Link href="/moon" className="text-3xl hover:scale-110 transition-transform">🌙</Link>
  	  <span className="text-sm mt-1 text-gray-400">Reflections</span>
	  </div>
	  <div className="flex flex-col items-center">
 	   <Link href="/earth" className="text-3xl hover:scale-110 transition-transform">🌍</Link>
 	   <span className="text-sm mt-1 text-gray-400">Retrospections</span>
	  </div>
	</div>

        {/* Right Side with Full-Stretch Profile Image */}
        <div className="md:w-1/2 w-full h-64 md:h-full relative">
          <Image
            src="/profile.png"
            alt="Veena's profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
