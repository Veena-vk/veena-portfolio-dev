'use client';

import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { AcademicProjects } from './projects/AcademicProjects';
import { CapstonePath } from './projects/CapstonePath';

export default function SunPage() {
  return (
    <main className="p-8 space-y-16 bg-yellow-50 min-h-screen text-gray-900">
      <Intro />
      <Education />
      <Experience />
      <Skills />

      <section>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Academic Projects</h2>
        <AcademicProjects />
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Capstone Project: RISC-V SoC Journey</h2>
        <CapstonePath />
      </section>

      <footer className="text-right italic text-sm text-yellow-800">
        "Precision is poetic when it moves electrons."
      </footer>
    </main>
  );
}
