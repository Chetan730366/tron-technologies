export const categories = [
  {
    id: "bottle-steam-iron",
    name: "Bottle Steam Iron",
    description:
      "Heavy-duty gravity bottle feed steam irons engineered for continuous industrial pressing. East Strong, Hayabusa & Silti brands — trusted by 5,000+ garment factories across India.",
    accent: "from-rose-500 to-pink-600",
  },
  {
    id: "teflon-shoe",
    name: "Teflon Shoe",
    description:
      "Premium teflon shoe attachments for smooth, scratch-free ironing on every fabric.",
    accent: "from-fuchsia-500 to-pink-600",
  },
  {
    id: "teflon-boot",
    name: "Teflon Boot",
    description:
      "High-temperature teflon boots offering durability and crisp finish in factory use.",
    accent: "from-pink-500 to-rose-600",
  },
  {
    id: "gasket",
    name: "Gasket",
    description:
      "Industrial-grade gaskets ensuring a perfect steam seal and zero leakage.",
    accent: "from-rose-600 to-red-600",
  },
  {
    id: "steam-iron-parts",
    name: "Steam Iron Parts",
    description:
      "Genuine spare parts for all major industrial steam iron models and brands.",
    accent: "from-red-500 to-rose-600",
  },
  {
    id: "rotating-hook",
    name: "Rotating Hook",
    description:
      "Precision rotating hooks crafted for industrial sewing machines and high-speed lines.",
    accent: "from-pink-600 to-fuchsia-700",
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    description:
      "The latest additions to our industrial steam iron range — freshly stocked and ready to ship pan-India. Be the first to get the newest models.",
    accent: "from-violet-500 to-purple-700",
    isNew: true,
  },
];

// ─── REAL BOTTLE STEAM IRON PRODUCTS ─────────────────────────────────────────
// Every product has categoryId set explicitly.
// ProductCard reads product.categoryId to build: /category/bottle-steam-iron/product/bsi-xxx
// Images go in: public/images/   (see README_images.md for rename table)

