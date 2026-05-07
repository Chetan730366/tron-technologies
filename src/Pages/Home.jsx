import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import OfferCarousel from "../components/OfferCarousel";

import { categories, getProductsForCategory } from "../data/categories.js";
import {
  ShieldCheck,
  Factory,
  Truck,
  Award,
  Headphones,
  Wrench,
  ArrowRight,
  Activity,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <section className="relative overflow-hidden bg-slate-950 text-white">

          {/* Background Effects */}
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(244,63,94,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.15)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-pink-600/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-3xl" />

          {/* GRID */}
          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest text-pink-300">
                <Activity size={14} className="animate-pulse" /> ✦ since 1982. Made in India
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                Welcome
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400">
                  To
                </span>{" "}
                Tron Technologies
              </h1>

              <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
                Quality sewing components and steam irons since 1982.
                Tron Technologies is a Delhi-based manufacturer and wholesaler specializing in sewing machine spare parts and industrial equipment like steam irons and cutting machines.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/category/bottle-steam-iron"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold shadow-xl shadow-pink-500/40 hover:shadow-pink-500/60 transition"
                >
                  Explore Products
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </Link>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white font-bold hover:bg-white/20 transition"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { v: "40+", l: "Years Exp" },
                  { v: "5K+", l: "Clients" },
                  { v: "98%", l: "Quality" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl md:text-4xl font-black text-white">{s.v}</div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT VIDEO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full flex items-center justify-center"
            >
              <div className="relative w-full h-[300px] md:h-[380px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/30 border border-white/10">

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/deepu.MP4" type="video/mp4" />
                </video>

                {/* Glow Overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-2 ring-pink-500/30" />
              </div>
            </motion.div>

          </div>
        </section>

        <div className="relative border-t border-white/10 bg-black/30 backdrop-blur py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs uppercase tracking-widest text-slate-400 font-semibold">
            <span>★ ISO 9001:2015</span>
            <span>★ Made in India</span>
            <span>★ 40+ Years of Excellence</span>
            <span>★ Pan-India Delivery</span>
            <span>★ OEM Supplier</span>
          </div>
        </div>
      </section>

      {/* OFFER OF THE DAY - CAROUSEL */}
      <OfferCarousel />

      {/* CATEGORY GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">Our Catalogue</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900">Browse Product Categories</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Industrial-grade components built to perform under the toughest conditions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  to={`/category/${cat.id}`}
                  className="group block relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-500/10 transition-all"
                >
                  {cat.isNew && (
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/40 animate-pulse">
                      ★ New
                    </div>
                  )}
                  <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${cat.accent} opacity-20 group-hover:opacity-40 transition blur-xl`} />
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${cat.accent} flex items-center justify-center text-white shadow-lg`}>
                    <Wrench size={22} />
                  </div>
                  <h3 className="mt-4 text-lg md:text-xl font-bold text-slate-900 group-hover:text-pink-600 transition">{cat.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{cat.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-pink-600">
                    View Products <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <img src="/images/ceo.png" alt="Ashish - Tron Technologies" className="w-full h-auto rounded-xl shadow-lg" />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">About Us</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Tron Technologies:<span className="text-pink-600">Our Story Since 1982</span>
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              Tron Technologies was founded in 1982 in Kalkaji, New Delhi, with a single mission — to provide the Indian textile industry with reliable, high-quality sewing machine parts at honest prices.

              Over four decades, we have grown from a small spare parts shop to a trusted manufacturer and wholesaler supplying customers across India and internationally. Our expertise spans Pressure Feet, Sewing Machine Components, Steam Irons, and Micro Switches.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Today, we proudly serve thousands of tailors, garment factories, and industrial units — backed by the same commitment to quality that Harsh Sethi built this company on.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: <Award className="text-pink-600" />, title: "ISO Certified", desc: "9001:2015" },
                { icon: <Factory className="text-pink-600" />, title: "Own Barchan", desc: "New delhi, India" },
                { icon: <Truck className="text-pink-600" />, title: "Fast Dispatch", desc: "24-48 hours" },
                { icon: <Headphones className="text-pink-600" />, title: "24/7 Support", desc: "Tech assistance" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{f.title}</div>
                    <div className="text-xs text-slate-500">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.3),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-pink-400 font-bold">Why Choose Us</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Tron Advantage</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Six reasons leading factories across India choose us as their preferred supplier.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck size={28} />, title: "Premium Quality", desc: "Every part is QC tested and built from imported, industrial-grade raw materials." },
              { icon: <Factory size={28} />, title: "In-house Manufacturing", desc: "We own our entire production line — no middlemen, no compromises." },
              { icon: <Truck size={28} />, title: "Pan-India Delivery", desc: "Express dispatch via our logistics partners covering 12+ states." },
              { icon: <Award size={28} />, title: "ISO Certified", desc: "ISO 9001:2015 certified processes and regulated quality systems." },
              { icon: <Headphones size={28} />, title: "Dedicated Support", desc: "Talk to our technical experts directly via call or WhatsApp." },
              { icon: <Wrench size={28} />, title: "Custom Orders", desc: "Bulk orders, OEM and private-label manufacturing on request." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-pink-500/40 hover:bg-white/10 transition-all"
              >
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 group-hover:scale-110 transition">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-rose-600 to-fuchsia-700 p-10 md:p-16 text-white shadow-2xl shadow-pink-500/30">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-black leading-tight">
                  Ready to scale your production?
                </h3>
                <p className="mt-3 text-pink-100 max-w-xl">
                  Get a custom quotation within 24 hours. Bulk pricing, OEM and dealership inquiries welcome.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919315974174"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg transition"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+919315974174"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-pink-600 font-bold shadow-lg hover:bg-pink-50 transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}