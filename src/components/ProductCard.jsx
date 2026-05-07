import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MessageCircle, FileText, Star } from "lucide-react";
import InquiryModal from "./InquiryModal";
import "./ProductCard.css";

export default function ProductCard({ product, index, categoryName, categoryId }) {
  const navigate = useNavigate();
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const catId = categoryId || product.categoryId;
  const detailPath = `/category/${catId}/product/${product.id}`;
  const waLink = `https://wa.me/918448773299?text=${encodeURIComponent(`Hi, I want: ${product.name} SKU: ${product.sku} Price: ₹${product.price}`)}`;

  return (
    <>
      <div onClick={() => navigate(detailPath)} className="product-card" style={{ cursor: "pointer" }}>
        <img src={product.image} alt={product.name} className="product-card-image" />
        <div className="product-card-body">
          <p className="product-card-cat">{categoryName}</p>
          <p className="product-card-title">{product.name}</p>
          <p className="product-card-sku">{product.sku}</p>
          <div className="product-card-rating">
            <Star size={12} /> {product.rating}
          </div>
          <div className="product-card-price-row">
            <span className="product-card-price">₹{product.price.toLocaleString()}</span>
            <span className="product-card-mrp">₹{Math.round(product.price * 1.2).toLocaleString()}</span>
          </div>
          <div className="product-card-actions" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setInquiryOpen(true)} className="product-card-btn-inquiry">
              <FileText size={15} /> Get Inquiry
            </button>
            <a href={waLink} target="_blank" rel="noreferrer" className="product-card-btn-wa">
              <MessageCircle size={18} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>

      <InquiryModal
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        itemName={product.name}
        itemImage={product.image}
        itemSku={product.sku}
        itemPrice={product.price}
        categoryId={catId}
      />
    </>
  );
}