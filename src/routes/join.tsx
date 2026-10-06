import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Users, Award, BookOpen, DollarSign, HeartHandshake, Check } from "lucide-react";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join the Team — Qurishi Healthcare Advising" },
      { name: "description", content: "Build a career in health insurance with mentorship, warm leads, and a culture that puts clients first. Apply to join Qurishi Healthcare Advising." },
      { property: "og:title", content: "Join the Team — Qurishi Healthcare" },
      { property: "og:description", content: "Mentorship, warm leads, and a real career path for licensed and aspiring advisors." },
    ],
    links: [{ rel: "canonical", href: "https://qurishihc.com/join" }],
  }),
  component: JoinPage,
});

const PERKS = [
  { icon: TrendingUp, title: "Uncapped Earnings", body: "Performance-based comp with residual income — your effort, your reward." },
  { icon: Users, title: "Warm Lead Flow", body: "We invest in marketing so you spend time advising, not cold calling." },
  { icon: BookOpen, title: "Real Training", body: "Onboarding, licensing prep, and ongoing carrier-specific product education." },
  { icon: Award, title: "Top Carrier Appointments", body: "Sell across the major carriers from day one — no captive contracts." },
  { icon: HeartHandshake, title: "Mentorship", body: "Direct coaching from licensed producers who've built six- and seven-figure books." },
  { icon: DollarSign, title: "Tech-Forward", body: "Modern CRM, e-app tools, and a back-office that keeps paperwork off your plate." },
];

function JoinPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Careers</div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 leading-[0.95]">Build a career that <span className="italic text-gradient-gold">actually matters.</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            We're growing a team of advisors who care about doing right by clients — and want a real shot at building wealth doing it. Mentorship, warm leads, and a culture where high performance is the norm.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#apply" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-glass-gold font-medium">Apply Now <ArrowRight className="w-4 h-4" /></a>
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/5 transition">Meet the team</Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PERKS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl icon-glass flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-card/30">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Who We Hire</div>
            <h2 className="font-display text-4xl mb-5">A mindset, not a resume.</h2>
            <ul className="space-y-3 text-sm">
              {[
                "Coachable, hungry, and self-disciplined",
                "Comfortable on the phone and on video",
                "Already licensed OR willing to study and pass within 30 days",
                "Treats every client like family — because they are",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <form
            id="apply"
            onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:Qurishihealthcare@gmail.com?subject=Join%20the%20Team%20Application"; }}
            className="card-glass rounded-2xl p-8 space-y-4"
          >
            <h3 className="font-display text-2xl mb-2">Apply in 60 seconds</h3>
            <div className="grid grid-cols-2 gap-4">
              <Input label="First name" name="first" />
              <Input label="Last name" name="last" />
            </div>
            <Input label="Email" name="email" type="email" />
            <Input label="Phone" name="phone" type="tel" />
            <Input label="State" name="state" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Are you licensed?</label>
              <select className="mt-2 w-full rounded-lg px-4 py-3 input-glass">
                <option>Yes, currently licensed</option>
                <option>Studying for the exam</option>
                <option>Not yet — interested in starting</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Tell us why</label>
              <textarea rows={3} className="mt-2 w-full rounded-lg px-4 py-3 input-glass" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl btn-glass-gold font-medium">
              Submit Application <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Input({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} className="mt-2 w-full rounded-lg px-4 py-3 input-glass" />
    </div>
  );
}
