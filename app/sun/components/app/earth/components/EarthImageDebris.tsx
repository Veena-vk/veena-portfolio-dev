// components/EarthImageDebris.tsx
const debrisImages = [
  { src: "/assets/earth/equation1.svg", className: "top-[5%] left-[10%] w-24" },
  { src: "/assets/earth/neuron.svg", className: "top-[30%] right-[5%] w-20" },
  { src: "/assets/earth/torn_paper1.png", className: "bottom-[15%] left-[15%] w-28" },
  { src: "/assets/earth/logic_gate.svg", className: "top-[60%] left-[55%] w-16" },
  { src: "/assets/earth/poetry1.svg", className: "bottom-[20%] right-[10%] w-32" },
];

export default function EarthImageDebris() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {debrisImages.map((item, idx) => (
        <img
          key={idx}
          src={item.src}
          alt={`debris-${idx}`}
          className={`absolute opacity-10 animate-drift-slow ${item.className}`}
          style={{ animationDelay: `${idx * 3}s`, transformOrigin: "center" }}
        />
      ))}
    </div>
  );
}
