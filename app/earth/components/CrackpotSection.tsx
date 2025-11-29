// components/CrackpotSection.tsx
import React from "react";
import Card from "./Card";
import Section from "./Section";
import { crackpotItems } from "./CrackpotFiles";

const CrackpotSection = () => (
  <Section
    icon="🌀"
    title="Crackpot Corner"
    subtitle="Driftwood Theories & Playful Speculation"
  >
    {crackpotItems.map((item, idx) => (
      <ExpandableCard
        key={idx}
        title={item.title}
        content={item.content}
        details={item.details}
      />
    ))}
  </Section>
);

export default CrackpotSection;