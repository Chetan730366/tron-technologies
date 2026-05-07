import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  categories,
  getProductsForCategory,
  getFullProductById,
} from "../data/categories.js";
import ProductCard from "../components/ProductCard";
import InquiryModal from "../components/InquiryModal";
import {
  ChevronRight, Home, Star, MessageCircle, FileText, Truck,
  ShieldCheck, RotateCcw, Award, Check, Minus, Plus, Share2, Heart, Phone,
} from "lucide-react";

export default function ProductDetail() {
  const { categoryId, productId } = useParams();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState("desc");
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const category = categories.find((c) => c.id === categoryId);
  if (!category) return <Navigate to="/" replace />;

  const allProducts = getProductsForCategory(category.id);
  const product = allProducts.find((p) => p.id === productId);
  if (!product) return <Navigate to={`/category/${category.id}`} replace />;

  // ✅ FIX 1: Full product data (with images[], specs[], features[])
  const fullProduct = getFullProductById(productId) ?? product;

  const related = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  // ✅ FIX 2: Gallery from real images array
  const gallery =
    fullProduct?.images && fullProduct.images.length > 0
      ? fullProduct.images
      : [product.image];

  // ✅ FIX 3: Real specs from fullProduct
  const specs =
    fullProduct?.specs && fullProduct.specs.length > 0
      ? fullProduct.specs
      : [
          ["SKU / Model", product.sku],
          ["Category", category.name],
          ["Material", "Industrial-grade Aluminum / Teflon"],
          ["Operating Voltage", "220V – 240V AC"],
          ["Warranty", "12 Months Manufacturer Warranty"],
          ["Country of Origin", "India"],
          ["Min. Order Qty", "1 Unit"],
          ["Packaging", "Bubble-wrapped corrugated box"],
        ];

  // ✅ FIX 4: Real features from fullProduct
  const features =
    fullProduct?.features && fullProduct.features.length > 0
      ? fullProduct.features
      : [
          "Heavy-duty industrial build for 24/7 operation",
          "Corrosion-resistant coating for long life",
          "Compatible with all leading factory machinery",
          "Tested & QC approved before dispatch",
          "Easy installation — plug & play",
        ];

  // ✅ FIX 5: Real description from fullProduct
  const description =
    fullProduct?.description ||
    `The ${product.name} is a flagship industrial-grade ${category.name.toLowerCase()} engineered for demanding garment factories, textile mills and OEM applications.`;

  const waMsg = encodeURIComponent(
    `Hello Tron Technologies, I'm interested in:\n\nProduct: ${product.name}\nSKU: ${product.sku}\nPrice: ₹${product.price} × ${qty}\nCategory: ${category.name}\n\nPlease share more details.`
  );
  const waLink = `https://wa.me/918448773299?text=${waMsg}`;

  const mrp = Math.round(product.price * 1.2);
  const off = Math.round(((mrp - product.price) / mrp) * 100);

  const fb = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect fill='%23f3f4f6' width='400' height='400'/><text x='50%25' y='50%25' fill='%23db2777' font-family='sans-serif' font-size='28' font-weight='bold' text-anchor='middle' dominant-baseline='middle'>TRON TECH</text></svg>`;

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-xs md:text-sm text-slate-500 font-semibold">
            <Link to="/" className="flex items-center gap-1 hover:text-pink-600">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={14} />
            <Link to={`/category/${category.id}`} className="hover:text-pink-600">
              {category.name}
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── Image Gallery ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 relative group">
              <motion.img
                key={activeImg}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={gallery[activeImg]}
                alt={product.name}
                className="w-full h-full object-contain p-4"
                onError={(e) => { e.target.src = fb; }}
              />
              {off > 0 && (
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-pink-600 text-white text-xs font-bold shadow-lg">
                  {off}% OFF
                </div>
              )}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center text-slate-600 hover:text-pink-600 transition">
                  <Heart size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center text-slate-600 hover:text-pink-600 transition">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Thumbnails — only show if more than 1 image */}
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition ${
                      i === activeImg
                        ? "border-pink-600 ring-2 ring-pink-200"
                        : "border-slate-200 hover:border-pink-300"
                    }`}
                  >
                    <img
                      src={g}
                      alt=""
                      className="w-full h-full object-contain p-1"
                      onError={(e) => { e.target.src = fb; }}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* ── Product Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-pink-600">
              {category.name}
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              {product.name}
            </h1>

            {/* Brand badge */}
            {fullProduct?.brand && (
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                Brand: {fullProduct.brand}
              </div>
            )}

            <div className="mt-3 flex items-center gap-3 text-sm flex-wrap">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    className={
                      s <= Math.round(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }
                  />
                ))}
                <span className="ml-1 font-bold text-slate-700">{product.rating}</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">128 verified reviews</span>
              <span className="text-slate-300">|</span>
              <span className="text-emerald-600 font-semibold">In Stock</span>
            </div>

            {/* Price Box */}
            <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl md:text-5xl font-black text-pink-600">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-lg text-slate-400 line-through">
                  ₹{mrp.toLocaleString()}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs font-bold">
                  Save ₹{(mrp - product.price).toLocaleString()}
                </span>
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Inclusive of all taxes · Bulk pricing on request
              </div>

              {/* Qty Selector */}
              <div className="mt-5 flex items-center gap-4 flex-wrap">
                <span className="text-sm font-semibold text-slate-700">Qty:</span>
                <div className="flex items-center border border-slate-300 rounded-full overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 transition"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center font-bold text-slate-900">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 transition"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <span className="text-sm text-slate-500">
                  Total:{" "}
                  <span className="font-bold text-slate-900">
                    ₹{(product.price * qty).toLocaleString()}
                  </span>
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setInquiryOpen(true)}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition"
                >
                  <FileText size={18} /> Get Inquiry
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/30 transition"
                >
                  <MessageCircle size={18} fill="currentColor" /> WhatsApp Us
                </a>
              </div>

              <a
                href="tel:+919315974174"
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-pink-400 hover:text-pink-600 transition"
              >
                <Phone size={16} /> Call to Order: +91 93159 74174
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: <Truck size={18} />, t: "Fast Dispatch" },
                { icon: <ShieldCheck size={18} />, t: "ISO Certified" },
                { icon: <RotateCcw size={18} />, t: "Easy Returns" },
                { icon: <Award size={18} />, t: "1 Yr Warranty" },
              ].map((b) => (
                <div
                  key={b.t}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 text-sm"
                >
                  <span className="text-pink-600">{b.icon}</span>
                  <span className="font-semibold text-slate-700">{b.t}</span>
                </div>
              ))}
            </div>

            {/* Features List */}
            {features.length > 0 && (
              <ul className="mt-6 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>

        {/* ── Tabs: Description / Specs / Reviews ── */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar">
            {[
              ["desc", "Description"],
              ["specs", "Specifications"],
              ["reviews", "Reviews (128)"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition relative ${
                  activeTab === key
                    ? "text-pink-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {label}
                {activeTab === key && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute left-4 right-4 bottom-0 h-[3px] bg-pink-600 rounded-t"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            {/* ── Description Tab ── */}
            {activeTab === "desc" && (
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>{description}</p>
                {/* Wattage / Voltage quick stats */}
                {(fullProduct?.wattage || fullProduct?.voltage) && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    {fullProduct.wattage && (
                      <div className="px-4 py-2 rounded-lg bg-pink-50 border border-pink-100 text-sm">
                        <span className="font-semibold text-slate-700">Power: </span>
                        <span className="text-pink-700 font-bold">{fullProduct.wattage}</span>
                      </div>
                    )}
                    {fullProduct.voltage && (
                      <div className="px-4 py-2 rounded-lg bg-pink-50 border border-pink-100 text-sm">
                        <span className="font-semibold text-slate-700">Voltage: </span>
                        <span className="text-pink-700 font-bold">{fullProduct.voltage}</span>
                      </div>
                    )}
                    {fullProduct.origin && (
                      <div className="px-4 py-2 rounded-lg bg-pink-50 border border-pink-100 text-sm">
                        <span className="font-semibold text-slate-700">Origin: </span>
                        <span className="text-pink-700 font-bold">{fullProduct.origin}</span>
                      </div>
                    )}
                  </div>
                )}
                <p>
                  Tron Technologies has been the trusted partner of 5,000+ factories across India since 1982. From single-unit replacement orders to bulk OEM contracts, we supply on-time, every time.
                </p>
              </div>
            )}

            {/* ── Specs Tab ── */}
            {activeTab === "specs" && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-100">
                    {specs.map(([k, v]) => (
                      <tr key={k}>
                        <td className="py-3 pr-4 font-semibold text-slate-700 w-1/3">{k}</td>
                        <td className="py-3 text-slate-600">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ── Reviews Tab ── */}
            {activeTab === "reviews" && (
              <div className="space-y-5">
                {[
                  { n: "Rajesh K.", r: 5, t: "Excellent quality. Running non-stop in our garment unit for 8 months without any issue.", d: "2 weeks ago" },
                  { n: "Priya M.", r: 4, t: "Good build and fast delivery. Packaging could be improved a bit.", d: "1 month ago" },
                  { n: "Suresh T.", r: 5, t: "Best price in the market for this quality. Will order again.", d: "2 months ago" },
                ].map((rev, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold">
                          {rev.n[0]}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{rev.n}</div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                size={12}
                                className={
                                  s <= rev.r
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-slate-300"
                                }
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">{rev.d}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{rev.t}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Inquiry Modal ── */}
        <InquiryModal
          open={inquiryOpen}
          onClose={() => setInquiryOpen(false)}
          itemName={`${product.name} (Qty: ${qty})`}
          itemImage={gallery[0]}
          itemSku={product.sku}
          itemPrice={product.price * qty}
        />

        {/* ── Related Products ── */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">
                  You may also like
                </div>
                <h2 className="mt-1 text-2xl md:text-3xl font-black text-slate-900">
                  Related Products
                </h2>
              </div>
              <Link
                to={`/category/${category.id}`}
                className="text-sm font-bold text-pink-600 hover:text-pink-700 inline-flex items-center gap-1"
              >
                View all <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  index={i}
                  categoryName={category.name}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}