export const bottleSteamIronProducts = [
  {
    id: "bsi-es300l",
    categoryId: "bottle-steam-iron",
    name: "East Strong ES-300L Steam Iron",
    brand: "East Strong",
    price: 3299,
    sku: "TRN-BSI-ES300L",
    rating: 4.8,
    wattage: "1600W",
    voltage: "220V-240V AC",
    origin: "Taiwan (Designed)",
    isNew: true,
    description:
      "The East Strong ES-300L is a Senior Series gravity feed-water bottle electric steam iron built for industrial and institutional use. Features precision heat control, steam switch, and chrome sole plate with multiple steam holes for perfect pressing on all fabrics.",
    features: [
      "1600W heavy-duty heating element",
      "Gravity feed water bottle system",
      "Precise bimetallic thermostat heat controller",
      "Steam switch with micro valve",
      "Chrome-plated sole plate with 17 steam holes",
      "ISO 9001 certified manufacturing",
      "Includes: Iron, water bottle, connecting hose, iron rest tray",
    ],
    specs: [
      ["Model", "ES-300L"],
      ["Wattage", "1600W"],
      ["Voltage", "220V – 240V AC / 50-60Hz"],
      ["Brand", "East Strong"],
      ["Design Origin", "Taiwan"],
      ["Thermostat", "Bimetallic Type"],
      ["Sole Plate", "Chrome Plated with Steam Holes"],
      ["Box Contents", "Iron + Water Bottle + Hose + Iron Rest"],
      ["Warranty", "12 Months"],
      ["Country of Origin", "India (Assembled)"],
      ["Certifications", "CE, UL, ISO 9001"],
      ["SKU", "TRN-BSI-ES300L"],
    ],
    images: [
      "/images/ES1-300L-STRONG.png",
      "/images/ES2-300L-STRONG.png",
      "/images/ES3-300L-STRONG.png",
      "/images/ES4-300L-STRONG.png",
      "/images/ES5-300L-STRONG.png",
    ],
  },
  {
    id: "bsi-hay9300l",
    categoryId: "bottle-steam-iron",
    name: "Hayabusa 9300L MAX Gold Steam Iron",
    brand: "Hayabusa",
    price: 3799,
    sku: "TRN-BSI-HAY9300L",
    rating: 4.7,
    wattage: "1250W",
    voltage: "230V / 50Hz",
    origin: "Make in India",
    isNew: true,
    description:
      "The Hayabusa 9300L MAX Gold is a Double XL Power Steam iron made in India with Quick Heat Technology and low power consumption. Features a golden PTFE-coated aluminium alloy sole plate and ISI certified components for professional garment pressing.",
    features: [
      "Double XL Power Steam technology",
      "Quick Heat Technology — ready in 60 seconds",
      "Low power consumption — 1250W",
      "ISI certified (IS:302-2-3 & IS:6290)",
      "PTFE coated aluminium alloy sole plate (Golden)",
      "4-litre water tank included",
      "Long wire for factory floor use",
      "Make in India product",
    ],
    specs: [
      ["Model", "9300L MAX GOLD"],
      ["Wattage", "1250W"],
      ["Voltage", "230V / 50Hz"],
      ["Brand", "Hayabusa"],
      ["Sole Plate", "Aluminium Alloy, PTFE Coated (Golden)"],
      ["Thermostat", "Bimetal Type"],
      ["Tank Capacity", "4 Litres"],
      ["ISI Certification", "CML: 8100179607 & 8100183412"],
      ["Box Contents", "Iron + 4L Water Tank + Hose + Iron Rest + Accessories"],
      ["Warranty", "6 Months"],
      ["Country of Origin", "India"],
      ["SKU", "TRN-BSI-HAY9300L"],
    ],
    images: [
      "/images/HAY1-9300L-GOLD.jpeg",
      "/images/HAY2-9300L-GOLD.jpeg",
    ],
  },
  {
    id: "bsi-hay9999pro",
    categoryId: "bottle-steam-iron",
    name: "Hayabusa 9999 PRO Commercial Steam Iron",
    brand: "Hayabusa",
    price: 4299,
    sku: "TRN-BSI-HAY9999PRO",
    rating: 4.9,
    wattage: "1250W",
    voltage: "230V / 50Hz",
    origin: "Make in India",
    isNew: true,
    description:
      "The Hayabusa 9999 PRO is a flagship Gravity Bottle Feed Commercial Steam Iron with Thermostatic Electric technology and PTFE-coated aluminium alloy sole plate. Marketed and sold by Tron Technologies, this ISI-certified iron is the top choice for professional garment factories.",
    features: [
      "Thermostatic electric gravity bottle steam iron",
      "PTFE coated aluminium alloy sole plate",
      "Micro switch valve for precise steam control",
      "Bimetal thermostat for accurate temperature",
      "ISI certified — IS:302-2-3 & IS:6290",
      "4-litre Hayabusa branded water tank",
      "Yellow steam switch for easy identification",
      "Tron Technologies authorised product",
    ],
    specs: [
      ["Model", "9999 PRO"],
      ["Wattage", "1250W"],
      ["Voltage", "230V / 50Hz"],
      ["Brand", "Hayabusa"],
      ["Sole Plate", "Aluminium Alloy, PTFE Coated"],
      ["Valve Switch", "Micro Switch"],
      ["Thermostat", "Bimetal Type"],
      ["Tank Capacity", "4 Litres"],
      ["ISI Certification", "CML: 8100179607 & 8100183412"],
      ["Marketed By", "Tron Technologies, 14/1636 Govind Puri, Kalkaji, New Delhi 110019"],
      ["Box Contents", "Iron + 4L Tank + Hose + Rest + Full Accessories Kit"],
      ["Warranty", "6 Months"],
      ["Country of Origin", "India"],
      ["SKU", "TRN-BSI-HAY9999PRO"],
    ],
    images: [
      "/images/HAY1-9999-PRO.png",
      "/images/HAY2-9999-PRO.png",
      "/images/HAY3-9999-PRO.png",
      "/images/HAY4-9999-PRO.png",
      "/images/HAY5-9999-PRO.png",
    ],
  },
  {
    id: "bsi-sil2250",
    categoryId: "bottle-steam-iron",
    name: "Silti 2250 Industrial Steam Iron",
    brand: "Silti",
    price: 3499,
    sku: "TRN-BSI-SIL2250",
    rating: 4.6,
    wattage: "1650W",
    voltage: "220V AC",
    origin: "Taiwan Tech",

    description:
      "The Silti 2250 (ES-300L) is a professional industrial steam iron built with Taiwan Technology for heavy-duty factory use. Rated at 1650W with a chrome sole plate and micro-switch steam valve, it delivers consistent high-temperature pressing — tested and certified before dispatch.",
    features: [
      "1650W professional-grade heating element",
      "Taiwan Technology engineering",
      "Chrome plated sole plate",
      "Micro-switch steam valve",
      "Factory tested & quality certified",
      "Ergonomic grip handle for extended use",
      "Heavy-duty cable for industrial environments",
    ],
    specs: [
      ["Model", "2250 / ES-300L"],
      ["Wattage", "1650W"],
      ["Voltage", "220V AC"],
      ["Brand", "Silti Industrial Products"],
      ["Design Origin", "Taiwan Technology"],
      ["Sole Plate", "Chrome Plated"],
      ["Steam Valve", "Micro Switch"],
      ["Quality Tag", "Professional Quality — Tested"],
      ["Box Contents", "Iron + Water Bottle + Hose + Iron Rest"],
      ["Warranty", "12 Months"],
      ["Country of Origin", "India (Assembled)"],
      ["SKU", "TRN-BSI-SIL2250"],
    ],
    images: [
      "/images/SIL1-300L-TW.png",
      "/images/SIL2-300L-TW.png",
      "/images/SIL3-300L-TW.png",
      "/images/SIL4-300L-TW.png",
    ],
  },
  {
    id: "bsi-sumo4455",
    categoryId: "bottle-steam-iron",
    name: "Sumo 4455-6L Commercial Steam Iron",
    brand: "Sumo",
    price: 4799,
    sku: "TRN-BSI-SUMO4455",
    rating: 4.7,
    wattage: "1400W",
    voltage: "220V-240V AC",
    origin: "India",
    isNew: false,
    description:
      "The Sumo 4455-6L is a heavy-duty commercial steam iron with a massive 6-litre water tank for extended non-stop pressing sessions. Ideal for large-scale garment factories, dry cleaning units, and textile mills requiring high-volume steam output.",
    features: [
      "Extra-large 6-litre water tank",
      "1400W industrial heating element",
      "Non-stop operation for production lines",
      "Heavy chrome sole plate",
      "Adjustable steam output control",
      "Anti-calcium filter system",
      "Suitable for all fabric types",
    ],
    specs: [
      ["Model", "4455-6L"],
      ["Wattage", "1400W"],
      ["Voltage", "220V – 240V AC"],
      ["Brand", "Sumo"],
      ["Tank Capacity", "6 Litres"],
      ["Sole Plate", "Heavy Chrome Plated"],
      ["Box Contents", "Iron + 6L Tank + Hose + Iron Rest"],
      ["Warranty", "12 Months"],
      ["Country of Origin", "India"],
      ["SKU", "TRN-BSI-SUMO4455"],
    ],
    images: [
      "/images/SUMO1-4455-6L.png",
      "/images/SUMO2-4455-6L.png",
      "/images/SUMO3-4455-6L.png",
      "/images/SUMO4-4455-6L.png",
      "/images/SUMO5-4455-6L.png",
    ],
  },
  {
    id: "bsi-ss300",
    categoryId: "bottle-steam-iron",
    name: "SS-300 Gravity Steam Iron",
    brand: "SS",
    price: 2799,
    sku: "TRN-BSI-SS300",
    rating: 4.5,
    wattage: "1200W",
    voltage: "220V AC",
    origin: "India",
    isNew: false,
    description:
      "The SS-300 Gravity Steam Iron is an entry-level industrial steam iron ideal for small garment units and tailoring shops. Lightweight yet powerful, it delivers consistent steam output with easy maintenance.",
    features: [
      "Compact and lightweight design",
      "1200W heating element",
      "Gravity-feed water system",
      "Easy-to-replace heating element",
      "Wide spare parts availability",
      "Anti-drip valve",
      "Budget-friendly for small units",
    ],
    specs: [
      ["Model", "SS-300"],
      ["Wattage", "1200W"],
      ["Voltage", "220V AC"],
      ["Brand", "SS"],
      ["Sole Plate", "Aluminium with Chrome Finish"],
      ["Box Contents", "Iron + Water Bottle + Hose"],
      ["Warranty", "6 Months"],
      ["Country of Origin", "India"],
      ["SKU", "TRN-BSI-SS300"],
    ],
    images: [
      "/images/SS1-300-GRAVITY.png",
      "/images/SS2-300-GRAVITY.png",
      "/images/SS3-300-GRAVITY.png",
      "/images/SS4-300-GRAVITY.png",
      "/images/SS5-300-GRAVITY.png",
    ],
  },
];

