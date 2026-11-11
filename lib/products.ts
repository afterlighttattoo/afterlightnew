export const STORE_URL = "https://after-light-tattoo-shop.fourthwall.com";

export type Category = "Apparel" | "Headwear" | "Drinkware" | "Accessories";

export const categories: Category[] = ["Apparel", "Headwear", "Drinkware", "Accessories"];

export type Product = {
  name: string;
  category: Category;
  /** Page on the Fourthwall store, where the customer picks options and checks out. */
  url: string;
  /** Optional photo, relative to /public. Falls back to a branded placeholder. */
  image?: string;
  /** Display price in USD, as listed on Fourthwall. Update here if prices change there. */
  price?: string;
};

// Checkout is handled by Fourthwall; this list just links to each product there.
// Prices and photos were copied from the live store on 2026-11-11.
export const products: Product[] = [
  {
    name: "Logo Tee",
    category: "Apparel",
    url: `${STORE_URL}/products/logo-tee`,
    image: "/shop/logo-tee.webp",
    price: "$24.40",
  },
  {
    name: "Logo Tee — Unisex",
    category: "Apparel",
    url: `${STORE_URL}/products/logo-tee-unisex`,
    image: "/shop/logo-tee-unisex.webp",
    price: "$20.70",
  },
  {
    name: "Hoodie",
    category: "Apparel",
    url: `${STORE_URL}/products/hoodie`,
    image: "/shop/hoodie.webp",
    price: "$36.24",
  },
  {
    name: "Zip-Up Hoodie",
    category: "Apparel",
    url: `${STORE_URL}/products/zip-up-hoodie`,
    image: "/shop/zip-hoodie.webp",
    price: "$45.10",
  },
  {
    name: "Sweatshirt",
    category: "Apparel",
    url: `${STORE_URL}/products/sweatshirt`,
    image: "/shop/sweatshirt.webp",
    price: "$32.68",
  },
  {
    name: "Baseball Cap — Mid-profile",
    category: "Headwear",
    url: `${STORE_URL}/products/baseball-cap-mid-profile`,
    image: "/shop/cap.webp",
    price: "$15.97",
  },
  {
    name: "Snapback Hat",
    category: "Headwear",
    url: `${STORE_URL}/products/snapback-hat`,
    image: "/shop/snapback.webp",
    price: "$23.14",
  },
  {
    name: "Cuffed Beanie",
    category: "Headwear",
    url: `${STORE_URL}/products/cuffed-beanie`,
    image: "/shop/beanie.webp",
    price: "$16.79",
  },
  {
    name: "Thor Copper Insulated Bottle — 22oz",
    category: "Drinkware",
    url: `${STORE_URL}/products/thor-copper-insulated-bottle-22oz`,
    image: "/shop/bottle.webp",
    price: "$25.45",
  },
  {
    name: "Mug",
    category: "Drinkware",
    url: `${STORE_URL}/products/mug-2`,
    image: "/shop/mug.webp",
    price: "$11.95",
  },
  {
    name: "Duffel Bag",
    category: "Accessories",
    url: `${STORE_URL}/products/duffel-bag`,
    image: "/shop/duffel.webp",
    price: "$61.00",
  },
  {
    name: "Magnets",
    category: "Accessories",
    url: `${STORE_URL}/products/magnets`,
    image: "/shop/magnets.webp",
    price: "$6.32",
  },
];
