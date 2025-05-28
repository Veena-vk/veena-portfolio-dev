'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <motion.h1 whileHover={{ scale: 1.05 }} className="text-4xl font-bold mb-4">
        Veena's Portfolio
      </motion.h1>
      <p className="text-lg mb-6">VLSI engineer | Book lover | Creative explorer</p>
      <nav className="grid grid-cols-2 gap-4">
        <HoverCard href="/resume" title="Resume" />
        <HoverCard href="/certificates" title="Certificates" />
        <HoverCard href="/books" title="My Bookshelf" />
        <HoverCard href="/blogs" title="Blog" />
        <HoverCard href="/projects" title="Projects" />
        <HoverCard href="/contact" title="Contact" />
      </nav>
    </main>
  );
}

interface NavItemProps {
  href: string;
  title: string;
}

function HoverCard({ href, title }: NavItemProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="block p-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl text-white text-center text-xl shadow-lg hover:shadow-xl transition-all"
      >
        {title}
      </Link>
    </motion.div>
  );
}