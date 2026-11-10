export const STORE_URL = "https://after-light-tattoo-shop.fourthwall.com";

export type Product = {
  name: string;
  category: "Apparel" | "Drinkware";
  /** Page on the Fourthwall store, where the customer picks options and checks out. */
  url: string;
  /** Optional photo, relative to /public. Falls back to a branded placeholder. */
  image?: string;
  /** Display price in USD, as listed on Fourthwall. Update here if prices change there. */
  price?: string;
};

// Checkout is handled by Fourthwall; this list just links to each product there.
// Prices and photos were copied from the live store on 2026-11-10.
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
    name: "Sweatshirt",
    category: "Apparel",
    url: `${STORE_URL}/products/sweatshirt`,
    image: "/shop/sweatshirt.webp",
    price: "$32.68",
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
];
