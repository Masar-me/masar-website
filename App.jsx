import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  X,
} from 'lucide-react';

const brand = {
  primary: '#0F172A',
  secondary: '#B89146',
  bg: '#F6F4EF',
  card: '#FFFFFF',
  muted: '#64748B',
  line: '#E7E3D9',
};

const company = {
  name: 'MASAR',
  tagline: 'Remote Workforce Infrastructure',
  email: 'hello@masar.sa',
  phone: '+966 XX XXX XXXX',
  whatsapp: '966500000000',
  location: 'Saudi Arabia + Egypt operational support',
  logoPath: '/masar-logo.png',
};

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Packages', path: '/packages' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const services = [
  {
    icon: ShieldCheck,
    title: 'Employer of Record Support',
    desc: 'Operate talent in Egypt through a structured employment model covering contracts, onboarding, compliance coordination, payroll administration, and employee support.',
    bullets: ['Contract setup', 'Onboarding coordination', 'Compliance support', 'Monthly employee administration'],
  },
  {
    icon: Users,
    title: 'Remote Team Infrastructure',
    desc: 'Build your Egypt-based team without creating the full operating layer from zero. Masar gives you the local structure needed to hire, manage, and scale with clarity.',
    bullets: ['Team structure design', 'Operating workflow setup', 'Scale-ready support', 'Clear ownership flow'],
  },
  {
    icon: Wallet,
    title: 'HR & Payroll Operations',
    desc: 'From monthly payroll workflows to employee files, attendance logic, HR administration, and reporting, Masar handles the operational backbone behind every hire.',
    bullets: ['Payroll administration', 'Employee records', 'Attendance logic', 'Monthly reports'],
  },
  {
    icon: Building2,
    title: 'Egypt Setup for GCC Businesses',
    desc: 'A smart entry point for Saudi and GCC companies looking to access Egyptian talent faster, with lower setup complexity and stronger operational control.',
    bullets: ['Faster market entry', 'Lower setup friction', 'Better control', 'Operational continuity'],
  },
];

const packages = [
  {
    name: 'Starter',
    subtitle: 'For companies testing the model with their first hire in Egypt',
    tag: 'Lean entry',
    points: ['For 1 employee', 'Contract and onboarding setup', 'Payroll administration', 'Basic HR support', 'Monthly operational follow-up'],
  },
  {
    name: 'Growth',
    subtitle: 'For companies building a small but structured remote team',
    tag: 'Most practical',
    featured: true,
    points: ['For 2–10 employees', 'Full employee file management', 'Monthly payroll and admin operations', 'Structured reporting', 'Ongoing operational support'],
  },
  {
    name: 'Custom',
    subtitle: 'For companies scaling a dedicated Egypt team with tailored needs',
    tag: 'Built to scale',
    points: ['Custom team structure', 'Advanced workflow design', 'Dedicated support model', 'Custom reporting and controls', 'Scalable operating framework'],
  },
];

