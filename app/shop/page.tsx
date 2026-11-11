import type { Metadata } from "next";
import { ShopGrid } from "@/components/shop/ShopGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { btnGhost } from "@/components/ui/styles";
import { STORE_URL } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Official After Light Tattoo merch: tees, hoodies, hats, drinkware and more.",
};

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        as="h1"
        eyebrow="Studio shop"
        title="After Light merch"
        description="Wear the studio. Checkout is handled securely on our Fourthwall store."
      />

      <div className="mt-14">
        <ShopGrid />
      </div>

      <div className="mt-14 text-center">
        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className={btnGhost}>
          Visit the full store
        </a>
      </div>
    </section>
  );
}
