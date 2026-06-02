import { createFileRoute } from "@tanstack/react-router";
import { Nav, StatesSection, Carriers, TrustStrip, Footer } from "./index";

export const Route = createFileRoute("/coverage")({
  head: () => ({
    meta: [
      { title: "Coverage Area & Carriers · Qurishi Advising" },
      { name: "description", content: "Licensed in 35+ states. We work with the nation's top health insurance carriers." },
      { property: "og:title", content: "Coverage Area — Qurishi Advising" },
      { property: "og:description", content: "Where we're licensed and the carriers we represent." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Nav />
      <div className="pt-24" />
      <StatesSection />
      <Carriers />
      <TrustStrip />
      <Footer />
    </div>
  ),
});
