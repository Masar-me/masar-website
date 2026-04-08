import React, { useMemo, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Users,
  Wallet,
  Building2,
  Sparkles,
  Globe2,
  BriefcaseBusiness,
  Clock3,
  FileText,
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  BadgeCheck,
  Layers3,
  Handshake,
  UserCheck,
  MessageCircle,
} from "lucide-react";

const brand = {
  primary: "#0F172A",
  secondary: "#B89146",
  bg: "#F6F4EF",
  card: "#FFFFFF",
  muted: "#64748B",
  line: "#E7E3D9",
  darkCard: "#111827",
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

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Packages", path: "/packages" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const services = [
  {
    icon: ShieldCheck,
    title: "Employer of Record Support",
    desc: "Operate talent in Egypt through a structured employment model covering contracts, onboarding, compliance coordination, payroll administration, and employee support.",
    bullets: ["Contract setup", "Onboarding coordination", "Compliance support", "Monthly employee administration"],
  },
  {
    icon: Users,
    title: "Remote Team Infrastructure",
    desc: "Build your Egypt-based team without creating the full operating layer from zero. Masar gives you the local structure needed to hire, manage, and scale with clarity.",
    bullets: ["Team structure design", "Operating workflow setup", "Scale-ready support", "Clear ownership flow"],
  },
  {
    icon: Wallet,
    title: "HR & Payroll Operations",
    desc: "From monthly payroll workflows to employee files, attendance logic, HR administration, and reporting, Masar handles the operational backbone behind every hire.",
    bullets: ["Payroll administration", "Employee records", "Attendance logic", "Monthly reports"],
  },
  {
    icon: Building2,
    title: "Egypt Setup for GCC Businesses",
    desc: "A smart entry point for Saudi and GCC companies looking to access Egyptian talent faster, with lower setup complexity and stronger operational control.",
    bullets: ["Faster market entry", "Lower setup friction", "Better control", "Operational continuity"],
  },
];

const packages = [
  {
    name: "Starter",
    subtitle: "For companies testing the model with their first hire in Egypt",
    tag: "Lean entry",
    points: [
      "For 1 employee",
      "Contract and onboarding setup",
      "Payroll administration",
      "Basic HR support",
      "Monthly operational follow-up",
    ],
  },
  {
    name: "Growth",
    subtitle: "For companies building a small but structured remote team",
    tag: "Most practical",
    featured: true,
    points: [
      "For 2–10 employees",
      "Full employee file management",
      "Monthly payroll and admin operations",
      "Structured reporting",
      "Ongoing operational support",
    ],
  },
  {
    name: "Custom",
    subtitle: "For companies scaling a dedicated Egypt team with tailored needs",
    tag: "Built to scale",
    points: [
      "Custom team structure",
      "Advanced workflow design",
      "Dedicated support model",
      "Custom reporting and controls",
      "Scalable operating framework",
    ],
  },
];

