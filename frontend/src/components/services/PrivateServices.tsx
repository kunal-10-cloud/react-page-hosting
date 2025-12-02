import { Lock } from "lucide-react";
import { ServicePage } from "./ServicePage";

export function PrivateServices() {
  return (
    <ServicePage
      title="Private Services"
      description="Deploy internal services on a private network, accessible only from your other DeployHub services. Perfect for internal APIs, admin tools, and microservices."
      icon={Lock}
      emoji="🔒"
      color="destructive"
      features={[
        {
          title: "Network Isolation",
          description: "Services run on isolated private networks, not publicly accessible",
        },
        {
          title: "Service Discovery",
          description: "Automatic DNS-based discovery for service-to-service communication",
        },
        {
          title: "Zero Trust Security",
          description: "mTLS authentication between services for maximum security",
        },
        {
          title: "Private Endpoints",
          description: "Internal-only URLs that don't expose your services to the internet",
        },
        {
          title: "VPC Peering",
          description: "Connect to your existing cloud infrastructure securely",
        },
        {
          title: "Access Control",
          description: "Fine-grained permissions for which services can communicate",
        },
      ]}
      useCases={[
        "Internal APIs & Microservices",
        "Admin Panels & Tools",
        "Database Management UIs",
        "Background Processing Services",
        "Internal Dashboards",
        "Service-to-Service Communication",
      ]}
      pricing={{
        starter: "$12/mo",
        pro: "$40/mo",
      }}
    />
  );
}
