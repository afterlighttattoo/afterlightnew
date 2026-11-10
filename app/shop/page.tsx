import type { Metadata } from "next";
import { ProductCard } from "@/components/shop/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { btnGhost } from "@/components/ui/styles";
import { STORE_URL, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Official After Light Tattoo merch: tees, hoodies, sweatshirts and drinkware.",
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

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.url} product={p} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className={btnGhost}>
          Visit the full store
        </a>
      </div>
    </section>
  );
}
