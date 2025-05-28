import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const booksDir = path.join(process.cwd(), 'content/books');

export async function getAllBooks() {
  const files = fs.readdirSync(booksDir);

  return files.map((filename) => {
    const filePath = path.join(booksDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace('.md', ''),
      data,
      content,
    };
  });
}
