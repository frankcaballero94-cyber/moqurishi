import { createFileRoute } from "@tanstack/react-router";
import { Nav, Contact, FAQ, LeadMagnet, DeadlinesCallout, Footer } from "./index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mo Qurishi · Free Health Insurance Consultation" },
      { name: "description", content: "Get a free, no-pressure consultation. Call, email, or message Mo Qurishi directly." },
      { property: "og:title", content: "Contact Mo Qurishi" },
      { property: "og:description", content: "Free consultation — call, email, or send a message." },
    ],
    links: [{ rel: "canonical", href: "https://qurishihc.com/contact" }],
  }),
  component: () => (
    <div className="min-h-screen">
      <Nav />
      <div className="pt-24" />
      <Contact />
      <DeadlinesCallout />
      <LeadMagnet />
      <FAQ />
      <Footer />
    </div>
  ),
});
