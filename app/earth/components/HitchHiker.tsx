import React from "react";
import Section from "./Section";

const HitchHiker = () => {
  return (
   <Section icon="" title="Hitch Hiker's Guide to Design" 
        subtitle="A layered walk through the design universe — from electrons to ethics.">
   <div className="rounded-xl border border-yellow-300 bg-yellow-50 shadow-md overflow-hidden">
      <iframe
  src="https://habitual-dracorex-368.notion.site/ebd/22f68e6111a780d88a0bfe075d8450da"
  style={{ width: "100%", height: "80vh", border: "none" }}
  allowFullScreen
/>
</div>
   </Section>
  );
};

export default HitchHiker;
