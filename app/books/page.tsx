// app/books/page.tsx
import { getAllBooks } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';

export default async function BookPage() {
  const books = await getAllBooks();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {books.map((book) => (
        <div key={book.slug} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
          <Image
            src={book.data.image}
            alt={book.data.title}
            width={150}
            height={220}
            className="rounded-md mb-2"
          />
          <h3 className="text-lg font-bold">{book.data.title}</h3>
          <p className="text-sm text-gray-600 italic">by {book.data.author}</p>
          <p className="text-sm text-gray-500">{book.data.category}</p>
          <p className="mt-2 text-sm">{book.content.substring(0, 120)}...</p>
        </div>
      ))}
    </div>
  );
}
