import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X, User, Phone, MapPin, Package, Camera,
  Image as ImageIcon, Check, Trash2, FileText, Mail, MessageSquare,
} from "lucide-react";
import "./InquiryModal.css";

export default function InquiryModal({
  open, onClose, itemName, itemImage, itemSku, itemPrice,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState("1");
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setSuccess(false);
        setSubmitting(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleFiles = (files) => {
    if (!files) return;
    const arr = Array.from(files).filter((f) => f.type.startsWith("image/"));
    const mapped = arr.map((f) => ({ file: f, url: URL.createObjectURL(f) }));
    setPhotos((prev) => [...prev, ...mapped].slice(0, 5));
  };

  const removePhoto = (idx) => {
    setPhotos((prev) => {
      const copy = [...prev];
      const [removed] = copy.splice(idx, 1);
      if (removed) URL.revokeObjectURL(removed.url);
      return copy;
    });
  };

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!phone.trim()) e.phone = "Phone is required";
    else if (!/^[+\d][\d\s-]{7,15}$/.test(phone.trim())) e.phone = "Enter a valid phone";
    if (!city.trim()) e.city = "City is required";
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess(true);
    setTimeout(() => {
      setName(""); setPhone(""); setCity("");
      setEmail(""); setQty("1"); setMessage("");
      photos.forEach((p) => URL.revokeObjectURL(p.url));
      setPhotos([]);
    }, 200);
  };

  const fallbackImg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect fill='%23fce7f3' width='64' height='64'/><text x='50%25' y='50%25' fill='%23db2777' font-size='10' font-weight='bold' text-anchor='middle' dominant-baseline='middle'>TRON</text></svg>`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inq-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inq-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="inq-header">
              <div>
                <div className="inq-header-eyebrow">Product Inquiry</div>
                <h3 className="inq-header-title">Request a Quote</h3>
              </div>
              <button onClick={onClose} aria-label="Close" className="inq-close-btn">
                <X size={18} />
              </button>
            </div>

            {success ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inq-success">
                <div className="inq-success-icon">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                  >
                    <Check size={42} strokeWidth={3} />
                  </motion.div>
                </div>
                <h4>Inquiry Submitted!</h4>
                <p>Thank you! Our sales team will contact you on the provided phone number within 24 hours.</p>
                <button onClick={onClose} className="inq-btn-submit" style={{ marginTop: 24 }}>
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="inq-body">
                <div className="inq-item">
                  <div className="inq-item-img">
                    {itemImage ? (
                      <img
                        src={itemImage}
                        alt={itemName}
                        onError={(e) => { e.target.src = fallbackImg; }}
                      />
                    ) : (
                      <Package size={26} />
                    )}
                  </div>
                  <div className="inq-item-info">
                    <div className="inq-item-eyebrow">Inquiring about</div>
                    <div className="inq-item-name">{itemName}</div>
                    <div className="inq-item-meta">
                      {itemSku && <span>SKU: {itemSku}</span>}
                      {itemPrice != null && (
                        <>
                          <span>•</span>
                          <span className="inq-item-price">₹{itemPrice.toLocaleString()}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <Field label="Full Name" required icon={<User size={16} />} error={errors.name}>
                  <input
                    type="text" value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                  />
                </Field>

                <div className="inq-row">
                  <Field label="Phone Number" required icon={<Phone size={16} />} error={errors.phone}>
                    <input
                      type="tel" value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 99999 99999"
                    />
                  </Field>
                  <Field label="City" required icon={<MapPin size={16} />} error={errors.city}>
                    <input
                      type="text" value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Mumbai"
                    />
                  </Field>
                </div>

                <div className="inq-row">
                  <Field label="Email (optional)" icon={<Mail size={16} />} error={errors.email}>
                    <input
                      type="email" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="Quantity" icon={<Package size={16} />}>
                    <input
                      type="number" min={1} value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      placeholder="1"
                    />
                  </Field>
                </div>

                <Field label="Message (optional)" icon={<MessageSquare size={16} />}>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Add any specific requirements, model number, or questions..."
                  />
                </Field>

                <div>
                  <label className="inq-field-label">
                    <ImageIcon size={14} /> Attach Photos (optional)
                  </label>
                  <p className="inq-photo-help">
                    Upload reference images, samples, or model photos. Max 5 images.
                  </p>

                  <input
                    ref={fileInputRef} type="file" accept="image/*" multiple
                    style={{ display: "none" }}
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                  <input
                    ref={cameraInputRef} type="file" accept="image/*" capture="environment"
                    style={{ display: "none" }}
                    onChange={(e) => handleFiles(e.target.files)}
                  />

                  <div className="inq-photo-grid">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={photos.length >= 5}
                      className="inq-photo-btn"
                    >
                      <ImageIcon size={22} />
                      <span className="inq-photo-btn-label">Gallery</span>
                      <span className="inq-photo-btn-hint">Choose from device</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => cameraInputRef.current?.click()}
                      disabled={photos.length >= 5}
                      className="inq-photo-btn"
                    >
                      <Camera size={22} />
                      <span className="inq-photo-btn-label">Camera</span>
                      <span className="inq-photo-btn-hint">Take a photo</span>
                    </button>
                  </div>

                  {photos.length > 0 && (
                    <div className="inq-previews">
                      {photos.map((p, i) => (
                        <motion.div
                          key={p.url}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inq-preview"
                        >
                          <img src={p.url} alt="" />
                          <button
                            type="button" onClick={() => removePhoto(i)}
                            className="inq-preview-remove"
                            aria-label="Remove"
                          >
                            <Trash2 size={12} />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="inq-footer">
                  <button type="button" onClick={onClose} className="inq-btn-cancel">
                    Cancel
                  </button>
                  <button type="submit" disabled={submitting} className="inq-btn-submit">
                    {submitting ? (
                      <>
                        <span className="inq-spinner" /> Submitting...
                      </>
                    ) : (
                      <>
                        <FileText size={16} /> Submit Inquiry
                      </>
                    )}
                  </button>
                </div>

                <p className="inq-fineprint">
                  By submitting, you agree to be contacted by our sales team via phone or WhatsApp.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, required, icon, error, children }) {
  return (
    <div>
      <label className="inq-field-label">
        {icon}{label}{required && <span className="inq-required">*</span>}
      </label>
      <div className={`inq-field-input ${error ? "error" : ""}`}>
        {children}
      </div>
      {error && <p className="inq-field-error">{error}</p>}
    </div>
  );
}
