"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuItem } from "@/types";
import { useCart } from "@/context/CartContext";
import { Plus, Check } from "lucide-react";

// ── Per-item image map (keyed by item.id) ─────────────────────────────────
// Items not listed here fall back to CATEGORY_FALLBACK below.
const ITEM_IMAGES: Record<string, string> = {
    // ── Classic Pizzas ──────────────────────────────────────────────────────
    "cl-margherita": "/images/margrita_pizza.jpeg",
    "cl-golden-paneer": "/images/golden_paneer_pizza.jpeg",
    // cl-mexican-mafia           → no specific image (falls back to category)
    "cl-family-jewels": "/images/family_jewels_pizza.jpeg",
    "cl-veg-deluxe": "/images/veg_delux_pizza.jpeg",
    "cl-ratatouille": "/images/ratatouille_pizza.jpeg",
    "cl-al-fungi": "/images/pizza_al_fungi.jpeg",
    // cl-double-cheese-margherita → no specific image (falls back to category)

    // ── Tandoori Pizzas ─────────────────────────────────────────────────────
    "td-mushroom": "/images/mushroom_tandoori_pizza.jpeg",
    "td-paneer": "/images/paneer_tandoori_pizza.jpeg",
    "td-paneer-mushroom": "/images/paneer_mashroom_tandoori_pizza.jpeg",
    // td-mix                    → no specific image (falls back to category)

    // ── Premium Pizzas ──────────────────────────────────────────────────────
    "pp-italian": "/images/italian_pizza.jpeg",
    "pp-chilly-garlic": "/images/chilli_garlic_pizza.jpeg",
    // pp-peppy-paneer            → no specific image (falls back to category)
    "pp-mangolian-paneer": "/images/mangolian_paneer_pizza.jpeg",
    "pp-spicy-chilli-paneer": "/images/spicy_chilli_paneer_pizza.jpeg",
    "pp-4-cheese": "/images/four_cheese_pizza.jpeg",
    // pp-az-18inch               → no specific image (falls back to category)
    // pp-room-special-18         → no specific image (falls back to category)

    // ── Classic Pizza Range ─────────────────────────────────────────────────
    "cr-classic": "/images/classic_pizza.jpeg",
    // cr-chocolate               → no specific image (falls back to category)
    // cr-paneer                  → no specific image (falls back to category)
    // cr-paneer-mushroom         → no specific image (falls back to category)

    // ── Pizza Mania – Square Pizzas (all share the same photo) ──────────────
    "pm-veg-square": "/images/veg-paneer-paneer_mashroom-mashroom_sqare_pizza.jpeg",
    "pm-mushroom-square": "/images/veg-paneer-paneer_mashroom-mashroom_sqare_pizza.jpeg",
    "pm-paneer-square": "/images/veg-paneer-paneer_mashroom-mashroom_sqare_pizza.jpeg",
    "pm-paneer-mushroom-square": "/images/veg-paneer-paneer_mashroom-mashroom_sqare_pizza.jpeg",

    // ── Panini Sandwiches ────────────────────────────────────────────────────
    // pn-chocolate               → no specific image (falls back to category)
    // pn-masala-cheese           → no specific image (falls back to category)
    "pn-cheese-chilli": "/images/maxican_pinani.jpeg",
    "pn-mexican": "/images/maxican_pinani.jpeg",
    // pn-garlic-cheese           → no specific image (falls back to category)
    "pn-creamy-cheese": "/images/creamy_cheese_pinani.jpeg",
    "pn-mangolian-cheese": "/images/mangolian_cheese_pinani.jpeg",

    // ── Penne Pasta ─────────────────────────────────────────────────────────
    "pa-red-sauce": "/images/red_souce_pasta.jpeg",
    "pa-mangolian-red": "/images/mangolian_red_sauce_pasta.jpeg",
    // pa-spicy-masala            → no specific image (falls back to category)
    "pa-baked-cheese": "/images/baked_cheese_pasta.jpeg",
    // pa-italian                 → no specific image (falls back to category)
    "pa-creamy-cheese": "/images/creamy_cheese_pasta.jpeg",

    // ── Grills & Sandwiches ──────────────────────────────────────────────────
    "gr-american-corn": "/images/american_corn_grilled.jpeg",
    // gr-masala-cheese           → no specific image (falls back to category)
    "gr-veg-cheese": "/images/veg_cheese_grilled_sandwitch.jpeg",
    // gr-cheese-chilli           → no specific image (falls back to category)
    // Melting Cheese Grill & Veg Cheese Paneer Grill share the same image
    "gr-melting-cheese": "/images/veg_cheese_grilled_sandwitch.jpeg",
    "gr-pahadi-cheese": "/images/pahadi_cheese_grilled.jpeg",
    // gr-pahadi-paneer           → no specific image (falls back to category)
    "gr-schezwan-cheese": "/images/schezwan_cheese-grilled.jpeg",
    "gr-veg-cheese-paneer": "/images/veg_cheese_paneer_grilled.jpeg",
    // gr-cheese-chilli-paneer    → no specific image (falls back to category)
    // gr-masala-paneer           → no specific image (falls back to category)
    // gr-room-special            → no specific image (falls back to category)

    // ── Burgers ──────────────────────────────────────────────────────────────
    "bu-veg-delite": "/images/veg_delight_buger.jpeg",
    // bu-spicy                   → no specific image (falls back to category)
    "bu-double-cheese": "/images/double_cheese_burger.jpeg",
    // bu-paneer-cheese           → no specific image (falls back to category)
    // bu-coated-cheese           → no specific image (falls back to category)
    // bu-melting-cheese          → no specific image (falls back to category)
    // bu-mexican-cheese          → no specific image (falls back to category)
    // bu-cheese-burst            → no specific image (falls back to category)

    // ── Fries ────────────────────────────────────────────────────────────────
    "fr-plain": "/images/plain_fries.jpeg",
    "fr-peri-peri": "/images/peri_peri_fries.jpeg",
    // fr-cheese-peri-peri        → no specific image (falls back to category)
    // fr-melting-cheese-peri-peri → no specific image (falls back to category)
    // fr-mayo-peri-peri          → no specific image (falls back to category)

    // ── Garlic Bread ─────────────────────────────────────────────────────────
    "gb-plain": "/images/garlic_bread.jpeg",
    "gb-cheese": "/images/cheese_garlic_bread.jpeg",
    // gb-paneer-cheese           → no specific image (falls back to category)
    // gb-mayo-cheese             → no specific image (falls back to category)
    // gb-cheese-corn             → no specific image (falls back to category)
    "gb-stuf": "/images/stuffed_garlic_bread.jpeg",

    // Coffee / Shakes / Drinks / Desserts – all use category fallback images
};

