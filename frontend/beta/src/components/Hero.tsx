import React, { useState, useEffect } from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [logoClicks, setLogoClicks] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const [terminalExpanded, setTerminalExpanded] = useState(false);
  
  const terminalText = 'git push origin main → ✓ Deployed';
  
  const funnyMessages = [
    '✓ Your mom would be proud',
    '✓ Faster than instant coffee',
    '✓ Jenkins is crying somewhere',
    '✓ No animals were harmed',
    '✓ Webpack? Never heard of it'
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= terminalText.length) {
        setTypedText(terminalText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      console.log('Email submitted:', email);
    }
  };

  const handleLogoClick = () => {
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);
    
    if (newCount === 10) {
      setShowAchievement(true);
      console.log('%c🎉 Achievement Unlocked: "Button Masher"', 'background: linear-gradient(to right, #0C7C59, #441FFF); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
      console.log('%c🎟️ Secret Beta Code: DEPLOY-NINJA-2025', 'color: #FFFF1F; font-size: 16px; font-weight: bold;');
      setTimeout(() => {
        setShowAchievement(false);
        setLogoClicks(0);
      }, 5000);
    }
  };

  const handleTerminalTripleClick = () => {
    setTerminalExpanded(true);
    setTimeout(() => setTerminalExpanded(false), 8000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      {/* Logo/Brand */}
      <div className="flex items-center gap-3 mb-16">
        <div 
          className="w-10 h-10 bg-gradient-to-br from-[#0C7C59] to-[#441FFF] rounded-lg flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
          onClick={handleLogoClick}
          style={{ transform: showAchievement ? 'rotate(360deg)' : 'none', transition: 'transform 0.5s' }}
        >
          <Zap className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl text-[#0D1821]">DeployDash</span>
      </div>

      {/* Achievement Badge */}
      {showAchievement && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
          <div className="bg-gradient-to-r from-[#0C7C59] to-[#441FFF] text-white px-8 py-4 rounded-xl border-2 border-[#FFFF1F] shadow-xl">
            <div className="text-center">
              <div className="text-2xl mb-2">🎉 Achievement Unlocked!</div>
              <div className="text-lg">"Button Masher"</div>
              <div className="text-sm mt-2 opacity-90">Beta Code: DEPLOY-NINJA-2025</div>
            </div>
          </div>
          <div className="confetti-achievement">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="confetti-piece" style={{
                left: `${50 + (Math.random() - 0.5) * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                backgroundColor: ['#0C7C59', '#441FFF', '#FFFF1F', '#DD1155'][Math.floor(Math.random() * 4)]
              }} />
            ))}
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="max-w-4xl">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-[#0C7C59]/10 border border-[#0C7C59]/30 rounded-full text-sm text-[#0C7C59]">
            Coming Soon
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#0D1821] mb-6 leading-tight">
          Deploy in seconds,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C7C59] to-[#441FFF]">
            not hours.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#0D1821]/70 mb-12 max-w-3xl leading-relaxed">
          We're building the fastest way to ship web apps. Auto deploy. Edge powered. Developer friendly.
        </p>

        {/* Terminal preview */}
        <div 
          className="bg-white border border-[#0D1821]/10 rounded-xl p-6 mb-12 max-w-2xl shadow-xl shadow-[#0C7C59]/10 cursor-pointer transition-all hover:shadow-2xl hover:shadow-[#0C7C59]/20"
          onDoubleClick={handleTerminalTripleClick}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#DD1155]" />
            <div className="w-3 h-3 rounded-full bg-[#FFFF1F]" />
            <div className="w-3 h-3 rounded-full bg-[#0C7C59]" />
          </div>
          <div className="font-mono text-[#0C7C59]">
            <span className="text-[#0D1821]/50">$ </span>
            {typedText}
            <span className="inline-block w-2 h-5 bg-[#0C7C59] ml-1 animate-pulse" />
          </div>
          
          {/* Expanded terminal */}
          {terminalExpanded && (
            <div className="mt-4 space-y-1 text-sm font-mono animate-fadeIn">
              <div className="text-[#0D1821]/50">Counting objects: 42...</div>
              <div className="text-[#0D1821]/50">Compressing objects: 100%</div>
              <div className="text-[#0D1821]/50">Writing objects: 100%</div>
              <div className="text-[#0C7C59]">✓ Build completed in 0.8s</div>
              <div className="text-[#441FFF]">✓ Deployed to production</div>
              <div className="text-[#DD1155]">{funnyMessages[Math.floor(Math.random() * funnyMessages.length)]}</div>
            </div>
          )}
        </div>

        {/* Email capture */}
        { /*
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <input
              type="email"
              placeholder="your@email.dev"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white border border-[#0D1821]/20 rounded-lg text-[#0D1821] placeholder-[#0D1821]/40 focus:outline-none focus:border-[#0C7C59] focus:shadow-lg focus:shadow-[#0C7C59]/20 transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#0C7C59] to-[#441FFF] text-white rounded-lg hover:shadow-lg hover:shadow-[#0C7C59]/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Notify me when we launch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-3 p-6 bg-[#0C7C59]/10 border border-[#0C7C59]/30 rounded-lg max-w-2xl">
            <div className="w-8 h-8 bg-[#0C7C59] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-[#0C7C59]">You're on the list! We'll notify you at launch. 🚀</p>
          </div>
        )}
        */}
      </div>
    </div>
  );
}