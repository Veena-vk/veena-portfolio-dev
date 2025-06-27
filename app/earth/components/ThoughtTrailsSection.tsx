// components/ThoughtTrailsSection.tsx
import React from "react";
import Card from "./Card";
import Section from "./Section";

const ThoughtTrailsSection = () => (
  <Section icon="🧭" title="Thought Trails" subtitle="Waves of Mind">
    <Card
      title="Why Do We Research?"
      content="A reflection on how science evolved from pure curiosity to a tangled web of motives, inequality, and utility."
      link="https://medium.com/your-link-here"
    />
  </Section>
);

export default ThoughtTrailsSection;