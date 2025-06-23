// components/EarthFloatingLayer.tsx
export default function EarthFloatingLayer() {
  const floatingItems = [
    {
      id: 1,
      content: "∇·E = ρ/ε₀",
      className: "top-[10%] left-[5%]",
    },
    {
      id: 2,
      content: "ψ(x) = A e^{i(kx - ωt)}",
      className: "top-[30%] right-[10%]",
    },
    {
      id: 3,
      content: "🧠", // symbolic neuron
      className: "bottom-[15%] left-[20%]",
    },
    {
      id: 4,
      content: "Σ logic block", // can be replaced with image/svg
      className: "bottom-[25%] right-[25%]",
    },
    {
      id: 5,
      content: "வாழ்க தமிழ்!", // Poetry fragment
      className: "top-[50%] left-[50%]",
    },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {floatingItems.map((item) => (
        <div
          key={item.id}
          className={`absolute text-white opacity-10 text-xl animate-float-slow ${item.className}`}
          style={{ animationDelay: `${item.id * 2}s`, transformOrigin: "center" }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
