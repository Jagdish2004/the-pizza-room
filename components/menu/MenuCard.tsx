"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuItem } from "@/types";
import { useCart } from "@/context/CartContext";
import { Plus, Check } from "lucide-react";

// Category → local downloaded assets in public/images/
const CATEGORY_IMAGES: Record<string, string> = {
    "pizza-classic": "/images/pizza-classic.jpg",
    "pizza-premium": "/images/pizza-premium.jpg",
    "pasta": "/images/pasta.jpg",
    "garlic-bread": "/images/garlic-bread.jpg",
    "coffee": "/images/coffee.jpg",
    "shakes": "/images/shakes.jpg",
    "drinks": "/images/drinks.jpg",
    "desserts": "/images/desserts.jpg",
};

interface MenuCardProps {
    item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
    const { addItem } = useCart();
    const hasSizes = !!item.sizePrices;
    const sizes = item.sizePrices ? (Object.keys(item.sizePrices) as ("L" | "XL")[]) : [];
    const defaultSize = sizes.includes("L") ? "L" : sizes[0];
    const [selectedSize, setSelectedSize] = useState<"L" | "XL" | undefined>(
        hasSizes ? defaultSize : undefined
    );
    const [added, setAdded] = useState(false);

    const displayPrice =
        hasSizes && selectedSize && item.sizePrices
            ? item.sizePrices[selectedSize]
            : item.price;

    const imgSrc = CATEGORY_IMAGES[item.category] ?? "/images/pizza-classic.jpg";

    const handleAdd = () => {
        addItem(item, selectedSize);
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
    };

    return (
        <div className="menu-card relative flex flex-col bg-white border border-[rgba(200,150,30,0.15)]
      rounded-2xl overflow-hidden h-full">

            {/* Food image */}
            <div className="relative w-full h-40 overflow-hidden bg-[#F5F0E8] shrink-0">
                <Image
                    src={imgSrc}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Badge overlays image — top-left, with backdrop */}
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
                    <div className="flex gap-1.5 mt-0.5">
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
