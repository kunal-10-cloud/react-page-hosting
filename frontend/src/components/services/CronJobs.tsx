import { Clock } from "lucide-react";
import { ServicePage } from "./ServicePage";

export function CronJobs() {
  return (
    <ServicePage
      title="Cron Jobs"
      description="Schedule and run tasks automatically on any schedule. Perfect for periodic data processing, cleanup tasks, report generation, and automated workflows."
      icon={Clock}
      emoji="⏰"
      color="primary"
      features={[
        {
          title: "Flexible Scheduling",
          description: "Use cron syntax or simple intervals to schedule your jobs",
        },
        {
          title: "Reliable Execution",
          description: "Guaranteed execution with automatic retries on failure",
        },
        {
          title: "Execution History",
          description: "View complete history of all job runs with logs and status",
        },
        {
          title: "Timeout Protection",
          description: "Automatic timeout handling to prevent hanging jobs",
        },
        {
          title: "Notifications",
          description: "Get alerted on job failures via email, Slack, or webhooks",
        },
        {
          title: "Environment Support",
          description: "Different schedules for dev, staging, and production",
        },
      ]}
      useCases={[
        "Database Backups & Maintenance",
        "Report Generation & Email Sending",
        "Data Synchronization & ETL",
        "Cache Warming & Cleanup",
        "API Data Fetching & Updates",
        "Scheduled Notifications",
      ]}
      pricing={{
        starter: "$5/mo",
        pro: "$15/mo",
      }}
    />
  );
}
