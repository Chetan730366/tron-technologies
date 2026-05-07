import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { categories, getProductsForCategory } from "../data/categories.js";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="tron-header">
      {/* Top utility bar */}
      <div className="tron-utility">
        <div className="tron-utility-inner">
          <span className="tron-utility-status">
            <span className="tron-utility-dot" />
            ISO 9001:2015 Certified · Trusted Industrial Partner Since 1982
          </span>
          <a href="tel:+919315974174" className="tron-utility-phone">
            <Phone size={12} /> +91 93159 74174 · 011-46109299
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="tron-mainbar">
        <div className="tron-mainbar-inner">
          <Link to="/" className="tron-logo" aria-label="Tron Technologies — Home">
            <img src="/images/logo-tron.png" alt="Tron Technologies — Connecting Technology" className="tron-logo-img" />
          </Link>

          <nav className="tron-nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
            <a href="/#why">Why Us</a>
            <a href="/#testimonials">Reviews</a>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
            <a
              href="https://wa.me/918448773299"
              target="_blank"
              rel="noreferrer"
              className="tron-nav-cta"
            >
              Get a Quote
            </a>
          </nav>

          <button
            className="tron-mobile-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="tron-mobile-menu">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <a href="/#why">Why Us</a>
            <a href="/#testimonials">Reviews</a>
            <NavLink to="/contact">Contact</NavLink>
            <a href="https://wa.me/918448773299" className="wa">WhatsApp Us</a>
          </div>
        )}
      </div>

      {/* Category bar */}
      <div className="tron-catbar">
        <div className="tron-catbar-inner">
          <div className="tron-catbar-scroll">
            {categories.map((cat) => (
              <NavLink
                key={cat.id}
                to={`/category/${cat.id}`}
                className={({ isActive }) =>
                  `tron-catbar-link ${isActive ? "active" : ""}`
                }
              >
                {cat.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
