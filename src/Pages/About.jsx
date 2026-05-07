import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award, Factory, Truck, ShieldCheck, Users, Target, Heart, Lightbulb,
  ArrowRight, CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(244,63,94,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.4)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-pink-600/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold uppercase tracking-widest text-pink-300">
            About Us
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-5 text-4xl md:text-6xl font-black leading-tight">
            Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400">
              Indian Industry
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-5 max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
            Four decades of precision engineering, quality manufacturing, and unwavering commitment to our customers across India and beyond.
          </motion.p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">Our Story</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Building India's textile industry, <span className="text-pink-600">one part at a time</span>
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Founded in <strong>1982</strong>, Tron Technologies started with a simple mission — to supply honest, high-quality sewing machine parts and industrial steam iron components to Indian manufacturers. What started as a small workshop has grown into a trusted nationwide brand.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Today, we serve <strong>5,000+ factories</strong> across 12+ states, supplying everything from teflon shoes and gaskets to rotating hooks and bottle steam irons. Every product that leaves our facility carries the Tron promise of quality, durability, and reliability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/category/bottle-steam-iron" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200 text-slate-700 font-bold hover:border-pink-400 hover:text-pink-600 transition">
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {[
              { v: "1982", l: "Established", c: "from-pink-500 to-rose-600" },
              { v: "40+", l: "Years of Trust", c: "from-fuchsia-500 to-pink-600" },
              { v: "5K+", l: "Happy Clients", c: "from-rose-500 to-red-600" },
              { v: "12+", l: "States Served", c: "from-pink-600 to-fuchsia-700" },
            ].map((s) => (
              <div key={s.l} className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${s.c} text-white shadow-xl`}>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                <div className="relative text-4xl md:text-5xl font-black">{s.v}</div>
                <div className="relative mt-2 text-sm uppercase tracking-wider font-bold text-white/90">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">Our Journey</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900">Four decades of growth</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-pink-400 to-pink-200 -translate-x-1/2 md:-translate-x-1/2" />

            {[
              { y: "1982", t: "Founded", d: "Tron Technologies began as a small workshop supplying sewing machine parts in Mumbai." },
              { y: "1995", t: "Steam Iron Division", d: "Expanded into industrial steam iron parts and teflon components." },
              { y: "2008", t: "Pan-India Reach", d: "Established distribution network across 12+ states in India." },
              { y: "2015", t: "ISO 9001:2015 Certified", d: "Implemented international quality standards across all manufacturing." },
              { y: "2024", t: "Digital Transformation", d: "Launched online catalogue and inquiry system for instant ordering." },
            ].map((m, i) => (
              <motion.div
                key={m.y}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"}`}>
                  <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-black">{m.y}</div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{m.t}</h3>
                  <p className="mt-1 text-slate-600 text-sm leading-relaxed">{m.d}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-pink-600 ring-4 ring-pink-100 -translate-x-1/2" />
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.3),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-pink-400 font-bold">Achievements</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">Why Industry Leaders Choose Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={28} />, title: "ISO Certified", desc: "9001:2015" },
              { icon: <Factory size={28} />, title: "In-House Manufacturing", desc: "50K+ units / month" },
              { icon: <Truck size={28} />, title: "Pan-India Delivery", desc: "24-48 hr dispatch" },
              { icon: <ShieldCheck size={28} />, title: "Quality Guaranteed", desc: "1-year warranty" },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-pink-500/40 transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — no circle, full square photo card */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">Leadership</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900">Meet Our Team</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">The minds behind 40+ years of industrial excellence.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "Harsh Sethi", r: "Founder & CEO", img: "/images/Harsh-Sethi.png", bio: "Visionary leader with 40+ years of industrial experience.", grad: "from-orange-400 to-pink-600" },
              { n: "Anju Sethi", r: "Director", img: "/images/Anju-Sethi.png", bio: "Heads operations & strategic partnerships.", grad: "from-fuchsia-500 to-pink-600" },
              { n: "Ashish", r: "Operations Head", img: "/images/Ashish.png", bio: "Manages production & quality control.", grad: "from-rose-500 to-orange-500" },
              { n: "Chetan", r: "Tech & Marketing", img: "/images/chetan.png", bio: "Leads digital transformation & marketing.", grad: "from-pink-600 to-fuchsia-700" },
            ].map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-pink-500/15 hover:border-pink-300 transition-all"
              >
                {/* Square photo — no circle */}
                <div className={`relative w-full aspect-square bg-gradient-to-br ${p.grad} overflow-hidden`}>
                  <img
                    src={p.img}
                    alt={p.n}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white text-5xl font-black">${p.n.split(" ").map((x) => x[0]).join("")}</div>`;
                    }}
                  />
                  {/* Bottom fade overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-slate-900">{p.n}</h3>
                  <div className="text-sm text-pink-600 font-semibold mt-0.5">{p.r}</div>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{p.bio}</p>
                  <div className="mt-3 flex items-center justify-center gap-1 text-xs text-slate-500">
                    <CheckCircle2 size={12} className="text-emerald-500" /> Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-rose-600 to-fuchsia-700 p-10 md:p-14 text-white shadow-2xl shadow-pink-500/30 text-center">
            <Users className="mx-auto mb-4 text-white/80" size={40} />
            <h3 className="text-3xl md:text-4xl font-black">Become a Tron Partner</h3>
            <p className="mt-3 max-w-xl mx-auto text-pink-100">
              Whether you're a small workshop or a large factory — we'd love to be a part of your success story.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-pink-600 font-bold shadow-lg hover:bg-pink-50 transition">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}