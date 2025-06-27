// components/Card.tsx
import React from "react";

const Card = ({ title, content, link }: {
  title: string;
  content: string;
  link?: string;
}) => (
  <div className="bg-[#59200F] p-5 rounded-xl text-white shadow-md max-w-xl">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-orange-100 mb-2">{content}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F4E8D2] underline text-sm hover:text-orange-300"
      >
        Read more ↗
      </a>
    )}
  </div>
);

export default Card;
