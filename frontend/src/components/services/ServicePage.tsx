import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge3D } from "../Badge3D";
import { Sticker } from "../Sticker";
import { ArrowRight, Check, Heart, Star } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface ServicePageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  emoji: string;
  color: "primary" | "secondary" | "destructive";
  features: Feature[];
  useCases: string[];
  pricing: {
    starter: string;
    pro: string;
  };
}

export function ServicePage({
  title,
  description,
  icon: Icon,
  emoji,
  color,
  features,
  useCases,
  pricing,
}: ServicePageProps) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/30",
    secondary: "bg-secondary/10 text-secondary border-secondary/30",
    destructive: "bg-destructive/10 text-destructive border-destructive/30",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 md:py-32 dot-grid relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
        </div>

        {/* Floating stickers */}
        <div className="absolute top-20 left-[10%] hidden lg:block">
          <Sticker icon={Icon} color={color} size="md" rotation={-15} />
        </div>
        <div className="absolute top-40 right-[15%] hidden lg:block">
          <Sticker icon={Star} color="destructive" size="lg" rotation={20} />
        </div>
        <div className="absolute bottom-32 right-[20%] hidden lg:block">
          <Sticker icon={Heart} color="pink" size="md" rotation={-10} />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-card border-2 border-primary/30 rounded-full px-6 py-3 text-sm shadow-lg transform -rotate-1 mb-8">
              <Icon className="w-4 h-4 text-primary" />
              <span>Service</span>
            </div>

            <h1 className="text-4xl md:text-6xl mb-6">
              {title} <span className="text-5xl">{emoji}</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard/new-project">
                <Button size="lg" className="gap-2 text-lg px-8 h-12 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/docs">
                <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/20 square-grid">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Key <span className="doodle-underline">Features</span> ✨
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-card border-2 ${colorClasses[color]} rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all`}
                  style={{
                    transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Check className={`w-6 h-6 mt-1 ${color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : 'text-destructive'}`} />
                    <h3>{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 dot-grid">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Perfect <span className="doodle-underline">for</span> 🎯
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 border-2 border-secondary/40">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <p>{useCase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Simple <span className="doodle-underline">Pricing</span> 💰
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all">
                <Badge3D text="Starter" color="primary" rotation={-2} />
                <div className="text-4xl my-4">{pricing.starter}</div>
                <p className="text-muted-foreground mb-6">Perfect for getting started</p>
                <Link to="/dashboard/new-project">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>

              <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all">
                <Badge3D text="Pro" color="secondary" rotation={2} />
                <div className="text-4xl my-4">{pricing.pro}</div>
                <p className="text-muted-foreground mb-6">For production workloads</p>
                <Link to="/dashboard/new-project">
                  <Button className="w-full bg-secondary hover:bg-secondary/90">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-12 text-center border-4 border-primary/30 shadow-2xl transform hover:rotate-0 transition-transform" style={{ transform: 'rotate(-0.5deg)' }}>
              <h2 className="text-primary-foreground mb-4">
                Ready to deploy? 🚀
              </h2>
              <p className="text-primary-foreground/90 mb-8">
                Start your first deployment in under 60 seconds
              </p>
              <Link to="/dashboard/new-project">
                <Button className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Deploy Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}