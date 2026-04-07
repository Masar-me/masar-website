import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import "./styles.css";

const whatsappLink =
  "https://wa.me/966537931357?text=Hi%20MASAR%2C%20I%20want%20to%20build%20a%20team%20in%20Egypt";

function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>hello@masar.sa</span>
          <span>Saudi Arabia + Egypt operational support</span>
          <a href={whatsappLink} target="_blank">WhatsApp</a>
        </div>
      </div>

      <div className="navbar">
        <div className="container nav-inner">
          <div className="logo">
            <div className="logo-box">M</div>
            <div>
              <strong>MASAR</strong>
              <p>REMOTE WORKFORCE INFRASTRUCTURE</p>
            </div>
          </div>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <button className="cta">Book a consultation</button>
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <Header />

      <div className="hero container">
        <div className="hero-left">
          <span className="tag">
            Built for Saudi & GCC companies expanding into Egypt
          </span>

          <h1>
            Build your Egypt team with a premium operating model, not operational guesswork.
          </h1>

          <p>
            MASAR enables Saudi and GCC companies to build and operate teams in Egypt through a structured model.
          </p>
        </div>

        <div className="hero-right">
          <div className="card">
            <h4>Expansion without operational chaos</h4>
            <p>
              Instead of building HR and payroll from zero, companies get a clearer route into Egypt.
            </p>
          </div>

          <div className="card dark">
            <h4>Saudi & GCC businesses</h4>
            <p>Ideal for companies accessing Egyptian talent.</p>
          </div>

          <div className="card">
            <h4>More clarity</h4>
            <p>Better structure and smoother operations.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function About() {
  return <div className="container page">About MASAR</div>;
}

function Services() {
  return <div className="container page">Services</div>;
}

function FAQ() {
  return <div className="container page">FAQ</div>;
}

function Contact() {
  return <div className="container page">Contact</div>;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
