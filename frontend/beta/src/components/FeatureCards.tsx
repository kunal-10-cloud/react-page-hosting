import React, { useState } from 'react';
import { Zap, GitBranch, Globe } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  easterEgg: string;
  color: string;
}

function FeatureCard({ icon, title, description, easterEgg, color }: FeatureCardProps) {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  return (
    <div 
      className="relative group bg-white border border-[#0D1821]/10 rounded-2xl p-8 hover:border-[#0C7C59]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#0C7C59]/20 overflow-hidden"
      onMouseEnter={() => setShowEasterEgg(true)}
      onMouseLeave={() => setShowEasterEgg(false)}
    >
      <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-2xl text-[#0D1821] mb-4">{title}</h3>
      
      <p className="text-[#0D1821]/70 leading-relaxed mb-6">
        {description}
      </p>

      {/* Easter egg reveal - now with proper spacing */}
      <div 
        className={`transition-all duration-300 ${
          showEasterEgg ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
        }`}
      >
        <div className="bg-gradient-to-r from-[#0C7C59]/10 to-[#441FFF]/10 border border-[#0C7C59]/30 rounded-lg px-4 py-3">
          <p className="text-sm text-[#0C7C59] font-mono">💡 {easterEgg}</p>
        </div>
      </div>
    </div>
  );
}

export function FeatureCards() {
  const features = [
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      title: 'One-click deploy',
      description: 'Drag, drop, boom. Live in seconds.',
      easterEgg: 'No YAML nightmares.',
      color: 'from-[#0C7C59] to-[#0C7C59]/90'
    },
    {
      icon: <GitBranch className="w-7 h-7 text-white" />,
      title: 'Zero config',
      description: 'Just push your repo. We handle the rest.',
      easterEgg: 'Webpack? Never heard of it.',
      color: 'from-[#441FFF] to-[#441FFF]/80'
    },
    {
      icon: <Globe className="w-7 h-7 text-white" />,
      title: 'Edge-powered',
      description: 'Served blazing fast. Everywhere.',
      easterEgg: 'Faster than your coffee breaks.',
      color: 'from-[#DD1155] to-[#DD1155]/80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-[#0D1821] mb-4">
          Ship faster. Sleep better.
        </h2>
        <p className="text-xl text-[#0D1821]/60">
          Hover over each card for a secret message 👀
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}