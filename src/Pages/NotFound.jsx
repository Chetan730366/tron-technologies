import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { categories } from "../data/Categories";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] bg-gradient-to-br from-slate-50 via-pink-50/30 to-white flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-[120px] md:text-[180px] font-black leading-none bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-700 bg-clip-text text-transparent">
          404
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-black text-slate-900">
          Page Not Found
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-3 text-slate-600 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Try one of these instead:
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition">
            <Home size={16} /> Go Home
          </Link>
          <button onClick={() => history.back()} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-slate-200 text-slate-700 font-bold hover:border-pink-400 hover:text-pink-600 transition">
            <ArrowLeft size={16} /> Go Back
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-12">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold flex items-center justify-center gap-2">
            <Search size={12} /> Browse Categories
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <Link key={c.id} to={`/category/${c.id}`} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:border-pink-400 hover:text-pink-600 hover:shadow transition">
                {c.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
