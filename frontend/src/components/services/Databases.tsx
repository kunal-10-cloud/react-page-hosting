import { Database } from "lucide-react";
import { ServicePage } from "./ServicePage";

export function Databases() {
  return (
    <ServicePage
      title="Managed Databases"
      description="PostgreSQL, MySQL, Redis, and MongoDB databases with automatic backups, point-in-time recovery, and global replication. Optimized for performance and reliability."
      icon={Database}
      emoji="💾"
      color="primary"
      features={[
        {
          title: "Automatic Backups",
          description: "Daily backups with point-in-time recovery up to 30 days",
        },
        {
          title: "High Availability",
          description: "Multi-zone replication for 99.99% uptime SLA",
        },
        {
          title: "Read Replicas",
          description: "Scale reads with automatic replication and failover",
        },
        {
          title: "SSL Encryption",
          description: "End-to-end encryption for all database connections",
        },
        {
          title: "Performance Insights",
          description: "Query analytics and optimization recommendations",
        },
        {
          title: "One-Click Scaling",
          description: "Upgrade CPU, memory, and storage without downtime",
        },
      ]}
      useCases={[
        "Production Databases",
        "Caching Layer with Redis",
        "Session Storage",
        "Analytics & Data Warehousing",
        "Real-time Applications",
        "Multi-tenant SaaS",
      ]}
      pricing={{
        starter: "$15/mo",
        pro: "$50/mo",
      }}
    />
  );
}