export const teflonShoeProducts = [
  {
    id: "shoe-ts100",
    categoryId: "teflon-shoe",
    name: "Teflon Shoe TS-100 Heavy Duty",
    brand: "Tron",
    price: 799,
    rating: 4.7,
    isNew: true,
    description: "Industrial grade teflon shoe for smooth ironing without fabric damage.",
    images: [
      "/images/Hayabusa_teflon_shoe1.jpg",
      "/images/Hayabusa_teflon_shoe2.png",

    ],
  },

  {
    id: "shoe-ts200",
    categoryId: "teflon-shoe",
    name: "Teflon Shoe TS-200 Premium",
    brand: "Tron",
    price: 999,
    rating: 4.8,
    isNew: true,
    description: "Premium heat resistant teflon shoe for garment factories.",
    images: [
      "/images/Hayabusa_teflon_shoe1.jpg",
    ],
  },
];

// ─── NEW ARRIVALS ─────────────────────────────────────────────────────────────
// Reuse product data but assign categoryId = "new-arrivals".
// ProductDetail uses _sourceId to load full specs/features/images.

export const newArrivalProducts = [
  ...bottleSteamIronProducts,
  ...teflonShoeProducts,
]
  .filter((p) => p.isNew)
  .map((p) => ({
    ...p,
    id: `new-${p.id}`,
    categoryId: "new-arrivals",
    _sourceId: p.id,
    isNew: true,
  }));

