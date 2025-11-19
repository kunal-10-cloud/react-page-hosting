import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { BetaSection } from './components/BetaSection';
import { Footer } from './components/Footer';

function App() {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);
  const [yamlDetected, setYamlDetected] = useState(false);
  const [deployTest, setDeployTest] = useState(false);
  const [vimEmacs, setVimEmacs] = useState<'vim' | 'emacs' | null>(null);
  const [shakeDetected, setShakeDetected] = useState(false);
  const [commandPalette, setCommandPalette] = useState(false);
  const [leetTime, setLeetTime] = useState(false);
  const [helpGuide, setHelpGuide] = useState(false);
  
  const [keySequence, setKeySequence] = useState('');
  const [deploySequence, setDeploySequence] = useState('');
  
  const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

  // DevTools detection and console messages
  useEffect(() => {
    const welcomeASCII = `
   ___            __           _  __
  / _ \\___ ___  / /__  __ __ | |/ /
 / // / -_) _ \\/ / _ \\/ // / |   / 
/____/\\__/ .__/_/\\___/\\_, / /   |  
        /_/          /___/     
    `;
    
    console.log('%c' + welcomeASCII, 'color:#0C7C59;font-weight:bold;');
    console.log('%c👋 Fellow developer! Type help() for secrets', 'color:#441FFF;font-size:16px;font-weight:bold;');
    console.log('%c🔥 Psst... we\'re looking for hackers like you. Email: dev@DeployDash.dev', 'color:#DD1155;font-size:14px;');
    
    // Secret console functions
    (window as any).help = () => {
      console.log('%c📚 Secret Commands:', 'color:#0C7C59;font-size:18px;font-weight:bold;');
      console.log('%c  deploy()     - Run instant deployment', 'color:#441FFF;font-size:14px;');
      console.log('%c  godMode()    - Activate god mode', 'color:#441FFF;font-size:14px;');
      console.log('%c  skipYAML()   - Forever avoid YAML', 'color:#441FFF;font-size:14px;');
      console.log('%c  coffee()     - Essential fuel', 'color:#441FFF;font-size:14px;');
    };
    
    (window as any).deploy = () => {
      console.log('%c⚡ Deploying...', 'color:#FFFF1F;font-size:16px;');
      setTimeout(() => {
        console.log('%c✓ Deployed in 247ms. Vercel is still loading...', 'color:#0C7C59;font-size:16px;font-weight:bold;');
      }, 300);
    };
    
    (window as any).godMode = () => {
      console.log('%c🚀 GOD MODE ACTIVATED', 'color:#DD1155;font-size:20px;font-weight:bold;');
      setKonamiActivated(true);
      setTimeout(() => setKonamiActivated(false), 5000);
    };
    
    (window as any).skipYAML = () => {
      console.log('%c✓ YAML-free since 2025 🎉', 'color:#0C7C59;font-size:16px;');
      console.log('%cNo more config nightmares!', 'color:#441FFF;font-size:14px;');
    };
    
    (window as any).coffee = () => {
      console.log('%c☕ Brewing coffee...', 'color:#0D1821;font-size:14px;');
      setTimeout(() => {
        console.log('%c☕ Coffee ready! But your deploy was already done.', 'color:#0C7C59;font-size:14px;');
      }, 1000);
    };

    // 1337 time checker (The Time Traveler)
    const checkLeetTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      if (hours === 13 && minutes === 37 && !leetTime) {
        setLeetTime(true);
        console.log('%c1337 detected. You\'re a true hacker 🕶️', 'color:#0C7C59;font-size:18px;font-weight:bold;');
        setTimeout(() => setLeetTime(false), 10000);
      }
    };
    
    const timeInterval = setInterval(checkLeetTime, 1000);
    
    return () => clearInterval(timeInterval);
  }, [leetTime]);

  // Konami Code and key sequence detection
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Update key sequence for Konami code
      const newSequence = keySequence + e.key;
      setKeySequence(newSequence.slice(-konamiCode.length));
      
      if (newSequence.slice(-konamiCode.length) === konamiCode) {
        setMatrixMode(true);
        console.log('%c╔══════════════════════════════╗', 'color:#0C7C59;font-size:14px;font-family:monospace;');
        console.log('%c║   🚀 GOD MODE ACTIVATED 🚀   ║', 'color:#0C7C59;font-size:14px;font-family:monospace;');
        console.log('%c║  Your deploys are now INSTANT ║', 'color:#0C7C59;font-size:14px;font-family:monospace;');
        console.log('%c║   (webpack not included)     ║', 'color:#0C7C59;font-size:14px;font-family:monospace;');
        console.log('%c╚══════════════════════════════╝', 'color:#0C7C59;font-size:14px;font-family:monospace;');
        setTimeout(() => setMatrixMode(false), 10000);
      }
      
      // DEPLOY sequence detection
      const newDeploySeq = deploySequence + e.key.toLowerCase();
      setDeploySequence(newDeploySeq.slice(-6));
      
      if (newDeploySeq.slice(-6) === 'deploy') {
        setDeployTest(true);
        console.log('%c⚡ Deployed in 247ms. Vercel is still loading...', 'color:#0C7C59;font-size:16px;font-weight:bold;');
        setTimeout(() => setDeployTest(false), 4000);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [keySequence, konamiCode, deploySequence]);

  // Text input detection for YAML, VIM, EMACS
  useEffect(() => {
    let textBuffer = '';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Build text buffer from key presses
      if (e.key.length === 1) {
        textBuffer += e.key.toLowerCase();
        textBuffer = textBuffer.slice(-10); // Keep last 10 characters
        
        // YAML detection
        if (textBuffer.includes('yaml')) {
          setYamlDetected(true);
          console.error('%cNice try. But we\'re YAML-free since 2025 🎉', 'color:#DD1155;font-size:16px;font-weight:bold;');
          setTimeout(() => setYamlDetected(false), 3000);
          textBuffer = ''; // Reset
        }
        
        // VIM detection
        if (textBuffer.includes('vim') && !textBuffer.includes('emacs')) {
          setVimEmacs('vim');
          console.log('%c:wq! You have great taste 😎', 'color:#0C7C59;font-size:16px;font-weight:bold;');
          setTimeout(() => setVimEmacs(null), 3000);
          textBuffer = '';
        }
        
        // EMACS detection
        if (textBuffer.includes('emacs')) {
          setVimEmacs('emacs');
          console.log('%cCtrl+X Ctrl+C ... just use vim 🙄', 'color:#DD1155;font-size:16px;');
          console.log('%cCommand not found: emacs', 'color:#DD1155;font-size:14px;font-family:monospace;');
          setTimeout(() => setVimEmacs(null), 3000);
          textBuffer = '';
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Command Palette (Cmd/Ctrl + K)
  useEffect(() => {
    const handleCommandPalette = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPalette(true);
      }
      
      if (e.key === 'Escape') {
        setCommandPalette(false);
      }
    };
    
    window.addEventListener('keydown', handleCommandPalette);
    return () => window.removeEventListener('keydown', handleCommandPalette);
  }, []);

  // Cursor shake detection
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let movements: number[] = [];
    
    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.sqrt(
        Math.pow(e.clientX - mouseX, 2) + Math.pow(e.clientY - mouseY, 2)
      );
      
      movements.push(distance);
      if (movements.length > 10) movements.shift();
      
      const avgMovement = movements.reduce((a, b) => a + b, 0) / movements.length;
      
      if (avgMovement > 100 && movements.length === 10) {
        setShakeDetected(true);
        console.log('%cCalm down. Deploys are already instant ⚡', 'color:#FFFF1F;font-size:16px;');
        movements = []; // Reset
        setTimeout(() => setShakeDetected(false), 2000);
      }
      
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7FFF6] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0C7C59] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#441FFF] rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#DD1155] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000" />

      {/* Matrix Mode */}
      {matrixMode && (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
          <div className="matrix-rain" />
        </div>
      )}

      {/* YAML Detection Animation */}
      {yamlDetected && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute inset-0 bg-[#DD1155] animate-flash" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0D1821] text-[#DD1155] px-8 py-6 rounded-xl border-4 border-[#DD1155] font-mono animate-bounce">
            <div className="text-2xl mb-2">ERROR: yaml detected</div>
            <div className="text-lg">Initiating auto-delete sequence...</div>
            <div className="text-sm mt-2 text-[#0C7C59]">JK we don't use that here 😎</div>
          </div>
          <div className="confetti-container">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: ['#DD1155', '#441FFF', '#0C7C59'][Math.floor(Math.random() * 3)]
              }}>NO YAML</div>
            ))}
          </div>
        </div>
      )}

      {/* Deploy Speed Test */}
      {deployTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0D1821] text-[#0C7C59] p-8 rounded-xl border-2 border-[#0C7C59] font-mono max-w-2xl w-full mx-4">
            <div className="text-xl mb-4">$ git push origin main</div>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="text-[#0C7C59]">Deploying...</div>
                <div className="flex-1 bg-[#0D1821] border border-[#0C7C59] rounded-full h-4 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0C7C59] to-[#441FFF] animate-fastProgress" />
                </div>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="text-[#0C7C59]">✓ Build completed in 0.3s</div>
              <div className="text-[#441FFF]">✓ Deployed to production</div>
              <div className="text-[#FFFF1F]">✓ Achievement unlocked!</div>
            </div>
            <div className="mt-4 text-center">
              <div className="ascii-rocket text-[#DD1155]">
                    🚀
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIM/EMACS Badge */}
      {vimEmacs && (
        <div className="fixed top-8 right-8 z-50 animate-slideInRight">
          <div className={`px-6 py-3 rounded-xl border-2 ${
            vimEmacs === 'vim' 
              ? 'bg-[#0C7C59] border-[#0C7C59] text-white' 
              : 'bg-[#DD1155] border-[#DD1155] text-white'
          }`}>
            {vimEmacs === 'vim' ? '✓ Great taste!' : '✗ Try vim instead'}
          </div>
        </div>
      )}

      {/* Shake Detection */}
      {shakeDetected && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-shake">
          <div className="bg-[#FFFF1F] text-[#0D1821] px-8 py-4 rounded-xl border-2 border-[#0D1821] text-xl">
            Easy there! This isn't an Etch A Sketch 🎨
          </div>
        </div>
      )}

      {/* Command Palette */}
      {commandPalette && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-32 bg-black/50 backdrop-blur-sm" onClick={() => setCommandPalette(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden border border-[#0D1821]/20" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-[#0D1821]/10">
              <input 
                type="text" 
                placeholder="Type a command..." 
                className="w-full bg-transparent text-[#0D1821] placeholder-[#0D1821]/40 outline-none text-lg"
                autoFocus
              />
            </div>
            <div className="p-2">
              {[
                { icon: '🚀', text: 'Deploy to Production (God Mode)', color: '#0C7C59' },
                { icon: '🚫', text: 'Skip YAML Configuration Forever', color: '#DD1155' },
                { icon: '⚡', text: 'Enable Instant Deploy', color: '#441FFF' },
                { icon: '☕', text: 'Summon Coffee', color: '#FFFF1F' },
              ].map((cmd, i) => (
                <div 
                  key={i}
                  className="px-4 py-3 hover:bg-[#0C7C59]/10 rounded-lg cursor-pointer transition-colors flex items-center gap-3"
                  onClick={() => {
                    console.log(`%c${cmd.icon} ${cmd.text}`, `color:${cmd.color};font-size:16px;font-weight:bold;`);
                    setCommandPalette(false);
                  }}
                >
                  <span className="text-2xl">{cmd.icon}</span>
                  <span className="text-[#0D1821]">{cmd.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 1337 Time Badge */}
      {leetTime && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
          <div className="bg-gradient-to-r from-[#0C7C59] to-[#441FFF] text-white px-6 py-3 rounded-xl border-2 border-[#FFFF1F] text-xl font-mono shadow-lg">
            1337 H4X0R 🕶️
          </div>
        </div>
      )}

      <Hero />
      <FeatureCards />
      <BetaSection />
      <Footer />
    </div>
  );
}

export default App;