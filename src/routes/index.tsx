import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, HeartPulse, Users, Clock, Award, ArrowRight, Check, Star, X, Calendar, Plus, Minus, Briefcase, Building2, Plane, UserCheck, Baby, Sparkles, Calculator, TrendingDown, BookOpen, Search, FileText, Video, Headphones, Quote, ChevronRight, Compass, Handshake, Menu } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { USMap } from "@/components/USMap";
import { PremiumTicker, AdvisorCompareSlider, AppointmentCalendar, CostDonut, QuickActionFAB, LicenseVerifier, TypewriterText, Tilt3D, TrustBadgeBar, MobileShowcase } from "@/components/CoolFeatures";
import qurishiLogo from "@/assets/qurishi-logo.png";
import qurishiHealthcareLogo from "@/assets/qurishi-healthcare-logo-transparent.png.asset.json";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import alabamaLic from "@/assets/licenses/alabama.pdf.asset.json";
import arkansasLic from "@/assets/licenses/arkansas.pdf.asset.json";
import coloradoLic from "@/assets/licenses/colorado.pdf.asset.json";
import floridaLic from "@/assets/licenses/florida.pdf.asset.json";
import georgiaLic from "@/assets/licenses/georgia.pdf.asset.json";
import illinoisLic from "@/assets/licenses/illinois.pdf.asset.json";
import indianaLic from "@/assets/licenses/indiana.pdf.asset.json";
import iowaLic from "@/assets/licenses/iowa.pdf.asset.json";
import kansasLic from "@/assets/licenses/kansas.pdf.asset.json";
import kentuckyLic from "@/assets/licenses/kentucky.pdf.asset.json";
import alabamaImg from "@/assets/licenses/alabama.jpg.asset.json";
import arkansasImg from "@/assets/licenses/arkansas.jpg.asset.json";
import coloradoImg from "@/assets/licenses/colorado.jpg.asset.json";
import floridaImg from "@/assets/licenses/florida.jpg.asset.json";
import georgiaImg from "@/assets/licenses/georgia.jpg.asset.json";
import illinoisImg from "@/assets/licenses/illinois.jpg.asset.json";
import indianaImg from "@/assets/licenses/indiana.jpg.asset.json";
import iowaImg from "@/assets/licenses/iowa.jpg.asset.json";
import kansasImg from "@/assets/licenses/kansas.jpg.asset.json";
import kentuckyImg from "@/assets/licenses/kentucky.jpg.asset.json";
import louisianaLic from "@/assets/licenses/louisiana.pdf.asset.json";
import louisianaImg from "@/assets/licenses/louisiana.jpg.asset.json";
import marylandLic from "@/assets/licenses/maryland.pdf.asset.json";
import marylandImg from "@/assets/licenses/maryland.jpg.asset.json";
import michiganImg from "@/assets/licenses/michigan.jpg.asset.json";
import missouriLic from "@/assets/licenses/missouri.pdf.asset.json";
import missouriImg from "@/assets/licenses/missouri.jpg.asset.json";
import montanaLic from "@/assets/licenses/montana.pdf.asset.json";
import montanaImg from "@/assets/licenses/montana.jpg.asset.json";
import mississippiLic from "@/assets/licenses/mississippi.pdf.asset.json";
import mississippiImg from "@/assets/licenses/mississippi.jpg.asset.json";
import nebraskaLic from "@/assets/licenses/nebraska.pdf.asset.json";
import nebraskaImg from "@/assets/licenses/nebraska.jpg.asset.json";
import nevadaLic from "@/assets/licenses/nevada.pdf.asset.json";
import nevadaImg from "@/assets/licenses/nevada.jpg.asset.json";
import ncLic from "@/assets/licenses/north_carolina.pdf.asset.json";
import ncImg from "@/assets/licenses/north_carolina.jpg.asset.json";
import ohioLic from "@/assets/licenses/ohio.pdf.asset.json";
import ohioImg from "@/assets/licenses/ohio.jpg.asset.json";
import oklahomaLic from "@/assets/licenses/oklahoma.pdf.asset.json";
import oklahomaImg from "@/assets/licenses/oklahoma.jpg.asset.json";
import scLic from "@/assets/licenses/south_carolina.pdf.asset.json";
import scImg from "@/assets/licenses/south_carolina.jpg.asset.json";
import tennesseeLic from "@/assets/licenses/tennessee.pdf.asset.json";
import tennesseeImg from "@/assets/licenses/tennessee.jpg.asset.json";
import texasLic from "@/assets/licenses/texas.pdf.asset.json";
import texasImg from "@/assets/licenses/texas.jpg.asset.json";
import utahLic from "@/assets/licenses/utah.pdf.asset.json";
import utahImg from "@/assets/licenses/utah.jpg.asset.json";
import virginiaLic from "@/assets/licenses/virginia.pdf.asset.json";
import virginiaImg from "@/assets/licenses/virginia.jpg.asset.json";
import wvLic from "@/assets/licenses/west_virginia.pdf.asset.json";
import wvImg from "@/assets/licenses/west_virginia.jpg.asset.json";
import wisconsinLic from "@/assets/licenses/wisconsin.pdf.asset.json";
import wisconsinImg from "@/assets/licenses/wisconsin.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mo Qurishi · Licensed Health Advisor" },
      { name: "description", content: "Personal health insurance guidance from Mo Qurishi. Licensed in 35+ states. Free, no-pressure consultations." },
      { property: "og:title", content: "Mo Qurishi · Licensed Health Advisor" },
      { property: "og:description", content: "Licensed in 35+ states — call 656-266-3462" },
      { property: "og:site_name", content: "Mo Qurishi" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Mo Qurishi · Licensed Health Advisor" },
      { name: "twitter:description", content: "Licensed in 35+ states — call 656-266-3462" },
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
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));
    sections.forEach((section, index) => {
      if (index % 2 === 0) section.classList.add("ambient-section");
    });

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>("section > div"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealEls.forEach((el, index) => {
      el.classList.add("motion-reveal");
      el.style.transitionDelay = `${Math.min(index * 60, 280)}ms`;
      observer.observe(el);
    });
    revealEls[0]?.classList.add("is-visible");

    const cleanups: Array<() => void> = [];
    if (window.matchMedia("(pointer:fine)").matches) {
      const glowEls = document.querySelectorAll<HTMLElement>(".card-glass, .badge-glass, .btn-glass-gold, .icon-glass, .mouse-glow-card");
      glowEls.forEach((el) => {
        const move = (event: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          el.style.setProperty("--glow-x", `${x}%`);
          el.style.setProperty("--glow-y", `${y}%`);
        };
        const enter = () => el.style.setProperty("--glow-opacity", "1");
        const leave = () => {
          el.style.setProperty("--glow-opacity", "0");
          el.style.setProperty("--glow-x", "50%");
          el.style.setProperty("--glow-y", "50%");
        };

        leave();
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <WhyUs />
      <Services />
      <About />
      <Carriers />
      
      <StatesSection />
      <AppointmentCalendar />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const navLinks: { to: string; label: string }[] = [
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/coverage", label: "Coverage" },
    { to: "/testimonials", label: "Reviews" },
    { to: "/resources", label: "Resources" },
    { to: "/join", label: "Join Us" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Qurishi Healthcare — Home" onClick={() => setOpen(false)}>
          <img
            src={qurishiHealthcareLogo.url}
            alt="Qurishi Healthcare"
            className="h-12 w-auto"
            style={{ filter: "drop-shadow(0 2px 10px rgba(201,168,76,0.18))" }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>{l.label}</Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-glass-gold text-sm font-medium">
          Free Quote <ArrowRight className="w-4 h-4" />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border text-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1 text-base">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card/50 transition"
                activeProps={{ className: "text-foreground bg-card/50" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl btn-glass-gold text-sm font-medium"
            >
              Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

const HERO_PILLARS = [
  {
    key: "protect",
    label: "Protect",
    icon: ShieldCheck,
    title: "Protect what matters most",
    blurb: "Coverage that shields your family from unexpected medical bills, gaps, and surprises.",
    bullets: [
      "Comprehensive ACA & private plans",
      "Stop-loss & critical illness add-ons",
      "Clear network & out-of-pocket review",
    ],
  },
  {
    key: "guide",
    label: "Guide",
    icon: Compass,
    title: "Honest, expert guidance",
    blurb: "Plain-English help so you understand every plan, every dollar, every trade-off.",
    bullets: [
      "Side-by-side plan comparisons",
      "Subsidy & tax-credit checks",
      "Doctor & medication look-ups",
    ],
  },
  {
    key: "support",
    label: "Support",
    icon: Headphones,
    title: "Real support, all year",
    blurb: "I stay with you long after enrollment — for claims, ID cards, life changes, and renewals.",
    bullets: [
      "Direct line to a real advisor",
      "Claim & billing help",
      "Life-event plan adjustments",
    ],
  },
  {
    key: "care",
    label: "Care",
    icon: HeartPulse,
    title: "Care that feels personal",
    blurb: "I treat every client like family — no pressure, no fine-print games, just genuine advice.",
    bullets: [
      "No-pressure consultations",
      "Bilingual service available",
      "Plans matched to your real life",
    ],
  },
  {
    key: "trust",
    label: "Trust",
    icon: Handshake,
    title: "Earned trust, every day",
    blurb: "Independent, licensed in 35+ states, and accountable to you — not a single carrier.",
    bullets: [
      "NPN credentialed & ACA certified",
      "Medicare AHIP certified",
      "Independent, multi-carrier appointed",
    ],
  },
] as const;

function HeroShowcase() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? HERO_PILLARS[openIdx] : null;
  const ActiveIcon = active?.icon;

  return (
    <div className="relative w-full">
      <div className="absolute -inset-10 bg-gradient-gold opacity-10 blur-3xl rounded-full pointer-events-none" />
      <div className="relative card-glass rounded-3xl p-6 md:p-8 border border-border/40 shadow-elegant">
        {/* Logo */}
        <img
          src={qurishiLogo}
          alt="Qurishi Healthcare — Expert Guidance. Better Coverage. Peace of Mind."
          className="w-full h-auto"
        />

        {/* Clickable pillar hotspots overlaid as a single seamless row beneath the logo's pillar graphics */}
        <div className="mt-2 grid grid-cols-5 gap-1">
          {HERO_PILLARS.map((p, i) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setOpenIdx(i)}
              aria-label={`Learn about ${p.label}`}
              className="group flex flex-col items-center gap-1 py-2 rounded-2xl hover:bg-primary/5 transition cursor-pointer"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary transition">
                {p.label}
              </span>
            </button>
          ))}
        </div>

        {/* Subtle trust line */}
        <div className="mt-4 pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Licensed in 35+ States</span>
          <a href={`tel:${PHONE}`} className="hover:text-primary transition normal-case tracking-normal text-sm text-foreground">{PHONE}</a>
        </div>
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-lg rounded-2xl bg-background border-border text-foreground">
          {active && ActiveIcon && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-12 h-12 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                    <ActiveIcon className="w-6 h-6 text-primary" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary">{active.label}</span>
                </div>
                <DialogTitle className="font-display text-3xl text-left">{active.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground text-base leading-relaxed text-left pt-2">
                  {active.blurb}
                </DialogDescription>
              </DialogHeader>
              <ul className="space-y-2.5 pt-2">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border flex gap-3">
                <a href="#contact" onClick={() => setOpenIdx(null)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl btn-glass-gold text-sm font-medium">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-primary/40 text-sm hover:bg-primary/5 transition">
                  <Phone className="w-4 h-4 text-primary" /> Call
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs uppercase tracking-[0.2em] text-primary">
            <Star className="w-3 h-3 fill-primary" /> Licensed in 35+ States
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium">
            Your Health <br />
            <span className="text-gradient-gold italic">
              <TypewriterText words={["Deserves an Advocate.", "Deserves Clarity.", "Deserves Real Answers.", "Deserves Mo."]} />
            </span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            I'm Mo Qurishi — a licensed health insurance advisor helping individuals, families, and small businesses cut through the noise and find coverage that actually fits.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-glass-gold font-medium text-sm">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-primary/40 text-foreground hover:bg-primary/5 transition text-sm">
              <Phone className="w-4 h-4 text-primary" /> {PHONE}
            </a>
          </div>
          <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/>No pressure</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/>Free consults</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/>Real advisor</div>
          </div>
        </div>

        <HeroShowcase />

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

export function Marquee() {
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

export function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: "Accuracy That Delivers", body: "Every recommendation is backed by thorough research and real expertise. Clear guidance — never guesswork." },
    { icon: Clock, title: "Your Pace, Your Choice", body: "Conversations, not sales pitches. Ask questions, take your time, decide when you're ready." },
    { icon: HeartPulse, title: "Built on Trust", body: "Health coverage is personal. Treated with genuine care and a focus on what truly protects your family." },
    { icon: Users, title: "White-Glove Support", body: "No phone trees. A real advisor who knows your file and walks you through every option." },
    { icon: MapPin, title: "Coverage Across America", body: "Licensed in 35+ states and growing. Lasting protection so you can focus on living, not worrying." },
    { icon: Award, title: "Independent & Honest", body: "Not tied to one carrier. I shop the market so you only see plans that genuinely fit your life." },
  ];
  return (
    <section id="why" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Choose Mo</div>
          <h2 className="font-display text-4xl md:text-5xl">A different kind of <span className="italic text-gradient-gold">advisor.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-glass rounded-2xl p-6 hover:border-primary/45 transition group">
              <Icon className="w-7 h-7 text-primary mb-4 group-hover:scale-110 transition" />
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
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
    <section id="services" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What I Do</div>
            <h2 className="font-display text-4xl md:text-5xl">Coverage built around <span className="italic text-gradient-gold">your life.</span></h2>
          </div>
          <p className="text-base text-muted-foreground self-end leading-relaxed">
            Whether you're self-employed, between jobs, raising a family, or running a business — there's a right plan, and we'll find it together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Tilt3D key={s.num} className="h-full">
              <button
                onClick={() => setOpenIdx(i)}
                className="group relative p-6 rounded-2xl card-glass transition text-left cursor-pointer w-full h-full"
              >
                <div className="flex items-start justify-between mb-4" style={{ transform: "translateZ(40px)" }}>
                  <span className="font-display text-4xl text-gradient-gold">{s.num}</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>
                <h3 className="font-display text-xl mb-2" style={{ transform: "translateZ(30px)" }}>{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{s.body}</p>
                <span className="text-xs uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">
                  View Details <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </Tilt3D>
          ))}
        </div>
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-2xl rounded-2xl bg-background border-border text-foreground">
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

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-10 blur-2xl rounded-full" />
          <CornerOrnaments />
          <div className="relative rounded-2xl aspect-square card-glass p-6 flex flex-col justify-between overflow-hidden">
            {/* subtle diagonal gold lines */}
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(135deg, var(--gold) 0 1px, transparent 1px 24px)" }} />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-3">Credentials</div>
              <div className="font-display text-2xl leading-tight">Independent <br/>Licensed Advisor</div>
              <div className="h-px w-16 bg-gradient-gold my-4" />
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> NPN credentialed</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> ACA Marketplace certified</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> Medicare AHIP certified</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary"/> Multi-carrier appointed</li>
              </ul>
            </div>
            <div className="relative flex items-end justify-between">
              <div>
                <div className="font-display text-xl italic text-gradient-gold">Mo Qurishi</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Health Advisor · Est. 2020</div>
              </div>
              <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center">
                <span className="font-display text-lg text-gradient-gold">MQ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">About Mo</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1]">A trusted voice in a <span className="italic text-gradient-gold">complicated industry.</span></h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            For years, Mo Qurishi has helped Americans navigate the health insurance maze with calm, clarity, and zero pressure. As an independent advisor, he isn't tied to any single carrier — which means his only loyalty is to the people he serves.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            From first-time enrollees to families switching plans, small business owners to retirees approaching Medicare — every client gets the same white-glove treatment: a real conversation, real research, and real recommendations.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-5 border-t border-border">
            <div><div className="font-display text-3xl text-gradient-gold">35+</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">States Licensed</div></div>
            <div><div className="font-display text-3xl text-gradient-gold">5.0</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Client Rating</div></div>
            <div><div className="font-display text-3xl text-gradient-gold">1:1</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Personal Service</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatesSection() {
  return (
    <section id="states" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Licensed Coverage</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Wherever you live, <span className="text-gradient-gold italic">we've got you.</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">If your state glows gold on the map, we can write your policy.</p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6 items-start">
          {/* Interactive Map */}
          <div className="card-glass rounded-3xl p-5 md:p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            <USMap licensed={STATES} />
          </div>

          {/* Stat cards */}
          <div className="space-y-4">
            <div className="card-glass rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-display text-3xl text-gradient-gold leading-none">{STATES.length}+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary mt-1">States Licensed</div>
                <div className="text-sm text-muted-foreground mt-1">Independent broker — multi-carrier appointments.</div>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-display text-3xl text-gradient-gold leading-none">Thousands+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary mt-1">Families Served</div>
                <div className="text-sm text-muted-foreground mt-1">Self-employed, 1099, families, small business.</div>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground leading-none tracking-wider">21032307</div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary mt-1">NPN</div>
                <div className="text-sm text-muted-foreground mt-1">National Producer Number — verify at nipr.com.</div>
              </div>
            </div>
          </div>
        </div>

        {/* State pill grid */}
        <div className="mt-10">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mb-4">All licensed states</div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {STATES.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-lg text-xs font-medium tracking-wider text-foreground badge-glass cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* State-by-state license carousel */}
        <LicenseCarousel />
      </div>
    </section>
  );
}

const LICENSES: { state: string; code: string; pdf: string; img: string }[] = [
  { state: "Alabama", code: "AL", pdf: alabamaLic.url, img: alabamaImg.url },
  { state: "Arkansas", code: "AR", pdf: arkansasLic.url, img: arkansasImg.url },
  { state: "Colorado", code: "CO", pdf: coloradoLic.url, img: coloradoImg.url },
  { state: "Florida", code: "FL", pdf: floridaLic.url, img: floridaImg.url },
  { state: "Georgia", code: "GA", pdf: georgiaLic.url, img: georgiaImg.url },
  { state: "Illinois", code: "IL", pdf: illinoisLic.url, img: illinoisImg.url },
  { state: "Indiana", code: "IN", pdf: indianaLic.url, img: indianaImg.url },
  { state: "Iowa", code: "IA", pdf: iowaLic.url, img: iowaImg.url },
  { state: "Kansas", code: "KS", pdf: kansasLic.url, img: kansasImg.url },
  { state: "Kentucky", code: "KY", pdf: kentuckyLic.url, img: kentuckyImg.url },
  { state: "Louisiana", code: "LA", pdf: louisianaLic.url, img: louisianaImg.url },
  { state: "Maryland", code: "MD", pdf: marylandLic.url, img: marylandImg.url },
  { state: "Michigan", code: "MI", pdf: michiganImg.url, img: michiganImg.url },
  { state: "Mississippi", code: "MS", pdf: mississippiLic.url, img: mississippiImg.url },
  { state: "Missouri", code: "MO", pdf: missouriLic.url, img: missouriImg.url },
  { state: "Montana", code: "MT", pdf: montanaLic.url, img: montanaImg.url },
  { state: "Nebraska", code: "NE", pdf: nebraskaLic.url, img: nebraskaImg.url },
  { state: "Nevada", code: "NV", pdf: nevadaLic.url, img: nevadaImg.url },
  { state: "North Carolina", code: "NC", pdf: ncLic.url, img: ncImg.url },
  { state: "Ohio", code: "OH", pdf: ohioLic.url, img: ohioImg.url },
  { state: "Oklahoma", code: "OK", pdf: oklahomaLic.url, img: oklahomaImg.url },
  { state: "South Carolina", code: "SC", pdf: scLic.url, img: scImg.url },
  { state: "Tennessee", code: "TN", pdf: tennesseeLic.url, img: tennesseeImg.url },
  { state: "Texas", code: "TX", pdf: texasLic.url, img: texasImg.url },
  { state: "Utah", code: "UT", pdf: utahLic.url, img: utahImg.url },
  { state: "Virginia", code: "VA", pdf: virginiaLic.url, img: virginiaImg.url },
  { state: "West Virginia", code: "WV", pdf: wvLic.url, img: wvImg.url },
  { state: "Wisconsin", code: "WI", pdf: wisconsinLic.url, img: wisconsinImg.url },
];

function LicenseCarousel() {
  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Official Documentation</div>
        <h3 className="font-display text-3xl md:text-4xl mb-3">State-by-state <span className="italic text-gradient-gold">licenses</span></h3>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">Tap any card to view the official state-issued license PDF.</p>
      </div>
      <Carousel opts={{ align: "start", loop: true }} className="max-w-6xl mx-auto px-10">
        <CarouselContent>
          {LICENSES.map((lic) => (
            <CarouselItem key={lic.code} className="md:basis-1/2 lg:basis-1/3">
              <a
                href={lic.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="block card-glass rounded-2xl p-5 h-full group transition"
              >
                {/* License preview image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-white border border-primary/20 mb-5">
                  <img
                    src={lic.img}
                    alt={`${lic.state} health insurance license`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <span className="absolute top-2 right-2 text-[10px] uppercase tracking-[0.2em] text-primary px-2 py-1 rounded-md border border-primary/40 bg-background/80 backdrop-blur">
                    {lic.code}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-xl text-foreground leading-tight">{lic.state}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">Health Insurance License</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary group-hover:gap-2.5 transition-all whitespace-nowrap">
                    <span>View PDF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-primary/40 bg-card/80 text-foreground hover:bg-primary/10" />
        <CarouselNext className="border-primary/40 bg-card/80 text-foreground hover:bg-primary/10" />
      </Carousel>
    </div>
  );
}

export function Testimonials() {
  const items = [
    { quote: "Mo made the whole process feel calm. He answered every question — even the dumb ones — without ever pushing a sale.", name: "Sarah K.", role: "Family of 4, TX" },
    { quote: "Switched our small team to a better plan and saved real money. He's the only advisor I'd recommend.", name: "James R.", role: "Business Owner, FL" },
    { quote: "Medicare felt impossible until Mo walked me through it. He treats you like family.", name: "Diane M.", role: "Retiree, OH" },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Client Voices</div>
          <h2 className="font-display text-4xl md:text-5xl">Trust, <span className="italic text-gradient-gold">earned.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl card-glass hover:border-primary/45 transition">
              <div className="flex gap-1 mb-3">{[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-primary text-primary"/>)}</div>
              <p className="font-display text-base leading-relaxed mb-4 text-foreground">"{t.quote}"</p>
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

export function Contact() {
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">


      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14 motion-reveal is-visible">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-primary mb-5">
            <span className="h-px w-8 bg-gradient-gold" />
            Get In Touch
            <span className="h-px w-8 bg-gradient-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
            Let's find the right <span className="italic text-gradient-gold">coverage.</span>
          </h2>
          <p className="text-white mt-4 max-w-xl mx-auto">
            Free, no-pressure consultation. I personally respond to every inquiry — usually within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* LEFT: Dark navy contact card */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden p-8 md:p-10 text-primary-foreground shadow-elegant"
               style={{ background: "var(--gradient-navy)" }}>
            {/* Gold sheen */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-gold opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
                 style={{ backgroundImage: "linear-gradient(135deg, transparent 48%, oklch(0.85 0.10 85) 49%, oklch(0.85 0.10 85) 51%, transparent 52%)" }} />

            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-3">Direct Line</div>
              <h3 className="font-display text-3xl mb-2" style={{ color: "oklch(0.97 0.012 85)" }}>Talk to Mo, not a call center.</h3>
              <p className="text-white text-sm leading-relaxed mb-10">
                One advisor. One promise. Honest guidance — for life.
              </p>

              <div className="space-y-4">
                <a href={`tel:${PHONE}`} className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[oklch(0.74_0.13_78/0.55)] transition-all hover:-translate-y-0.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Phone</div>
                    <div className="font-sans text-lg tracking-wide text-white">{PHONE}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold-soft opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>

                <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[oklch(0.74_0.13_78/0.55)] transition-all hover:-translate-y-0.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Email</div>
                    <div className="font-display text-base truncate text-white">{EMAIL}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold-soft opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.04]">
                  <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Hours</div>
                    <div className="font-sans text-sm text-white">Mon–Sat · 8a – 8p CT</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-white">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Accepting new clients · Avg. response under 2 hours
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-3 relative rounded-3xl card-glass p-8 md:p-10">
            {sent ? (
              <div className="min-h-[420px] flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold mb-5">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-3xl mb-2">Message on its way.</h3>
                <p className="text-muted-foreground max-w-sm">Your email client should open in a moment. I'll personally reply shortly.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-xs uppercase tracking-[0.25em] text-primary story-link">
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => { window.location.href = `mailto:${EMAIL}`; }, 400); }}
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FloatField label="First name" name="first" focused={focused} setFocused={setFocused} />
                  <FloatField label="Last name" name="last" focused={focused} setFocused={setFocused} />
                </div>
                <FloatField label="Email" name="email" type="email" focused={focused} setFocused={setFocused} />
                <div className="grid grid-cols-2 gap-4">
                  <FloatField label="Phone" name="phone" type="tel" focused={focused} setFocused={setFocused} />
                  <FloatField label="State" name="state" focused={focused} setFocused={setFocused} />
                </div>
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">How can I help?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me a bit about who I'd be insuring and any coverage you have today…"
                    className="w-full rounded-xl px-4 py-3 input-glass resize-none placeholder:text-muted-foreground/60"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl btn-glass-gold font-medium text-sm overflow-hidden"
                >
                  <span className="relative z-10">Request Free Quote</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[11px] text-center text-muted-foreground">
                  🔒 Your information is private. No spam. No selling. Ever.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: "< 2 hrs", v: "Avg response" },
            { k: "35+", v: "States licensed" },
            { k: "$0", v: "Consultation fee" },
            { k: "100%", v: "Confidential" },
          ].map((s) => (
            <div key={s.v} className="card-glass rounded-2xl px-4 py-5 text-center">
              <div className="font-display text-2xl text-gradient-gold">{s.k}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatField({ label, name, type = "text", focused, setFocused }: { label: string; name: string; type?: string; focused: string | null; setFocused: (v: string | null) => void; }) {
  return (
    <div className="relative">
      <label htmlFor={name} className={`block text-[10px] uppercase tracking-[0.25em] mb-2 transition-colors ${focused === name ? "text-primary" : "text-muted-foreground"}`}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        className="w-full rounded-xl px-4 py-3 input-glass"
      />
    </div>
  );
}

export function Stats() {
  const stats = [
    { num: "35+", label: "States Licensed" },
    { num: "2,000+", label: "Families Covered" },
    { num: "12+", label: "Years Experience" },
    { num: "4.9★", label: "Client Rating" },
  ];
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="card-glass rounded-2xl p-6 text-center">
            <div className="font-display text-4xl md:text-5xl text-gradient-gold">{s.num}</div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { num: "01", title: "Free 15-min call", body: "Tell us about your health, budget, and family. No commitment, no pressure — ever." },
    { num: "02", title: "We compare carriers", body: "We shop across major carriers and plan types — ACA, private, supplemental — to find your fit." },
    { num: "03", title: "You enroll with confidence", body: "We walk you through enrollment and stay your advisor for life. Coverage often starts within days." },
  ];
  return (
    <section id="how" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl">Three steps from <span className="italic text-gradient-gold">confused to covered.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 relative">
          {steps.map((s, i) => (
            <div key={s.num} className="card-glass rounded-2xl p-7 relative">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-5xl text-gradient-gold leading-none">{s.num}</span>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-primary/40 ml-auto" />
                )}
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyNow() {
  const items = [
    { icon: Clock, title: "Year-Round Enrollment", body: "Private plans don't require Open Enrollment. Coverage can start in days, not months." },
    { icon: Calendar, title: "Open Enrollment: Nov 1 – Jan 15", body: "For ACA plans, you can change or apply once a year. We can prep your case ahead of time." },
    { icon: Sparkles, title: "Qualifying Life Events", body: "New job, marriage, baby, moving states? You may have a 60-day Special Enrollment Period." },
  ];
  return (
    <section id="why-now" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Now</div>
          <h2 className="font-display text-4xl md:text-5xl">The right moment depends on <span className="italic text-gradient-gold">your situation.</span></h2>
          <p className="text-muted-foreground text-sm mt-3">Here's what to know — and when to act.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg icon-glass flex items-center justify-center mb-4">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LICENSE_STATES: { code: string; name: string }[] = [
  { code: "AL", name: "Alabama" }, { code: "AR", name: "Arkansas" }, { code: "CO", name: "Colorado" },
  { code: "DE", name: "Delaware" }, { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" },
  { code: "IA", name: "Iowa" }, { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
  { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" },
  { code: "MD", name: "Maryland" }, { code: "MI", name: "Michigan" }, { code: "MO", name: "Missouri" },
  { code: "MS", name: "Mississippi" }, { code: "MT", name: "Montana" }, { code: "NC", name: "North Carolina" },
  { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" }, { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" }, { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
  { code: "VA", name: "Virginia" }, { code: "WI", name: "Wisconsin" }, { code: "WV", name: "West Virginia" },
  { code: "WY", name: "Wyoming" },
];

export function LicenseGrid() {
  return (
    <section id="licenses" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Official Documentation</div>
          <h2 className="font-display text-4xl md:text-5xl">State-by-state <span className="italic text-gradient-gold">licenses.</span></h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">Tap any card to request the official state-issued license document.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {LICENSE_STATES.map((s) => (
            <a
              key={s.code}
              href="#contact"
              className="card-glass rounded-xl p-4 flex flex-col items-center text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="font-display text-base leading-tight">{s.name}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">License · {s.code}</div>
            </a>
          ))}
        </div>

        <div className="mt-10 card-glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl icon-glass flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-1">NPN · 21032307</div>
              <h3 className="font-display text-xl">National Producer Number</h3>
              <p className="text-muted-foreground text-sm mt-1">Verify any licensed advisor at <span className="text-foreground">nipr.com</span>.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-glass-gold font-medium text-sm">
              Get instant estimate <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://nipr.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl badge-glass font-medium text-sm">
              Verify license
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Don't see your state? Email us — new state licenses are added regularly.
        </p>
      </div>
    </section>
  );
}

export function WhoWeHelp() {
  const personas = [
    { icon: Briefcase, title: "Self-Employed", body: "Freelancers and consultants who need real coverage without an HR department." },
    { icon: Users, title: "Families", body: "Plans that cover pediatric care, maternity, and the unexpected." },
    { icon: Building2, title: "Small Business", body: "Group benefits that attract talent without breaking the budget." },
    { icon: Plane, title: "Early Retirees", body: "Bridge coverage from your last day of work until Medicare kicks in." },
    { icon: UserCheck, title: "Between Jobs", body: "Affordable short-term and ACA options for life's transitions." },
    { icon: Baby, title: "New Parents", body: "Add a child to your plan or find better family coverage in a Special Enrollment Period." },
  ];
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Who I Help</div>
            <h2 className="font-display text-4xl md:text-5xl">For every <span className="italic text-gradient-gold">stage of life.</span></h2>
          </div>
          <p className="text-base text-muted-foreground self-end leading-relaxed">
            No matter where you are right now, there's a path to coverage that makes sense — and I'll help you find it.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-glass rounded-2xl p-6">
              <Icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-display text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Carriers() {
  const carriers = ["UnitedHealthcare", "Cigna", "Aetna", "Blue Cross Blue Shield", "Humana", "Ambetter", "Oscar", "Molina", "Anthem", "Kaiser", "Wellcare", "Allstate"];
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Carrier Partners</div>
        <h2 className="font-display text-4xl md:text-5xl mb-12">Appointed with the <span className="italic text-gradient-gold">nation's top carriers.</span></h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {carriers.map((c) => (
            <span key={c} className="px-5 py-3 rounded-xl badge-glass font-display text-base tracking-wide">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeadlinesCallout() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto card-glass rounded-2xl p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-gold opacity-10 blur-3xl rounded-full" />
        <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <div className="w-12 h-12 rounded-xl icon-glass flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Key Dates</div>
            <h3 className="font-display text-2xl md:text-3xl mb-2">Don't miss your <span className="italic text-gradient-gold">enrollment window.</span></h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-muted-foreground">
              <div><span className="text-foreground font-medium">ACA Open Enrollment:</span> Nov 1 – Jan 15</div>
              <div><span className="text-foreground font-medium">Medicare AEP:</span> Oct 15 – Dec 7</div>
              <div><span className="text-foreground font-medium">Medicare OEP:</span> Jan 1 – Mar 31</div>
              <div><span className="text-foreground font-medium">SEP:</span> Triggered by life events year-round</div>
            </div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-glass-gold font-medium text-sm shrink-0">
            Check Eligibility <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "How much does it cost to work with you?", a: "Absolutely nothing. My services are 100% free to you — I'm compensated directly by the insurance carriers when you enroll, at no added cost to your premium." },
    { q: "Am I locked into a plan once I enroll?", a: "No. You can change plans during Open Enrollment, or any time you have a qualifying life event (marriage, new baby, job loss, moving, etc.) through a Special Enrollment Period." },
    { q: "What if I have a pre-existing condition?", a: "ACA-compliant plans cannot deny you coverage or charge you more for pre-existing conditions. I'll help you find a plan that includes the specialists and medications you need." },
    { q: "Do I qualify for a subsidy?", a: "Most people do. Subsidies are based on household income and family size — I'll calculate your eligibility on our first call and show you the real out-of-pocket cost." },
    { q: "Can you help me switch from my employer's plan?", a: "Yes. Many people find better-value coverage outside of employer plans, especially with subsidies. I'll do a side-by-side comparison so you can decide with full information." },
    { q: "How long does enrollment take?", a: "A typical consultation runs 20–40 minutes. Enrollment itself usually takes another 15–20 minutes once you've picked a plan." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Common Questions</div>
          <h2 className="font-display text-4xl md:text-5xl">Honest <span className="italic text-gradient-gold">answers.</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="card-glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer transition-colors hover:bg-primary/5"
              >
                <span className="font-display text-base md:text-lg">{f.q}</span>
                {open === i ? <Minus className="w-5 h-5 text-primary shrink-0" /> : <Plus className="w-5 h-5 text-primary shrink-0" />}
              </button>
              {open === i && (
                <div className="animate-accordion-down px-5 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4 text-sm">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols: { title: string; links: { label: string; to: string }[] }[] = [
    { title: "Explore", links: [
      { label: "Why Us", to: "/why" },
      { label: "Services", to: "/services" },
      { label: "About", to: "/about" },
      { label: "Coverage", to: "/coverage" },
    ]},
    { title: "Learn", links: [
      { label: "Reviews", to: "/testimonials" },
      { label: "Resources", to: "/resources" },
      { label: "Join the Team", to: "/join" },
      { label: "Contact", to: "/contact" },
    ]},
  ];
  return (
    <footer className="border-t border-border py-14 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <Link to="/" className="inline-flex items-center mb-4" aria-label="Qurishi Healthcare — Home">
            <img
              src={qurishiHealthcareLogo.url}
              alt="Qurishi Healthcare"
              className="h-14 w-auto"
              style={{ filter: "drop-shadow(0 2px 10px rgba(201,168,76,0.18))" }}
            />
          </Link>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Mo Qurishi · Licensed Health Advisor</div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">Independent health insurance guidance — licensed in 35+ states. No pressure, ever.</p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{col.title}</div>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-muted-foreground hover:text-foreground transition">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Direct</div>
          <ul className="space-y-2.5 text-sm">
            <li><a href={`tel:${PHONE}`} className="text-muted-foreground hover:text-foreground transition">{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-foreground transition break-all">{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
        <div>© {new Date().getFullYear()} Qurishi Healthcare Advising. All rights reserved.</div>
        <div>NPN · 21032307 · Licensed in 35+ states</div>
      </div>
    </footer>
  );
}

export function PlanTypes() {
  const plans = [
    { name: "ACA Marketplace", price: "Subsidy-eligible", bullets: ["Pre-existing conditions covered", "Income-based subsidies", "Essential health benefits", "Open Enrollment & SEP"], best: "Most individuals & families" },
    { name: "Medicare", price: "Part A · B · C · D", bullets: ["Original Medicare guidance", "Advantage plan matching", "Medigap supplements", "Part D prescription plans"], best: "Adults 65+", featured: true },
    { name: "Short-Term", price: "Flexible terms", bullets: ["Coverage in days", "Gap protection", "Lower monthly cost", "Up to 12 months"], best: "Between jobs or waiting periods" },
    { name: "Dental & Vision", price: "Add-on coverage", bullets: ["Standalone or bundled", "Major retail networks", "Preventive care included", "Family plans available"], best: "Rounding out your protection" },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Plan Types</div>
          <h2 className="font-display text-4xl md:text-5xl">Compare your <span className="italic text-gradient-gold">options.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p) => (
            <div key={p.name} className={`card-glass rounded-2xl p-6 flex flex-col ${p.featured ? "ring-1 ring-primary/40" : ""}`}>
              {p.featured && <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Most Asked About</div>}
              <h3 className="font-display text-xl mb-1">{p.name}</h3>
              <div className="text-sm text-muted-foreground mb-4">{p.price}</div>
              <ul className="space-y-2 mb-4 flex-1">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
              <div className="border-t border-border/50 pt-3">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1">Best For</div>
                <div className="text-sm text-muted-foreground">{p.best}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const badges = [
    { label: "NPN Credentialed", sub: "National Producer Number" },
    { label: "ACA Certified", sub: "Marketplace Trained" },
    { label: "AHIP Certified", sub: "Medicare Approved" },
    { label: "HIPAA Compliant", sub: "Your data is secure" },
    { label: "Independent", sub: "Multi-carrier appointed" },
  ];
  return (
    <section className="py-16 px-6 border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8">Credentials & Compliance</div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full icon-glass flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div className="font-display text-sm">{b.label}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{b.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadMagnet() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto card-glass rounded-2xl p-8 md:p-10 relative overflow-hidden">
        <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-gradient-gold opacity-10 blur-3xl rounded-full" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-3">
              <Sparkles className="w-3 h-3" /> Free Guide
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-2 leading-tight">
              The plain-English guide to <span className="italic text-gradient-gold">choosing a health plan.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-xl text-sm">
              A 12-page PDF covering deductibles, premiums, networks, and subsidies — without the jargon. Delivered to your inbox in seconds.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${EMAIL}?subject=Send%20me%20the%20guide`; }}
            className="flex flex-col gap-3 w-full md:w-72"
          >
            <input type="email" required placeholder="your@email.com" className="w-full rounded-xl px-4 py-3 input-glass text-sm" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl btn-glass-gold font-medium text-sm">
              Send Me the Guide <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Languages() {
  const langs = ["English", "Arabic", "Spanish (via interpreter)"];
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        <div className="card-glass rounded-2xl p-6">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Languages Spoken</div>
          <h3 className="font-display text-xl mb-3">Clear conversations, <span className="italic text-gradient-gold">your language.</span></h3>
          <div className="flex flex-wrap gap-2">
            {langs.map((l) => (
              <span key={l} className="px-3 py-1.5 rounded-lg badge-glass text-sm">{l}</span>
            ))}
          </div>
        </div>
        <div className="card-glass rounded-2xl p-8">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Accessibility</div>
          <h3 className="font-display text-2xl mb-4">However works <span className="italic text-gradient-gold">best for you.</span></h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Phone, video, or email consultations</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Large-print plan summaries on request</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Evenings & weekends by appointment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// =================== Savings Calculator ===================
export function SavingsCalculator() {
  const [age, setAge] = useState(35);
  const [household, setHousehold] = useState(2);
  const [income, setIncome] = useState(60000);

  const fpl = 15060 + (household - 1) * 5380;
  const ratio = income / fpl;
  let pctOfIncome = 0.085;
  if (ratio <= 1.5) pctOfIncome = 0;
  else if (ratio <= 2) pctOfIncome = 0.02;
  else if (ratio <= 2.5) pctOfIncome = 0.04;
  else if (ratio <= 3) pctOfIncome = 0.06;
  else if (ratio <= 4) pctOfIncome = 0.085;

  const benchmark = Math.round((280 + (age - 21) * 6) * (household > 1 ? 1.8 : 1));
  const expected = Math.round((income * pctOfIncome) / 12);
  const subsidy = Math.max(0, benchmark - expected);
  const yourCost = Math.max(0, benchmark - subsidy);

  return (
    <section className="px-6 py-16 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 badge-glass px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-primary mb-4">
            <Calculator className="w-3.5 h-3.5" /> Subsidy Estimator
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-3">See what you could save</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">Move the sliders. Estimates use 2025 ACA premium tax credit guidelines — final amounts depend on your verified application.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-glass rounded-2xl p-6 space-y-6">
            <Slider label="Your age" value={age} min={18} max={64} suffix=" yrs" onChange={setAge} />
            <Slider label="Household size" value={household} min={1} max={8} suffix={household === 1 ? " person" : " people"} onChange={setHousehold} />
            <Slider label="Annual household income" value={income} min={15000} max={200000} step={1000} prefix="$" onChange={setIncome} />
          </div>

          <div className="card-glass rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Estimated monthly</div>
              <div className="flex items-baseline gap-3 mb-5">
                <div className="font-display text-5xl text-gradient-gold">${yourCost}</div>
                <div className="text-muted-foreground">/month</div>
              </div>

              <div className="space-y-2 text-sm">
                <Row label="Benchmark silver plan" value={`$${benchmark}/mo`} />
                <Row label="Premium tax credit" value={`−$${subsidy}/mo`} accent />
                <div className="h-px bg-border" />
                <Row label="Your estimated cost" value={`$${yourCost}/mo`} bold />
                <Row label="Annual savings" value={`$${(subsidy * 12).toLocaleString()}`} accent />
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Want the real number? I'll run an exact quote against live carrier rates — no fee, no commitment.</p>
              <Link to="/contact" className="btn-glass-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider">
                Get exact quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step = 1, prefix = "", suffix = "", onChange }: { label: string; value: number; min: number; max: number; step?: number; prefix?: string; suffix?: string; onChange: (n: number) => void }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-3">
        <label className="text-sm uppercase tracking-wider text-muted-foreground">{label}</label>
        <span className="font-display text-2xl text-foreground">{prefix}{value.toLocaleString()}{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-secondary accent-[oklch(0.78_0.13_82)]"
        style={{ background: `linear-gradient(to right, oklch(0.78 0.13 82) 0%, oklch(0.78 0.13 82) ${((value - min) / (max - min)) * 100}%, oklch(0.2 0.008 270) ${((value - min) / (max - min)) * 100}%, oklch(0.2 0.008 270) 100%)` }}
      />
    </div>
  );
}

function Row({ label, value, accent, bold }: { label: string; value: string; accent?: boolean; bold?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-muted-foreground">{label}</span>
      <span className={`${accent ? "text-primary" : "text-foreground"} ${bold ? "font-semibold text-lg" : ""}`}>{value}</span>
    </div>
  );
}

// =================== Plan Comparison ===================
const PLAN_TIERS = [
  { name: "Bronze", price: 280, deductible: 7500, oop: 9450, coverage: 60, color: "from-amber-700/40 to-amber-900/40", features: ["Lowest monthly premium", "Highest out-of-pocket", "HSA-eligible options", "Best if you rarely visit doctors"] },
  { name: "Silver", price: 420, deductible: 4500, oop: 7200, coverage: 70, color: "from-slate-500/40 to-slate-700/40", featured: true, features: ["Subsidy-eligible (CSR)", "Balanced cost & coverage", "Most popular for families", "Lower copays with subsidies"] },
  { name: "Gold", price: 580, deductible: 1500, oop: 5500, coverage: 80, color: "from-yellow-600/40 to-yellow-800/40", features: ["Low deductible", "Predictable copays", "Best for regular care", "Higher premium, lower bills"] },
  { name: "Platinum", price: 740, deductible: 0, oop: 3500, coverage: 90, color: "from-slate-300/30 to-slate-500/40", features: ["Lowest out-of-pocket", "No or tiny deductible", "Best for chronic conditions", "Highest monthly premium"] },
];

export function PlanComparison() {
  const [selected, setSelected] = useState("Silver");
  const plan = PLAN_TIERS.find((p) => p.name === selected)!;

  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge-glass px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-primary mb-4">
            <TrendingDown className="w-3.5 h-3.5" /> Metal Tiers
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-3">Compare ACA plan levels</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Bronze, Silver, Gold, Platinum — the metal isn't the value, the math is. Tap a tier to see how it stacks up.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {PLAN_TIERS.map((p) => (
            <button
              key={p.name}
              onClick={() => setSelected(p.name)}
              className={`card-glass rounded-2xl p-6 text-left transition-all ${selected === p.name ? "ring-2 ring-primary scale-[1.02]" : "opacity-70 hover:opacity-100"}`}
            >
              <div className={`h-1.5 w-12 rounded-full mb-4 bg-gradient-to-r ${p.color}`} />
              <div className="font-display text-2xl mb-1">{p.name}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{p.coverage}% coverage</div>
              <div className="text-3xl font-display text-gradient-gold">${p.price}<span className="text-sm text-muted-foreground">/mo</span></div>
            </button>
          ))}
        </div>

        <div className="card-glass rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{plan.name} tier</div>
              <h3 className="font-display text-3xl mb-4">What you actually pay</h3>
              <div className="space-y-4">
                <Metric label="Monthly premium" value={`$${plan.price}`} />
                <Metric label="Annual deductible" value={`$${plan.deductible.toLocaleString()}`} />
                <Metric label="Max out-of-pocket" value={`$${plan.oop.toLocaleString()}`} />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Plan pays</div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full bg-gradient-gold transition-all duration-500" style={{ width: `${plan.coverage}%` }} />
                  </div>
                  <div className="flex justify-between text-xs mt-2"><span className="text-primary">{plan.coverage}% plan</span><span className="text-muted-foreground">{100 - plan.coverage}% you</span></div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Best fit when</div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 p-4 rounded-xl bg-card/40 border border-border">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline pb-3 border-b border-border">
      <span className="text-sm text-muted-foreground uppercase tracking-wider">{label}</span>
      <span className="font-display text-2xl text-foreground">{value}</span>
    </div>
  );
}

// =================== Enrollment Timeline ===================
const TIMELINE = [
  { date: "Nov 1", title: "Open Enrollment opens", desc: "ACA Marketplace enrollment begins for next-year coverage.", status: "key" },
  { date: "Dec 15", title: "Deadline for Jan 1 coverage", desc: "Enroll by this date for coverage starting January 1.", status: "key" },
  { date: "Jan 15", title: "Open Enrollment closes", desc: "Last day to enroll for the year in most states.", status: "key" },
  { date: "Year-round", title: "Special Enrollment Periods", desc: "Marriage, birth, job loss, moving — qualifying events open a 60-day window.", status: "normal" },
  { date: "Oct 15 – Dec 7", title: "Medicare AEP", desc: "Annual Enrollment Period — switch, add, or drop Medicare coverage.", status: "normal" },
  { date: "Jan 1 – Mar 31", title: "Medicare General Enrollment", desc: "Sign up if you missed your Initial Enrollment Period.", status: "normal" },
];

export function EnrollmentTimeline() {
  return (
    <section className="px-6 py-24 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 badge-glass px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-primary mb-4">
            <Calendar className="w-3.5 h-3.5" /> Key Dates
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-3">The enrollment calendar</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Miss the window, miss the year. Here are the deadlines worth setting reminders for.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div key={item.title} className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="md:w-1/2 md:px-8">
                  <div className={`card-glass rounded-2xl p-6 ${item.status === "key" ? "border-primary/40" : ""}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{item.date}</span>
                      {item.status === "key" && <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/40">Critical</span>}
                    </div>
                    <h3 className="font-display text-xl mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =================== Resource Library ===================
const RESOURCES = [
  { icon: FileText, title: "ACA Plan Buyer's Guide", desc: "12-page PDF walking through metal tiers, subsidies, and how to read a Summary of Benefits.", type: "PDF", time: "8 min read" },
  { icon: Video, title: "Medicare 101 Video", desc: "20-minute walkthrough of Parts A, B, C, and D — what each one covers and what it costs.", type: "Video", time: "20 min" },
  { icon: BookOpen, title: "Self-Employed Health Checklist", desc: "Tax deductions, HSA strategies, and plan options for 1099 workers and freelancers.", type: "Guide", time: "6 min read" },
  { icon: Headphones, title: "Free Phone Consultation", desc: "30 minutes, one-on-one. Bring your questions, your current plan, your budget — no script.", type: "Call", time: "30 min" },
];

export function ResourceLibrary() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 badge-glass px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-primary mb-4">
              <BookOpen className="w-3.5 h-3.5" /> Learn First
            </div>
            <h2 className="font-display text-4xl md:text-5xl">Resources, on the house</h2>
          </div>
          <p className="text-muted-foreground max-w-md">No email gates on the basics. Read, watch, or book a call — all free.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {RESOURCES.map((r) => (
            <Link key={r.title} to="/resources" className="card-glass rounded-2xl p-6 group flex gap-5 items-start">
              <div className="icon-glass rounded-xl p-3.5 shrink-0">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">{r.type}</span>
                  <span className="text-xs text-muted-foreground">{r.time}</span>
                </div>
                <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{r.desc}</p>
                <div className="text-xs uppercase tracking-wider text-primary inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Open <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================== Glossary ===================
const TERMS = [
  { term: "Premium", def: "The monthly amount you pay to keep your insurance active, regardless of whether you use care." },
  { term: "Deductible", def: "What you pay out of pocket each year before the plan starts sharing costs for most services." },
  { term: "Copay", def: "A flat fee you pay at the time of service (e.g., $30 for a primary care visit)." },
  { term: "Coinsurance", def: "Your percentage share of costs after meeting the deductible (e.g., you pay 20%, plan pays 80%)." },
  { term: "Out-of-pocket max", def: "The cap on what you'll pay in a year. After this, the plan pays 100% of covered services." },
  { term: "Network", def: "The doctors, hospitals, and pharmacies your plan has contracted with for lower rates." },
  { term: "Premium tax credit", def: "An ACA subsidy that lowers your monthly premium, based on income and household size." },
  { term: "CSR (Cost-Sharing Reduction)", def: "Extra silver-plan savings on deductibles and copays for households under 250% of the federal poverty level." },
  { term: "HSA", def: "Health Savings Account — pre-tax money for medical expenses, available with HSA-eligible high-deductible plans." },
  { term: "SEP", def: "Special Enrollment Period — a 60-day window to enroll outside Open Enrollment after a qualifying life event." },
];

export function Glossary() {
  const [query, setQuery] = useState("");
  const filtered = TERMS.filter((t) => t.term.toLowerCase().includes(query.toLowerCase()) || t.def.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="px-6 py-24 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 badge-glass px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-primary mb-4">
            <BookOpen className="w-3.5 h-3.5" /> Plain English
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-3">Insurance terms, decoded</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The jargon they use — and what it actually means for your wallet.</p>
        </div>

        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms — try 'deductible' or 'subsidy'"
            className="input-glass w-full pl-11 pr-4 py-3 rounded-full text-sm"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((t) => (
            <div key={t.term} className="card-glass rounded-xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <Quote className="w-4 h-4 text-primary shrink-0 mt-1" />
                <h3 className="font-display text-lg text-primary">{t.term}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.def}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-2 text-center py-12 text-muted-foreground">No matches — try a different term.</div>
          )}
        </div>
      </div>
    </section>
  );
}
