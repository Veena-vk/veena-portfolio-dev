// components/Section.tsx
import React from "react";

const Section = ({ icon, title, subtitle, children }: {
  icon: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-4">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#59200F]">
      {icon} {title}
    </h2>
    <p className="text-sm italic text-[#8F7C60]">{subtitle}</p>
    <div className="space-y-4">{children}</div>
  </section>
);

export default Section;

