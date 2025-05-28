// File: app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white font-sans">
        {children}
      </body>
    </html>
  );
}