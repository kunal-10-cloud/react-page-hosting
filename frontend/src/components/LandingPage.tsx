import { Hero } from "./Hero";
import { Features } from "./Features";
import { Stats } from "./Stats";
import { Pricing } from "./Pricing";
import { Network } from "./Network";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";

export function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Network />
      <Testimonials />
      <CTA />
    </>
  );
}
