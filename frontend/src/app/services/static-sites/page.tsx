import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StaticSites } from "@/components/services/StaticSites";

export default function StaticSitesPage() {
  return (
    <>
      <Header />
      <StaticSites />
      <Footer />
    </>
  );
}
