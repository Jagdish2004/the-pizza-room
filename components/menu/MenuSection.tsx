import { MenuItem } from "@/types";
import { MenuCard } from "./MenuCard";

interface MenuSectionProps {
    id: string;
    title: string;
    emoji: string;
    items: MenuItem[];
    subtitle?: string;
}

export function MenuSection({ id, title, emoji, items, subtitle }: MenuSectionProps) {
    return (
        <section id={id} className="scroll-mt-28">
            {/* Section header */}
            <div className="flex items-end gap-3 mb-5">
                <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(200,150,30,0.1)] border border-[rgba(200,150,30,0.2)] flex items-center justify-center text-xl">
                        {emoji}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-[#1A1209]"
                            style={{ fontFamily: "Playfair Display, serif" }}>
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-xs text-[#8A7A60] mt-0.5 italic">{subtitle}</p>
                        )}
                    </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[rgba(200,150,30,0.3)] to-transparent mb-1.5" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}
