import { createFileRoute } from "@tanstack/react-router";
import { Nav, About, WhoWeHelp, Languages, Footer } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mo Qurishi · Independent Health Advisor" },
      { name: "description", content: "Meet Mo Qurishi — independent, licensed health insurance advisor helping individuals, families and small businesses." },
      { property: "og:title", content: "About Mo Qurishi" },
      { property: "og:description", content: "Calm, clear health insurance guidance from an independent advisor." },
    ],
    links: [{ rel: "canonical", href: "https://qurishihc.com/about" }],
  }),
  component: () => (
    <div className="min-h-screen">
      <Nav />
      <div className="pt-24" />
      <About />
      <WhoWeHelp />
      <Languages />
      <Footer />
    </div>
  ),
});
