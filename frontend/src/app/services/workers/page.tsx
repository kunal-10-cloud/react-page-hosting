import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundWorkers } from "@/components/services/BackgroundWorkers";

export default function WorkersPage() {
  return (
    <>
      <Header />
      <BackgroundWorkers />
      <Footer />
    </>
  );
}
