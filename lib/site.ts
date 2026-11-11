// Studio-wide details. Phone and email are not set yet; the site hides them until you fill them in.
export const site = {
  name: "After Light Tattoo",
  tagline: "Drawn in the dark. Worn in the light.",
  description:
    "After Light Tattoo is a custom tattoo studio in White Oak, PA. Meet our artists, browse their portfolios, get in touch, and shop studio merch.",
  // Booking requests are emailed through Web3Forms. The access key decides which inbox receives them
  // (Afterlighttattoo2026@outlook.com). It is public by design, so it lives in the code, not in env vars.
  web3formsAccessKey: "59134e86-8026-4a1d-8305-89fec1b808a7",
  email: "" as string, // TODO
  phone: "" as string, // TODO
  address: ["1055 Lincoln Way", "White Oak, PA 15132"],
  hours: [
    { days: "Monday – Saturday", time: "10AM – 6PM" },
    { days: "Sunday", time: "By appointment only" },
  ],
  instagram: "https://www.instagram.com/afterlighttattoo/",
  facebook: "https://www.facebook.com/people/After-Light-Tattoo/61591905765367/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1055+Lincoln+Way+White+Oak+PA+15132",
  /** From the owner. */
  meaning:
    "After Light represents what we carry with us after a moment has passed—the memories, experiences, growth, and stories that become part of who we are. Tattoos give those stories a permanent place to live.",
} as const;

// Header layout: left links | centered logo | right links.
export const navLeft = [
  { href: "/about", label: "About" },
  { href: "/artists", label: "Artists" },
  { href: "/gallery", label: "Gallery" },
] as const;

export const navRight = [
  { href: "/shop", label: "Shop" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const navLinks = [...navLeft, ...navRight] as const;
