import { Server } from "lucide-react";
import { ServicePage } from "./ServicePage";

export function BackendServices() {
  return (
    <ServicePage
      title="Backend Services"
      description="Deploy Node.js, Python, Go, and Ruby applications with automatic scaling, zero-downtime deployments, and built-in monitoring. Perfect for APIs, web services, and microservices."
      icon={Server}
      emoji="⚡"
      color="secondary"
      features={[
        {
          title: "Auto Scaling",
          description: "Automatically scale based on traffic with intelligent load balancing",
        },
        {
          title: "Zero Downtime",
          description: "Rolling deployments ensure your service stays online during updates",
        },
        {
          title: "Health Checks",
          description: "Automatic health monitoring and recovery for your services",
        },
        {
          title: "Environment Variables",
          description: "Securely manage secrets and configuration per environment",
        },
        {
          title: "Custom Domains & SSL",
          description: "HTTPS endpoints with automatic certificate renewal",
        },
        {
          title: "Real-time Logs",
          description: "Stream logs in real-time for debugging and monitoring",
        },
      ]}
      useCases={[
        "REST & GraphQL APIs",
        "Web Applications (Express, Flask, Rails)",
        "Microservices Architecture",
        "WebSocket Servers",
        "OAuth & Authentication Services",
        "Payment Processing Services",
      ]}
      pricing={{
        starter: "$7/mo",
        pro: "$25/mo",
      }}
    />
  );
}
