import { createFileRoute } from "@tanstack/react-router";
import { Nav, WhyUs, Stats, Testimonials, TrustStrip, Footer } from "./index";

export const Route = createFileRoute("/why")({
  head: () => ({
    meta: [
      { title: "Why Choose Mo Qurishi · Licensed Health Advisor" },
      { name: "description", content: "Why families across 35+ states trust Mo Qurishi for honest, independent health insurance guidance." },
      { property: "og:title", content: "Why Choose Mo Qurishi" },
      { property: "og:description", content: "Independent, licensed, no-pressure health insurance advice." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Nav />
      <div className="pt-24" />
      <WhyUs />
      <Stats />
      <TrustStrip />
      <Testimonials />
      <Footer />
    </div>
  ),
});
