import { LucideIcon } from "lucide-react";

interface StickerProps {
  icon?: LucideIcon;
  text?: string;
  color: "primary" | "secondary" | "accent" | "destructive" | "pink";
  size?: "sm" | "md" | "lg";
  rotation?: number;
  children?: React.ReactNode;
  className?: string;
}

export function Sticker({ 
  icon: Icon, 
  text, 
  color, 
  size = "md", 
  rotation = 0,
  children,
  className = ""
}: StickerProps) {
  const colorClasses = {
    primary: "bg-[#441FFF] text-white border-[#441FFF]",
    secondary: "bg-[#0C7C59] text-white border-[#0C7C59]",
    accent: "bg-[#FFFF1F] text-[#0D1821] border-[#FFFF1F]",
    destructive: "bg-[#DD1155] text-white border-[#DD1155]",
    pink: "bg-[#FF6B9D] text-white border-[#FF6B9D]",
  };

  const sizeClasses = {
    sm: "w-16 h-16 text-xs",
    md: "w-20 h-20 text-sm",
    lg: "w-28 h-28 text-base",
  };

  return (
    <div
      className={`sticker ${colorClasses[color]} ${sizeClasses[size]} rounded-full flex flex-col items-center justify-center gap-1 shadow-xl border-4 ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        boxShadow: '0 8px 25px rgba(0,0,0,0.2), inset 0 -2px 8px rgba(0,0,0,0.15)'
      }}
    >
      {Icon && <Icon className="w-6 h-6" />}
      {text && <span className="text-center px-2 font-medium">{text}</span>}
      {children}
    </div>
  );
}