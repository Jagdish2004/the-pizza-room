import { MenuItem, CategoryMeta } from "@/types";

export const CATEGORIES: CategoryMeta[] = [
    { id: "pizza-classic", label: "Classic Pizzas", emoji: "🍕", anchor: "pizza-classic" },
    { id: "pizza-tandoori", label: "Tandoori Pizza", emoji: "🔥", anchor: "pizza-tandoori" },
    { id: "pizza-premium", label: "Premium Pizza", emoji: "⭐", anchor: "pizza-premium" },
    { id: "pizza-exotica", label: "Exotica Cheese Pizza", emoji: "🧀", anchor: "pizza-exotica" },
    { id: "pizza-volcano", label: "Volcano Pizza", emoji: "🌋", anchor: "pizza-volcano" },
    { id: "pizza-classic-range", label: "Classic Pizza Range", emoji: "🍕", anchor: "pizza-classic-range" },
    { id: "pizza-mania", label: "Pizza Mania", emoji: "🟥", anchor: "pizza-mania" },
    { id: "panini", label: "Panini Sandwiches", emoji: "🥪", anchor: "panini" },
    { id: "pasta", label: "Penne Pasta", emoji: "🍝", anchor: "pasta" },
    { id: "grills", label: "Grills & Sandwiches", emoji: "🥪", anchor: "grills" },
    { id: "burgers", label: "Burgers", emoji: "🍔", anchor: "burgers" },
    { id: "fries", label: "Fries", emoji: "🍟", anchor: "fries" },
    { id: "garlic-bread", label: "Garlic Bread", emoji: "🥖", anchor: "garlic-bread" },
    { id: "pizza-masala", label: "Masala Pizza", emoji: "🌶️", anchor: "pizza-masala" },
    { id: "nachos", label: "Nachos", emoji: "🧀", anchor: "nachos" },
    { id: "maggi", label: "Maggi", emoji: "🍜", anchor: "maggi" },
    { id: "coffee", label: "Coffee", emoji: "☕", anchor: "coffee" },
    { id: "shakes", label: "Shakes", emoji: "🥤", anchor: "shakes" },
    { id: "drinks", label: "Drinks", emoji: "🍹", anchor: "drinks" },
    { id: "desserts", label: "Desserts", emoji: "🍰", anchor: "desserts" },
];

