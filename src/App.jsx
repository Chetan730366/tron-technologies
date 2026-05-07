import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CategoryPage from "./Pages/CategoryPage";
import ProductDetail from "./Pages/ProductDetail";
import NotFound from "./Pages/NotFound";

import { MessageCircle } from "lucide-react";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-[system-ui,sans-serif]">

        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route
              path="/category/:categoryId/product/:productId"
              element={<ProductDetail />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918448773299?text=Hello%20I%20want%20inquiry"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center hover:scale-110 transition"
        >
          <MessageCircle size={26} fill="currentColor" />
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30"></span>
        </a>

      </div>
    </BrowserRouter>
  );
}