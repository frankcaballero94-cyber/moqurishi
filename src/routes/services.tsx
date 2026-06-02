import { createFileRoute } from "@tanstack/react-router";
import { Nav, Services, PlanTypes, Process, DeadlinesCallout, Footer } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Health, Medicare & More — Qurishi Advising" },
      { name: "description", content: "ACA, Medicare, short-term, dental, vision, and life insurance guidance from a licensed independent advisor." },
      { property: "og:title", content: "Services — Qurishi Advising" },
      { property: "og:description", content: "Complete coverage options matched to your needs." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <Nav />
      <div className="pt-24" />
      <Services />
      <PlanTypes />
      <Process />
      <DeadlinesCallout />
      <Footer />
    </div>
  ),
});
