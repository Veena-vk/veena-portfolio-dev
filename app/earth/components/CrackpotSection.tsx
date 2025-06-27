// components/CrackpotSection.tsx
import React from "react";
import Card from "./Card";
import Section from "./Section";

const CrackpotSection = () => (
  <Section icon="🌀" title="Crackpot Corners" subtitle="Driftwood Theories">
    <Card
      title="Logic Gates from Plants?"
      content="Can biology teach us to rethink the foundations of digital logic?"
    />
  </Section>
);

export default CrackpotSection;