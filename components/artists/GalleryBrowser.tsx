"use client";

import { useState } from "react";
import { Gallery, type GalleryItem } from "./Gallery";

type Props = {
  items: GalleryItem[];
  artistNames: string[];
};

/** Studio-wide gallery with a per-artist filter. */
export function GalleryBrowser({ items, artistNames }: Props) {
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? items : items.filter((i) => i.artist === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery by artist">
        {["All", ...artistNames].map((name) => (
          <button
            key={name}
            onClick={() => setFilter(name)}
            aria-pressed={filter === name}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
              filter === name
                ? "border-gold bg-gold text-zinc-950"
                : "border-white/15 text-zinc-400 hover:border-gold/60 hover:text-gold-light"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="mt-12">
        <Gallery items={visible} />
      </div>
    </>
  );
}
