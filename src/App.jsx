import { useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  BadgeCheck,
  Layers3,
  Handshake,
  MessageCircle,
} from "lucide-react";

const brand = {
  primary: "#0F172A",
  secondary: "#B89146",
  bg: "#F6F4EF",
  card: "#FFFFFF",
  muted: "#64748B",
  line: "#E7E3D9",
};

const company = {
  name: "MASAR",
  tagline: "Remote Workforce Infrastructure",
  email: "crm.masar@gmail.com",
  phone: "966537931357",
  whatsapp: "966537931357",
  location: "Saudi Arabia + Egypt operational support",
  logoPath: "/masar-logo.png",
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Packages", path: "/packages" },
  { label: "Apply", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const services = [
  {
    icon: ShieldCheck,
    title: "Employer of Record Support",
    desc: "Operate talent in Egypt through a structured employment model covering Hiring, contracts, onboarding, compliance coordination, payroll administration, and employee support.",
    bullets: [
      "Contract setup",
      "Onboarding coordination",
      "Compliance support",
      "Monthly employee administration",
    ],
  },
  {
    icon: Users,
    title: "Remote Team Infrastructure",
    desc: "Build your Egypt-based team without creating the full operating layer from zero. Masar gives you the local structure needed to hire, manage, and scale with clarity.",
    bullets: [
      "Team structure design",
      "Operating workflow setup",
      "Scale-ready support",
      "Clear ownership flow",
    ],
  },
  {
    icon: Wallet,
    title: "HR & Payroll Operations",
    desc: "From monthly payroll workflows to employee files, attendance logic, HR administration, and reporting, Masar handles the operational backbone behind every hire.",
    bullets: [
      "Payroll administration",
      "Employee records",
      "Attendance logic",
      "Monthly reports",
    ],
  },
  {
    icon: Building2,
    title: "Egypt Setup for GCC Businesses",
    desc: "A smart entry point for Saudi and GCC companies looking to access Egyptian talent faster, with lower setup complexity and stronger operational control.",
    bullets: [
      "Faster market entry",
      "Lower setup friction",
      "Better control",
      "Operational continuity",
    ],
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
    subtitle:
      "For companies scaling a dedicated Egypt team with tailored needs",
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Logo() {
  const [broken, setBroken] = useState(false);

  if (!broken) {
    return (
      <img
        src={company.logoPath}
        alt="Masar logo"
        className="h-11 w-auto rounded-xl object-contain"
        onError={() => setBroken(true)}
      />
    );
  }

  return (
    <div
      className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold text-white"
      style={{ background: brand.primary }}
    >
      M
    </div>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="max-w-3xl">
      <div
        className="text-sm font-medium uppercase tracking-[0.22em]"
        style={{ color: brand.secondary }}
      >
        {eyebrow}
      </div>
      <h2
        className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
        style={{ color: brand.primary }}
      >
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
    <div
      className="border-b px-6 py-3 text-sm"
      style={{
        background: brand.primary,
        borderColor: "rgba(255,255,255,0.08)",
        color: "white",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 lg:px-2">
        <div className="flex flex-wrap items-center gap-5 opacity-90">
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" /> {company.email}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {company.location}
          </span>
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
    <header
      className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl"
      style={{ borderColor: brand.line }}
    >
      <TopBar />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-left">
          <Logo />
          <div>
            <div
              className="text-xl font-semibold tracking-tight"
              style={{ color: brand.primary }}
            >
              {company.name}
            </div>
            <div
              className="text-[11px] uppercase tracking-[0.28em]"
              style={{ color: brand.muted }}
            >
              {company.tagline}
            </div>
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
            className="hidden rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 md:inline-flex"
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
              <div
                className="text-xl font-semibold tracking-tight"
                style={{ color: brand.primary }}
              >
                {company.name}
              </div>
              <div className="text-xs" style={{ color: brand.muted }}>
                {company.tagline}
              </div>
            </div>
          </div>
          <p
            className="mt-4 max-w-md text-sm leading-7"
            style={{ color: brand.muted }}
          >
            A premium workforce infrastructure model helping Saudi and GCC
            companies build and operate teams in Egypt with more clarity, less
            friction, and stronger monthly control.
          </p>
        </div>

        <div>
          <div
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: brand.secondary }}
          >
            Pages
          </div>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="w-fit text-sm transition"
                style={{ color: brand.muted }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <div
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            style={{ color: brand.secondary }}
          >
            Contact
          </div>
          <div className="mt-4 space-y-3 text-sm" style={{ color: brand.muted }}>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4" /> {company.email}
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4" /> {company.phone}
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" /> {company.location}
            </div>
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
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(184,145,70,0.14), transparent 26%), radial-gradient(circle at bottom right, rgba(15,23,42,0.08), transparent 24%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col justify-center"
          >
            <div
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm"
              style={{ borderColor: brand.line, color: brand.muted }}
            >
              <Sparkles className="h-4 w-4" style={{ color: brand.secondary }} />
              Built for Saudi & GCC companies expanding into Egypt
            </div>

            <h1
              className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ color: brand.primary }}
            >
              Build your Egypt team with a premium operating model, not
              operational guesswork.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: brand.muted }}>
              Masar helps GCC companies hire and operate talent in Egypt through
              a structured local system covering onboarding, contracts, HR
              administration, payroll workflows, and ongoing employee support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                style={{ background: brand.primary }}
              >
                Start with Masar
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/packages"
                className="inline-flex items-center rounded-2xl border bg-white px-6 py-3.5 text-sm font-medium transition hover:bg-slate-50"
                style={{ borderColor: brand.line, color: brand.primary }}
              >
                Explore packages
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border bg-white/90 p-4 shadow-sm backdrop-blur"
                  style={{ borderColor: brand.line }}
                >
                  <div
                    className="text-2xl font-semibold tracking-tight"
                    style={{ color: brand.primary }}
                  >
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm" style={{ color: brand.muted }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative z-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="rounded-[28px] border bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:col-span-2"
                style={{ borderColor: brand.line }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm" style={{ color: brand.muted }}>
                      What Masar solves
                    </div>
                    <div
                      className="mt-2 text-2xl font-semibold tracking-tight"
                      style={{ color: brand.primary }}
                    >
                      Expansion without operational chaos
                    </div>
                  </div>
                  <div
                    className="rounded-2xl p-3 text-white"
                    style={{ background: brand.primary }}
                  >
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                </div>
                <p
                  className="mt-4 max-w-xl text-sm leading-7"
                  style={{ color: brand.muted }}
                >
                  Instead of building HR administration, payroll workflows, and
                  employee structure from zero, companies get a clearer and more
                  manageable route into Egypt.
                </p>
              </div>

              <div
                className="rounded-[28px] border p-7 text-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
                style={{ borderColor: brand.primary, background: brand.primary }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-300">Who it’s for</div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight">
                      Saudi & GCC businesses
                    </div>
                  </div>
                  <Globe2 className="h-5 w-5 text-slate-300" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Ideal for companies that want access to Egyptian talent while
                  keeping visibility, speed, and professional structure.
                </p>
              </div>

              <div
                className="rounded-[28px] border bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.07)]"
                style={{ borderColor: brand.line }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm" style={{ color: brand.muted }}>
                      Operational promise
                    </div>
                    <div
                      className="mt-2 text-2xl font-semibold tracking-tight"
                      style={{ color: brand.primary }}
                    >
                      More clarity
                    </div>
                  </div>
                  <Clock3 className="h-5 w-5" style={{ color: brand.secondary }} />
                </div>
                <p className="mt-4 text-sm leading-7" style={{ color: brand.muted }}>
                  Clearer ownership, smoother processes, and stronger monthly
                  follow-up from first hire onward.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div
          className="rounded-[34px] border bg-white p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-14"
          style={{ borderColor: brand.line }}
        >
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
                <div
                  key={step}
                  className="rounded-[24px] border p-5"
                  style={{ borderColor: brand.line, background: "#FCFBF8" }}
                >
                  <div className="text-sm font-semibold" style={{ color: brand.secondary }}>
                    0{index + 1}
                  </div>
                  <div
                    className="mt-2 text-lg font-semibold tracking-tight"
                    style={{ color: brand.primary }}
                  >
                    {step}
                  </div>
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
  const points = [
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
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="rounded-[32px] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-10">
          <SectionTitle
            eyebrow="About Masar"
            title="Masar is not only about hiring people. It is about building the system around them."
            desc="Masar creates the operational bridge between GCC companies and Egyptian talent. We help clients move from intention to execution through a model that is practical, structured, and designed for real business control."
          />
          <p className="mt-4 text-base leading-8" style={{ color: brand.muted }}>
            This means more than recruitment. It means contracts, payroll
            workflows, administration, support, reporting, and a stronger
            framework for scaling a remote team with confidence.
          </p>
        </div>

        <div
          className="rounded-[32px] p-8 text-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:p-10"
          style={{ background: brand.primary }}
        >
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
            Why it matters
          </div>
          <div className="mt-4 text-2xl font-semibold tracking-tight">
            A better expansion model for companies that want control without
            unnecessary setup burden.
          </div>
          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border bg-white/5 p-4"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.secondary }} />
                <p className="text-sm leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-[30px] border bg-white p-8 shadow-[0_16px_45px_rgba(15,23,42,0.06)]"
              style={{ borderColor: brand.line }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                style={{ background: brand.primary }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3
                className="mt-6 text-xl font-semibold tracking-tight"
                style={{ color: brand.primary }}
              >
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7" style={{ color: brand.muted }}>
                {item.text}
              </p>
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
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                style={{ background: brand.primary }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3
                className="mt-6 text-xl font-semibold tracking-tight"
                style={{ color: brand.primary }}
              >
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7" style={{ color: brand.muted }}>
                {service.desc}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-2xl p-3 text-sm"
                    style={{ background: "#FCFBF8", color: brand.muted }}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.secondary }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
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
        desc="Masar can be priced as a setup fee, recruitment fee, monthly administration fee, and optional add-ons depending on scope and workforce structure."
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
                <div className="text-2xl font-semibold tracking-tight">
                  {pkg.name}
                </div>
                <div
                  className="mt-2 text-sm leading-7"
                  style={{ color: pkg.featured ? "#CBD5E1" : brand.muted }}
                >
                  {pkg.subtitle}
                </div>
              </div>
              <div
                className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]"
                style={{
                  background: pkg.featured
                    ? "rgba(255,255,255,0.08)"
                    : "#F5F2E8",
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
                  <span
                    className="text-sm leading-7"
                    style={{ color: pkg.featured ? "#F8FAFC" : brand.muted }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FAQPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    role: "",
    yearsExperience: "",
    portfolioUrl: "",
    linkedinUrl: "",
    salaryExpectation: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby3bySdld6xN_q_s9VlrWfN2FbjH0m-kASJVbgK-yOjiWppzSE-GxxpWTBM8StvjPc/exec";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(form),
      });

      const text = await res.text();

      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Server returned an invalid response.");
      }

      if (!res.ok || !result.success) {
        throw new Error(result?.error || "Submission failed.");
      }

      setStatus({
        type: "success",
        message: `Submitted successfully. Score: ${
          result.ai?.score ?? "N/A"
        } | Decision: ${result.ai?.decision ?? "Pending"}`,
      });

      setForm({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        role: "",
        yearsExperience: "",
        portfolioUrl: "",
        linkedinUrl: "",
        salaryExpectation: "",
        notes: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
      <SectionTitle
        eyebrow="Apply"
        title="Apply to MASAR Talent Network"
        desc="Share your profile, portfolio, and role preference. We review candidates for remote creative opportunities."
      />

      <div
        className="mt-10 rounded-[28px] border bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] lg:p-8"
        style={{ borderColor: brand.line }}
      >
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            className="rounded-2xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: brand.line }}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-2xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: brand.line }}
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="rounded-2xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: brand.line }}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="country"
              type="text"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              className="rounded-2xl border px-4 py-3 text-sm outline-none"
              style={{ borderColor: brand.line }}
            />

            <input
              name="city"
              type="text"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="rounded-2xl border px-4 py-3 text-sm outline-none"
              style={{ borderColor: brand.line }}
            />
          </div>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="rounded-2xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: brand.line }}
          >
            <option value="">Select Role</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Brand Designer">Brand Designer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Motion Designer">Motion Designer</option>
            <option value="Art Director">Art Director</option>
            <option value="Creative Director">Creative Director</option>
            <option value="Copywriter">Copywriter</option>
            <option value="Content Creator">Content Creator</option>
          </select>

          <input
            name="yearsExperience"
            type="text"
            placeholder="Years of Experience"
            value={form.yearsExperience}
            onChange={handleChange}
            className="rounded-2xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: brand.line }}
          />

          <input
            name="portfolioUrl"
            type="url"
            placeholder="Portfolio URL"
            value={form.portfolioUrl}
            onChange={handleChange}
            className="rounded-2xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: brand.line }}
          />

          <input
            name="linkedinUrl"
            type="url"
            placeholder="LinkedIn URL"
            value={form.linkedinUrl}
            onChange={handleChange}
            className="rounded-2xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: brand.line }}
          />

          <input
            name="salaryExpectation"
            type="text"
            placeholder="Salary Expectation"
            value={form.salaryExpectation}
            onChange={handleChange}
            className="rounded-2xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: brand.line }}
          />

          <textarea
            name="notes"
            placeholder="Tell us about yourself"
            value={form.notes}
            onChange={handleChange}
            rows={5}
            className="rounded-2xl border px-4 py-3 text-sm outline-none"
            style={{ borderColor: brand.line }}
          />

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 disabled:opacity-60"
            style={{ background: brand.primary }}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {status && (
          <div
            className="mt-4 rounded-2xl px-4 py-3 text-sm"
            style={{
              background: status.type === "success" ? "#ECFDF5" : "#FEF2F2",
              color: status.type === "success" ? "#065F46" : "#991B1B",
            }}
          >
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div
          className="rounded-[34px] border bg-white p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-14"
          style={{ borderColor: brand.line }}
        >
          <SectionTitle
            eyebrow="Contact"
            title="Ready to build your team in Egypt through a more structured model?"
            desc="Let’s discuss the roles you need, your preferred team structure, and the right commercial model for your company."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] p-5" style={{ background: "#FCFBF8" }}>
              <div
                className="flex items-center gap-3 text-sm font-semibold"
                style={{ color: brand.primary }}
              >
                <Mail className="h-4 w-4" /> Email
              </div>
              <div className="mt-2 text-sm" style={{ color: brand.muted }}>
                {company.email}
              </div>
            </div>

            <div className="rounded-[24px] p-5" style={{ background: "#FCFBF8" }}>
              <div
                className="flex items-center gap-3 text-sm font-semibold"
                style={{ color: brand.primary }}
              >
                <Phone className="h-4 w-4" /> Phone
              </div>
              <div className="mt-2 text-sm" style={{ color: brand.muted }}>
                {company.phone}
              </div>
            </div>

            <div
              className="rounded-[24px] p-5 sm:col-span-2"
              style={{ background: "#FCFBF8" }}
            >
              <div
                className="flex items-center gap-3 text-sm font-semibold"
                style={{ color: brand.primary }}
              >
                <MapPin className="h-4 w-4" /> Coverage
              </div>
              <div className="mt-2 text-sm" style={{ color: brand.muted }}>
                {company.location}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Hello Masar, I would like to discuss building a team in Egypt."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              style={{ background: brand.primary }}
            >
              Contact on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className="rounded-[34px] border bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-10"
          style={{ borderColor: brand.line }}
        >
          <div
            className="text-sm font-medium uppercase tracking-[0.22em]"
            style={{ color: brand.secondary }}
          >
            Next step
          </div>
          <h3
            className="mt-4 text-2xl font-semibold tracking-tight"
            style={{ color: brand.primary }}
          >
            Share your hiring needs directly
          </h3>
          <p className="mt-3 text-sm leading-7" style={{ color: brand.muted }}>
            Tell Masar the team size, target roles, and preferred start
            timeline. This keeps the first discussion fast and practical.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Company name",
              "Target roles needed",
              "Expected team size",
              "Preferred start timeline",
              "Operational notes",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border px-4 py-3 text-sm"
                style={{
                  borderColor: brand.line,
                  color: brand.muted,
                  background: "#FCFBF8",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
              "Hello Masar, I would like to discuss building a team in Egypt."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5"
            style={{ background: brand.secondary, color: brand.primary }}
          >
            Start on WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
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
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
          "Hello Masar, I would like to know more about your services."
        )}`}
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

export default function App() {
  return <AppLayout />;
}
