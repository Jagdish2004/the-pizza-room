export type Category =
  | "pizza-classic"
  | "pizza-premium"
  | "pasta"
  | "garlic-bread"
  | "coffee"
  | "shakes"
  | "drinks"
  | "desserts";

export interface SizePrice {
  L?: number;
  XL?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  description?: string;
  /** For items with a single price */
  price?: number;
  /** For items with size variants (Pizza) */
  sizePrices?: SizePrice;
  badge?: string; // e.g. "Popular", "Special"
}

export interface CartItem {
  menuItem: MenuItem;
  qty: number;
  selectedSize?: "L" | "XL";
}

export type CartAction =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; id: string; size?: string }
  | { type: "UPDATE_QTY"; id: string; size?: string; qty: number }
  | { type: "CLEAR" };

export interface CartState {
  items: CartItem[];
}

export interface CategoryMeta {
  id: Category;
  label: string;
  emoji: string;
  anchor: string;
}
