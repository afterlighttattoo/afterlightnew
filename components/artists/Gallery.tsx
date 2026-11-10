"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryItem = {
  src: string;
  artist: string;
};

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  // Close the viewer if the list shrinks under it (e.g. the filter changed).
  useEffect(() => {
    setActive((i) => (i !== null && i >= items.length ? null : i));
  }, [items.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, step]);

  if (items.length === 0) {
    return <p className="py-20 text-center text-zinc-500">New work is on its way. Check back soon.</p>;
  }

  const current = active !== null ? items[active] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <li key={item.src}>
            <button
              onClick={() => setActive(i)}
              aria-label={`Open tattoo by ${item.artist}, ${i + 1} of ${items.length}`}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-sm bg-zinc-900 ring-gold-light/0 transition hover:ring-1 hover:ring-gold/70 focus-visible:ring-2 focus-visible:ring-gold-light"
            >
              <Image
                src={item.src}
                alt={`Tattoo by ${item.artist}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Artwork viewer"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4"
          onClick={close}
        >
          <div className="relative h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={`Tattoo by ${current.artist}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-4 top-4 rounded-full bg-zinc-900/80 p-3 text-zinc-300 transition hover:text-gold-light"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/80 p-3 text-zinc-300 transition hover:text-gold-light sm:left-6"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/80 p-3 text-zinc-300 transition hover:text-gold-light sm:right-6"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-zinc-500">
            {current.artist} · {(active ?? 0) + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
