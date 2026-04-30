export const categories = [
  {
    id: "bottle-steam-iron",
    name: "Bottle Steam Iron",
    description:
      "Heavy-duty bottle steam irons engineered for continuous industrial pressing.",
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
    id: "liver",
    name: "Liver",
    description:
      "Brand-new arrival! High-precision liver components engineered for industrial sewing and ironing machinery.",
    accent: "from-orange-500 to-pink-600",
    isNew: true,
  },
];

// Deterministic pseudo-random helper
const seedNum = (seed, idx, min, max) => {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  h = Math.abs((h ^ (idx * 2654435761)) | 0);
  return min + (h % (max - min + 1));
};

const imagePool = {
  "bottle-steam-iron": [
    "https://images.unsplash.com/photo-1585241936939-be4099591252?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop",
  ],
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
  liver: [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1585239525146-ec3a9eb0a675?w=600&h=600&fit=crop",
  ],
};

export const getProductsForCategory = (categoryId) => {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return [];
  const pool = imagePool[categoryId] ?? imagePool["steam-iron-parts"];
  return Array.from({ length: 12 }, (_, i) => {
    const idx = i + 1;
    const price = seedNum(categoryId, idx, 499, 8499);
    const rating = (seedNum(categoryId, idx + 99, 38, 50) / 10).toFixed(1);
    return {
      id: `${categoryId}-${idx}`,
      name: `${cat.name} Model ${String.fromCharCode(
        64 + ((idx - 1) % 26) + 1
      )}-${100 + idx}`,
      price,
      image: pool[i % pool.length],
      sku: `TRN-${categoryId.slice(0, 3).toUpperCase()}-${1000 + idx}`,
      rating: parseFloat(rating),
    };
  });
};
