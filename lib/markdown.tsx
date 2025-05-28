import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMarkdownFiles(folder) {
  const dir = path.join(process.cwd(), folder);
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

export function getMarkdownContent(folder, file) {
  const filePath = path.join(process.cwd(), folder, file);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}
