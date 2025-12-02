interface Badge3DProps {
  text: string;
  color: "primary" | "secondary" | "accent" | "destructive";
  rotation?: number;
}

export function Badge3D({ text, color, rotation = 0 }: Badge3DProps) {
  const colorClasses = {
    primary: "bg-[#441FFF] text-white border-[#441FFF]/50",
    secondary: "bg-[#0C7C59] text-white border-[#0C7C59]/50",
    accent: "bg-[#FFFF1F] text-[#0D1821] border-[#FFFF1F]/50",
    destructive: "bg-[#DD1155] text-white border-[#DD1155]/50",
  };

  const shadowColors = {
    primary: "rgba(68, 31, 255, 0.4)",
    secondary: "rgba(12, 124, 89, 0.4)",
    accent: "rgba(255, 255, 31, 0.4)",
    destructive: "rgba(221, 17, 85, 0.4)",
  };

  return (
    <div
      className={`inline-block px-5 py-2.5 ${colorClasses[color]} rounded-xl shadow-xl border-2 transform hover:scale-110 transition-transform cursor-pointer font-medium`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        boxShadow: `0 8px 20px ${shadowColors[color]}, inset 0 -3px 8px rgba(0,0,0,0.15)`
      }}
    >
      {text}
    </div>
  );
}