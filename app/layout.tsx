import "./globals.css"; // Tailwind styles
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veena's Universe",
  description: "Not just a portfolio – a space of expression and growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white relative overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
