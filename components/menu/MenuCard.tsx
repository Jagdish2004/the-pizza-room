"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuItem } from "@/types";
import { useCart } from "@/context/CartContext";
import { Plus, Check } from "lucide-react";

// ── Category → image path ─────────────────────────────────────────────────
const CATEGORY_IMAGES: Record<string, string> = {
    "pizza-classic": "/images/pizza-classic.jpg",
    "pizza-tandoori": "/images/pizza-classic.jpg",
    "pizza-masala": "/images/pizza-classic.jpg",
    "pizza-premium": "/images/pizza-premium.jpg",
    "pizza-classic-range": "/images/pizza-premium.jpg",
    "pizza-mania": "/images/pizza-classic.jpg",
    "panini": "/images/garlic-bread.jpg",
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

    const imgSrc = CATEGORY_IMAGES[item.category] ?? "/images/pizza-classic.jpg";

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
