import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageQueue } from "@/components/services/MessageQueue";

export default function QueuePage() {
  return (
    <>
      <Header />
      <MessageQueue />
      <Footer />
    </>
  );
}
