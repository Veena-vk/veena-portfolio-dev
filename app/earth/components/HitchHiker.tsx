import React from "react";
import Section from "./Section";

const HitchHiker = () => {
  return (
   <Section icon="" title="Hitch Hiker's Guide to Design" 
        subtitle="A layered walk through the design universe — from electrons to ethics.">
      <iframe
        src="https://www.notion.so/Hitch-Hiker-s-Guide-to-Design-22f68e6111a780d88a0bfe075d8450da?source=copy_link"
        title="Hitchhiker’s Guide to Design"
        className="w-full h-[80vh] rounded-xl shadow-md border border-gray-200"
        allowFullScreen
      ></iframe>
   </Section>
  );
};

export default HitchHiker;