const faqs = [
  {
    q: 'What exactly does Masar do?',
    a: 'Masar helps Saudi and GCC companies hire and operate employees in Egypt through a structured local operating model. This includes onboarding, contracts, payroll workflows, HR administration, and ongoing employee support.',
  },
  {
    q: 'Is Masar a recruitment agency?',
    a: 'Not in the traditional sense. Masar is positioned as a workforce infrastructure partner. Recruitment can be part of the journey, but the core value is in the operational structure around the employee after hiring.',
  },
  {
    q: 'Who is this service best suited for?',
    a: 'Masar is ideal for Saudi and GCC companies that want to build an Egypt-based team without creating the full administrative and employment structure on their own from day one.',
  },
  {
    q: 'How is pricing usually structured?',
    a: 'Pricing can be built around a setup fee, recruitment fee, monthly administration fee, and optional add-ons depending on team size, complexity, and support depth.',
  },
  {
    q: 'Can Masar support scaling later?',
    a: 'Yes. The model is designed to start lean, then support expansion into a broader, more stable team structure as the client grows.',
  },
  {
    q: 'What makes Masar different?',
    a: 'Masar is built around clarity, control, and continuity. Instead of simply helping a client hire, it helps them operate the workforce properly month after month.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Logo() {
  const [imgError, setImgError] = useState(false);
  if (!imgError) {
    return <img src={company.logoPath} alt="Masar logo" className="logo-image" onError={() => setImgError(true)} />;
  }
  return <div className="logo-fallback">M</div>;
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="section-title-wrap">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {desc ? <p>{desc}</p> : null}
    </div>
  );
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span><Mail size={14} /> {company.email}</span>
          <span><MapPin size={14} /> {company.location}</span>
        </div>
        <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="whatsapp-chip">
          <MessageCircle size={14} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header">
      <TopBar />
      <div className="container header-inner">
        <Link to="/" className="brand-lockup">
          <Logo />
          <div>
            <div className="brand-name">{company.name}</div>
            <div className="brand-tag">{company.tagline}</div>
          </div>
        </Link>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary">Book a consultation</Link>
          <button className="menu-button" onClick={() => setMenuOpen((s) => !s)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mobile-nav-wrap">
            <div className="container mobile-nav">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`nav-link mobile ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-lockup footer-brand">
            <Logo />
            <div>
              <div className="brand-name">{company.name}</div>
              <div className="footer-tag">{company.tagline}</div>
            </div>
          </div>
          <p className="footer-copy">
            A premium workforce infrastructure model helping Saudi and GCC companies hire and operate teams in Egypt with more clarity, less friction, and stronger monthly control.
          </p>
        </div>
        <div>
          <div className="footer-heading">Pages</div>
          <div className="footer-links">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="footer-link">{item.label}</NavLink>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-heading">Contact</div>
          <div className="footer-contact">
            <div><Mail size={14} /> {company.email}</div>
            <div><Phone size={14} /> {company.phone}</div>
            <div><MapPin size={14} /> {company.location}</div>
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
      <motion.div key={location.pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function HomePage() {
  const metrics = [
    { value: 'GCC', label: 'Focused market' },
    { value: 'Egypt', label: 'Talent base' },
    { value: 'Lean', label: 'Setup model' },
    { value: 'Clear', label: 'Monthly operations' },
  ];

  const steps = ['Assess the workforce need', 'Design the right setup', 'Onboard and activate', 'Run monthly operations', 'Scale with control'];

  return (
    <>
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }} className="hero-copy">
            <div className="hero-badge"><Sparkles size={14} /> Built for Saudi & GCC companies expanding into Egypt</div>
            <h1>Build your Egypt team with a premium operating model, not operational guesswork.</h1>
            <p>
              Masar helps GCC companies hire and operate talent in Egypt through a structured local system covering onboarding, contracts, HR administration, payroll workflows, and ongoing employee support.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Start with Masar <ArrowRight size={16} /></Link>
              <Link to="/packages" className="btn btn-secondary">Explore packages</Link>
            </div>
            <div className="metrics-grid">
              {metrics.map((item) => (
                <div key={item.label} className="metric-card">
                  <div className="metric-value">{item.value}</div>
                  <div className="metric-label">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.12 }} className="hero-cards">
            <div className="info-card wide">
              <div className="card-top">
                <div>
                  <div className="mini-label">What Masar solves</div>
                  <h3>Expansion without operational chaos</h3>
                </div>
                <div className="icon-pill"><BriefcaseBusiness size={18} /></div>
              </div>
              <p>Instead of building HR administration, payroll workflows, and employee structure from zero, companies get a clearer and more manageable route into Egypt.</p>
            </div>

            <div className="info-card dark">
              <div className="card-top">
                <div>
                  <div className="mini-label light">Who it’s for</div>
                  <h3>Saudi & GCC businesses</h3>
                </div>
                <Globe2 size={18} />
              </div>
              <p>Ideal for companies that want access to Egyptian talent while keeping visibility, speed, and professional structure.</p>
            </div>

            <div className="info-card">
              <div className="card-top">
                <div>
                  <div className="mini-label">Operational promise</div>
                  <h3>More clarity</h3>
                </div>
                <Clock3 size={18} />
              </div>
              <p>Clearer ownership, smoother processes, and stronger monthly follow-up from first hire onward.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container section-spaced">
        <div className="feature-panel">
          <div>
            <SectionTitle eyebrow="How it works" title="A simple operational path from brief to monthly execution." desc="The model is designed to keep the client journey structured, visible, and scalable." />
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={step} className="step-card">
                <div className="step-number">0{index + 1}</div>
                <div className="step-title">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  const valuePoints = [
    'Access Egyptian talent through a structured operating model',
    'Reduce operational friction across hiring, onboarding, payroll, and support',
    'Start lean, then scale into a more permanent team structure over time',
    'Create clearer visibility on cost, process ownership, and monthly operations',
  ];

  const pillars = [
    { icon: Layers3, title: 'Structure', text: 'Masar is built on systems, not improvisation. Every client engagement is designed to feel organized, visible, and controlled.' },
    { icon: Handshake, title: 'Trust', text: 'Clients need confidence when building teams outside their main market. Masar reduces that uncertainty through a more disciplined model.' },
    { icon: BadgeCheck, title: 'Continuity', text: 'The real value is not just starting. It is running the workforce month after month with consistency and support.' },
  ];

  return (
    <div className="container page-section">
      <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.55 }} className="two-col-grid">
        <div className="white-panel">
          <SectionTitle eyebrow="About Masar" title="Masar is not only about hiring people. It is about building the system around them." desc="Masar creates the operational bridge between GCC companies and Egyptian talent. We help clients move from intention to execution through a model that is practical, structured, and designed for real business control." />
          <p className="panel-copy">This means more than recruitment. It means contracts, payroll workflows, administration, support, reporting, and a stronger framework for scaling a remote team with confidence.</p>
          <Link to="/contact" className="btn btn-primary panel-btn">Talk to Masar <ArrowRight size={16} /></Link>
        </div>

        <div className="dark-panel">
          <div className="panel-eyebrow light">Why it matters</div>
          <h3>A better expansion model for companies that want control without unnecessary setup burden.</h3>
          <div className="list-stack">
            {valuePoints.map((point) => (
              <div key={point} className="dark-list-item"><Check size={16} /> <p>{point}</p></div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="cards-grid-3 mt-8">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.div key={pillar.title} initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.07 }} className="service-card">
              <div className="icon-box"><Icon size={20} /></div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="container page-section">
      <SectionTitle eyebrow="Services" title="A premium service structure for building and running teams in Egypt." desc="Masar is designed to remove friction from the most sensitive parts of cross-border team setup: employment structure, administration, payroll, employee continuity, and scale readiness." />
      <div className="cards-grid-2 mt-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.title} initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.06 }} className="service-card">
              <div className="icon-box"><Icon size={20} /></div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="bullets-grid">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="bullet-chip"><Check size={16} /> <span>{bullet}</span></div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="cta-banner mt-10">
        <div>
          <div className="panel-eyebrow light">Need a tailored model?</div>
          <h3>Masar can shape the service structure around your business stage and team size.</h3>
        </div>
        <Link to="/contact" className="btn btn-gold">Request consultation</Link>
      </div>
    </div>
  );
}

function PackagesPage() {
  return (
    <div className="container page-section">
      <SectionTitle eyebrow="Packages" title="Flexible commercial models based on team size and operational depth." desc="Masar can be priced as a setup fee, recruitment fee, monthly administration fee, and optional add-ons depending on the client scope and workforce structure." />
      <div className="cards-grid-3 mt-12">
        {packages.map((pkg, index) => (
          <motion.div key={pkg.name} initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.07 }} className={`package-card ${pkg.featured ? 'featured' : ''}`}>
            <div className="package-head">
              <div>
                <div className="package-title">{pkg.name}</div>
                <div className="package-subtitle">{pkg.subtitle}</div>
              </div>
              <div className="package-tag">{pkg.tag}</div>
            </div>
            <ul className="package-list">
              {pkg.points.map((point) => (
                <li key={point}><Check size={16} /> <span>{point}</span></li>
              ))}
            </ul>
            <Link to="/contact" className={`btn ${pkg.featured ? 'btn-gold' : 'btn-secondary'} full`}>Request package details</Link>
          </motion.div>
        ))}
      </div>
      <div className="cards-grid-3 mt-10">
        {[
          { title: 'Setup Fee', text: 'Covers the initial activation, setup logic, and onboarding structure.' },
          { title: 'Monthly Fee', text: 'Supports payroll administration, HR follow-up, employee management, and reporting.' },
          { title: 'Add-ons', text: 'Optional services can be layered based on recruitment scope, controls, and custom needs.' },
        ].map((item) => (
          <div key={item.title} className="mini-panel">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="faq-item">
      <button onClick={onToggle} className="faq-button">
        <div>{q}</div>
        <ChevronDown size={18} className={open ? 'rotated' : ''} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="faq-answer-wrap">
            <p className="faq-answer">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="container page-section">
      <SectionTitle eyebrow="FAQ" title="Questions clients may ask before starting with Masar." desc="This section is designed to reduce hesitation, clarify the offer, and make the commercial conversation smoother." />
      <div className="faq-grid mt-12">
        {faqs.map((item, index) => (
          <FAQItem key={item.q} q={item.q} a={item.a} open={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? -1 : index)} />
        ))}
      </div>
      <div className="cta-banner mt-10">
        <div>
          <div className="panel-eyebrow light">Still have questions?</div>
          <h3>Let’s discuss your hiring plan, team model, and the right structure for your company.</h3>
        </div>
        <Link to="/contact" className="btn btn-gold">Contact Masar</Link>
      </div>
    </div>
  );
}

function ContactFormCard() {
  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    teamSize: '',
    roles: '',
    timeline: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!form.companyName.trim()) nextErrors.companyName = 'Company name is required';
    if (!form.contactName.trim()) nextErrors.contactName = 'Contact name is required';
    if (!form.email.trim()) nextErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email';
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) e.preventDefault();
  };

  return (
    <div className="white-panel contact-form-card">
      <div className="eyebrow">Live contact form</div>
      <h3 className="contact-form-title">Discovery call request</h3>
      <p className="contact-form-copy">This form is ready to submit through FormSubmit. Replace the destination email if you want it to route elsewhere.</p>
      <form action={`https://formsubmit.co/${company.email}`} method="POST" onSubmit={handleSubmit} className="contact-form">
        <input type="hidden" name="_subject" value="New MASAR website lead" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="form-grid">
          <FormField label="Company name" name="companyName" value={form.companyName} onChange={handleChange} error={errors.companyName} />
          <FormField label="Contact name" name="contactName" value={form.contactName} onChange={handleChange} error={errors.contactName} />
          <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
          <FormField label="Phone" name="phone" value={form.phone} onChange={handleChange} />
          <FormField label="Expected team size" name="teamSize" value={form.teamSize} onChange={handleChange} />
          <FormField label="Preferred timeline" name="timeline" value={form.timeline} onChange={handleChange} />
        </div>

        <FormField label="Target roles needed" name="roles" value={form.roles} onChange={handleChange} />
        <FormField label="Brief notes" name="notes" value={form.notes} onChange={handleChange} textarea />

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Send request <ArrowRight size={16} /></button>
          <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Masar, I would like to discuss building a team in Egypt.')}`} target="_blank" rel="noreferrer" className="btn btn-gold">
            WhatsApp now <MessageCircle size={16} />
          </a>
        </div>
      </form>
    </div>
  );
}

