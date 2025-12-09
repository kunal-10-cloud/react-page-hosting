"use client";

import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Sticker } from "./Sticker";
import { Search, Calendar, Clock, ArrowRight, Heart, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const posts: BlogPost[] = [
    {
      id: "1",
      title: "Building Lightning-Fast Static Sites with DeployHub",
      excerpt: "Learn how to deploy your static sites in under 60 seconds with our global CDN and automatic optimizations.",
      author: "Sarah Chen",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    },
    {
      id: "2",
      title: "Introducing DeployHub Queue: AWS SQS Alternative",
      excerpt: "Our new managed queue service makes it easy to build scalable, distributed applications without the complexity.",
      author: "Marcus Rodriguez",
      date: "Nov 12, 2024",
      readTime: "8 min read",
      category: "Product",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    },
    {
      id: "3",
      title: "Cron Jobs Made Simple: Schedule Tasks Like a Pro",
      excerpt: "Automate your workflows with our managed cron job service. No servers to maintain, just reliable scheduling.",
      author: "Emily Watson",
      date: "Nov 10, 2024",
      readTime: "6 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
    },
    {
      id: "4",
      title: "From Zero to Production: Backend Deployment Guide",
      excerpt: "Deploy your Node.js, Python, or Go backend with automatic scaling and zero downtime deployments.",
      author: "John Smith",
      date: "Nov 8, 2024",
      readTime: "10 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    },
    {
      id: "5",
      title: "Database Management: Redis & PostgreSQL on the Edge",
      excerpt: "Run your databases closer to your users with our global edge network for sub-10ms latency.",
      author: "Sarah Chen",
      date: "Nov 5, 2024",
      readTime: "7 min read",
      category: "Technical",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
    },
    {
      id: "6",
      title: "Background Workers: Processing Tasks at Scale",
      excerpt: "Handle millions of async tasks with our managed worker service. Built for reliability and performance.",
      author: "Marcus Rodriguez",
      date: "Nov 3, 2024",
      readTime: "9 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
  ];

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ["All", "Tutorial", "Product", "Guide", "Technical"];

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
          <Sticker icon={Heart} color="destructive" size="md" rotation={-15} />
        </div>
        <div className="absolute top-40 right-[15%] hidden lg:block">
          <Sticker icon={Star} color="primary" size="lg" rotation={20} />
        </div>
        <div className="absolute bottom-32 right-[20%] hidden lg:block">
          <Sticker icon={Sparkles} color="pink" size="md" rotation={-10} />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl mb-6">
              The <span className="doodle-underline text-primary">DeployHub</span> Blog 📝
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Tutorials, guides, and insights from our team on building and deploying modern applications. ✨
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 border-2 border-primary/30 focus:border-primary rounded-xl h-14 text-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-y-2 border-border bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 square-grid">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group"
                >
                  <article
                    className="bg-card border-2 border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
                    style={{
                      transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                    }}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground border-2 border-white/30 shadow-lg">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>

                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="text-sm font-medium">{post.author}</div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}