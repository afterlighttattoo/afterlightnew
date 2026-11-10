import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/artists/GalleryBrowser";
import type { GalleryItem } from "@/components/artists/Gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { artists } from "@/lib/artists";
import { getArtwork } from "@/lib/artwork";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Recent tattoo work from every artist at After Light Tattoo.",
};

/** Mixes the artists' work together (a, b, c, d, a, b, …) instead of one long block per artist. */
function interleave(): GalleryItem[] {
  const queues = artists.map((a) => getArtwork(a).map((src) => ({ src, artist: a.name })));
  const out: GalleryItem[] = [];
  for (let i = 0; queues.some((q) => i < q.length); i++) {
    for (const q of queues) if (i < q.length) out.push(q[i]);
  }
  return out;
}

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        as="h1"
        eyebrow="Gallery"
        title="Recent work"
        description="A look at what's coming out of the studio. Tap any piece to view it full size."
      />
      <div className="mt-14">
        <GalleryBrowser items={interleave()} artistNames={artists.map((a) => a.name)} />
      </div>
    </section>
  );
}
