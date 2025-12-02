import { Sticker } from "./Sticker";
import { Zap, TrendingUp, Globe } from "lucide-react";

export function Stats() {
  const stats = [
    { value: "99.99%", label: "Uptime SLA", emoji: "⬆️" },
    { value: "< 100ms", label: "Global latency", emoji: "⚡" },
    { value: "100+", label: "Edge locations", emoji: "🌍" },
    { value: "1M+", label: "Deployments/month", emoji: "🚀" },
  ];

  return (
    <section className="py-20 md:py-32 bg-sidebar text-sidebar-foreground relative overflow-hidden">
      {/* Decorative dots pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, rgba(247,255,246,0.3) 1px, transparent 1px)',
        backgroundSize: '25px 25px'
      }} />

      {/* Floating stickers */}
      <div className="absolute top-10 left-[5%] hidden lg:block">
        <Sticker icon={Zap} color="accent" size="md" rotation={-12} />
      </div>
      <div className="absolute bottom-10 right-[8%] hidden lg:block">
        <Sticker icon={TrendingUp} color="primary" size="md" rotation={15} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-sidebar-foreground">
            Speed included. <span className="doodle-underline">Downtime not included.</span> ⚡
          </h2>
          <p className="text-sidebar-foreground/70 text-lg">
            Built on enterprise-grade infrastructure with 99.99% uptime and millisecond-fast 
            response times across the globe. 🌟
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-sidebar-accent border-2 border-sidebar-border rounded-2xl p-6 transform hover:scale-105 transition-all hover:-rotate-2 shadow-xl"
            >
              <div className="text-3xl md:text-5xl mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sidebar-foreground/70 flex items-center justify-center gap-2">
                <span>{stat.label}</span>
                <span className="text-xl">{stat.emoji}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { title: "Zero config", desc: "Deploy any framework without configuration. We auto-detect and optimize.", emoji: "🎯" },
            { title: "Instant rollback", desc: "Made a mistake? Roll back to any previous deployment with one click.", emoji: "⏮️" },
            { title: "Live collaboration", desc: "Work together with your team in real-time on deployments and configs.", emoji: "👥" }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-sidebar-accent border-2 border-accent/30 rounded-2xl p-8 transform hover:scale-105 transition-all shadow-xl"
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <div className="text-2xl mb-2">{item.title}</div>
              <p className="text-sidebar-foreground/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}