import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Menu,
  X,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Users,
  Wallet,
  Building2,
  ChevronDown,
  Sparkles,
  BriefcaseBusiness,
  Workflow,
  FileCheck2,
  BarChart3,
} from "lucide-react";

const brand = {
  bg: "#F7F3EC",
  surface: "#FFFFFF",
  ink: "#0F172A",
  gold: "#B89146",
  muted: "#667085",
  line: "#E9E2D4",
  soft: "#FBF8F2",
};

const company = {
  name: "MASAR",
  tagline: "Remote Workforce Infrastructure",
  email: "crm.masar@gmail.com",
  phone: "00966537931357",
  whatsapp: "966537931357",
  location: "Saudi Arabia + Egypt operational support",
  logoPath: "/masar-logo.png",
};

const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hi MASAR, I want to build a team in Egypt")}`;

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const services = [
  {
    icon: ShieldCheck,
    title: "Employer of Record Support",
    desc: "Operate talent in Egypt through a structured model covering contracts, onboarding, documentation, payroll administration, and employee support.",
    bullets: ["Contracts", "Onboarding", "Compliance support", "Employee administration"],
  },
  {
    icon: Users,
    title: "Remote Team Infrastructure",
    desc: "Build your Egypt-based team without creating the full operating layer from zero. Masar gives you the local structure needed to hire, manage, and scale.",
    bullets: ["Team setup", "Workflow structure", "Scale-ready model", "Ownership clarity"],
  },
  {
    icon: Wallet,
    title: "HR & Payroll Operations",
    desc: "From payroll workflows to employee files, attendance logic, HR administration, and reporting, Masar handles the operational backbone behind every hire.",
    bullets: ["Payroll", "Employee records", "Attendance logic", "Monthly reporting"],
  },
  {
    icon: Building2,
    title: "Egypt Setup for GCC Businesses",
    desc: "A smart entry point for Saudi and GCC companies looking to access Egyptian talent faster, with lower setup complexity and stronger operational control.",
    bullets: ["Faster entry", "Lower friction", "Better control", "Continuity"],
  },
];

const faqs = [
  {
    q: "What exactly does Masar do?",
    a: "Masar helps Saudi and GCC companies build and operate teams in Egypt through a structured local operating model covering onboarding, contracts, payroll workflows, HR administration, and employee support.",
  },
  {
    q: "Is Masar a recruitment agency?",
    a: "Not in the traditional sense. Masar is positioned as a workforce infrastructure partner. Recruitment can be part of the journey, but the real value is the operating structure around the team after hiring.",
  },
  {
    q: "Who is this best suited for?",
    a: "Masar is built for a mix of Saudi and GCC companies including SMEs, agencies, startups, and growth-stage businesses that want to build teams in Egypt without setting up the full local infrastructure themselves.",
  },
  {
    q: "Do you show prices on the website?",
    a: "No. Masar uses a contact-first commercial approach because team structure, support depth, and operational scope vary by client.",
  },
  {
    q: "Can Masar support scaling later?",
    a: "Yes. The model is designed to start lean, then support expansion into a broader and more stable team structure as the client grows.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Logo() {
  const [imgError, setImgError] = useState(false);
  if (!imgError) {
    return <img src={company.logoPath} alt="Masar logo" className="h-11 w-auto object-contain" onError={() => setImgError(true)} />;
  }
  return <div className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold text-white" style={{ background: brand.ink }}>M</div>;
}

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

function PageEnter({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function TopBar() {
  return (
    <div className="border-b" style={{ background: brand.ink, borderColor: "rgba(255,255,255,0.08)" }}>
      <Container className="flex flex-wrap items-center justify-between gap-3 py-3 text-sm text-white/90">
        <div className="flex flex-wrap items-center gap-5">
          <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {company.email}</span>
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {company.phone}</span>
        </div>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium" style={{ background: brand.gold, color: brand.ink }}>
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </Container>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.88)", borderBottom: `1px solid ${brand.line}` }}>
      <TopBar />
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="text-xl font-semibold tracking-tight" style={{ color: brand.ink }}>{company.name}</div>
            <div className="text-[11px] uppercase tracking-[0.28em]" style={{ color: brand.muted }}>{company.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <NavLink key={item.path} to={item.path} className="rounded-xl px-4 py-2 text-sm transition" style={{ background: active ? brand.ink : "transparent", color: active ? "white" : brand.muted }}>
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 md:inline-flex" style={{ background: brand.ink }}>
            Book a consultation
          </Link>
          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border md:hidden" style={{ borderColor: brand.line }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t bg-white px-6 py-4 md:hidden" style={{ borderColor: brand.line }}>
            <div className="grid gap-2">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm" style={{ background: active ? brand.ink : "transparent", color: active ? "white" : brand.muted }}>
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white" style={{ borderColor: brand.line }}>
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="text-xl font-semibold tracking-tight" style={{ color: brand.ink }}>{company.name}</div>
              <div className="text-xs" style={{ color: brand.muted }}>{company.tagline}</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7" style={{ color: brand.muted }}>
            A premium workforce infrastructure model helping Saudi and GCC companies build and operate teams in Egypt with more clarity, less friction, and stronger monthly control.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: brand.gold }}>Pages</div>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => <NavLink key={item.path} to={item.path} className="w-fit text-sm" style={{ color: brand.muted }}>{item.label}</NavLink>)}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: brand.gold }}>Contact</div>
          <div className="mt-4 space-y-3 text-sm" style={{ color: brand.muted }}>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> {company.email}</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> {company.phone}</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> {company.location}</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function Eyebrow({ children }) {
  return <div className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: brand.gold }}>{children}</div>;
}