export const MENU_ITEMS: MenuItem[] = [

    // ── Classic Pizzas ────────────────────────────────────────────────────────
    {
        id: "cl-margherita",
        name: "Margherita",
        category: "pizza-classic",
        description: "Topped with cherry red tomato and cheese",
        sizePrices: { M: 109, L: 149, XL: 209 },
    },
    {
        id: "cl-golden-paneer",
        name: "Golden Paneer",
        category: "pizza-classic",
        description: "Topped with sweet Corn, paneer and cheese",
        sizePrices: { M: 129, L: 189, XL: 249 },
    },
    {
        id: "cl-family-jewels",
        name: "Family Jewels",
        category: "pizza-classic",
        description: "Topped with fresh capsicum, jalapeño pepper, black olive and cheese",
        sizePrices: { M: 139, L: 199, XL: 259 },
    },
    {
        id: "cl-veg-deluxe",
        name: "Veg Deluxe",
        category: "pizza-classic",
        description: "Topped with capsicum, cherry tomatoes, onion, spicy paprika sauce and cheese",
        sizePrices: { M: 139, L: 199, XL: 259 },
    },
    {
        id: "cl-ratatouille",
        name: "Ratatouille",
        category: "pizza-classic",
        description: "Topped with baby corn, onion, capsicum, black olive, barbeque sauce and cheese",
        sizePrices: { M: 139, L: 199, XL: 269 },
    },
    {
        id: "cl-al-fungi",
        name: "Pizza Al Fungi",
        category: "pizza-classic",
        description: "Topped with Sweet Corn, Paneer, Capsicum, Onion, Tomato and Cheese",
        sizePrices: { M: 149, L: 209, XL: 279 },
    },
    {
        id: "cl-double-cheese-margherita",
        name: "Double Cheese Margherita",
        category: "pizza-classic",
        description: "Cherry red tomato loaded with cheese",
        sizePrices: { M: 149, L: 209, XL: 289 },
    },
    {
        id: "cl-mexican-mafia",
        name: "Mexican Mafia",
        category: "pizza-classic",
        description: "Topped with mushroom, capsicum, tomato, onion and cheese",
        sizePrices: { M: 129, L: 189, XL: 249 },
    },

    // ── Tandoori Pizza ────────────────────────────────────────────────────────
    {
        id: "td-mushroom",
        name: "Mushroom Tandoori Pizza",
        category: "pizza-tandoori",
        description: "Button mushroom, capsicum & onion with room-made tandoori sauce",
        sizePrices: { M: 159, L: 259, XL: 339 },
    },
    {
        id: "td-paneer",
        name: "Paneer Tandoori Pizza",
        category: "pizza-tandoori",
        description: "Paneer, capsicum & onion with room-made tandoori sauce",
        sizePrices: { M: 169, L: 269, XL: 349 },
    },
    {
        id: "td-paneer-mushroom",
        name: "Paneer Mushroom Tandoori",
        category: "pizza-tandoori",
        description: "Button mushroom, fresh paneer, capsicum & onion with room-made tandoori sauce",
        sizePrices: { M: 189, L: 319, XL: 399 },
    },
    {
        id: "td-mix",
        name: "Tandoori Mix Pizza",
        category: "pizza-tandoori",
        description: "Button mushroom, fresh paneer, baby corn, capsicum & onion with room-made tandoori sauce",
        sizePrices: { M: 209, L: 359, XL: 439 },
    },

    //── Masala Pizza ──────────────────────────────────────────────────────────
    {
        id: "ma-veg-masala",
        name: "Veg Masala Pizza",
        category: "pizza-masala",
        description: "Capsicum & onion with room-made spicy masala sauce",
        sizePrices: { M: 159, L: 209, XL: 289 },
    },
    {
        id: "ma-mushroom-masala",
        name: "Mushroom Masala Pizza",
        category: "pizza-masala",
        description: "Button mushroom, capsicum & onion with room-made spicy masala sauce",
        sizePrices: { M: 169, L: 259, XL: 349 },
    },
    {
        id: "ma-paneer-masala",
        name: "Paneer Masala Pizza",
        description: "Fresh panner, capsicum & onion with room-made spicy masala sauce",
        category: "pizza-masala",
        sizePrices: { M: 169, L: 259, XL: 339 },
    },
    {
        id: "ma-veg-mix",
        name: "Veg Mix Pizza",
        category: "pizza-masala",
        description: "Button mushroom, fresh paneer, sweet corn, capsicum & onion with room-made spicy masala sauce",
        sizePrices: { M: 199, L: 349, XL: 429 },
    },

    // ── Premium Pizza (Made With Premium Topping Sauce) ───────────────────────
    {
        id: "pp-italian",
        name: "Italian Pizza",
        category: "pizza-premium",
        description: "Pasta noodles, capsicum & onion with room-made premium sauce, topped with red chilli and yellow tangy sauce",
        sizePrices: { L: 239, XL: 309 },
    },
    {
        id: "pp-chilly-garlic",
        name: "Chilly Garlic Pizza",
        category: "pizza-premium",
        description: "House-made garlic paste & green chillies with yellow tangy sauce",
        sizePrices: { M: 149, L: 239, XL: 309 },
    },
    {
        id: "pp-mangolian-paneer",
        name: "Mangolian Paneer Pizza",
        category: "pizza-premium",
        description: "Fresh paneer, capsicum & onion with room-made premium sauce, topped with red chilli and yellow tangy sauce",
        sizePrices: { M: 169, L: 259, XL: 339 },
    },
    {
        id: "pp-spicy-chilli-paneer",
        name: "Spicy Chilli Paneer Pizza",
        category: "pizza-premium",
        description: "Fresh paneer, capsicum, onion & jalapeños with room-made premium sauce, topped with red chilli and yellow tangy sauce",
        sizePrices: { M: 179, L: 279, XL: 349 },
    },
    {
        id: "pp-4-cheese",
        name: "4 Cheese Pizza",
        category: "pizza-premium",
        description: "Four flavours in one pizza — paneer, mushroom, tomato and baby corn",
        sizePrices: { L: 309, XL: 389 },
    },
    {
        id: "pp-peppy-paneer",
        name: "Peppy Paneer Pizza",
        category: "pizza-premium",
        description: "Tomato, paneer with extra cheese and room-made premium sauce",
        sizePrices: { M: 159, L: 249, XL: 319 },
    },
    {
        id: "pp-az-18inch",
        name: "A-Z 18 Inch Pizza",
        category: "pizza-premium",
        sizePrices: { XL: 599 },
    },
    {
        id: "pp-room-special-18",
        name: "Pizza Room Special 18\"",
        category: "pizza-premium",
        sizePrices: { XL: 599 },
    },
    {
        id: "pp-your-choice-18",
        name: "Your Choice 18\"",
        category: "pizza-premium",
        description: "Build your own 18\" pizza with your choice of toppings",
        sizePrices: { XL: 699 },
    },

    // ── Exotica Cheese Pizza ──────────────────────────────────────────────────
    {
        id: "ex-veg-exotica",
        name: "Veg Exotica Pizza",
        category: "pizza-exotica",
        description: "A premium mix of exotic vegetables with four-cheese blend",
        sizePrices: { L: 249, XL: 339 },
    },
    {
        id: "ex-corn-exotica",
        name: "Corn Exotica Pizza",
        category: "pizza-exotica",
        description: "Sweet corn with exotic toppings and four-cheese blend",
        sizePrices: { L: 299, XL: 379 },
    },
    {
        id: "ex-tandoori-exotica",
        name: "Exotica Tandoori Pizza",
        category: "pizza-exotica",
        description: "Exotic tandoori toppings with rich four-cheese blend",
        sizePrices: { L: 349, XL: 439 },
    },
    {
        id: "ex-farmroom-exotica",
        name: "Exotica Farmroom Pizza",
        category: "pizza-exotica",
        description: "Farm-fresh exotic toppings with four-cheese blend",
        sizePrices: { L: 379, XL: 469 },
    },

    // ── Volcano Pizza ─────────────────────────────────────────────────────────
    {
        id: "vl-veg-volcano",
        name: "Veg Volcano Pizza",
        category: "pizza-volcano",
        description: "A loaded veg pizza with a molten cheese volcano core",
        sizePrices: { L: 299, XL: 389 },
    },
    {
        id: "vl-mushroom-volcano",
        name: "Mushroom Volcano Pizza",
        category: "pizza-volcano",
        description: "Button mushrooms on a pizza with a molten cheese volcano core",
        sizePrices: { L: 349, XL: 439 },
    },
    {
        id: "vl-paneer-mushroom-volcano",
        name: "Paneer Mushroom Volcano",
        category: "pizza-volcano",
        description: "Fresh paneer and mushrooms on a pizza with a molten cheese volcano core",
        sizePrices: { L: 389, XL: 479 },
    },
    {
        id: "vl-mix-volcano",
        name: "Mix Volcano Pizza",
        category: "pizza-volcano",
        description: "A mix of premium toppings on a pizza with a molten cheese volcano core",
        sizePrices: { L: 429, XL: 519 },
    },


    // ── Classic Pizza Range ───────────────────────────────────────────────────
    {
        id: "cr-classic",
        name: "Classic Pizza",
        category: "pizza-classic-range",
        description: "Capsicum, onion, black olives, and jalapeños topped with room-made red chilli and tangy yellow sauce.",
        sizePrices: { M: 149, L: 229, XL: 309 },
    },
    {
        id: "cr-chocolate",
        name: "Classic Chocolate Pizza",
        category: "pizza-classic-range",
        description: "Chocolate spread topped with chocolate crush and cheese.",
        sizePrices: { M: 149, L: 229, XL: 309 },
    },
    {
        id: "cr-paneer",
        name: "Classic Paneer Pizza",
        category: "pizza-classic-range",
        description: "Capsicum, onion, fresh paneer, black olives, and jalapeños topped with room-made red chilli and tangy yellow sauce.",
        sizePrices: { M: 169, L: 259, XL: 339 },
    },
    {
        id: "cr-paneer-mushroom",
        name: "Classic Paneer Mushroom Pizza",
        category: "pizza-classic-range",
        description: "Capsicum, onion, fresh paneer, button mushrooms, black olives, and jalapeños topped with room-made red chilli and tangy yellow sauce.",
        sizePrices: { M: 189, L: 309, XL: 389 },
    },

    // ── Pizza Mania (Square Pizza) ─────────────────────────────────────────────
    {
        id: "pm-paneer-square",
        name: "Paneer Square Pizza",
        category: "pizza-mania",
        description: "Capsicum, onion, and fresh paneer topped with room-made red chilli and tangy yellow sauce.",
        sizePrices: { XL: 279 },
    },
    {
        id: "pm-veg-square",
        name: "Veg Square Pizza",
        category: "pizza-mania",
        description: "Capsicum and onion topped with room-made red chilli and tangy yellow sauce.",
        sizePrices: { XL: 259 },
    },
    {
        id: "pm-mushroom-square",
        name: "Mushroom Square Pizza",
        category: "pizza-mania",
        description: "Capsicum, onion, and sliced mushrooms topped with room-made red chilli and tangy yellow sauce.",
        sizePrices: { XL: 299 },
    },
    {
        id: "pm-paneer-mushroom-square",
        name: "Paneer Mushroom Square Pizza",
        category: "pizza-mania",
        description: "Capsicum, onion, fresh paneer, and sliced mushrooms topped with room-made red chilli and tangy yellow sauce.",
        sizePrices: { XL: 319 },
    },

    // ── Panini Sandwiches ─────────────────────────────────────────────────────
    {
        id: "pn-cheese-chilli",
        name: "Cheese Chilli Panini",
        category: "panini",
        sizePrices: { S: 139, M: 179 },
    },
    {
        id: "pn-mexican",
        name: "Mexican Panini",
        category: "panini",
        sizePrices: { S: 149, M: 189 },
    },
    {
        id: "pn-creamy-cheese",
        name: "Creamy Cheese Panini",
        category: "panini",
        sizePrices: { S: 159, M: 209 },
    },
    {
        id: "pn-mangolian-cheese",
        name: "Mangolian Cheese Panini",
        category: "panini",
        sizePrices: { S: 199, M: 239 },
    },
    {
        id: "pn-garlic-cheese",
        name: "Garlic Cheese Panini",
        category: "panini",
        sizePrices: { S: 149, M: 199 },
    },
    {
        id: "pn-chocolate",
        name: "Chocolate Panini",
        category: "panini",
        sizePrices: { S: 119, M: 169 },
    },
    {
        id: "pn-masala-cheese",
        name: "Masala Cheese Panini",
        category: "panini",
        sizePrices: { S: 139, M: 179 },
    },

    // ── Penne Pasta (No Refined Wheat Flour) ──────────────────────────────────
    {
        id: "pa-red-sauce",
        name: "Red Sauce Pasta",
        category: "pasta",
        description: "Sweetcorn, Capsicum, Broccoli & Premium red sauce",
        price: 199,
    },
    {
        id: "pa-mangolian-red",
        name: "Mangolian Red Sauce Pasta",
        category: "pasta",
        description: "Paneer, Sweetcorn, Capsicum, Broccoli & Premium red sauce",
        price: 199,
    },
    {
        id: "pa-creamy-cheese",
        name: "Creamy Cheese Pasta",
        category: "pasta",
        description: "Sweetcorn, Capsicum, Broccoli, Premium cream, cheese & milk",
        price: 229,
    },
    {
        id: "pa-baked-cheese",
        name: "Baked Cheese Pasta",
        category: "pasta",
        description: "Sweetcorn, Capsicum, Broccoli, Premium cream & Cheese",
        price: 199,
    },
    // {
    //     id: "pa-spicy-masala",
    //     name: "Spicy Masala Pasta",
    //     category: "pasta",
    //     description: "Capsicum, green chilli, Broccoli & Premium yellow sauce",
    //     price: 169,
    // },
    {
        id: "pa-italian",
        name: "Italian Pasta",
        category: "pasta",
        description: "Sweetcorn, Capsicum, Broccoli & Premium yellow sauce",
        price: 199,
    },

    // ── Grills & Sandwiches ───────────────────────────────────────────────────
    {
        id: "gr-american-corn",
        name: "American Corn Grill",
        category: "grills",
        description: "Extra sweet corn, onion, capsicum and cheese",
        price: 129,
    },
    {
        id: "gr-veg-cheese",
        name: "Veg Cheese Grill",
        category: "grills",
        description: "Potato, capsicum, onion, tomato and cheese",
        price: 129,
    },
    {
        id: "gr-melting-cheese",
        name: "Melting Cheese Grill",
        category: "grills",
        description: "Little sweet corn, capsicum, onion and cheese",
        price: 129,
    },
    {
        id: "gr-pahadi-cheese",
        name: "Pahadi Cheese Grill",
        category: "grills",
        description: "Capsicum & onion with room-made mix sauce",
        price: 149,
    },
    {
        id: "gr-schezwan-cheese",
        name: "Schezwan Cheese Grill",
        category: "grills",
        description: "Premium Grill",
        price: 159,
    },
    {
        id: "gr-veg-cheese-paneer",
        name: "Veg Cheese Paneer Grill",
        category: "grills",
        description: "Capsicum and onion with paneer cheese",
        price: 159,
    },
    {
        id: "gr-cheese-chilli",
        name: "Cheese Chilli Grill",
        category: "grills",
        description: "Capsicum and onion with room-made spicy sauce and cheese",
        price: 129,
    },
    {
        id: "gr-masala-cheese",
        name: "Masala Cheese Grill",
        category: "grills",
        description: "Potato mash, onion, tomato, capsicum and cheese",
        price: 129,
    },
    {
        id: "gr-pahadi-paneer",
        name: "Pahadi Paneer Cheese Grill",
        category: "grills",
        description: "Capsicum and onion with room-made mix sauce and fresh paneer",
        price: 159,
    },
    {
        id: "gr-cheese-chilli-paneer",
        name: "Cheese Chilli Paneer Grill",
        category: "grills",
        description: "Capsicum & onion with room-made spicy sauce, fresh paneer and cheese",
        price: 159,
    },
    {
        id: "gr-masala-paneer",
        name: "Masala Paneer Grill",
        category: "grills",
        description: "Potato mash, fresh paneer, onion, capsicum, tomato and cheese",
        price: 159,
    },
    {
        id: "gr-room-special",
        name: "Pizza Room Special Grill",
        category: "grills",
        description: "Capsicum, onion, fresh paneer and mushroom with room-made spicy tangy sauce",
        price: 169,
    },

    // ── Burgers ───────────────────────────────────────────────────────────────
    {
        id: "bu-veg-delite",
        name: "Veg Delite Burger",
        category: "burgers",
        price: 79,
    },
    {
        id: "bu-double-cheese",
        name: "Double Cheese Burger",
        category: "burgers",
        price: 99,
    },
    {
        id: "bu-spicy",
        name: "Spicy Burger",
        category: "burgers",
        price: 89,
    },
    {
        id: "bu-paneer-cheese",
        name: "Paneer Cheese Burger",
        category: "burgers",
        price: 109,
    },
    {
        id: "bu-coated-cheese",
        name: "Coated Cheese Burger",
        category: "burgers",
        price: 109,
    },
    {
        id: "bu-melting-cheese",
        name: "Melting Cheese Burger",
        category: "burgers",
        price: 119,
    },
    {
        id: "bu-mexican-cheese",
        name: "Mexican Cheese Burger",
        category: "burgers",
        price: 149,
    },
    {
        id: "bu-cheese-burst",
        name: "Cheese Burst Burger",
        category: "burgers",
        price: 159,
    },

    // ── Fries ─────────────────────────────────────────────────────────────────
    {
        id: "fr-plain",
        name: "Plain Fries",
        category: "fries",
        price: 89,
    },
    {
        id: "fr-peri-peri",
        name: "Peri Peri Fries",
        category: "fries",
        price: 109,
    },
    {
        id: "fr-cheese-peri-peri",
        name: "Cheese Peri Peri Fries",
        category: "fries",
        price: 119,
    },
    {
        id: "fr-melting-cheese-peri-peri",
        name: "Melting Cheese Peri Peri",
        category: "fries",
        price: 159,
    },
    // {
    //     id: "fr-mayo-peri-peri",
    //     name: "Mayo Peri Peri Fries",
    //     category: "fries",
    //     price: 149,
    // },

    // ── Garlic Bread ──────────────────────────────────────────────────────────
    {
        id: "gb-plain",
        name: "Garlic Bread",
        category: "garlic-bread",
        price: 79,
    },
    {
        id: "gb-cheese",
        name: "Cheese Garlic Bread",
        category: "garlic-bread",
        price: 89,
    },
    {
        id: "gb-stuf",
        name: "Stuf Garlic Bread",
        category: "garlic-bread",
        price: 149,
    },
    {
        id: "gb-paneer-cheese",
        name: "Paneer Cheese Garlic Bread",
        category: "garlic-bread",
        price: 99,
    },
    {
        id: "gb-mayo-cheese",
        name: "Mayo Cheese Garlic Bread",
        category: "garlic-bread",
        price: 109,
    },
    {
        id: "gb-cheese-corn",
        name: "Cheese Corn Garlic Bread",
        category: "garlic-bread",
        price: 119,
    },


    //── Nachos ────────────────────────────────────────────────────────────────
    {
        id: "na-classic",
        name: "Classic Nachos",
        category: "nachos",
        price: 159,
    },
    {
        id: "na-mexican",
        name: "Mexican Nachos",
        category: "nachos",
        price: 199,
    },
    {
        id: "na-mexican-melting",
        name: "Mexican and Melting Cheese Nachos",
        category: "nachos",
        price: 219,
    },

    // ── Maggi ─────────────────────────────────────────────────────────────────
    {
        id: "mg-my-maggi",
        name: "My Maggi",
        category: "maggi",
        price: 69,
    },
    {
        id: "mg-vegetable",
        name: "Vegetable Maggi",
        category: "maggi",
        price: 79,
    },
    {
        id: "mg-italian",
        name: "Italian Maggi",
        category: "maggi",
        price: 89,
    },
    {
        id: "mg-punjabi",
        name: "Punjabi Maggi",
        category: "maggi",
        price: 89,
    },
    {
        id: "mg-punjabi-cheese",
        name: "Punjabi Cheese Maggi",
        category: "maggi",
        price: 99,
    },
    {
        id: "mg-room-special",
        name: "Pizza Room Special Maggi",
        category: "maggi",
        price: 139,
    },

    // ── Coffee ────────────────────────────────────────────────────────────────
    {
        id: "cf-hot-coffee",
        name: "Hot Coffee",
        category: "coffee",
        price: 59,
    },
    {
        id: "cf-hot-chocolate",
        name: "Hot Chocolate",
        category: "coffee",
        price: 69,
    },
    {
        id: "cf-cold-coffee",
        name: "Cold Coffee",
        category: "coffee",
        price: 79,
    },
    {
        id: "cf-cold-icecream",
        name: "Cold Coffee with Ice Cream",
        category: "coffee",
        price: 109,
    },

    // ── Shakes ────────────────────────────────────────────────────────────────
    {
        id: "sh-oreo",
        name: "Oreo Shake",
        category: "shakes",
        price: 109,
    },
    {
        id: "sh-kitkat",
        name: "KitKat Shake",
        category: "shakes",
        price: 109,
    },
    {
        id: "sh-mango",
        name: "Mango Shake",
        category: "shakes",
        price: 109,
    },
    {
        id: "sh-strawberry",
        name: "Strawberry Shake",
        category: "shakes",
        price: 109,
    },
    {
        id: "sh-butterscotch",
        name: "Butterscotch Shake",
        category: "shakes",
        price: 109,
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
        price: 109,
    },
    {
        id: "dr-blue-heaven",
        name: "Blue Heaven",
        category: "drinks",
        price: 109,
    },

    // ── Desserts ──────────────────────────────────────────────────────────────
    {
        id: "ds-choco-lava",
        name: "Choco Lava Cake",
        category: "desserts",
        price: 109,
    },
    {
        id: "ds-hot-brownie",
        name: "Hot Sizzling Brownie",
        category: "desserts",
        price: 209,
    },
];
