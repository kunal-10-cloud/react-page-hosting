import { MessageSquare } from "lucide-react";
import { ServicePage } from "./ServicePage";

export function MessageQueue() {
  return (
    <ServicePage
      title="Message Queue (SQS)"
      description="AWS SQS-compatible managed queue service for building distributed systems. Decouple your services with reliable message delivery, automatic scaling, and built-in monitoring."
      icon={MessageSquare}
      emoji="📬"
      color="destructive"
      features={[
        {
          title: "AWS SQS Compatible",
          description: "Drop-in replacement for AWS SQS with the same API",
        },
        {
          title: "FIFO & Standard Queues",
          description: "Choose between ordering guarantees or maximum throughput",
        },
        {
          title: "Dead Letter Queues",
          description: "Automatically route failed messages for analysis and retry",
        },
        {
          title: "Message Retention",
          description: "Store messages for up to 14 days with configurable retention",
        },
        {
          title: "Visibility Timeout",
          description: "Prevent duplicate processing with configurable timeouts",
        },
        {
          title: "Batch Operations",
          description: "Send and receive up to 10 messages in a single API call",
        },
      ]}
      useCases={[
        "Microservices Communication",
        "Event-Driven Architectures",
        "Task Distribution & Load Leveling",
        "Order Processing Systems",
        "Log & Event Collection",
        "Async API Workflows",
      ]}
      pricing={{
        starter: "$8/mo",
        pro: "$30/mo",
      }}
    />
  );
}