function FormField({ label, name, value, onChange, error, textarea = false, type = 'text' }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {textarea ? (
        <textarea name={name} rows="5" value={value} onChange={onChange} className={`input ${error ? 'error' : ''}`} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} className={`input ${error ? 'error' : ''}`} />
      )}
      {error ? <small className="error-text">{error}</small> : null}
    </label>
  );
}

function ContactPage() {
  return (
    <div className="container page-section">
      <div className="two-col-grid contact-grid">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.55 }} className="white-panel">
          <SectionTitle eyebrow="Contact" title="Ready to build your Egypt team through a more structured model?" desc="Let’s discuss the roles you need, your preferred team structure, and the right commercial model for your company. Masar is built to help you move with more control, more speed, and less internal friction." />
          <div className="contact-cards">
            <div className="contact-chip"><div className="contact-chip-title"><Mail size={14} /> Email</div><div>{company.email}</div></div>
            <div className="contact-chip"><div className="contact-chip-title"><Phone size={14} /> Phone</div><div>{company.phone}</div></div>
            <div className="contact-chip wide"><div className="contact-chip-title"><MapPin size={14} /> Coverage</div><div>{company.location}</div></div>
          </div>
          <div className="note-panel">
            <FileText size={16} />
            <p>This package includes real routing, a working lead form, and WhatsApp CTA. Replace the phone number, email destination, and logo file path with your final brand assets before launch.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.65, delay: 0.08 }}>
          <ContactFormCard />
        </motion.div>
      </div>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Masar, I would like to know more about your services.')}`} target="_blank" rel="noreferrer" className="floating-whatsapp">
      <MessageCircle size={16} /> WhatsApp
    </a>
  );
}

export default function App() {
  return (
    <div className="app-shell">
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
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
