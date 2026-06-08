import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Qurishi Healthcare Advising" },
      { name: "description", content: "Read what clients across 35+ states say about working with Mo Qurishi for health insurance guidance." },
      { property: "og:title", content: "Client Reviews — Qurishi Healthcare" },
      { property: "og:description", content: "Real stories from individuals, families, and small businesses Mo has helped." },
    ],
  }),
  component: TestimonialsPage,
});

const REVIEWS = [
  { name: "Elle M.", role: "Family of 3 · Florida", rating: 5, body: "Mo helped us, my husband, and our daughter get private insurance set up and made everything feel so easy and straightforward. Quick to respond, easy to schedule with, approved the next day. Such a great experience." },
  { name: "Valerie B.", role: "Self-employed · Ohio", rating: 5, body: "Fantastic experience from start to finish. Our employer premiums literally doubled in 2 years — Mo got us the same coverage for almost $500/month less. Game changer." },
  { name: "Keith J.", role: "1099 Consultant · Texas", rating: 5, body: "ACA was no longer an option due to price increases, but Mo found a much more affordable policy that actually fit my needs. Professional, knowledgeable, highly recommend." },
  { name: "Jon S.", role: "Small Business Owner · Georgia", rating: 5, body: "Mo set us up with a policy that met all our needs. Every aspect of the experience with him and his team was top notch. Looking forward to working with him for years." },
  { name: "Kelsey C.", role: "New Parent · Tennessee", rating: 5, body: "Mo was knowledgeable and more than helpful in a time of need. His execution and promptness made for the most comforting experience. His expertise is top notch." },
  { name: "Aimee R.", role: "Early Retiree · Colorado", rating: 5, body: "I recently worked with Mo and he helped me obtain health insurance. He was professional and a pleasure to work with. I would highly recommend him to anyone shopping for coverage." },
  { name: "Sydney D.", role: "Freelancer · Nevada", rating: 5, body: "Mo made the entire insurance process incredibly smooth. He explained each policy in a way that was easy to understand. I never felt rushed or pressured — just supported by someone who clearly knows what he's doing." },
  { name: "Rodney W.", role: "Family of 4 · North Carolina", rating: 5, body: "Mo is very knowledgeable and listened to our needs. We had a very positive experience and our family is now protected with a plan that actually works for us." },
  { name: "Gwen K.", role: "Individual · Virginia", rating: 5, body: "Mo made it so easy and stress free. I would highly recommend him for anyone searching for insurance!" },
];

function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Client Reviews</div>
          <h1 className="font-display text-5xl md:text-6xl mb-6">Real stories. <span className="italic text-gradient-gold">Real coverage.</span></h1>
          <div className="inline-flex items-center gap-3 card-glass rounded-full px-6 py-3 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            </div>
            <span className="font-display text-2xl">4.9</span>
            <span className="text-sm text-muted-foreground">· Across 130+ reviews</span>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">A few words from the families, freelancers, and small businesses Mo has guided into the right plan.</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="card-glass rounded-2xl p-6 flex flex-col">
              <Quote className="w-6 h-6 text-primary mb-3" />
              <p className="text-sm leading-relaxed text-foreground mb-5 flex-1">"{r.body}"</p>
              <div className="flex gap-0.5 mb-2">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
              </div>
              <div className="text-sm font-medium">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center card-glass rounded-2xl p-10">
          <h2 className="font-display text-3xl mb-3">Ready to be the next story?</h2>
          <p className="text-muted-foreground mb-6">Free, no-pressure consultation. We'll find the plan that actually fits you.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-glass-gold font-medium">
            Start your free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