const faqs = [
  {
    q: "What exactly does Masar do?",
    a: "Masar helps Saudi and GCC companies hire and operate employees in Egypt through a structured local operating model. This includes onboarding, contracts, payroll workflows, HR administration, and ongoing employee support.",
  },
  {
    q: "Is Masar a recruitment agency?",
    a: "Not in the traditional sense. Masar is positioned as a workforce infrastructure partner. Recruitment can be part of the journey, but the core value is in the operational structure around the employee after hiring.",
  },
  {
    q: "Who is this service best suited for?",
    a: "Masar is ideal for Saudi and GCC companies that want to build an Egypt-based team without creating the full administrative and employment structure on their own from day one.",
  },
  {
    q: "How is pricing usually structured?",
    a: "Pricing can be built around a setup fee, recruitment fee, monthly administration fee, and optional add-ons depending on team size, complexity, and support depth.",
  },
  {
    q: "Can Masar support scaling later?",
    a: "Yes. The model is designed to start lean, then support expansion into a broader, more stable team structure as the client grows.",
  },
  {
    q: "What makes Masar different?",
    a: "Masar is built around clarity, control, and continuity. Instead of simply helping a client hire, it helps them operate the workforce properly month after month.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

function Logo() {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src={company.logoPath}
        alt="Masar logo"
        className="h-11 w-auto rounded-xl object-contain"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold text-white shadow-sm"
      style={{ background: brand.primary }}
    >
      M
    </div>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: brand.secondary }}>
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: brand.primary }}>
        {title}
      </h2>
      {desc ? (
        <p className="mt-4 text-base leading-8" style={{ color: brand.muted }}>
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function TopBar() {
  return (
    <div className="border-b px-6 py-3 text-sm" style={{ background: brand.primary, borderColor: "rgba(255,255,255,0.08)", color: "white" }}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 lg:px-2">
        <div className="flex items-center gap-5 opacity-90">
          <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {company.email}</span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {company.location}</span>
        </div>
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:opacity-90"
          style={{ background: brand.secondary, color: brand.primary }}
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl" style={{ borderColor: brand.line }}>
      <TopBar />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-left">
          <Logo />
          <div>
            <div className="text-xl font-semibold tracking-tight" style={{ color: brand.primary }}>{company.name}</div>
            <div className="text-[11px] uppercase tracking-[0.28em]" style={{ color: brand.muted }}>{company.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="rounded-xl px-4 py-2 text-sm transition"
                style={{
                  background: active ? brand.primary : "transparent",
                  color: active ? "white" : brand.muted,
                }}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
            style={{ background: brand.primary }}
          >
            Book a consultation
          </Link>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-2xl border bg-white md:hidden"
            style={{ borderColor: brand.line }}
            onClick={() => setMenuOpen((s) => !s)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t bg-white px-6 py-4 md:hidden"
            style={{ borderColor: brand.line }}
          >
            <div className="grid gap-2">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-left text-sm transition"
                    style={{
                      background: active ? brand.primary : "transparent",
                      color: active ? "white" : brand.muted,
                    }}
                  >
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
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="text-xl font-semibold tracking-tight" style={{ color: brand.primary }}>{company.name}</div>
              <div className="text-xs" style={{ color: brand.muted }}>{company.tagline}</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7" style={{ color: brand.muted }}>
            A premium workforce infrastructure model helping Saudi and GCC companies build and operate teams in Egypt with more clarity, less friction, and stronger monthly control.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: brand.secondary }}>Pages</div>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="w-fit text-sm transition" style={{ color: brand.muted }}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: brand.secondary }}>Contact</div>
          <div className="mt-4 space-y-3 text-sm" style={{ color: brand.muted }}>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> {company.email}</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> {company.phone}</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> {company.location}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.28 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function HomePage() {
  const metrics = [
    { value: "GCC", label: "Focused market" },
    { value: "Egypt", label: "Talent base" },
    { value: "Lean", label: "Setup model" },
    { value: "Clear", label: "Monthly operations" },
  ];

  const steps = [
    "Assess the workforce need",
    "Design the right setup",
    "Onboard and activate",
    "Run monthly operations",
    "Scale with control",
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at top left, rgba(184,145,70,0.14), transparent 26%), radial-gradient(circle at bottom right, rgba(15,23,42,0.08), transparent 24%)` }} />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }} className="relative z-10 flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm" style={{ borderColor: brand.line, color: brand.muted }}>
              <Sparkles className="h-4 w-4" style={{ color: brand.secondary }} />
              Built for Saudi & GCC companies expanding into Egypt
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl" style={{ color: brand.primary }}>
              Build your team with full operational support in Egypt — without the complexity of setting up locally.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: brand.muted }}>
              Masar helps GCC companies build and operate teams in Egypt through a structured support model covering onboarding, contracts, HR administration, payroll workflows, and ongoing employee support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5" style={{ background: brand.primary }}>
                Start building with Masar
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/packages" className="inline-flex items-center rounded-2xl border bg-white px-6 py-3.5 text-sm font-medium transition hover:bg-slate-50" style={{ borderColor: brand.line, color: brand.primary }}>
                Explore service models
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border bg-white/90 p-4 shadow-sm backdrop-blur" style={{ borderColor: brand.line }}>
                  <div className="text-2xl font-semibold tracking-tight" style={{ color: brand.primary }}>{item.value}</div>
                  <div className="mt-1 text-sm" style={{ color: brand.muted }}>{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.12 }} className="relative z-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:col-span-2" style={{ borderColor: brand.line }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm" style={{ color: brand.muted }}>What Masar solves</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight" style={{ color: brand.primary }}>Expansion without operational chaos</div>
                  </div>
                  <div className="rounded-2xl p-3 text-white" style={{ background: brand.primary }}>
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7" style={{ color: brand.muted }}>
                  Instead of building HR administration, payroll workflows, and employee structure from zero, companies get a clearer and more manageable route into Egypt.
                </p>
              </div>

              <div className="rounded-[28px] border p-7 text-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]" style={{ borderColor: brand.primary, background: brand.primary }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-300">Who it’s for</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight">Saudi & GCC businesses</div>
                  </div>
                  <Globe2 className="h-5 w-5 text-slate-300" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Ideal for companies that want access to Egyptian talent while keeping visibility, speed, and professional structure.
                </p>
              </div>

              <div className="rounded-[28px] border bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.07)]" style={{ borderColor: brand.line }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm" style={{ color: brand.muted }}>Operational promise</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight" style={{ color: brand.primary }}>More clarity</div>
                  </div>
                  <Clock3 className="h-5 w-5" style={{ color: brand.secondary }} />
                </div>
                <p className="mt-4 text-sm leading-7" style={{ color: brand.muted }}>
                  Clearer ownership, smoother processes, and stronger monthly follow-up from first hire onward.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[34px] border bg-white p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-14" style={{ borderColor: brand.line }}>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="How it works"
                title="A simple operational path from brief to monthly execution."
                desc="The model is designed to keep the client journey structured, visible, and scalable."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step} className="rounded-[24px] border p-5" style={{ borderColor: brand.line, background: "#FCFBF8" }}>
                  <div className="text-sm font-semibold" style={{ color: brand.secondary }}>0{index + 1}</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight" style={{ color: brand.primary }}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  const valuePoints = [
    "Access Egyptian talent through a structured operating model",
    "Reduce operational friction across hiring, onboarding, payroll, and support",
    "Start lean, then scale into a more permanent team structure over time",
    "Create clearer visibility on cost, process ownership, and monthly operations",
  ];

  const pillars = [
    {
      icon: Layers3,
      title: "Structure",
      text: "Masar is built on systems, not improvisation. Every client engagement is designed to feel organized, visible, and controlled.",
    },
    {
      icon: Handshake,
      title: "Trust",
      text: "Clients need confidence when building teams outside their main market. Masar reduces that uncertainty through a more disciplined model.",
    },
    {
      icon: BadgeCheck,
      title: "Continuity",
      text: "The real value is not just starting. It is running the workforce month after month with consistency and support.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.55 }} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-10">
          <SectionTitle
            eyebrow="About Masar"
            title="Masar is not only about hiring people. It is about building the system around them."
            desc="Masar creates the operational bridge between GCC companies and Egyptian talent. We help clients move from intention to execution through a model that is practical, structured, and designed for real business control."
          />
          <p className="mt-4 text-base leading-8" style={{ color: brand.muted }}>
            This means more than recruitment. It means contracts, payroll workflows, administration, support, reporting, and a stronger framework for scaling a remote team with confidence.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5" style={{ background: brand.primary }}>
            Talk to Masar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-[32px] p-8 text-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:p-10" style={{ background: brand.primary }}>
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">Why it matters</div>
          <div className="mt-4 text-2xl font-semibold tracking-tight">A better expansion model for companies that want control without unnecessary setup burden.</div>
          <div className="mt-8 space-y-4">
            {valuePoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border bg-white/5 p-4" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.secondary }} />
                <p className="text-sm leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-[30px] border bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.06)]"
              style={{ borderColor: brand.line }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ background: brand.primary }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight" style={{ color: brand.primary }}>{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7" style={{ color: brand.muted }}>{pillar.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <SectionTitle
        eyebrow="Services"
        title="A premium service structure for building and running teams in Egypt."
        desc="Masar is designed to remove friction from the most sensitive parts of cross-border team setup: employment structure, administration, payroll, employee continuity, and scale readiness."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[30px] border bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.06)]"
              style={{ borderColor: brand.line }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ background: brand.primary }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight" style={{ color: brand.primary }}>{service.title}</h3>
              <p className="mt-4 text-sm leading-7" style={{ color: brand.muted }}>{service.desc}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-2xl p-3 text-sm" style={{ background: "#FCFBF8", color: brand.muted }}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.secondary }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 rounded-[34px] p-10 text-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] lg:p-14" style={{ background: brand.primary }}>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">Need a tailored model?</div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Masar can shape the service structure around your business stage and team size.</h3>
          </div>
          <Link to="/contact" className="rounded-2xl px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5" style={{ background: brand.secondary, color: brand.primary }}>
            Request consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

function PackagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <SectionTitle
        eyebrow="Packages"
        title="Flexible commercial models based on team size and operational depth."
        desc="Masar can be priced as a setup fee, recruitment fee, monthly administration fee, and optional add-ons depending on the client scope and workforce structure."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="rounded-[32px] border p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
            style={{
              borderColor: pkg.featured ? brand.primary : brand.line,
              background: pkg.featured ? brand.primary : brand.card,
              color: pkg.featured ? "white" : brand.primary,
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-2xl font-semibold tracking-tight">{pkg.name}</div>
                <div className="mt-2 text-sm leading-7" style={{ color: pkg.featured ? "#CBD5E1" : brand.muted }}>{pkg.subtitle}</div>
              </div>
              <div
                className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  background: pkg.featured ? "rgba(255,255,255,0.08)" : "#F5F2E8",
                  color: pkg.featured ? "white" : brand.secondary,
                }}
              >
                {pkg.tag}
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {pkg.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.secondary }} />
                  <span className="text-sm leading-7" style={{ color: pkg.featured ? "#F8FAFC" : brand.muted }}>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5"
              style={{
                background: pkg.featured ? brand.secondary : "white",
                color: brand.primary,
                border: pkg.featured ? "none" : `1px solid ${brand.line}`,
              }}
            >
              Request package details
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          { title: "Setup Fee", text: "Covers the initial activation, setup logic, and onboarding structure." },
          { title: "Monthly Fee", text: "Supports payroll administration, HR follow-up, employee management, and reporting." },
          { title: "Add-ons", text: "Optional services can be layered based on recruitment scope, controls, and custom needs." },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]" style={{ borderColor: brand.line }}>
            <div className="text-xl font-semibold tracking-tight" style={{ color: brand.primary }}>{item.title}</div>
            <div className="mt-3 text-sm leading-7" style={{ color: brand.muted }}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-[24px] border bg-white px-6 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]" style={{ borderColor: brand.line }}>
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 text-left">
        <div className="text-base font-semibold tracking-tight" style={{ color: brand.primary }}>{q}</div>
        <ChevronDown className={`h-5 w-5 shrink-0 transition ${open ? "rotate-180" : "rotate-0"}`} style={{ color: brand.secondary }} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <p className="pt-4 text-sm leading-7" style={{ color: brand.muted }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <SectionTitle
        eyebrow="FAQ"
        title="Questions clients may ask before starting with Masar."
        desc="This section is designed to reduce hesitation, clarify the offer, and make the commercial conversation smoother."
      />

      <div className="mt-12 grid gap-4">
        {faqs.map((item, index) => (
          <FAQItem key={item.q} q={item.q} a={item.a} open={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? -1 : index)} />
        ))}
      </div>

      <div className="mt-10 rounded-[34px] p-10 text-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] lg:p-14" style={{ background: brand.primary }}>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">Still have questions?</div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Let’s discuss your hiring plan, team model, and the right structure for your company.</h3>
          </div>
          <Link to="/contact" className="rounded-2xl px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5" style={{ background: brand.secondary, color: brand.primary }}>
            Contact Masar
          </Link>
        </div>
      </div>
    </div>
  );
}

function ContactFormCard() {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    teamSize: "",
    roles: "",
    timeline: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!form.companyName.trim()) nextErrors.companyName = "Company name is required";
    if (!form.contactName.trim()) nextErrors.contactName = "Contact name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email";
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      e.preventDefault();
    }
  };

  const fieldClass = "mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:ring-2";

  return (
    <div className="rounded-[34px] border bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-10" style={{ borderColor: brand.line }}>
      <div className="text-sm font-medium uppercase tracking-[0.22em]" style={{ color: brand.secondary }}>Live contact form</div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight" style={{ color: brand.primary }}>Discovery call request</h3>
      <p className="mt-3 text-sm leading-7" style={{ color: brand.muted }}>
        This form is ready to submit through FormSubmit. Replace the destination email if you want it to route elsewhere.
      </p>

      <form action={`https://formsubmit.co/${company.email}`} method="POST" onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input type="hidden" name="_subject" value="New MASAR website lead" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>Company name</label>
            <input name="companyName" value={form.companyName} onChange={handleChange} className={fieldClass} style={{ borderColor: errors.companyName ? "#DC2626" : brand.line }} />
            {errors.companyName ? <div className="mt-2 text-xs text-red-600">{errors.companyName}</div> : null}
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>Contact name</label>
            <input name="contactName" value={form.contactName} onChange={handleChange} className={fieldClass} style={{ borderColor: errors.contactName ? "#DC2626" : brand.line }} />
            {errors.contactName ? <div className="mt-2 text-xs text-red-600">{errors.contactName}</div> : null}
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className={fieldClass} style={{ borderColor: errors.email ? "#DC2626" : brand.line }} />
            {errors.email ? <div className="mt-2 text-xs text-red-600">{errors.email}</div> : null}
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className={fieldClass} style={{ borderColor: brand.line }} />
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>Expected team size</label>
            <input name="teamSize" value={form.teamSize} onChange={handleChange} className={fieldClass} style={{ borderColor: brand.line }} />
          </div>
          <div>
            <label className="text-sm font-medium" style={{ color: brand.primary }}>Preferred timeline</label>
            <input name="timeline" value={form.timeline} onChange={handleChange} className={fieldClass} style={{ borderColor: brand.line }} />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium" style={{ color: brand.primary }}>Target roles needed</label>
          <input name="roles" value={form.roles} onChange={handleChange} className={fieldClass} style={{ borderColor: brand.line }} />
        </div>

        <div>
          <label className="text-sm font-medium" style={{ color: brand.primary }}>Brief notes</label>
          <textarea name="notes" rows={5} value={form.notes} onChange={handleChange} className={fieldClass} style={{ borderColor: brand.line }} />
        </div>

        <div className="flex flex-wrap gap-3">
          <button type="submit" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5" style={{ background: brand.primary }}>
            Send request
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello Masar, I would like to discuss building a team in Egypt.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5"
            style={{ background: brand.secondary, color: brand.primary }}
          >
            WhatsApp now
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </form>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.55 }} className="rounded-[34px] border bg-white p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-14" style={{ borderColor: brand.line }}>
          <SectionTitle
            eyebrow="Contact"
            title="Ready to build your team in Egypt through a more structured model?"
            desc="Let’s discuss the roles you need, your preferred team structure, and the right commercial model for your company. Masar is built to help you move with more control, more speed, and less setup complexity."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] p-5" style={{ background: "#FCFBF8" }}>
              <div className="flex items-center gap-3 text-sm font-semibold" style={{ color: brand.primary }}><Mail className="h-4 w-4" /> Email</div>
              <div className="mt-2 text-sm" style={{ color: brand.muted }}>{company.email}</div>
            </div>
            <div className="rounded-[24px] p-5" style={{ background: "#FCFBF8" }}>
              <div className="flex items-center gap-3 text-sm font-semibold" style={{ color: brand.primary }}><Phone className="h-4 w-4" /> Phone</div>
              <div className="mt-2 text-sm" style={{ color: brand.muted }}>{company.phone}</div>
            </div>
            <div className="rounded-[24px] p-5 sm:col-span-2" style={{ background: "#FCFBF8" }}>
              <div className="flex items-center gap-3 text-sm font-semibold" style={{ color: brand.primary }}><MapPin className="h-4 w-4" /> Coverage</div>
              <div className="mt-2 text-sm" style={{ color: brand.muted }}>{company.location}</div>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border p-6" style={{ borderColor: brand.line }}>
            <div className="flex items-start gap-3 text-sm" style={{ color: brand.muted }}>
              <FileText className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.secondary }} />
              This deployable version includes an active routing structure, a working lead form, and WhatsApp CTA. Replace the phone number, email destination, and logo file path with your final brand assets before launch.
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.65, delay: 0.08 }}>
          <ContactFormCard />
        </motion.div>
      </div>
    </div>
  );
}

function AppLayout() {
  return (
    <div style={{ background: brand.bg }} className="min-h-screen text-slate-900">
      <Header />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </main>
      <a
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello Masar, I would like to know more about your services.")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium shadow-lg transition hover:-translate-y-0.5"
        style={{ background: brand.secondary, color: brand.primary }}
      >
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