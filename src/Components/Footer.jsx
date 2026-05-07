import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { categories } from "../data/categories.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="tron-footer">
      <div className="tron-footer-grid">
        <div>
          <Link to="/" className="tron-footer-brand" aria-label="Tron Technologies">
            <img src="/images/logo-tron.png" alt="Tron Technologies — Connecting Technology" className="tron-footer-brand-img" />
          </Link>
          <p className="tron-footer-desc">
            Manufacturer of Teflon Shoe & Gravity Feed Industrial Bottle Iron
            Spare Parts. Trusted by factories across India since 1982.
          </p>
          <p className="tron-footer-desc" style={{ marginTop: 8, fontSize: 12, color: "#64748b" }}>
            Connecting Technology
          </p>
        </div>

        <div>
          <h4 className="tron-footer-h4">Categories</h4>
          <ul className="tron-footer-list">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/category/${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="tron-footer-h4">Company</h4>
          <ul className="tron-footer-list">
            <li><Link to="/about">About Us</Link></li>
            <li><a href="/#why">Why Choose Us</a></li>
            <li><a href="/#testimonials">Testimonials</a></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="tron-footer-h4">Get in Touch</h4>
          <div className="tron-footer-contact">
            <div className="tron-footer-contact-row">
              <MapPin size={16} />
              <span>1636/14, Ground Floor, Govind Puri, Kalka Ji, Near Hanuman Mandir, New Delhi - 110019</span>
            </div>
            <div className="tron-footer-contact-row">
              <Phone size={16} />
              <div>
                <div><a href="tel:+911146109299">011-46109299</a></div>
                <div><a href="tel:+919315974174">+91 93159 74174</a></div>
              </div>
            </div>
            <div className="tron-footer-contact-row">
              <Mail size={16} />
              <a href="mailto:trontechnologies.in@gmail.com" style={{ wordBreak: "break-all" }}>trontechnologies.in@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="tron-footer-bottom">
        <div>© {new Date().getFullYear()} Tron Technologies Pvt. Ltd. All rights reserved.</div>
        <div>Made in India · ISO 9001:2015 Certified</div>
      </div>
    </footer>
  );
}