function HomePage() {
  const metrics = [
    { value: "GCC", label: "Focused market" },
    { value: "Egypt", label: "Talent base" },
    { value: "Lean", label: "Setup model" },
    { value: "Clear", label: "Monthly operations" },
  ];

  const steps = [
    { icon: Workflow, title: "Assess the workforce need", desc: "Define roles, structure, budget logic, and support model before execution starts." },
    { icon: FileCheck2, title: "Design the right setup", desc: "Align contracts, onboarding, administration flow, and operational ownership clearly." },
    { icon: BarChart3, title: "Run monthly operations", desc: "Manage payroll, HR support, employee continuity, and reporting through one consistent system." },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at top left, rgba(184,145,70,0.16), transparent 26%), radial-gradient(circle at bottom right, rgba(15,23,42,0.08), transparent 24%)` }} />
        <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }} className="relative z-10 flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm" style={{ borderColor: brand.line, color: brand.muted }}>
              <Sparkles className="h-4 w-4" style={{ color: brand.gold }} />
              Built for Saudi and GCC companies expanding into Egypt
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl" style={{ color: brand.ink }}>
              Build your team with full operational support in Egypt — without the complexity of setting up locally.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: brand.muted }}>
              Masar enables Saudi and GCC companies to build and operate teams in Egypt through a structured, reliable, and scalable model covering onboarding, contracts, payroll workflows, HR administration, and ongoing employee support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5" style={{ background: brand.ink }}>
                Start building your team
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/about" className="inline-flex items-center rounded-2xl border bg-white px-6 py-3.5 text-sm font-medium" style={{ borderColor: brand.line, color: brand.ink }}>
                Discover Masar
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border bg-white/90 p-4 shadow-sm backdrop-blur" style={{ borderColor: brand.line }}>
                  <div className="text-2xl font-semibold tracking-tight" style={{ color: brand.ink }}>{item.value}</div>
                  <div className="mt-1 text-sm" style={{ color: brand.muted }}>{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.12 }} className="relative z-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[30px] border bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:col-span-2" style={{ borderColor: brand.line }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm" style={{ color: brand.muted }}>What Masar solves</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight" style={{ color: brand.ink }}>Expansion without operational chaos</div>
                  </div>
                  <div className="rounded-2xl p-3 text-white" style={{ background: brand.ink }}>
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7" style={{ color: brand.muted }}>
                  Instead of building HR administration, payroll workflows, and employee structure from zero, companies get a clearer and more manageable route into Egypt.
                </p>
              </div>

              <div className="rounded-[30px] border p-7 text-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]" style={{ borderColor: brand.ink, background: brand.ink }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-300">Who it’s for</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight">SMEs, agencies, startups, and growth teams</div>
                  </div>
                  <Users className="h-5 w-5 text-slate-300" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Ideal for businesses that want access to Egyptian talent while keeping visibility, speed, and professional structure.
                </p>
              </div>

              <div className="rounded-[30px] border bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.07)]" style={{ borderColor: brand.line }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm" style={{ color: brand.muted }}>Operational promise</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight" style={{ color: brand.ink }}>More control</div>
                  </div>
                  <Check className="h-5 w-5" style={{ color: brand.gold }} />
                </div>
                <p className="mt-4 text-sm leading-7" style={{ color: brand.muted }}>
                  Clearer ownership, smoother processes, and stronger monthly follow-up from first hire onward.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-[34px] border bg-white p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-14" style={{ borderColor: brand.line }}>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <Eyebrow>How it works</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: brand.ink }}>A simple operational path from brief to monthly execution.</h2>
                <p className="mt-4 text-base leading-8" style={{ color: brand.muted }}>The model is designed to keep the client journey structured, visible, and scalable.</p>
              </div>
              <div className="space-y-4">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4 rounded-[26px] border p-5" style={{ borderColor: brand.line, background: brand.soft }}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white" style={{ background: brand.ink }}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold tracking-tight" style={{ color: brand.ink }}>{step.title}</div>
                        <div className="mt-1 text-sm leading-7" style={{ color: brand.muted }}>{step.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Structured onboarding", text: "Start every hire with contracts, documentation, and role clarity already aligned." },
            { title: "Monthly operations", text: "Keep payroll, HR support, and employee administration running through one clear flow." },
            { title: "Scalable setup", text: "Start lean, then expand into a broader team model without rebuilding everything later." },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]" style={{ borderColor: brand.line }}>
              <div className="text-xl font-semibold tracking-tight" style={{ color: brand.ink }}>{item.title}</div>
              <div className="mt-3 text-sm leading-7" style={{ color: brand.muted }}>{item.text}</div>
            </div>
          ))}
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-[34px] p-10 text-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] lg:p-14" style={{ background: brand.ink }}>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">Ready to move?</div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Build your team in Egypt with less risk, less friction, and more control.</h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">Masar helps you move faster without the complexity of setting up locally from scratch.</p>
              </div>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-2xl px-6 py-3.5 text-sm font-medium" style={{ background: brand.gold, color: brand.ink }}>
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function AboutPage() {
  const pillars = [
    { title: "Structure", text: "Masar is built on systems, not improvisation. Every engagement is designed to feel organized, visible, and controlled." },
    { title: "Trust", text: "Clients need confidence when building teams outside their main market. Masar reduces uncertainty through a disciplined model." },
    { title: "Continuity", text: "The real value is not just starting. It is running the workforce month after month with consistency and support." },
  ];
  return (
    <Container className="py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-10">
          <Eyebrow>About Masar</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: brand.ink }}>Masar is not only about hiring people. It is about building the system around them.</h2>
          <p className="mt-6 text-base leading-8" style={{ color: brand.muted }}>
            Masar creates the operational bridge between GCC companies and Egyptian talent. We help clients move from intention to execution through a model that is practical, structured, and designed for real business control.
          </p>
          <p className="mt-4 text-base leading-8" style={{ color: brand.muted }}>
            This means more than recruitment. It means contracts, payroll workflows, administration, support, reporting, and a stronger framework for scaling a remote team with confidence.
          </p>
        </div>
        <div className="rounded-[32px] p-8 text-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:p-10" style={{ background: brand.ink }}>
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">Why it matters</div>
          <div className="mt-4 text-2xl font-semibold tracking-tight">A better expansion model for companies that want control without unnecessary setup burden.</div>
          <div className="mt-8 space-y-4">
            {[
              "Access Egyptian talent through a structured operating model",
              "Reduce operational friction across hiring, onboarding, payroll, and support",
              "Start lean, then scale into a more permanent team structure over time",
              "Create clearer visibility on cost, process ownership, and monthly operations",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border bg-white/5 p-4" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.gold }} />
                <p className="text-sm leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {pillars.map((item) => (
          <div key={item.title} className="rounded-[30px] border bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.06)]" style={{ borderColor: brand.line }}>
            <div className="text-xl font-semibold tracking-tight" style={{ color: brand.ink }}>{item.title}</div>
            <p className="mt-4 text-sm leading-7" style={{ color: brand.muted }}>{item.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

function ServicesPage() {
  return (
    <Container className="py-16 lg:py-20">
      <Eyebrow>Services</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: brand.ink }}>A premium service structure for building and running teams in Egypt.</h2>
      <p className="mt-4 max-w-3xl text-base leading-8" style={{ color: brand.muted }}>Masar is designed to remove friction from the most sensitive parts of cross-border team setup: employment structure, administration, payroll, employee continuity, and scale readiness.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="rounded-[30px] border bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.06)]" style={{ borderColor: brand.line }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ background: brand.ink }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight" style={{ color: brand.ink }}>{service.title}</h3>
              <p className="mt-4 text-sm leading-7" style={{ color: brand.muted }}>{service.desc}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-2xl p-3 text-sm" style={{ background: brand.soft, color: brand.muted }}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.gold }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <Container className="py-16 lg:py-20">
      <Eyebrow>FAQ</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: brand.ink }}>Questions clients may ask before starting with Masar.</h2>
      <p className="mt-4 max-w-3xl text-base leading-8" style={{ color: brand.muted }}>This section is designed to reduce hesitation, clarify the offer, and make the commercial conversation smoother.</p>
      <div className="mt-12 grid gap-4">
        {faqs.map((item, index) => (
          <div key={item.q} className="rounded-[24px] border bg-white px-6 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]" style={{ borderColor: brand.line }}>
            <button onClick={() => setOpenIndex(openIndex === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 text-left">
              <div className="text-base font-semibold tracking-tight" style={{ color: brand.ink }}>{item.q}</div>
              <ChevronDown className={`h-5 w-5 shrink-0 transition ${openIndex === index ? "rotate-180" : "rotate-0"}`} style={{ color: brand.gold }} />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                  <p className="pt-4 text-sm leading-7" style={{ color: brand.muted }}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Container>
  );
}

function ContactPage() {
  return (
    <Container className="py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[34px] border bg-white p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-14" style={{ borderColor: brand.line }}>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: brand.ink }}>Ready to build your team in Egypt through a more structured model?</h2>
          <p className="mt-6 max-w-xl text-base leading-8" style={{ color: brand.muted }}>Let’s discuss the roles you need, your preferred team structure, and the right operating model for your company. Masar is built to help you move with more control, more speed, and less setup complexity.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] p-5" style={{ background: brand.soft }}>
              <div className="flex items-center gap-3 text-sm font-semibold" style={{ color: brand.ink }}><Mail className="h-4 w-4" /> Email</div>
              <div className="mt-2 text-sm" style={{ color: brand.muted }}>{company.email}</div>
            </div>
            <div className="rounded-[24px] p-5" style={{ background: brand.soft }}>
              <div className="flex items-center gap-3 text-sm font-semibold" style={{ color: brand.ink }}><Phone className="h-4 w-4" /> Mobile</div>
              <div className="mt-2 text-sm" style={{ color: brand.muted }}>{company.phone}</div>
            </div>
            <div className="rounded-[24px] p-5 sm:col-span-2" style={{ background: brand.soft }}>
              <div className="flex items-center gap-3 text-sm font-semibold" style={{ color: brand.ink }}><MapPin className="h-4 w-4" /> Coverage</div>
              <div className="mt-2 text-sm" style={{ color: brand.muted }}>{company.location}</div>
            </div>
          </div>
        </div>

        <div className="rounded-[34px] p-10 text-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:p-14" style={{ background: brand.ink }}>
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">Fastest way to start</div>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">Send us your hiring need directly on WhatsApp</h3>
          <p className="mt-5 text-sm leading-7 text-slate-300">Because Masar works on tailored operational models, the fastest path is a direct conversation. Send your expected team size, roles needed, and preferred timeline.</p>
          <div className="mt-8 space-y-4">
            {["Company name", "Target roles needed", "Expected team size", "Preferred start timeline", "Any operational notes"].map((item) => (
              <div key={item} className="rounded-2xl border px-4 py-3 text-sm text-slate-300" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}>{item}</div>
            ))}
          </div>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium" style={{ background: brand.gold, color: brand.ink }}>
            Start on WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Container>
  );
}

function AppLayout() {
  return (
    <div style={{ background: brand.bg }} className="min-h-screen text-slate-900">
      <Header />
      <main>
        <PageEnter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageEnter>
      </main>
      <a href={whatsappLink} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium shadow-lg" style={{ background: brand.gold, color: brand.ink }}>
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <Footer />
    </div>
  );
}

export default function MasarWebsite() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
