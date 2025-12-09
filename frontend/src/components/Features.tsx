import {
  Zap,
  Globe,
  Server,
  Lock,
  GitBranch,
  Gauge
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sticker } from "./Sticker";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Deployments",
    description: "Deploy your projects in seconds, not minutes. Optimized build pipelines for maximum speed.",
    color: "primary" as const,
    emoji: "⚡",
  },
  {
    icon: GitBranch,
    title: "Environment Management",
    description: "Separate development and production environments with automatic preview deployments for every branch.",
    color: "secondary" as const,
    emoji: "🌿",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description: "Serve your applications from 100+ edge locations worldwide for the best user experience.",
    color: "primary" as const,
    emoji: "🌍",
  },
  {
    icon: Gauge,
    title: "Real-time Monitoring",
    description: "Monitor your deployments with live logs, analytics, and performance metrics in real-time.",
    color: "secondary" as const,
    emoji: "📊",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level security with automatic SSL certificates, DDoS protection, and SOC 2 compliance.",
    color: "destructive" as const,
    emoji: "🔐",
  },
  {
    icon: Server,
    title: "Full Stack Support",
    description: "Deploy both frontend and backend applications with support for all major frameworks and languages.",
    color: "primary" as const,
    emoji: "💻",
  },
];

export function Features() {
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/30",
    secondary: "bg-secondary/10 text-secondary border-secondary/30",
    accent: "bg-accent/10 text-accent-foreground border-accent/30",
    destructive: "bg-destructive/10 text-destructive border-destructive/30",
  };

  return (
    <section className="py-20 md:py-32 square-grid relative bg-muted/20" id="features">
      {/* Scattered decorative stickers */}
      <div className="absolute top-10 right-[10%] hidden lg:block">
        <Sticker text="WOW!" color="pink" size="sm" rotation={15} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 tape">
          <h2 className="mb-4">
            All the products you <span className="doodle-underline">need</span> ✨
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to ship faster. From instant deployments to global CDN,
            we&apos;ve got you covered at every stage of development. 🎯
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-card border-2 ${colorClasses[feature.color]} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group transform hover:scale-105`}
                style={{
                  transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                }}
              >
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl ${colorClasses[feature.color]} border-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-3xl transform rotate-12">
                    {feature.emoji}
                  </div>
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Feature showcase with image */}
        <div className="mt-20 bg-card border-2 border-secondary/40 rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform" style={{ transform: 'rotate(-0.5deg)' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <h3 className="mb-4">
                Deploy anywhere, <span className="doodle-underline">instantly</span> 🚀
              </h3>
              <p className="text-muted-foreground mb-6">
                Connect your GitHub repository and deploy automatically on every push.
                Our intelligent build system detects your framework and optimizes the deployment.
              </p>
              <ul className="space-y-3">
                {[
                  { text: "Zero configuration required", emoji: "✅" },
                  { text: "Automatic HTTPS", emoji: "🔒" },
                  { text: "Custom domains", emoji: "🌐" },
                  { text: "Instant rollbacks", emoji: "⏮️" }
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 border-2 border-secondary/40">
                      <span>{item.emoji}</span>
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full min-h-[300px] md:min-h-[400px] relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMzg1MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}