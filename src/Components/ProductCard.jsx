import { motion } from "framer-motion";
import { MessageCircle, FileText, Star, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import InquiryModal from "./InquiryModal";
import "./ProductCard.css";

export default function ProductCard({ product, index, categoryName, categoryId }) {
  const navigate = useNavigate();
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const catId = categoryId ?? product.id.replace(/-\d+$/, "");
  const detailPath = `/category/${catId}/product/${product.id}`;

  const waMsg = encodeURIComponent(
    `Hello Tron Technologies, I'm interested in:\n\nProduct: ${product.name}\nSKU: ${product.sku}\nPrice: ₹${product.price}\nCategory: ${categoryName}\n\nPlease share more details.`
  );
  const waLink = `https://wa.me/919315974174?text=${waMsg}`;

  const fallbackImg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect fill='%23f3f4f6' width='400' height='400'/><text x='50%25' y='50%25' fill='%23db2777' font-family='sans-serif' font-size='28' font-weight='bold' text-anchor='middle' dominant-baseline='middle'>TRON TECH</text></svg>`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.45,
          delay: Math.min(index * 0.05, 0.5),
          ease: "easeOut",
        }}
        onClick={() => navigate(detailPath)}
        className="product-card"
      >
        <div className="product-card-image-wrap">
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image"
            loading="lazy"
            onError={(e) => {
              e.target.src = fallbackImg;
            }}
          />
          <div className="product-card-sku">{product.sku}</div>
          <div className="product-card-rating">
            <Star size={12} className="star" />
            {product.rating}
          </div>
          <div className="product-card-overlay">
            <span className="product-card-quick">
              <Eye size={14} /> Quick View
            </span>
          </div>
        </div>

        <div className="product-card-body">
          <div className="product-card-cat">{categoryName}</div>
          <Link
            to={detailPath}
            onClick={(e) => e.stopPropagation()}
            className="product-card-title"
          >
            {product.name}
          </Link>

          <div className="product-card-price-row">
            <span className="product-card-price">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="product-card-mrp">
              ₹{Math.round(product.price * 1.2).toLocaleString()}
            </span>
          </div>

          <div className="product-card-actions" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setInquiryOpen(true);
              }}
              className="product-card-btn-inquiry"
            >
              <FileText size={15} /> Get Inquiry
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="product-card-btn-wa"
            >
              <MessageCircle size={18} fill="currentColor" />
            </a>
          </div>
        </div>
      </motion.div>

      <InquiryModal
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        itemName={product.name}
        itemImage={product.image}
        itemSku={product.sku}
        itemPrice={product.price}
      />
    </>
  );
}
