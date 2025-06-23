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
          <div className="text-center space-y-4">
  	<h2 className="text-2xl md:text-3xl font-light text-white tracking-wide italic">
 	   Hello, and thanks for stopping by.
 	 </h2>
 	 <p className="text-base md:text-lg text-gray-300 max-w-md">
 	   This is a glimpse into who I am—not to flaunt, but to record. Much of it may sound universal or even redundant. But I believe a 	complex human brain deserves to occupy a few hundred megabytes of internet space.<br /><br />
   	 To the recruiters—if you're here, I assume you're looking for more than just a resume. Not a mere work engine, but a personality to add 	to your team.<br /><br />
    	My world unfolds in three parts:<br /><br />
      	 <strong>Sun</strong> – My professional arena, where I shine from 9 to 5.<br />
   	 <strong>Moon</strong> – The reflection of my thoughts, emotions, and inner beauty.<br />
   	 <strong>Earth</strong> – The grounding force of principles and ethics that shape both my work and who I am.<br /><br />
  	  Take a detour through my little universe.
  	</p>
	</div>
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
          <div className="flex flex-col items-center">
 	   <Link href="/bookshelf" className="text-3xl hover:scale-110 transition-transform">📚</Link>
 	   <span className="text-sm mt-1 text-gray-400">Bookshelf</span>
	  </div>
	</div>

        {/* Right Side with Full-Stretch Profile Image */}
        <div className="hidden md:block md:w-1/2 w-full h-64 md:h-full relative">
          <Image
            src="/profile.png"
            alt="Veena's Universe"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
