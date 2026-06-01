import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, HeartPulse, Users, Clock, Award, ArrowRight, Check, Star, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mo Qurishi · Licensed Health Advisor in 35+ States" },
      { name: "description", content: "Personal health insurance guidance from Mo Qurishi. Licensed in 35+ states. Free, no-pressure consultations for individuals, families, and small businesses." },
      { property: "og:title", content: "Mo Qurishi · Licensed Health Advisor" },
      { property: "og:description", content: "Personal health insurance guidance from a licensed advisor — clear answers, no pressure." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const STATES = ["AL","AR","CO","DE","FL","GA","IA","IL","IN","KS","KY","LA","MD","MI","MO","MS","MT","NC","NE","NV","OH","OK","SC","SD","TN","TX","UT","VA","WI","WV","WY"];

const PHONE = "656-266-3462";
const EMAIL = "alqurishihealthcareadvising@gmail.com";

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <WhyUs />
      <Services />
      <About />
      <StatesSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground">Q</span>
          </div>
          <span className="font-display text-lg tracking-wide">Qurishi <span className="text-gradient-gold">Advising</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition">Why Us</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#states" className="hover:text-foreground transition">Coverage</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-glass-gold text-sm font-medium">
          Free Quote <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs uppercase tracking-[0.2em] text-primary">
            <Star className="w-3 h-3 fill-primary" /> Licensed in 35+ States
          </div>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-medium">
            Your Health <br />
            <span className="text-gradient-gold italic">Deserves an Advocate.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm Mo Qurishi — a licensed health insurance advisor helping individuals, families, and small businesses cut through the noise and find coverage that actually fits.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl btn-glass-gold font-medium">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-primary/40 text-foreground hover:bg-primary/5 transition">
              <Phone className="w-4 h-4 text-primary" /> {PHONE}
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/>No pressure</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/>Free consults</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/>Real advisor</div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute -inset-8 bg-gradient-gold opacity-10 blur-3xl rounded-full" />
          <CornerOrnaments />
          <div className="relative rounded-2xl card-glass p-10 md:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(135deg, var(--gold) 0 1px, transparent 1px 22px)" }} />
            <div className="relative space-y-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">Office of</div>
                <div className="font-display text-4xl md:text-5xl leading-tight">Mo Qurishi</div>
                <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground mt-2">Licensed Health Advisor</div>
                <div className="h-px w-20 bg-gradient-gold my-6" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Direct Line</div>
                  <a href={`tel:${PHONE}`} className="font-sans text-lg tracking-wide text-foreground hover:text-primary transition">{PHONE}</a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Established</div>
                  <div className="font-display text-lg">2020</div>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground border-t border-border pt-6">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> NPN credentialed advisor</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> ACA Marketplace certified</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> Medicare AHIP certified</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> Independent &amp; multi-carrier appointed</li>
              </ul>
              <div className="flex items-end justify-between pt-2">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Licensed in 35+ States</div>
                <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center">
                  <span className="font-display text-base text-gradient-gold">MQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerOrnaments() {
  const base = "absolute w-6 h-6 border-primary pointer-events-none z-10";
  return (
    <>
      <span className={`${base} -top-2 -left-2 border-t border-l`} />
      <span className={`${base} -top-2 -right-2 border-t border-r`} />
      <span className={`${base} -bottom-2 -left-2 border-b border-l`} />
      <span className={`${base} -bottom-2 -right-2 border-b border-r`} />
    </>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
      <span className="text-primary text-xs">◆</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
    </div>
  );
}