// ─── ALL REAL PRODUCTS (flat list for getFullProductById) ─────────────────────
export const allRealProducts = [
  ...bottleSteamIronProducts,
  ...newArrivalProducts,
  ...teflonShoeProducts, // ✅ ADD THIS LINE
];
// ─── PSEUDO-RANDOM HELPER (generated categories) ─────────────────────────────
const seedNum = (seed, idx, min, max) => {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  h = Math.abs((h ^ (idx * 2654435761)) | 0);
  return min + (h % (max - min + 1));
};

const imagePools = {
  "teflon-shoe": [
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
  ],
  "teflon-boot": [
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092918484-8313ab47b2ca?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=600&h=600&fit=crop",
  ],
  gasket: [
    "https://images.unsplash.com/photo-1581092918484-8313ab47b2ca?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=600&fit=crop",
  ],
  "steam-iron-parts": [
    "https://images.unsplash.com/photo-1585239525146-ec3a9eb0a675?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop",
  ],
  "rotating-hook": [
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=600&fit=crop",
  ],
};

// ─── getProductsForCategory ───────────────────────────────────────────────────
export const getProductsForCategory = (categoryId) => {
  if (categoryId === "bottle-steam-iron") {
    return bottleSteamIronProducts.map((p) => ({
      id: p.id,
      categoryId: p.categoryId,
      name: p.name,
      brand: p.brand,
      price: p.price,
      image: p.images[0],
      sku: p.sku,
      rating: p.rating,
      wattage: p.wattage,
      isNew: p.isNew,
    }));
  }

  if (categoryId === "new-arrivals") {
    return newArrivalProducts.map((p) => ({
      id: p.id,
      categoryId: p.categoryId,
      name: p.name,
      brand: p.brand,
      price: p.price,
      image: p.images[0],
      sku: p.sku,
      rating: p.rating,
      wattage: p.wattage,
      isNew: true,
      _sourceId: p._sourceId,
    }));
  }

  // Generated products for teflon-shoe, teflon-boot, gasket, steam-iron-parts, rotating-hook
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return [];
  const pool = imagePools[categoryId] ?? imagePools["steam-iron-parts"];
  return Array.from({ length: 12 }, (_, i) => {
    const idx = i + 1;
    const price = seedNum(categoryId, idx, 499, 8499);
    const rating = (seedNum(categoryId, idx + 99, 38, 50) / 10).toFixed(1);
    return {
      id: `${categoryId}-${idx}`,
      categoryId,
      name: `${cat.name} Model ${String.fromCharCode(64 + ((idx - 1) % 26) + 1)}-${100 + idx}`,
      price,
      image: pool[i % pool.length],
      sku: `TRN-${categoryId.slice(0, 3).toUpperCase()}-${1000 + idx}`,
      rating: parseFloat(rating),
    };
  });
};

// ─── getFullProductById ───────────────────────────────────────────────────────
// Used by ProductDetail to load real specs/features/gallery.
// Handles direct IDs (bsi-hay9999pro) AND new-arrival IDs (new-bsi-hay9999pro).
export const getFullProductById = (productId) => {
  // Try direct match first
  const direct = allRealProducts.find((p) => p.id === productId);
  if (direct) return direct;

  // new-arrival: strip "new-" prefix to find source product
  if (productId.startsWith("new-")) {
    const sourceId = productId.replace(/^new-/, "");
    return bottleSteamIronProducts.find((p) => p.id === sourceId) ?? null;
  }

  return null;
};