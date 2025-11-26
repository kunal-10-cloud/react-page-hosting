import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#0D1821]/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0C7C59] to-[#441FFF] rounded-lg" />
          <span className="text-[#0D1821]/60 text-sm">
            © 2025 Deploy. Launching soon.
          </span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="w-10 h-10 bg-[#0D1821]/5 hover:bg-[#0C7C59]/10 border border-[#0D1821]/10 hover:border-[#0C7C59]/50 rounded-lg flex items-center justify-center transition-all group"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-[#0D1821]/60 group-hover:text-[#0C7C59]" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 bg-[#0D1821]/5 hover:bg-[#441FFF]/10 border border-[#0D1821]/10 hover:border-[#441FFF]/50 rounded-lg flex items-center justify-center transition-all group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-[#0D1821]/60 group-hover:text-[#441FFF]" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 bg-[#0D1821]/5 hover:bg-[#DD1155]/10 border border-[#0D1821]/10 hover:border-[#DD1155]/50 rounded-lg flex items-center justify-center transition-all group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-[#0D1821]/60 group-hover:text-[#DD1155]" />
          </a>
          <a 
            href="mailto:early@deploy.dev" 
            className="w-10 h-10 bg-[#0D1821]/5 hover:bg-[#FFFF1F]/20 border border-[#0D1821]/10 hover:border-[#FFFF1F]/50 rounded-lg flex items-center justify-center transition-all group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-[#0D1821]/60 group-hover:text-[#FFFF1F]" />
          </a>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-[#0D1821]/60">
          <a href="#" className="hover:text-[#0C7C59] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#0C7C59] transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[#0C7C59] transition-colors">
            Status
          </a>
        </div>
      </div>

      {/* Fun developer message */}
      <div className="mt-8 text-center">
        <p className="text-xs text-[#0D1821]/40 font-mono">
          Made with ⚡ by developers, for developers. Check the console for surprises.
        </p>
      </div>
    </footer>
  );
}