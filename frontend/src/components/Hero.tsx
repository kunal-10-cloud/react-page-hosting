import { Button } from "./ui/button";
import { ArrowRight, Github, Twitter, Linkedin, Sparkles, Rocket, Heart, Star, Zap } from "lucide-react";
import { Sticker } from "./Sticker";
import { Badge3D } from "./Badge3D";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 dot-grid">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-destructive/10 rounded-full blur-3xl" />
      </div>

      {/* Floating stickers */}
      <div className="absolute top-20 left-[10%] hidden lg:block">
        <Sticker icon={Rocket} color="primary" size="md" rotation={-15} />
      </div>
      <div className="absolute top-40 right-[15%] hidden lg:block">
        <Sticker icon={Star} color="destructive" size="lg" rotation={20} />
      </div>
      <div className="absolute bottom-32 left-[20%] hidden lg:block">
        <Sticker icon={Heart} color="destructive" size="md" rotation={-10} />
      </div>
      <div className="absolute top-1/2 right-[8%] hidden lg:block">
        <Sticker icon={Sparkles} color="secondary" size="sm" rotation={15} />
      </div>
      <div className="absolute bottom-20 right-[25%] hidden md:block">
        <Sticker text="NEW!" color="pink" size="md" rotation={-20} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-card border-2 border-secondary/40 rounded-full px-6 py-3 text-sm shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
            <span className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
            <span>Now in Public Beta ✨</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl !leading-tight">
            The <span className="doodle-underline text-primary">developers'</span> cloud.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Deploy your frontend and backend projects instantly. Scale from prototype to production with development and production environments. 🚀
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2 text-lg px-8 h-12 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 bg-primary hover:bg-primary/90">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-2 border-primary/30 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:border-primary/50">
              View Documentation
            </Button>
          </div>

          {/* Scattered badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-12">
            <Badge3D text="⚡ Lightning Fast" color="primary" rotation={-3} />
            <Badge3D text="🔒 Secure" color="secondary" rotation={2} />
            <Badge3D text="🌍 Global" color="destructive" rotation={-2} />
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <div className="flex -space-x-3">
              {[
                { color1: '#441FFF', color2: '#0C7C59' },
                { color1: '#0C7C59', color2: '#441FFF' },
                { color1: '#DD1155', color2: '#441FFF' },
                { color1: '#441FFF', color2: '#DD1155' },
                { color1: '#0C7C59', color2: '#DD1155' },
              ].map((colors, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-background shadow-lg transform hover:scale-110 transition-transform"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.color1}, ${colors.color2})`
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <strong className="text-foreground">10,000+</strong> developers 💜
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}