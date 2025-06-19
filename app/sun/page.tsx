import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

export default function SunPage() {
  return (
    <main className="p-8 space-y-16 bg-yellow-50 min-h-screen text-gray-900">
      <Intro />
      <Education />
      <Experience />
      <Skills />

      <footer className="text-right italic text-sm text-yellow-800">
        "Precision is poetic when it moves electrons."
      </footer>
    </main>
  );
}
