import Link from "next/link";
import { Button } from "./ui/button";
import { Sticker } from "./Sticker";
import { Badge3D } from "./Badge3D";
import {
  BookOpen,
  Zap,
  Rocket,
  Star,
  Code,
  Terminal,
  GitBranch,
  Settings,
  ArrowRight,
  Heart,
  Sparkles,
} from "lucide-react";

export function Documentation() {
  const quickStart = [
    {
      step: 1,
      title: "Install CLI",
      code: "npm install -g deployhub-cli",
      icon: Terminal,
    },
    {
      step: 2,
      title: "Login",
      code: "deployhub login",
      icon: Zap,
    },
    {
      step: 3,
      title: "Deploy",
      code: "deployhub deploy",
      icon: Rocket,
    },
  ];

  const sections = [
    {
      title: "Getting Started",
      icon: Rocket,
      color: "primary" as const,
      items: ["Quick Start", "Installation", "First Deployment", "Configuration"],
    },
    {
      title: "Deployments",
      icon: GitBranch,
      color: "secondary" as const,
      items: ["Dev Environment", "Production", "Preview Deployments", "Rollbacks"],
    },
    {
      title: "Configuration",
      icon: Settings,
      color: "destructive" as const,
      items: ["Environment Variables", "Build Settings", "Custom Domains", "SSL Certificates"],
    },
    {
      title: "API Reference",
      icon: Code,
      color: "primary" as const,
      items: ["REST API", "GraphQL", "Webhooks", "CLI Commands"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-primary/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg border-2 border-white/30">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-lg">DeployHub Docs ✨</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-2 hover:scale-105 transition-transform">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 dot-grid relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
        </div>

        {/* Floating stickers */}
        <div className="absolute top-20 left-[10%] hidden lg:block">
          <Sticker icon={BookOpen} color="primary" size="md" rotation={-15} />
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
              <BookOpen className="w-4 h-4" />
              <span>Documentation</span>
            </div>

            <h1 className="text-4xl md:text-6xl mb-6">
              Everything you need to <span className="doodle-underline text-primary">deploy</span> 🚀
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Complete guides, tutorials, and API references to help you ship faster. ✨
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge3D text="📚 Guides" color="primary" rotation={-2} />
              <Badge3D text="🔧 Tutorials" color="secondary" rotation={2} />
              <Badge3D text="📖 API Docs" color="destructive" rotation={-3} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 square-grid bg-muted/20 relative">
        <div className="absolute top-10 right-[10%] hidden lg:block">
          <Sticker icon={Sparkles} color="pink" size="sm" rotation={15} />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 tape">
              <h2 className="mb-4">
                Quick <span className="doodle-underline">Start</span> ⚡
              </h2>
              <p className="text-muted-foreground text-lg">
                Get up and running in under 60 seconds
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {quickStart.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="bg-card border-2 border-primary/30 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all"
                    style={{ transform: `rotate(${item.step % 2 === 0 ? -0.5 : 0.5}deg)` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border-2 border-primary/30 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Step {item.step}</div>
                        <div className="font-medium">{item.title}</div>
                      </div>
                    </div>
                    <div className="bg-sidebar text-sidebar-foreground rounded-xl p-4 font-mono text-sm">
                      <code>{item.code}</code>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">That&apos;s it! Your app is live! 🎉</p>
              <Button className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                View Full Tutorial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 dot-grid">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Browse <span className="doodle-underline">Documentation</span> 📚
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our comprehensive guides and references
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                const colorClasses = {
                  primary: "bg-primary/10 text-primary border-primary/30",
                  secondary: "bg-secondary/10 text-secondary border-secondary/30",
                  destructive: "bg-destructive/10 text-destructive border-destructive/30",
                };

                return (
                  <div
                    key={section.title}
                    className={`bg-card border-2 ${colorClasses[section.color]} rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all`}
                    style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${colorClasses[section.color]} border-2 flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3>{section.title}</h3>
                    </div>

                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                          >
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-12 text-center border-4 border-primary/30 shadow-2xl transform hover:rotate-0 transition-transform" style={{ transform: 'rotate(-0.5deg)' }}>
              <h2 className="text-primary-foreground mb-4">
                Need help? We&apos;re here! 💜
              </h2>
              <p className="text-primary-foreground/90 mb-8">
                Join our community Discord or reach out to our support team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Join Discord 💬
                </Button>
                <Button variant="outline" className="border-2 border-white/40 text-primary-foreground hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Contact Support 📧
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}