function Marquee() {
  const items = ["Licensed in 35+ States", "Free Consultations", "Individuals & Families", "Small Business", "Medicare Guidance", "ACA Marketplace", "Real Human Advisor"];
  return (
    <div className="border-y border-border bg-card/40 py-5 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <span>{t}</span>
            <span className="text-primary">◆</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: "Accuracy That Delivers", body: "Every recommendation is backed by thorough research and real expertise. Clear guidance — never guesswork." },
    { icon: Clock, title: "Your Pace, Your Choice", body: "Conversations, not sales pitches. Ask questions, take your time, decide when you're ready." },
    { icon: HeartPulse, title: "Built on Trust", body: "Health coverage is personal. Treated with genuine care and a focus on what truly protects your family." },
    { icon: Users, title: "White-Glove Support", body: "No phone trees. A real advisor who knows your file and walks you through every option." },
    { icon: MapPin, title: "Coverage Across America", body: "Licensed in 35+ states and growing. Lasting protection so you can focus on living, not worrying." },
    { icon: Award, title: "Independent & Honest", body: "Not tied to one carrier. I shop the market so you only see plans that genuinely fit your life." },
  ];
  return (
    <section id="why" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Choose Mo</div>
          <h2 className="font-display text-5xl md:text-6xl">A different kind of <span className="italic text-gradient-gold">advisor.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-glass rounded-2xl p-10 hover:border-primary/45 transition group">
              <Icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition" />
              <h3 className="font-display text-2xl mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      num: "01",
      title: "Individual & Family Health Plans",
      body: "ACA marketplace, private PPO, and short-term options tailored to your budget and care needs.",
      details: {
        overview: "Comprehensive coverage for individuals and families — whether you're between jobs, self-employed, or simply want a better plan than what your employer offers.",
        includes: [
          "ACA Marketplace plans with subsidy eligibility review",
          "Private PPO and HMO plans from top-rated carriers",
          "Short-term medical for coverage gaps",
          "HSA-compatible high-deductible plans",
          "Pediatric and maternity-inclusive options",
        ],
        bestFor: "Self-employed professionals, families, early retirees, and anyone shopping outside of employer coverage.",
      },
    },
    {
      num: "02",
      title: "Small Business Group Coverage",
      body: "Build a benefits package that attracts talent without breaking your books.",
      details: {
        overview: "Group health benefits designed for small teams — from 2 employees to 50. Competitive plans that help you retain talent without enterprise-level costs.",
        includes: [
          "Group medical, dental, and vision plans",
          "Level-funded and self-funded alternatives",
          "QSEHRA and ICHRA reimbursement setup",
          "Section 125 / Cafeteria plan administration",
          "Annual renewal strategy and carrier negotiation",
        ],
        bestFor: "Small business owners, startups, professional practices, and nonprofits looking to offer real benefits.",
      },
    },
    {
      num: "03",
      title: "Medicare Guidance",
      body: "Original Medicare, Advantage, and supplement plans — explained in plain English.",
      details: {
        overview: "Turning 65 or already enrolled? I'll walk you through every part of Medicare so you understand exactly what you're paying for and what's covered.",
        includes: [
          "Medicare Part A, B, C, D explained clearly",
          "Medicare Advantage (Part C) plan comparison",
          "Medigap / Supplement plan selection",
          "Prescription drug (Part D) plan matching",
          "Annual Election Period reviews (Oct 15 – Dec 7)",
        ],
        bestFor: "Adults approaching 65, current Medicare beneficiaries, and adult children helping aging parents navigate enrollment.",
      },
    },
    {
      num: "04",
      title: "Dental, Vision & Supplemental",
      body: "Round out your protection with accident, critical illness, and supplemental coverage.",
      details: {
        overview: "Fill the gaps your primary health plan leaves behind. Affordable add-ons that protect your savings from unexpected medical events.",
        includes: [
          "Standalone dental plans (PPO and DHMO)",
          "Vision coverage with major retail networks",
          "Accident and critical illness policies",
          "Hospital indemnity and cancer coverage",
          "Short-term and long-term disability income",
        ],
        bestFor: "Anyone with high-deductible health coverage, families with active children, or individuals managing chronic health risks.",
      },
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? services[openIdx] : null;

  return (
    <section id="services" className="py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What I Do</div>
            <h2 className="font-display text-5xl md:text-6xl">Coverage built around <span className="italic text-gradient-gold">your life.</span></h2>
          </div>
          <p className="text-lg text-muted-foreground self-end leading-relaxed">
            Whether you're self-employed, between jobs, raising a family, or running a business — there's a right plan, and we'll find it together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setOpenIdx(i)}
              className="group relative p-10 rounded-2xl card-glass transition text-left cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-5xl text-gradient-gold">{s.num}</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
              </div>
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-4">{s.body}</p>
              <span className="text-xs uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">
                View Details <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-2xl bg-card border-primary/30">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-display text-4xl text-gradient-gold">{active.num}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary">Service</span>
                </div>
                <DialogTitle className="font-display text-3xl text-left">{active.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground text-base leading-relaxed text-left pt-2">
                  {active.details.overview}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 pt-2">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">What's Included</div>
                  <ul className="space-y-2.5">
                    {active.details.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border pt-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Best For</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{active.details.bestFor}</p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setOpenIdx(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-glass-gold font-medium"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-gold opacity-10 blur-2xl rounded-full" />
          <CornerOrnaments />
          <div className="relative rounded-2xl aspect-square card-glass p-10 flex flex-col justify-between overflow-hidden">
            {/* subtle diagonal gold lines */}
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(135deg, var(--gold) 0 1px, transparent 1px 24px)" }} />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">Credentials</div>
              <div className="font-display text-3xl leading-tight">Independent <br/>Licensed Advisor</div>
              <div className="h-px w-16 bg-gradient-gold my-5" />
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> NPN credentialed</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> ACA Marketplace certified</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> Medicare AHIP certified</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> Multi-carrier appointed</li>
              </ul>
            </div>
            <div className="relative flex items-end justify-between">
              <div>
                <div className="font-display text-2xl italic text-gradient-gold">Mo Qurishi</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Health Advisor · Est. 2020</div>
              </div>
              <div className="w-14 h-14 rounded-full border border-primary/50 flex items-center justify-center">
                <span className="font-display text-xl text-gradient-gold">MQ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">About Mo</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1]">A trusted voice in a <span className="italic text-gradient-gold">complicated industry.</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For years, Mo Qurishi has helped Americans navigate the health insurance maze with calm, clarity, and zero pressure. As an independent advisor, he isn't tied to any single carrier — which means his only loyalty is to the people he serves.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From first-time enrollees to families switching plans, small business owners to retirees approaching Medicare — every client gets the same white-glove treatment: a real conversation, real research, and real recommendations.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
            <div><div className="font-display text-4xl text-gradient-gold">35+</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">States Licensed</div></div>
            <div><div className="font-display text-4xl text-gradient-gold">5.0</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Client Rating</div></div>
            <div><div className="font-display text-4xl text-gradient-gold">1:1</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Personal Service</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatesSection() {
  return (
    <section id="states" className="py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Licensed Coverage</div>
        <h2 className="font-display text-5xl md:text-6xl mb-4">Serving clients in <span className="text-gradient-gold">{STATES.length}</span> states.</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">From the Atlantic to the Rockies — licensed, credentialed, and ready to help.</p>
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {STATES.map((s) => (
            <span key={s} className="px-4 py-2 rounded-lg text-sm font-medium tracking-wider text-foreground badge-glass cursor-default">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: "Mo made the whole process feel calm. He answered every question — even the dumb ones — without ever pushing a sale.", name: "Sarah K.", role: "Family of 4, TX" },
    { quote: "Switched our small team to a better plan and saved real money. He's the only advisor I'd recommend.", name: "James R.", role: "Business Owner, FL" },
    { quote: "Medicare felt impossible until Mo walked me through it. He treats you like family.", name: "Diane M.", role: "Retiree, OH" },
  ];
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Client Voices</div>
          <h2 className="font-display text-5xl md:text-6xl">Trust, <span className="italic text-gradient-gold">earned.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="p-8 rounded-2xl card-glass hover:border-primary/45 transition">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-primary text-primary"/>)}</div>
              <p className="font-display text-xl leading-relaxed mb-6 text-foreground">"{t.quote}"</p>
              <div className="text-sm">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden card-glass">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-gold opacity-5" />
          <div className="relative grid lg:grid-cols-2 gap-12 p-10 md:p-16">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get In Touch</div>
              <h2 className="font-display text-5xl md:text-6xl mb-6 leading-[1]">Let's find the right <span className="italic text-gradient-gold">coverage.</span></h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">Free, no-pressure consultation. Reach out by phone, email, or send a quick note — I personally respond to every inquiry.</p>
              <div className="space-y-5">
                <a href={`tel:${PHONE}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl icon-glass flex items-center justify-center group-hover:bg-gradient-gold transition">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                    <div className="font-sans text-xl tracking-wide">{PHONE}</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl icon-glass flex items-center justify-center group-hover:bg-gradient-gold transition">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                    <div className="font-display text-lg break-all">{EMAIL}</div>
                  </div>
                </a>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${EMAIL}`; }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="First name" name="first" />
                <Field label="Last name" name="last" />
              </div>
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="State" name="state" />
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">How can I help?</label>
                <textarea rows={4} className="mt-2 w-full rounded-lg px-4 py-3 input-glass" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl btn-glass-gold font-medium">
                Request Free Quote <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} className="mt-2 w-full rounded-lg px-4 py-3 input-glass" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground">Q</span>
          </div>
          <div>
            <div className="font-display text-lg">Qurishi Healthcare Advising</div>
            <div className="text-xs text-muted-foreground">Mo Qurishi · Licensed Health Advisor</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Qurishi Healthcare Advising. All rights reserved.</div>
      </div>
    </footer>
  );
}