// ── Category fallback images ───────────────────────────────────────────────
const CATEGORY_FALLBACK: Record<string, string> = {
    "pizza-classic": "/images/pizza-classic.jpg",
    "pizza-tandoori": "/images/pizza-classic.jpg",
    "pizza-masala": "/images/pizza-classic.jpg",
    "pizza-premium": "/images/pizza-premium.jpg",
    "pizza-classic-range": "/images/pizza-premium.jpg",
    "pizza-mania": "/images/pizza-classic.jpg",
    "panini": "/images/pasta.jpg",
    "pasta": "/images/pasta.jpg",
    "grills": "/images/garlic-bread.jpg",
    "burgers": "/images/garlic-bread.jpg",
    "fries": "/images/garlic-bread.jpg",
    "garlic-bread": "/images/garlic-bread.jpg",
    "nachos": "/images/garlic-bread.jpg",
    "maggi": "/images/pasta.jpg",
    "coffee": "/images/coffee.jpg",
    "shakes": "/images/shakes.jpg",
    "drinks": "/images/drinks.jpg",
    "desserts": "/images/desserts.jpg",
};

/**
 * Tiny warm-beige blur placeholder (10×10 px, base64 JPEG, ~200 bytes).
 * Shown instantly while the real image loads — keeps the card from jumping.
 */
