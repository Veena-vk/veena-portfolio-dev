import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6 border border-zinc-200 dark:border-zinc-700 ${className}`}
    >
      {children}
    </div>
  );
}
