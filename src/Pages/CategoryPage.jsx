import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { categories, getProductsForCategory } from "../data/categories";
import ProductCard from "../components/ProductCard";
import { ChevronRight, Home } from "lucide-react";

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);

  if (!category) return <Navigate to="/" replace />;

  const products = getProductsForCategory(category.id);

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className={`relative bg-gradient-to-br ${category.accent} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <nav className="flex items-center gap-1.5 text-xs md:text-sm text-white/80 font-semibold uppercase tracking-wider">
            <Link to="/" className="flex items-center gap-1 hover:text-white">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={14} />
            <span>Categories</span>
            <ChevronRight size={14} />
            <span className="text-white">{category.name}</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-5 text-4xl md:text-6xl font-black tracking-tight"
          >
            {category.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-white/90 max-w-2xl text-base md:text-lg"
          >
            {category.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-3 text-xs"
          >
            <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 font-bold uppercase tracking-wider">
              {products.length} Products
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 font-bold uppercase tracking-wider">
              In Stock
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 font-bold uppercase tracking-wider">
              Pan-India Delivery
            </span>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} categoryName={category.name} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.4),transparent_60%)]" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-black">Need a custom quote for bulk order?</h3>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto">
              We offer special pricing for orders above 100 units. Get in touch with our sales team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="https://wa.me/919315974174"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 font-bold transition"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919315974174"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 font-bold transition shadow-lg shadow-pink-500/30"
              >
                Call Sales: +91 93159 74174
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