const BLUR_PLACEHOLDER =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKD" +
    "BQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJ" +
    "CQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMj" +
    "IyMjIyMjL/wAARCAAKABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAgIB" +
    "BAMBAAAAAAAAAAAAAQIDBAUREiExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAA" +
    "AAAAAAAAAAAP/aAAwDAQACEQMRAD8Amcd1nMs5YrYrsbFq2R05Hf3b+CxWaFBRoUFlBZoMGKzEsV" +
    "b5LEE7Rkr/AOR7P//Z";

interface MenuCardProps {
    item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
    const { addItem } = useCart();
    const hasSizes = !!item.sizePrices;
    const sizes = item.sizePrices ? (Object.keys(item.sizePrices) as ("S" | "M" | "L" | "XL")[]) : [];
    const defaultSize = sizes.includes("M") ? "M" : sizes.includes("L") ? "L" : sizes[0];
    const [selectedSize, setSelectedSize] = useState<"S" | "M" | "L" | "XL" | undefined>(
        hasSizes ? defaultSize : undefined
    );
    const [added, setAdded] = useState(false);

    const displayPrice =
        hasSizes && selectedSize && item.sizePrices
            ? (item.sizePrices as Record<string, number>)[selectedSize]
            : item.price;

    const imgSrc =
        ITEM_IMAGES[item.id] ??
        CATEGORY_FALLBACK[item.category] ??
        "/images/pizza-classic.jpg";

    const handleAdd = () => {
        addItem(item, selectedSize as "M" | "L" | "XL" | undefined);
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
    };

    return (
        <div className="menu-card relative flex flex-col bg-white border border-[rgba(200,150,30,0.15)]
      rounded-2xl overflow-hidden h-full">

            {/* Food image — lazy loaded, blur placeholder prevents layout shift */}
            <div className="relative w-full h-40 overflow-hidden bg-[#F5F0E8] shrink-0">
                <Image
                    src={imgSrc}
                    alt={item.name}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                    sizes="(max-width: 360px) 100vw, (max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.badge && (
                    <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold
            uppercase tracking-wider bg-[#C8961E] text-white shadow-sm">
                        {item.badge}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 p-3 flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-[#1A1209] leading-snug"
                    style={{ fontFamily: "Playfair Display, serif" }}>
                    {item.name}
                </h3>
                {item.description && (
                    <p className="text-xs text-[#8A7A60] leading-relaxed line-clamp-2">
                        {item.description}
                    </p>
                )}

                {/* Size selector */}
                {hasSizes && sizes.length > 0 && (
                    <div className="flex gap-1.5 mt-0.5 flex-wrap">
                        {sizes.map((sz) => (
                            <button
                                key={sz}
                                onClick={() => setSelectedSize(sz)}
                                className={`px-2.5 py-0.5 rounded-lg text-xs font-medium border transition-all duration-150
                  ${selectedSize === sz
                                        ? "bg-[#C8961E] border-[#C8961E] text-white"
                                        : "border-[rgba(200,150,30,0.4)] text-[#8A7A60] hover:border-[#C8961E] hover:text-[#C8961E]"
                                    }`}
                            >
                                {sz}
                            </button>
                        ))}
                    </div>
                )}

                {/* Price + Add */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-[rgba(0,0,0,0.05)]">
                    <span className="text-base font-bold text-[#C8961E]">
                        ₹{displayPrice ?? "—"}
                    </span>
                    <button
                        id={`add-${item.id}${selectedSize ? `-${selectedSize}` : ""}`}
                        onClick={handleAdd}
                        disabled={added}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold
              border transition-all duration-200
              ${added
                                ? "bg-green-50 border-green-400 text-green-600"
                                : "bg-[#C8961E] border-[#C8961E] text-white hover:bg-[#9A7215] hover:border-[#9A7215]"
                            }`}
                        aria-label={`Add ${item.name} to cart`}
                    >
                        {added ? (<><Check size={12} /> Added</>) : (<><Plus size={12} /> Add</>)}
                    </button>
                </div>
            </div>
        </div>
    );
}
