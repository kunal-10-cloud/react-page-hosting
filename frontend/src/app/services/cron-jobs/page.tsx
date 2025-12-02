import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CronJobs } from "@/components/services/CronJobs";

export default function CronJobsPage() {
  return (
    <>
      <Header />
      <CronJobs />
      <Footer />
    </>
  );
}
