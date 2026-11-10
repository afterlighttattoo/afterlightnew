import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtistGrid } from "@/components/artists/ArtistGrid";
import { Gallery } from "@/components/artists/Gallery";
import { btnPrimary } from "@/components/ui/styles";
import { artists, getArtist } from "@/lib/artists";
import { getArtwork } from "@/lib/artwork";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) return {};
  return {
    title: artist.name,
    description: `${artist.name}, tattoo artist at After Light Tattoo in White Oak, PA. ${artist.specialty.replaceAll(" • ", ", ")}. View their portfolio and get in touch.`,
    openGraph: { images: [artist.profile] },
  };
}

export default async function ArtistPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  const artwork = getArtwork(artist);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:pt-20">
        <Link href="/artists" className="text-xs uppercase tracking-[0.25em] text-zinc-500 transition hover:text-gold-light">
          ← All artists
        </Link>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-[320px_1fr] md:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-sm border border-gold/30 md:max-w-none">
            <Image
              src={artist.profile}
              alt={`${artist.name}, tattoo artist`}
              fill
              priority
              sizes="(min-width: 768px) 320px, 80vw"
              className="object-cover object-top"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Primary styles</p>
            <h1 className="mt-4 font-display text-5xl font-medium text-ivory md:text-7xl">{artist.name}</h1>
            <ul className="mt-5 flex flex-wrap gap-2">
              {artist.styles.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-gold/40 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-gold-light"
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-zinc-400">
              {artist.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href={`/contact?artist=${artist.slug}`} className={btnPrimary}>
                Book with {artist.name.split(" ")[0]}
              </Link>
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">{artwork.length} pieces</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24" aria-labelledby="portfolio-heading">
        <div className="mb-8 flex items-center gap-6">
          <h2 id="portfolio-heading" className="font-display text-3xl text-ivory">
            Portfolio
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
        </div>
        <Gallery items={artwork.map((src) => ({ src, artist: artist.name }))} />
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 font-display text-3xl text-ivory">More artists</h2>
          <ArtistGrid exclude={artist.slug} />
        </div>
      </section>
    </>
  );
}
