import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Rocket, Star } from "lucide-react";
import { Sticker } from "./Sticker";

export function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-12 md:p-20 border-4 border-primary/30 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          
          {/* Floating stickers */}
          <div className="absolute top-10 left-10 hidden lg:block">
            <Sticker icon={Sparkles} color="pink" size="md" rotation={-15} />
          </div>
          <div className="absolute bottom-10 right-10 hidden lg:block">
            <Sticker icon={Rocket} color="pink" size="md" rotation={20} />
          </div>
          <div className="absolute top-1/2 right-[15%] hidden lg:block">
            <Sticker icon={Star} color="pink" size="sm" rotation={-10} />
          </div>
          
          <div className="relative text-center max-w-3xl mx-auto text-primary-foreground">
            <h2 className="mb-6 text-primary-foreground">
              Start building like a team of <span className="relative inline-block">
                hundreds
                <span className="absolute bottom-0 left-0 w-full h-3 bg-white/20 -rotate-1"></span>
              </span>. ✨
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Deploy your first project in under 60 seconds. No credit card required. 🚀
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="gap-2 text-lg px-8 h-12 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all bg-white text-primary hover:bg-white/90"
              >
                Get Started Free 🎉
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 h-12 bg-transparent border-2 border-white/40 text-primary-foreground hover:bg-white/10 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Schedule a Demo 📅
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-5 py-2.5 text-sm shadow-lg font-medium">
                💳 No credit card
              </div>
              <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-5 py-2.5 text-sm shadow-lg font-medium">
                ⚡ Setup in 60s
              </div>
              <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-5 py-2.5 text-sm shadow-lg font-medium">
                🎁 Free forever plan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}