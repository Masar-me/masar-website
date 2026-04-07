import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const whatsappLink =
  "https://wa.me/966537931357?text=Hi%20MASAR%2C%20I%20want%20to%20build%20a%20team%20in%20Egypt";

const section = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "80px 20px",
};

const btn = {
  background: "#0F172A",
  color: "white",
  padding: "14px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  display: "inline-block",
  marginTop: "20px",
};

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px", borderBottom: "1px solid #eee" }}>
      <strong>MASAR</strong>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />

      <section style={{ ...section, textAlign: "center" }}>
        <h1 style={{ fontSize: "42px" }}>
          Build your team with full operational support in Egypt — without the complexity of setting up locally.
        </h1>

        <p style={{ marginTop: "20px", color: "#555" }}>
          MASAR enables Saudi and GCC companies to build and operate teams in Egypt through a structured model.
        </p>

        <a href={whatsappLink} target="_blank" style={btn}>
          Start Building Your Team
        </a>
      </section>

      <section style={section}>
        <h2>The Problem</h2>
        <p>Hiring in Egypt without structure creates confusion, delays, and risk.</p>
      </section>

      <section style={section}>
        <h2>The Solution</h2>
        <p><strong>MASAR is infrastructure, not outsourcing.</strong></p>
      </section>

      <section style={section}>
        <h2>How it Works</h2>
        <ol>
          <li>Understand needs</li>
          <li>Design structure</li>
          <li>Onboard team</li>
          <li>Operate</li>
          <li>Scale</li>
        </ol>
      </section>

      <section style={{ ...section, textAlign: "center" }}>
        <h2>Ready to build your team?</h2>
        <a href={whatsappLink} target="_blank" style={btn}>
          Contact MASAR
        </a>
      </section>
    </div>
  );
}

function About() {
  return (
    <div>
      <Navbar />
      <section style={section}>
        <h1>About MASAR</h1>
        <p>
          MASAR builds the operational bridge between GCC companies and Egyptian talent.
        </p>
      </section>
    </div>
  );
}

function Services() {
  return (
    <div>
      <Navbar />
      <section style={section}>
        <h1>Services</h1>
        <ul>
          <li>Employer of Record</li>
          <li>Payroll & HR</li>
          <li>Team Setup</li>
        </ul>
      </section>
    </div>
  );
}

function FAQ() {
  return (
    <div>
      <Navbar />
      <section style={section}>
        <h1>FAQ</h1>
        <p>We help companies build and operate teams in Egypt.</p>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Navbar />
      <section style={section}>
        <h1>Contact</h1>
        <p>crm.masar@gmail.com</p>
        <p>00966537931357</p>
        <a href={whatsappLink} target="_blank" style={btn}>
          WhatsApp
        </a>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
