"use client";

import { useState } from "react";
import { categories, products, type Category } from "@/lib/products";
import { ProductCard } from "./ProductCard";

type Filter = "All" | Category;

export function ShopGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter products by category">
        {(["All", ...categories] as Filter[]).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
              filter === c
                ? "border-gold bg-gold text-zinc-950"
                : "border-white/15 text-zinc-400 hover:border-gold/60 hover:text-gold-light"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProductCard key={p.url} product={p} />
        ))}
      </div>
    </>
  );
}
