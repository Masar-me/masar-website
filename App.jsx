
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>MASAR Home</h1>;
}

function About() {
  return <h1>About MASAR</h1>;
}

function Services() {
  return <h1>Services</h1>;
}

function Packages() {
  return <h1>Packages</h1>;
}

function FAQ() {
  return <h1>FAQ</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{display:"flex", gap:"10px"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
