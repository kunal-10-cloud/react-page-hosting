"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Zap, Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Static Sites", path: "/services/static-sites", emoji: "🌐" },
    { name: "Backend Services", path: "/services/backend", emoji: "⚡" },
    { name: "Cron Jobs", path: "/services/cron-jobs", emoji: "⏰" },
    { name: "Background Workers", path: "/services/workers", emoji: "🚀" },
    { name: "Message Queue (SQS)", path: "/services/queue", emoji: "📬" },
    { name: "Databases", path: "/services/databases", emoji: "💾" },
    { name: "Private Services", path: "/services/private", emoji: "🔒" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-primary/20 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg border-2 border-white/30">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-lg">DeployHub ✨</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-sm hover:text-primary transition-colors relative group cursor-pointer"
              onClick={(e) => {
                if (typeof window !== 'undefined' && window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection('features');
                }
              }}
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-primary transition-colors relative group cursor-pointer">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link href={service.path} className="flex items-center gap-2 cursor-pointer">
                      <span className="text-lg">{service.emoji}</span>
                      <span>{service.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/#pricing"
              className="text-sm hover:text-primary transition-colors relative group cursor-pointer"
              onClick={(e) => {
                if (typeof window !== 'undefined' && window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection('pricing');
                }
              }}
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>

            <Link
              href="/blog"
              className="text-sm hover:text-primary transition-colors relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>

            <Link
              href="/docs"
              className="text-sm hover:text-primary transition-colors relative group"
            >
              Docs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/signin">
              <Button variant="ghost" className="hover:scale-105 transition-transform">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Get Started 🚀
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4 mb-4">
              <Link
                href="/#features"
                className="text-sm hover:text-primary transition-colors px-2 py-1"
                onClick={(e) => {
                  if (typeof window !== 'undefined' && window.location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection('features');
                  }
                  setMobileMenuOpen(false);
                }}
              >
                Features
              </Link>

              {/* Services in Mobile */}
              <div className="px-2 py-1">
                <div className="text-sm text-muted-foreground mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className="text-sm hover:text-primary transition-colors flex items-center gap-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{service.emoji}</span>
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/#pricing"
                className="text-sm hover:text-primary transition-colors px-2 py-1"
                onClick={(e) => {
                  if (typeof window !== 'undefined' && window.location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection('pricing');
                  }
                  setMobileMenuOpen(false);
                }}
              >
                Pricing
              </Link>

              <Link
                href="/blog"
                className="text-sm hover:text-primary transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/docs"
                className="text-sm hover:text-primary transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>
            </nav>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center mb-2">
                <ThemeToggle />
              </div>
              <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full shadow-lg">Get Started 🚀</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
