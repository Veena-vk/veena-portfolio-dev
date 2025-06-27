// components/SetbackSection.tsx
import React from "react";
import Card from "./Card";
import Section from "./Section";

const SetbackSection = () => (
  <Section icon="💥" title="Ouch – But I Grew" subtitle="Retreating Tides">
    <Card
      title="AXI Stream Deadlock: Forgot TLAST"
      content="I debugged for two days before realizing my stream never ended. TLAST was missing."
    />
  </Section>
);

export default SetbackSection;