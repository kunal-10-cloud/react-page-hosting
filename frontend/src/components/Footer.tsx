import { Zap, Github, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const links = {
    Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Documentation", "Guides", "API Reference", "Community", "Status"],
    Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "DPA"],
  };

  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t-2 border-sidebar-border relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="container mx-auto px-6 py-12 md:py-20 relative">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg border-2 border-sidebar-border">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span>DeployHub</span>
            </div>
            <p className="text-sm text-sidebar-foreground/70 mb-4">
              The developers&apos; cloud platform for instant deployments. ✨
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-sidebar-accent hover:bg-primary transition-all flex items-center justify-center shadow-md hover:scale-110 transform border-2 border-sidebar-border"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-sidebar-accent hover:bg-primary transition-all flex items-center justify-center shadow-md hover:scale-110 transform border-2 border-sidebar-border"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-sidebar-accent hover:bg-primary transition-all flex items-center justify-center shadow-md hover:scale-110 transform border-2 border-sidebar-border"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-sidebar-accent hover:bg-primary transition-all flex items-center justify-center shadow-md hover:scale-110 transform border-2 border-sidebar-border"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-4 text-sidebar-foreground font-medium">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors hover:translate-x-1 inline-block transform"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t-2 border-sidebar-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-sidebar-foreground/70">
            © 2025 DeployHub. All rights reserved. Made with 💜
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}