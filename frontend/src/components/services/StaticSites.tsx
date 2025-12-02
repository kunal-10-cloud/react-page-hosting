import { Globe } from "lucide-react";
import { ServicePage } from "./ServicePage";

export function StaticSites() {
  return (
    <ServicePage
      title="Static Sites"
      description="Deploy your frontend applications to a global CDN with automatic HTTPS and instant cache invalidation. Perfect for React, Vue, Angular, and static site generators."
      icon={Globe}
      emoji="🌐"
      color="primary"
      features={[
        {
          title: "Global CDN",
          description: "Deploy to 100+ edge locations worldwide for lightning-fast load times",
        },
        {
          title: "Automatic HTTPS",
          description: "Free SSL certificates provisioned automatically for your domains",
        },
        {
          title: "Instant Rollbacks",
          description: "Roll back to any previous deployment with a single click",
        },
        {
          title: "Asset Optimization",
          description: "Automatic image optimization, compression, and caching",
        },
        {
          title: "Custom Domains",
          description: "Connect your domain with automatic SSL and DNS management",
        },
        {
          title: "Preview Deployments",
          description: "Every branch gets its own preview URL for testing",
        },
      ]}
      useCases={[
        "Single Page Applications (React, Vue, Angular)",
        "Static Site Generators (Next.js, Gatsby, Hugo)",
        "Portfolio and Landing Pages",
        "Documentation Sites",
        "Marketing Websites",
        "E-commerce Storefronts",
      ]}
      pricing={{
        starter: "Free",
        pro: "$20/mo",
      }}
    />
  );
}
