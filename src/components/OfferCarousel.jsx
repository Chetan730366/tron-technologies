import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Flame, ShoppingBag, MessageCircle } from "lucide-react";
import "./OfferCarousel.css";

const offers = [
  {
    tag: "Today's Deal",
    title: "Industrial Bottle Steam Iron",
    desc: "Heavy-duty professional steam iron with built-in water bottle. Built for non-stop factory use with quick heating and durable teflon sole-plate.",
    image: "images/HAY1-9300L-GOLD.jpeg",
    fallbackEmoji: "🧺",
    mrp: 4999,
    price: 2999,
    discount: 40,
    stock: 18,
    totalStock: 50,
    link: "/category/bottle-steam-iron",
    cta: "Shop Bottle Iron",
  },
  {
    tag: "Best Seller",
    title: "Premium Teflon Shoe",
    desc: "Scratch-free, smooth-glide teflon shoe attachment. Compatible with all major industrial steam iron models. Heat-resistant up to 250°C.",
    image: "/images/HAY1-9999-PRO.png",
    fallbackEmoji: "🥾",
    mrp: 1299,
    price: 799,
    discount: 38,
    stock: 32,
    totalStock: 100,
    link: "/category/teflon-shoe",
    cta: "Shop Teflon Shoe",
  },
  {
    tag: "Limited Stock",
    title: "Precision Rotating Hook",
    desc: "Industrial-grade rotating hook for high-speed sewing machines. CNC-machined for perfect tolerance and ultra-long life. OEM quality at factory prices.",
    image: "/images/SS1-300-GRAVITY.png",
    fallbackEmoji: "⚙️",
    mrp: 2499,
    price: 1499,
    discount: 40,
    stock: 9,
    totalStock: 25,
    link: "/category/rotating-hook",
    cta: "Shop Rotating Hook",
  },
];

// Countdown helper - returns { h, m, s } until midnight today
const getTimeLeft = () => {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end - now);
  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { h, m, s };
};

export default function OfferCarousel() {
  const [active, setActive] = useState(0);
  const [time, setTime] = useState(getTimeLeft());
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // Countdown timer
  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % offers.length);
    }, 5500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    setActive(((i % offers.length) + offers.length) % offers.length);
    // Reset auto-advance timer
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % offers.length);
    }, 5500);
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section id="offers" className="offer-section">
      <div className="offer-inner">
        {/* Header */}
        <div className="offer-header">
          <div>
            <span className="offer-badge">
              <Flame size={14} /> Offer of the Day
            </span>
            <h2 className="offer-title">
              Hot Deals on <span>Industrial Parts</span>
            </h2>
            <p className="offer-sub">Limited-time offers refresh every day at midnight. Don't miss out!</p>
          </div>

          <div className="offer-countdown">
            <div className="offer-countdown-label">Ends in</div>
            <div className="offer-countdown-grid">
              <div className="offer-countdown-cell">
                <div className="offer-countdown-num">{pad(time.h)}</div>
                <span className="offer-countdown-unit">Hrs</span>
              </div>
              <div className="offer-countdown-cell">
                <div className="offer-countdown-num">{pad(time.m)}</div>
                <span className="offer-countdown-unit">Min</span>
              </div>
              <div className="offer-countdown-cell">
                <div className="offer-countdown-num">{pad(time.s)}</div>
                <span className="offer-countdown-unit">Sec</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="offer-carousel">
          <button className="offer-nav offer-nav-prev" onClick={() => goTo(active - 1)} aria-label="Previous offer">
            <ChevronLeft size={22} />
          </button>
          <button className="offer-nav offer-nav-next" onClick={() => goTo(active + 1)} aria-label="Next offer">
            <ChevronRight size={22} />
          </button>

          <div
            className="offer-slides"
            ref={trackRef}
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {offers.map((o, idx) => {
              const stockPct = Math.round((o.stock / o.totalStock) * 100);
              const waMsg = encodeURIComponent(
                `Hello Tron Technologies, I want to order today's offer:\n\n${o.title}\nOffer price: ₹${o.price}\n(Original: ₹${o.mrp})\n\nPlease share order details.`
              );
              return (
                <div className="offer-slide" key={idx}>
                  <div className="offer-slide-info">
                    <span className="offer-slide-tag">{o.tag}</span>
                    <h3 className="offer-slide-title">{o.title}</h3>
                    <p className="offer-slide-desc">{o.desc}</p>

                    <div className="offer-price-row">
                      <span className="offer-price-now">₹{o.price.toLocaleString()}</span>
                      <span className="offer-price-mrp">₹{o.mrp.toLocaleString()}</span>
                      <span className="offer-price-save">Save ₹{(o.mrp - o.price).toLocaleString()}</span>
                    </div>

                    <div className="offer-stock-bar" aria-label={`Stock: ${o.stock} of ${o.totalStock}`}>
                      <div className="offer-stock-fill" style={{ width: `${stockPct}%` }} />
                    </div>
                    <div className="offer-stock-text">
                      Only <strong>{o.stock} units</strong> left out of {o.totalStock} — hurry!
                    </div>

                    <div className="offer-cta-row">
                      <Link to={o.link} className="offer-btn-primary">
                        <ShoppingBag size={16} /> {o.cta}
                      </Link>
                      <a
                        href={`https://wa.me/918448773299?text=${waMsg}`}
                        target="_blank"
                        rel="noreferrer"
                        className="offer-btn-secondary"
                      >
                        <MessageCircle size={16} /> Order on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="offer-slide-image">
                    <div className="offer-slide-discount">
                      <span className="offer-slide-discount-pct">{o.discount}%</span>
                      <span className="offer-slide-discount-off">OFF</span>
                    </div>
                    <img
                      src={o.image}
                      alt={o.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                        const parent = e.target.parentElement;
                        const ph = document.createElement("div");
                        ph.style.fontSize = "180px";
                        ph.style.lineHeight = "1";
                        ph.textContent = o.fallbackEmoji;
                        parent.appendChild(ph);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="offer-dots">
            {offers.map((_, i) => (
              <button
                key={i}
                className={`offer-dot ${i === active ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
