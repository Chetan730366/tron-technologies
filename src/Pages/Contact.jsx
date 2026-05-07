import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin, Phone, Mail, Clock, MessageCircle, Send,
  Building2, Globe, CheckCircle2, User,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <main className="bg-white">
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(244,63,94,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.4)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pink-600/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold uppercase tracking-widest text-pink-300">
            Get in Touch
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 text-4xl md:text-6xl font-black">
            Let's Talk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">Business</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 max-w-2xl mx-auto text-slate-300 text-lg">
            Have a question, need a quote, or want to become a dealer? Our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* QUICK CONTACT CARDS - REAL INFO */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Phone size={22} />, title: "Mobile", v: "+91 93159 74174", link: "tel:+919315974174", c: "from-pink-500 to-rose-600" },
            { icon: <MessageCircle size={22} />, title: "WhatsApp", v: "+91 84487 73299", link: "https://wa.me/918448773299", c: "from-emerald-500 to-green-600" },
            { icon: <Mail size={22} />, title: "Email Us", v: "trontechnologies.in@gmail.com", link: "mailto:trontechnologies.in@gmail.com", c: "from-fuchsia-500 to-pink-600" },
            { icon: <MapPin size={22} />, title: "Visit Us", v: "Govind Puri, New Delhi", link: "#map", c: "from-rose-500 to-red-600" },
          ].map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target={c.link.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl p-5 border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-pink-500/10 hover:border-pink-300 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.c} text-white flex items-center justify-center shadow-lg`}>
                {c.icon}
              </div>
              <div className="mt-3 text-xs uppercase tracking-widest font-bold text-slate-500">{c.title}</div>
              <div className="mt-1 font-bold text-slate-900 group-hover:text-pink-600 transition break-all text-sm md:text-base">{c.v}</div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-3xl border border-slate-200 p-7 md:p-9 shadow-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">Send Message</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-black text-slate-900">Fill out the form below</h2>
            <p className="mt-2 text-slate-500 text-sm">We'll get back to you within 24 hours on business days.</p>

            {sent && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center gap-3">
                <CheckCircle2 size={20} />
                <span className="font-semibold">Message sent successfully! We'll contact you soon.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Full Name" required value={form.name} onChange={(v) => update("name", v)} placeholder="Rajesh Kumar" />
                <Input label="Phone" required type="tel" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+91 99999 99999" />
              </div>
              <Input label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="you@example.com" />
              <Input label="Subject" value={form.subject} onChange={(v) => update("subject", v)} placeholder="Bulk inquiry / Dealership / Support" />
              <div>
                <label className="text-xs uppercase tracking-wider font-bold text-slate-600">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required rows={5} value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us how we can help..."
                  className="mt-1.5 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition resize-none"
                />
              </div>
              <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition disabled:opacity-70">
                {sending ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-7 md:p-9 shadow-xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-pink-600/30 blur-3xl" />
              <div className="relative">
                <Building2 size={32} className="text-pink-400" />
                <h3 className="mt-3 text-2xl font-black">Tron Technologies</h3>
                <p className="mt-2 text-slate-300 text-sm">
                  Manufacturer of Teflon Shoe & Gravity Feed Industrial Bottle Iron Spare Parts.
                </p>

                <div className="mt-6 space-y-4">
                  <Info icon={<MapPin size={18} />} title="Address">
                    1636/14, Ground Floor, Govind Puri, <br />
                    Kalka Ji, Near Hanuman Mandir, <br />
                    New Delhi - 110019, India
                  </Info>
                  <Info icon={<User size={18} />} title="Contact Person">
                    Mr. Harsh Sethi (Proprietor)
                  </Info>
                  <Info icon={<Phone size={18} />} title="Phone">
                    <div>Office: <a href="tel:+911146109299" className="hover:text-pink-400 transition">011-46109299</a></div>
                    <div>Mobile: <a href="tel:+919315974174" className="hover:text-pink-400 transition">+91 93159 74174</a></div>
                    <div>Mobile: <a href="tel:+918448773299" className="hover:text-pink-400 transition">+91 84487 73299</a></div>
                  </Info>
                  <Info icon={<Mail size={18} />} title="Email">
                    <div><a href="mailto:trontechnologies.in@gmail.com" className="hover:text-pink-400 transition break-all">trontechnologies.in@gmail.com</a></div>
                    <div><a href="mailto:harsh.sethi@trontechnologies.in" className="hover:text-pink-400 transition break-all">harsh.sethi@trontechnologies.in</a></div>
                  </Info>
                  <Info icon={<Clock size={18} />} title="Business Hours">
                    Mon - Sat: 9:00 AM – 7:00 PM <br /> Sun: Closed
                  </Info>
                  <Info icon={<Globe size={18} />} title="Website">
                    <a href="https://www.trontechnologies.in" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">www.trontechnologies.in</a>
                  </Info>
                </div>
              </div>
            </div>

            <div id="map" className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <iframe
                title="Tron Technologies - Govind Puri, New Delhi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.26%2C28.54%2C77.28%2C28.56&layer=mapnik&marker=28.55%2C77.27"
                className="w-full h-72"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">FAQ</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Do you ship across India?", a: "Yes, we deliver to all major cities and tier-2 towns across India via our trusted logistics partners. Standard delivery is 2-5 business days." },
              { q: "What is the minimum order quantity?", a: "We accept orders starting from a single unit. Bulk discounts kick in from 50+ units. Contact our sales team for custom pricing." },
              { q: "Do you offer warranty on your products?", a: "Yes, all our products carry a standard 1-year manufacturer warranty against defects in materials and workmanship." },
              { q: "Can I become a dealer / distributor?", a: "Absolutely. We're always looking for serious partners. Reach out via the form or WhatsApp with your business details." },
              { q: "Do you accept custom OEM orders?", a: "Yes, we manufacture private-label and OEM components for textile machinery brands. Minimum order quantities apply." },
            ].map((f, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-pink-300 transition overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-3 font-bold text-slate-900">
                  <span>{f.q}</span>
                  <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center group-open:rotate-45 transition shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed -mt-1">{f.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({ label, required, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider font-bold text-slate-600">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        type={type} required={required} value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
      />
    </div>
  );
}

function Info({ icon, title, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-300 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-wider font-bold text-slate-400">{title}</div>
        <div className="mt-1 text-slate-200 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
