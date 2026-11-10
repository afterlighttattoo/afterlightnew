import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-sm border border-white/10 bg-zinc-900/50 transition duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-20px_rgba(185,143,90,0.35)]"
    >
      {/* Product shots are black items on transparent backgrounds, so they sit on a light panel. */}
      <div
        className={`relative aspect-[4/5] w-full overflow-hidden ${
          product.image ? "bg-gradient-to-b from-[#f1ece0] to-[#d9d2c1]" : "bg-gradient-to-b from-zinc-900 to-black"
        }`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-3 transition duration-700 group-hover:scale-105"
          />
        ) : (
          <Image
            src="/branding/logo-transparent.png"
            alt=""
            aria-hidden
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-10 opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
          />
        )}
        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400 backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex items-baseline justify-between gap-4 p-5">
        <h3 className="font-display text-xl text-ivory">{product.name}</h3>
        {product.price && <p className="tabular-nums text-gold-light">{product.price}</p>}
      </div>
      <p className="px-5 pb-5 text-xs uppercase tracking-[0.25em] text-gold-light transition group-hover:text-ivory">
        Shop now →
      </p>
    </a>
  );
}
