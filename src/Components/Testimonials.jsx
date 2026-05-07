import { motion } from "framer-motion";
import { Quote, Star, Building2, Scissors, Store, Factory } from "lucide-react";

const testimonials = [
  {
    name: "Rahul",
    role: "Sewing Machine Repair Specialist",
    text:
      "Tron Technologies has been my go-to supplier for sewing machine parts for over a decade. Their quality is unmatched, and their attention to detail is evident in every component. Whether I need a basic part or a specialized component, Tron Technologies always delivers. Their customer service is exceptional — prompt responses and reliable support make working with them a pleasure. Highly recommended!",
    icon: <Scissors size={20} />,
    accent: "from-pink-500 to-rose-600",
    initials: "HS",
  },
  {
    name: "Rajesh Kumar",
    role: "Textile Manufacturer",
    text:
      "As a large-scale textile manufacturer, finding reliable parts for our machines is crucial. Tron Technologies consistently provides high-quality components that keep our operations running smoothly. Their extensive product range and competitive pricing are just two of the reasons we choose them as our primary supplier. Their adherence to quality standards and commitment to customer satisfaction set them apart from the rest.",
    icon: <Factory size={20} />,
    accent: "from-fuchsia-500 to-pink-600",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Boutique Owner",
    text:
      "I've been sourcing sewing machine parts from Tron Technologies for several years now, and I'm always impressed by their professionalism and product quality. The online ordering process is straightforward, and their delivery is always on time. The parts are durable and perform well, which is essential for my small business. Tron Technologies has earned my trust and loyalty through their consistent excellence.",
    icon: <Store size={20} />,
    accent: "from-rose-500 to-red-600",
    initials: "PS",
  },
  {
    name: "Suresh Patel",
    role: "Industrial Sewing Machine Distributor",
    text:
      "Tron Technologies has been a reliable partner for our business, providing a wide range of sewing machine parts that meet industry standards. Their quality assurance processes are evident in the performance of their products. Additionally, their knowledgeable staff and customer support team are always ready to assist with any queries. We value our partnership with Tron Technologies and look forward to continued collaboration.",
    icon: <Building2 size={20} />,
    accent: "from-pink-600 to-fuchsia-700",
    initials: "SP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white via-pink-50/40 to-white relative overflow-hidden">
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 rounded-full bg-fuchsia-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-xs font-bold uppercase tracking-widest text-pink-700"
          >
            <Quote size={14} /> Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-3xl md:text-5xl font-black text-slate-900 leading-tight"
          >
            What Our Customers Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            At Tron Technologies, our commitment to quality and customer satisfaction is reflected in the
            positive feedback we receive from our valued clients. Since our establishment in 1982, we have
            built lasting relationships with businesses across the sewing machine industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-lg shadow-pink-500/10 border border-slate-100"
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left leading-tight">
              <div className="font-black text-slate-900">4.9 / 5.0</div>
              <div className="text-[11px] text-slate-500 font-semibold">From 500+ verified reviews</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-pink-500/10 hover:border-pink-300 transition-all"
            >
              <Quote
                size={80}
                className="absolute top-4 right-4 text-pink-100 group-hover:text-pink-200 transition"
                strokeWidth={1}
              />

              <div className="relative flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="relative text-slate-700 leading-relaxed text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="relative mt-6 pt-5 border-t border-slate-100 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.accent} text-white font-black flex items-center justify-center shadow-lg shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-900 truncate">{t.name}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <span className="text-pink-600">{t.icon}</span>
                    {t.role}
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end text-[10px] uppercase tracking-wider font-bold text-slate-400">
                  <span>Verified</span>
                  <span className="text-emerald-600">✓ Customer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center text-slate-600 max-w-3xl mx-auto italic"
        >
          These testimonials underscore our dedication to delivering high-quality products and exceptional
          customer service. At Tron Technologies, we strive to exceed expectations and build lasting
          relationships with all our clients.
        </motion.p>

        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="text-center text-xs uppercase tracking-[0.3em] font-bold text-slate-400 mb-6">
            Trusted Across India Since 1982
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: "40+", l: "Years of Trust" },
              { v: "5,000+", l: "Happy Clients" },
              { v: "12+", l: "States Served" },
              { v: "98%", l: "Repeat Customers" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  {s.v}
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
