import React from 'react';
import { Gift, Rocket, Sparkles, Clock } from 'lucide-react';

export function BetaSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Beta announcement */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C7C59]/10 via-[#441FFF]/10 to-[#DD1155]/10 rounded-3xl blur-xl" />
        
        <div className="relative bg-white/80 backdrop-blur-sm border border-[#0D1821]/10 rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFF1F]/30 border border-[#FFFF1F]/50 rounded-full text-sm text-[#0D1821] mb-6">
              <Sparkles className="w-4 h-4" />
              Limited Beta Access
            </div>
            
            <h2 className="text-4xl md:text-5xl text-[#0D1821] mb-6">
              Beta is invite-only.
            </h2>
            
            <p className="text-xl text-[#0D1821]/70 max-w-2xl mx-auto">
              Early users get lifetime build minute rewards.
            </p>
          </div>

          {/* Perks grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#0D1821]/10 rounded-xl p-6 hover:border-[#0C7C59]/50 hover:shadow-lg hover:shadow-[#0C7C59]/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0C7C59] to-[#0C7C59]/80 rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg text-[#0D1821] mb-2">10,000 free builds/mo</h3>
              <p className="text-sm text-[#0D1821]/60">Forever. For early adopters.</p>
            </div>

            <div className="bg-white border border-[#0D1821]/10 rounded-xl p-6 hover:border-[#441FFF]/50 hover:shadow-lg hover:shadow-[#441FFF]/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#441FFF] to-[#DD1155] rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg text-[#0D1821] mb-2">Priority support</h3>
              <p className="text-sm text-[#0D1821]/60">Direct line to our team.</p>
            </div>

            <div className="bg-white border border-[#0D1821]/10 rounded-xl p-6 hover:border-[#FFFF1F]/50 hover:shadow-lg hover:shadow-[#FFFF1F]/20 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFFF1F] to-[#0C7C59] rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#0D1821]" />
              </div>
              <h3 className="text-lg text-[#0D1821] mb-2">Beta badge</h3>
              <p className="text-sm text-[#0D1821]/60">Show off your OG status.</p>
            </div>

            <div className="bg-white border border-[#0D1821]/10 rounded-xl p-6 hover:border-[#DD1155]/50 hover:shadow-lg hover:shadow-[#DD1155]/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DD1155] to-[#441FFF] rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg text-[#0D1821] mb-2">Early access</h3>
              <p className="text-sm text-[#0D1821]/60">New features first.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-[#0D1821]/60 mb-6">
              Want to skip the line? Submit your email above and we'll send you an invite.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-[#0C7C59]">
              <div className="w-2 h-2 bg-[#0C7C59] rounded-full animate-pulse" />
              <span>247 developers on the waitlist</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}