'use client';

import Image from 'next/image';
import { books } from './data/books';

const TAG_COLOR = {
  sun: 'bg-yellow-100 text-yellow-800',
  moon: 'bg-indigo-100 text-indigo-800',
  earth: 'bg-green-100 text-green-800',
};

export default function BookshelfPage() {
  return (
    <main className="relative min-h-screen text-gray-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bookshelf-bg.png"
          alt="Bookshelf background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 space-y-12 bg-white/80 backdrop-blur-sm">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">Veena’s Bookshelf</h1>
          <p className="text-sm text-gray-700 italic">
            This shelf holds the fragments that shaped my thinking — from the precise rhythms of silicon to the chaos of the cosmos, from circuit boards to existential doubt. Categorized not by subject, but by light: ☀️ Sun for the professional, 🌙 Moon for the poetic, 🌍 Earth for the strange intersections.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {books.map((book, index) => (
            <div
              key={index}
              className="border-l-4 pl-4 shadow-sm rounded-lg bg-white/90 backdrop-blur p-4"
            >
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm italic text-gray-600">{book.author}</p>
              <div className="mt-2 flex gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${TAG_COLOR[tag as keyof typeof TAG_COLOR]}`}
                  >
                    {tag === 'sun' ? '☀️' : tag === 'moon' ? '🌙' : '🌍'}
                  </span>
                ))}
                {book.status && (
  		<span
  		  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
  		    book.status === 'read'
 		       ? 'bg-green-100 text-green-800'
		        : 'bg-gray-100 text-gray-600'
		    }`}
		  >
  		  {book.status === 'read' ? '✅ Read' : '📖 To Read'}
 		 </span>
		)}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
