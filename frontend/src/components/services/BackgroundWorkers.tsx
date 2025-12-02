import { Zap } from "lucide-react";
import { ServicePage } from "./ServicePage";

export function BackgroundWorkers() {
  return (
    <ServicePage
      title="Background Workers"
      description="Process async tasks at scale with our managed worker service. Perfect for handling heavy workloads, processing queues, and running long-running tasks without blocking your API."
      icon={Zap}
      emoji="🚀"
      color="secondary"
      features={[
        {
          title: "Auto Scaling",
          description: "Workers automatically scale based on queue depth",
        },
        {
          title: "Job Queues",
          description: "Built-in job queue with priority support and retry logic",
        },
        {
          title: "Concurrency Control",
          description: "Configure how many jobs run simultaneously per worker",
        },
        {
          title: "Dead Letter Queue",
          description: "Failed jobs moved to DLQ for manual inspection and retry",
        },
        {
          title: "Job Monitoring",
          description: "Track job status, duration, and success rates in real-time",
        },
        {
          title: "Scheduled Jobs",
          description: "Combine with cron-like scheduling for recurring tasks",
        },
      ]}
      useCases={[
        "Image & Video Processing",
        "Email & Notification Sending",
        "Data Import & Export",
        "PDF Generation & Reports",
        "Webhook Processing",
        "Machine Learning Inference",
      ]}
      pricing={{
        starter: "$10/mo",
        pro: "$35/mo",
      }}
    />
  );
}
