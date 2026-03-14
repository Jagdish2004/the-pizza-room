import { MenuItem, CategoryMeta } from "@/types";

export const CATEGORIES: CategoryMeta[] = [
    { id: "pizza-classic", label: "Classic Pizza", emoji: "🍕", anchor: "pizza-classic" },
    { id: "pizza-premium", label: "Premium Pizza", emoji: "⭐", anchor: "pizza-premium" },
    { id: "pasta", label: "Pasta", emoji: "🍝", anchor: "pasta" },
    { id: "garlic-bread", label: "Garlic Bread", emoji: "🥖", anchor: "garlic-bread" },
    { id: "coffee", label: "Coffee", emoji: "☕", anchor: "coffee" },
    { id: "shakes", label: "Shakes", emoji: "🥤", anchor: "shakes" },
    { id: "drinks", label: "Drinks", emoji: "🍹", anchor: "drinks" },
    { id: "desserts", label: "Desserts", emoji: "🍰", anchor: "desserts" },
];

export const MENU_ITEMS: MenuItem[] = [
    // ── Classic Pizza ─────────────────────────────────────────────────────────
    {
        id: "cp-classic",
        name: "Classic Pizza",
        category: "pizza-classic",
        sizePrices: { L: 219, XL: 299 },
    },
    {
        id: "cp-chocolate",
        name: "Classic Chocolate Pizza",
        category: "pizza-classic",
        sizePrices: { L: 219, XL: 299 },
    },
    {
        id: "cp-paneer",
        name: "Classic Paneer Pizza",
        category: "pizza-classic",
        sizePrices: { L: 249, XL: 329 },
    },
    {
        id: "cp-paneer-mushroom",
        name: "Classic Paneer Mushroom Pizza",
        category: "pizza-classic",
        sizePrices: { L: 299, XL: 379 },
    },

    // ── Premium Pizza ─────────────────────────────────────────────────────────
    {
        id: "pp-italian",
        name: "Italian Pizza",
        category: "pizza-premium",
        description: "Made with premium topping sauce",
        sizePrices: { L: 229, XL: 299 },
    },
    {
        id: "pp-chilly-garlic",
        name: "Chilly Garlic Pizza",
        category: "pizza-premium",
        description: "Made with premium topping sauce",
        sizePrices: { L: 229, XL: 299 },
        badge: "Popular",
    },
    {
        id: "pp-peppy-paneer",
        name: "Peppy Paneer Pizza",
        category: "pizza-premium",
        description: "Made with premium topping sauce",
        sizePrices: { L: 239, XL: 309 },
        badge: "Popular",
    },
    {
        id: "pp-mangolian-paneer",
        name: "Mangolian Paneer Pizza",
        category: "pizza-premium",
        description: "Made with premium topping sauce",
        sizePrices: { L: 259, XL: 329 },
    },
    {
        id: "pp-spicy-chilli-paneer",
        name: "Spicy Chilli Paneer Pizza",
        category: "pizza-premium",
        description: "Made with premium topping sauce",
        sizePrices: { L: 269, XL: 339 },
    },
    {
        id: "pp-4-cheese",
        name: "4 Cheese Pizza",
        category: "pizza-premium",
        description: "Made with premium topping sauce",
        sizePrices: { L: 299, XL: 379 },
    },
    {
        id: "pp-az-18inch",
        name: "A-Z 18 Inch Pizza",
        category: "pizza-premium",
        description: "Our massive 18″ special – XL only",
        sizePrices: { XL: 499 },
        badge: "Special",
    },
    {
        id: "pp-room-special-18",
        name: "Pizza Room Special 18\"",
        category: "pizza-premium",
        description: "Signature pizza – XL only",
        sizePrices: { XL: 499 },
        badge: "Signature",
    },

    // ── Pasta ─────────────────────────────────────────────────────────────────
    {
        id: "pa-red-sauce",
        name: "Red Sauce Pasta",
        category: "pasta",
        description: "Sweetcorn, Capsicum & Premium red sauce",
        price: 159,
    },
    {
        id: "pa-mangolian-red",
        name: "Mangolian Red Sauce Pasta",
        category: "pasta",
        description: "Paneer, Sweetcorn, Capsicum & Premium red sauce",
        price: 169,
    },
    {
        id: "pa-spicy-masala",
        name: "Spicy Masala Pasta",
        category: "pasta",
        description: "Capsicum, green chilli & Premium yellow sauce",
        price: 169,
    },
    {
        id: "pa-baked-cheese",
        name: "Baked Cheese Pasta",
        category: "pasta",
        description: "Sweetcorn, Capsicum, Premium cream & Cheese",
        price: 179,
        badge: "Popular",
    },
    {
        id: "pa-italian",
        name: "Italian Pasta",
        category: "pasta",
        description: "Sweetcorn, Capsicum & Premium yellow sauce",
        price: 179,
    },
    {
        id: "pa-creamy-cheese",
        name: "Creamy Cheese Pasta",
        category: "pasta",
        description: "Sweetcorn, Capsicum, Premium cream, cheese & milk",
        price: 199,
    },

    // ── Garlic Bread ─────────────────────────────────────────────────────────
    {
        id: "gb-plain",
        name: "Garlic Bread",
        category: "garlic-bread",
        price: 69,
    },
    {
        id: "gb-cheese",
        name: "Cheese Garlic Bread",
        category: "garlic-bread",
        price: 79,
    },
    {
        id: "gb-paneer-cheese",
        name: "Paneer Cheese Garlic Bread",
        category: "garlic-bread",
        price: 89,
    },
    {
        id: "gb-mayo-cheese",
        name: "Mayo Cheese Garlic Bread",
        category: "garlic-bread",
        price: 99,
    },
    {
        id: "gb-cheese-corn",
        name: "Cheese Corn Garlic Bread",
        category: "garlic-bread",
        price: 109,
    },
    {
        id: "gb-stuf",
        name: "Stuf Garlic Bread",
        category: "garlic-bread",
        price: 139,
    },

    // ── Coffee ────────────────────────────────────────────────────────────────
    {
        id: "cf-hot-coffee",
        name: "Hot Coffee",
        category: "coffee",
        price: 49,
    },
    {
        id: "cf-hot-chocolate",
        name: "Hot Chocolate",
        category: "coffee",
        price: 59,
    },
    {
        id: "cf-cold-coffee",
        name: "Cold Coffee",
        category: "coffee",
        price: 69,
    },
    {
        id: "cf-cold-icecream",
        name: "Cold Coffee with Ice Cream",
        category: "coffee",
        price: 99,
        badge: "Popular",
    },

    // ── Shakes ────────────────────────────────────────────────────────────────
    {
        id: "sh-oreo",
        name: "Oreo Shake",
        category: "shakes",
        price: 99,
        badge: "Popular",
    },
    {
        id: "sh-kitkat",
        name: "KitKat Shake",
        category: "shakes",
        price: 99,
    },
    {
        id: "sh-mango",
        name: "Mango Shake",
        category: "shakes",
        price: 99,
    },
    {
        id: "sh-strawberry",
        name: "Strawberry Shake",
        category: "shakes",
        price: 99,
    },
    {
        id: "sh-butterscotch",
        name: "Butterscotch Shake",
        category: "shakes",
        price: 99,
    },

    // ── Drinks ────────────────────────────────────────────────────────────────
    {
        id: "dr-soft-drink",
        name: "Soft Drink",
        category: "drinks",
        price: 69,
    },
    {
        id: "dr-virgin-mojito",
        name: "Virgin Mojito",
        category: "drinks",
        price: 99,
    },
    {
        id: "dr-blue-heaven",
        name: "Blue Heaven",
        category: "drinks",
        price: 99,
    },

    // ── Desserts ──────────────────────────────────────────────────────────────
    {
        id: "ds-choco-lava",
        name: "Choco Lava Cake",
        category: "desserts",
        price: 99,
        badge: "Popular",
    },
    {
        id: "ds-hot-brownie",
        name: "Hot Sizzling Brownie",
        category: "desserts",
        price: 199,
    },
];
