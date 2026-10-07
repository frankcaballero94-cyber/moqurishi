import { useEffect, useMemo, useRef, useState } from "react";
import { Phone, Mail, Calendar, MessageCircle, ShieldCheck, X, ArrowRight, Check, ChevronLeft, ChevronRight, MapPin, Clock, Award, Lock, BadgeCheck, Star, Users, Smartphone, Download } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import moHeadshot from "@/assets/mo-headshot.png.asset.json";

const LICENSED_STATES = [
  "Alabama","Arkansas","Colorado","Delaware","Florida","Georgia","Iowa","Illinois","Indiana","Kansas","Kentucky","Louisiana","Maryland","Michigan","Missouri","Mississippi","Montana","North Carolina","Nebraska","Nevada","Ohio","Oklahoma","South Carolina","South Dakota","Tennessee","Texas","Utah","Virginia","Wisconsin","West Virginia","Wyoming",
];

/* ============= 2. Live Premium Ticker ============= */
export function PremiumTicker() {
  const rows = [
    { state: "Texas", tier: "Silver", price: 412, trend: "-3%" },
    { state: "Florida", tier: "Bronze", price: 287, trend: "-5%" },
    { state: "Georgia", tier: "Gold", price: 564, trend: "+1%" },
    { state: "Ohio", tier: "Silver", price: 398, trend: "-2%" },
    { state: "Michigan", tier: "Bronze", price: 271, trend: "-4%" },
    { state: "Nevada", tier: "Silver", price: 445, trend: "0%" },
    { state: "Colorado", tier: "Gold", price: 612, trend: "+2%" },
    { state: "Tennessee", tier: "Bronze", price: 254, trend: "-6%" },
    { state: "Virginia", tier: "Silver", price: 428, trend: "-1%" },
    { state: "Arizona", tier: "Gold", price: 587, trend: "+3%" },
  ];
  const doubled = [...rows, ...rows];
  return (
    <section className="py-12 border-y border-border bg-card/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Live Marketplace</div>
          <h2 className="font-display text-2xl md:text-3xl">Avg. monthly premiums <span className="text-gradient-gold italic">right now</span></h2>
        </div>
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-2">See your rate <ArrowRight className="w-4 h-4" /></a>
      </div>
      <div className="relative">
        <div className="flex gap-3 animate-[ticker_60s_linear_infinite] w-max">
          {doubled.map((r, i) => (
            <div key={i} className="card-glass rounded-xl px-4 py-3 min-w-[200px] flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-muted-foreground">{r.state} · {r.tier}</div>
                <div className="font-display text-xl">${r.price}<span className="text-xs text-muted-foreground">/mo</span></div>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${r.trend.startsWith("-") ? "bg-primary/15 text-primary" : r.trend === "0%" ? "bg-muted text-muted-foreground" : "bg-destructive/15 text-destructive"}`}>{r.trend}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </section>
  );
}

/* ============= 3. With vs Without Advisor Slider ============= */
export function AdvisorCompareSlider() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(p);
  };

  useEffect(() => {
    const up = () => (dragging.current = false);
    const move = (e: MouseEvent) => dragging.current && handleMove(e.clientX);
    const tmove = (e: TouchEvent) => dragging.current && handleMove(e.touches[0].clientX);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", tmove);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", tmove);
    };
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">The Difference</div>
          <h2 className="font-display text-4xl md:text-5xl">With an advisor <span className="text-gradient-gold italic">vs. without</span></h2>
          <p className="text-muted-foreground mt-3">Drag the slider to compare.</p>
        </div>
        <div
          ref={ref}
          className="relative h-[420px] rounded-2xl overflow-hidden card-glass select-none cursor-ew-resize"
          onMouseDown={(e) => { dragging.current = true; handleMove(e.clientX); }}
          onTouchStart={(e) => { dragging.current = true; handleMove(e.touches[0].clientX); }}
        >
          {/* Without */}
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-background p-10 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.25em] text-destructive mb-3">Without advisor</div>
            <h3 className="font-display text-3xl mb-6">Confusing & costly</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><X className="w-5 h-5 text-destructive shrink-0" /> Hours comparing 30+ plans alone</li>
              <li className="flex gap-3"><X className="w-5 h-5 text-destructive shrink-0" /> Missed subsidies up to $4,800/yr</li>
              <li className="flex gap-3"><X className="w-5 h-5 text-destructive shrink-0" /> Wrong network, wrong doctor</li>
              <li className="flex gap-3"><X className="w-5 h-5 text-destructive shrink-0" /> No one to call when claims deny</li>
            </ul>
            <div className="mt-6 font-display text-4xl text-destructive">+$3,400 <span className="text-sm text-muted-foreground font-sans">avg. overspend</span></div>
          </div>
          {/* With */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background pr-10 py-10 flex flex-col justify-center"
            style={{ clipPath: `inset(0 0 0 ${pos}%)`, paddingLeft: `calc(${pos}% + 2.5rem)` }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">With Mo</div>
            <h3 className="font-display text-3xl mb-6">Clear & optimized</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> One call, tailored shortlist</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> Full subsidy capture</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> Your doctors verified in-network</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> Lifetime claim advocacy</li>
            </ul>
            <div className="mt-6 font-display text-4xl text-gradient-gold">$0 <span className="text-sm text-muted-foreground font-sans">my service is free</span></div>
          </div>
          {/* Handle */}
          <div className="absolute top-0 bottom-0 w-1 bg-primary shadow-[0_0_20px_hsl(var(--primary))] pointer-events-none" style={{ left: `${pos}%` }} />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl pointer-events-none" style={{ left: `${pos}%` }}>
            <ChevronLeft className="w-4 h-4" /><ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============= 4. Appointment Calendar Widget (Calendly Embed) ============= */
const CALENDLY_URL = "https://calendly.com/alqurishihealthcareadvising/new-meeting-2";

export function AppointmentCalendar() {
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const [tz, setTz] = useState("your local time");
  useEffect(() => {
    setTz(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return (
    <section className="py-24 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Book a Call</div>
          <h2 className="font-display text-4xl md:text-5xl">Pick a time that <span className="text-gradient-gold italic">works for you</span></h2>
          <p className="text-muted-foreground mt-3 flex items-center justify-center gap-2"><Clock className="w-4 h-4" /> Your timezone: {tz}</p>
        </div>
        <div className="card-glass rounded-2xl p-2 md:p-4 overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0b0b0f&text_color=ffffff&primary_color=c9a84c`}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
        <div className="text-center mt-6 flex flex-col items-center gap-5">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-glass-gold font-medium text-sm"
          >
            <Calendar className="w-4 h-4" /> Open scheduling in a new tab
          </a>
          <div className="flex flex-col items-center gap-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Or connect with Mo</div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============= 5. Animated Cost Donut ============= */
export function CostDonut() {
  const segments = [
    { label: "Premiums", value: 42, color: "hsl(var(--primary))" },
    { label: "Out-of-pocket", value: 23, color: "hsl(var(--primary) / 0.7)" },
    { label: "Prescriptions", value: 18, color: "hsl(var(--primary) / 0.5)" },
    { label: "Preventive", value: 10, color: "hsl(var(--primary) / 0.35)" },
    { label: "Other", value: 7, color: "hsl(var(--muted-foreground) / 0.4)" },
  ];
  const [active, setActive] = useState(0);
  const radius = 80;
  const circ = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Where Your $$ Goes</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Every dollar, <span className="text-gradient-gold italic">accounted for</span></h2>
          <p className="text-muted-foreground mb-8">Hover each slice to see how the average insured American spends their healthcare dollar.</p>
          <div className="space-y-2">
            {segments.map((s, i) => (
              <button
                key={s.label}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition text-left ${active === i ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                  <span className="text-sm">{s.label}</span>
                </div>
                <span className="font-display text-lg">{s.value}%</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <svg width="280" height="280" viewBox="0 0 200 200" className="-rotate-90">
              {segments.map((s, i) => {
                const len = (s.value / 100) * circ;
                const el = (
                  <circle
                    key={s.label}
                    cx="100" cy="100" r={radius}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={active === i ? 28 : 22}
                    strokeDasharray={`${len} ${circ}`}
                    strokeDashoffset={-offset}
                    className="transition-all duration-500"
                    style={{ opacity: active === i ? 1 : 0.85 }}
                  />
                );
                offset += len;
                return el;
              })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="font-display text-4xl text-gradient-gold">{segments[active].value}%</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{segments[active].label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============= 6. Floating Quick-Action FAB ============= */
export function QuickActionFAB() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-fade-in">
          <a href="tel:656-266-3462" className="card-glass rounded-full pl-4 pr-5 py-3 flex items-center gap-3 text-sm hover:scale-105 transition">
            <Phone className="w-4 h-4 text-primary" /> Call now
          </a>
          <a href="mailto:Qurishihealthcare@gmail.com" className="card-glass rounded-full pl-4 pr-5 py-3 flex items-center gap-3 text-sm hover:scale-105 transition">
            <Mail className="w-4 h-4 text-primary" /> Email
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="card-glass rounded-full pl-4 pr-5 py-3 flex items-center gap-3 text-sm hover:scale-105 transition">
            <Calendar className="w-4 h-4 text-primary" /> Book a call
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition"
        aria-label="Quick actions"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
}

/* ============= 7. State License Verifier ============= */
export function LicenseVerifier() {
  const [state, setState] = useState("");
  const all = useMemo(() => [
    ...LICENSED_STATES,
    "Alaska","Arizona","California","Connecticut","Hawaii","Idaho","Maine","Massachusetts","Minnesota","New Hampshire","New Jersey","New Mexico","New York","North Dakota","Oregon","Pennsylvania","Rhode Island","Vermont","Washington",
  ].sort(), []);
  const licensed = state && LICENSED_STATES.includes(state);

  return (
    <section className="py-24 bg-card/20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">License Check</div>
        <h2 className="font-display text-4xl md:text-5xl mb-4">Am I licensed in <span className="text-gradient-gold italic">your state?</span></h2>
        <p className="text-muted-foreground mb-8">Pick yours — instant answer.</p>
        <div className="card-glass rounded-2xl p-8">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-border text-foreground appearance-none cursor-pointer focus:border-primary outline-none"
            >
              <option value="">Select your state…</option>
              {all.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          {state && (
            <div className={`mt-6 p-6 rounded-xl flex items-center gap-4 animate-fade-in ${licensed ? "bg-primary/10 border border-primary/30" : "bg-destructive/10 border border-destructive/30"}`}>
              {licensed ? (
                <>
                  <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
                  <div className="text-left">
                    <div className="font-display text-xl">Yes — Mo is licensed in {state}.</div>
                    <div className="text-sm text-muted-foreground mt-1">Ready to chat whenever you are.</div>
                  </div>
                </>
              ) : (
                <>
                  <X className="w-10 h-10 text-destructive shrink-0" />
                  <div className="text-left">
                    <div className="font-display text-xl">Not yet licensed in {state}.</div>
                    <div className="text-sm text-muted-foreground mt-1">Reach out — I can refer you to a trusted advisor in your state.</div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============= 9. Typing Hero Effect ============= */
export function TypewriterText({ words, className = "" }: { words: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[idx];
    if (!del && sub === current.length) {
      const t = setTimeout(() => setDel(true), 1800);
      return () => clearTimeout(t);
    }
    if (del && sub === 0) {
      setDel(false);
      setIdx((idx + 1) % words.length);
      return;
    }
    const t = setTimeout(() => setSub(s => s + (del ? -1 : 1)), del ? 40 : 90);
    return () => clearTimeout(t);
  }, [sub, del, idx, words]);

  return (
    <span className={className}>
      {words[idx].substring(0, sub)}
      <span className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle animate-pulse" />
    </span>
  );
}

/* ============= Tilt3D wrapper (3D mouse-follow tilt) ============= */
export function Tilt3D({ children, className = "", max = 12 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setT({ ry: (x - 0.5) * max * 2, rx: -(y - 0.5) * max * 2, gx: x * 100, gy: y * 100 });
  };
  const reset = () => setT({ rx: 0, ry: 0, gx: 50, gy: 50 });
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={className} style={{ perspective: 1200 }}>
      <div
        className="relative h-full w-full transition-transform duration-200 ease-out will-change-transform"
        style={{ transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`, transformStyle: "preserve-3d" }}
      >
        {children}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-60 mix-blend-overlay transition-opacity"
          style={{ background: `radial-gradient(400px circle at ${t.gx}% ${t.gy}%, hsl(var(--primary)/0.25), transparent 50%)` }}
        />
      </div>
    </div>
  );
}

/* ============= 7. Trust Badge Bar ============= */
export function TrustBadgeBar() {
  const badges = [
    { icon: ShieldCheck, label: "NPN Verified", sub: "Licensed Producer" },
    { icon: BadgeCheck, label: "ACA Certified", sub: "Marketplace Registered" },
    { icon: Award, label: "AHIP Medicare", sub: "Annually Certified" },
    { icon: Lock, label: "HIPAA Compliant", sub: "Your Data Protected" },
    { icon: Star, label: "5.0 Client Rating", sub: "From 200+ Reviews" },
    { icon: Users, label: "2,400+ Families", sub: "Served Since 2020" },
  ];
  return (
    <section className="py-20 px-6 border-y border-border bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Credentials & Trust</div>
          <h2 className="font-display text-4xl md:text-5xl">Verified. Certified. <span className="italic text-gradient-gold">Trusted.</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-2xl overflow-hidden">
          {badges.map(({ icon: Icon, label, sub }, i) => (
            <div
              key={label}
              className="mouse-glow-card group relative bg-card/60 p-6 flex flex-col items-center text-center transition hover:bg-card hover:-translate-y-1"
              style={{ animation: `fade-in 0.6s ease-out ${i * 0.08}s both` }}
            >
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition" />
                <div className="relative w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:border-primary transition">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="font-display text-sm tracking-wide">{label}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============= 11. Mobile App Mockup Showcase ============= */
export function MobileShowcase() {
  const features = [
    { icon: MessageCircle, title: "Text me directly", body: "Quick questions answered in minutes, not days. No phone tree, no hold music." },
    { icon: Calendar, title: "Book on your schedule", body: "Tap to find a time that works. Evenings and weekends available." },
    { icon: ShieldCheck, title: "Plan docs in your pocket", body: "Insurance cards, summaries, claims info — all stored securely and ready when you need them." },
    { icon: Download, title: "One-tap quote requests", body: "Submit your details once and get plan comparisons sent right to your phone." },
  ];
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center order-2 lg:order-1">
          <div className="absolute -inset-20 bg-gradient-gold opacity-10 blur-3xl rounded-full" />
          <div
            className="relative w-[280px] h-[570px] rounded-[44px] border-[10px] border-foreground/90 bg-background shadow-2xl overflow-hidden"
            style={{ boxShadow: "0 30px 80px -20px hsl(var(--primary) / 0.4), 0 0 0 1px hsl(var(--primary) / 0.2)" }}
          >
            <div className="absolute top-0 inset-x-0 h-7 bg-foreground/90 z-10 flex items-end justify-center pb-1">
              <div className="w-20 h-4 bg-background rounded-full" />
            </div>
            <div className="absolute inset-0 pt-10 px-4 pb-4 flex flex-col gap-3 bg-gradient-to-b from-card/60 to-background overflow-hidden">
              <div className="flex items-center gap-2 px-2 pt-2">
                <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center font-display text-sm text-primary-foreground">MQ</div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Mo Qurishi</div>
                  <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Your Advisor · Online</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="space-y-2 flex-1 overflow-hidden">
                <div className="bg-card rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-[11px] animate-fade-in">
                  Hi! Got a few minutes to chat about your family plan? 👋
                </div>
                <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-sm p-3 max-w-[85%] ml-auto text-[11px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  Yes! When can we talk?
                </div>
                <div className="bg-card rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-[11px] animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  How about today at 4pm? I'll send a calendar link 📅
                </div>
                <div className="bg-card/80 border border-primary/30 rounded-xl p-3 mt-3 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3 h-3 text-primary" />
                    <div className="text-[10px] uppercase tracking-wider text-primary">Booked</div>
                  </div>
                  <div className="text-[11px] font-medium">Today · 4:00 PM</div>
                  <div className="text-[9px] text-muted-foreground">15 min · Phone consult</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-3 py-2 border border-border">
                <div className="flex-1 text-[10px] text-muted-foreground">Type a message…</div>
                <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-12 w-32 h-20 card-glass rounded-xl p-3 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <div className="flex items-center gap-2 mb-1">
              <BadgeCheck className="w-3 h-3 text-primary" />
              <div className="text-[9px] uppercase tracking-wider text-primary">Quote Ready</div>
            </div>
            <div className="font-display text-lg">$284<span className="text-[10px] text-muted-foreground">/mo</span></div>
            <div className="text-[9px] text-muted-foreground">Silver PPO · Family</div>
          </div>
          <div className="absolute -left-2 bottom-20 w-36 card-glass rounded-xl p-3 animate-fade-in" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-1 mb-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-primary text-primary" />)}
            </div>
            <div className="text-[10px] italic text-muted-foreground">"Saved us $4,200/yr"</div>
            <div className="text-[9px] text-primary mt-1">— Sarah K.</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs uppercase tracking-[0.2em] text-primary mb-6">
            <Smartphone className="w-3 h-3" /> Mobile-First Service
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 leading-[1.05]">
            Your advisor, <span className="italic text-gradient-gold">in your pocket.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            No app to download. No portal logins. Just text or call — and get the same white-glove service you'd expect from a 30-minute office visit, in 30 seconds.
          </p>
          <div className="space-y-5">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 group">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-display text-lg mb-1">{title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-glass-gold font-medium text-sm">
              Text Mo Now <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
