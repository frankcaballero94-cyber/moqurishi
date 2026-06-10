import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Video, BookOpen, Headphones, ArrowRight, Download } from "lucide-react";
import { Nav, Footer, CALENDLY } from "./index";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Guides — Qurishi Healthcare Advising" },
      { name: "description", content: "Free, plain-English guides, videos, and checklists to help you choose the right health insurance plan." },
      { property: "og:title", content: "Resources & Guides — Qurishi Healthcare" },
      { property: "og:description", content: "Learn first, then enroll. Free guides on ACA, Medicare, and self-employed health coverage." },
    ],
  }),
  component: ResourcesPage,
});

const RESOURCES = [
  { icon: FileText, type: "PDF", time: "8 min read", title: "ACA Plan Buyer's Guide", desc: "How metal tiers work, who qualifies for subsidies, and how to read a Summary of Benefits without a glossary." },
  { icon: Video, type: "Video", time: "20 min", title: "Medicare 101 Walkthrough", desc: "Parts A, B, C, and D explained in plain English — what each covers, what it costs, and when to enroll." },
  { icon: BookOpen, type: "Guide", time: "6 min read", title: "Self-Employed Health Checklist", desc: "Tax deductions, HSA strategy, and plan options for 1099 workers, freelancers, and consultants." },
  { icon: Headphones, type: "Call", time: "30 min", title: "Free Phone Consultation", desc: "30 minutes one-on-one. Bring your questions, current plan, and budget — no script, no pressure." },
  { icon: FileText, type: "PDF", time: "5 min read", title: "Subsidy Eligibility Quick Sheet", desc: "Income-to-FPL ratios, household size adjustments, and the math behind premium tax credits." },
  { icon: BookOpen, type: "Guide", time: "10 min read", title: "Small Business Benefits Primer", desc: "Group plans vs. ICHRA vs. QSEHRA — the right structure for teams of 2 to 50 employees." },
];

function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Learn First</div>
          <h1 className="font-display text-5xl md:text-6xl mb-6">Resources, <span className="italic text-gradient-gold">on the house.</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">No email gates on the basics. Read, watch, or book a call — all free.</p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
          {RESOURCES.map((r) => (
            <div key={r.title} className="card-glass rounded-2xl p-6 flex gap-5 items-start group">
              <div className="icon-glass rounded-xl p-3.5 shrink-0">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">{r.type}</span>
                  <span className="text-xs text-muted-foreground">{r.time}</span>
                </div>
                <h3 className="font-display text-xl mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{r.desc}</p>
                <a href={CALENDLY} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-wider text-primary inline-flex items-center gap-1.5">
                  Request copy <Download className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center card-glass rounded-2xl p-10">
          <h2 className="font-display text-3xl mb-3">Want a personal walk-through?</h2>
          <p className="text-muted-foreground mb-6">A 30-minute call covers more than any PDF can. Free, no pressure.</p>
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-glass-gold font-medium">
            Book a free call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
