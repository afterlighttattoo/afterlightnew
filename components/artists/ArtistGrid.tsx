import Image from "next/image";
import Link from "next/link";
import { artists, type Artist } from "@/lib/artists";

function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group relative block overflow-hidden rounded-sm border border-white/10 bg-zinc-900 transition duration-500 hover:border-gold/60"
    >
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={artist.profile}
          alt={`${artist.name}, tattoo artist`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-3xl text-ivory">{artist.name}</h3>
        <p className="mt-2 text-[11px] uppercase leading-relaxed tracking-[0.18em] text-gold">{artist.specialty}</p>
        <p className="mt-3 translate-y-2 text-xs uppercase tracking-[0.25em] text-gold-light opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View portfolio →
        </p>
      </div>
    </Link>
  );
}

export function ArtistGrid({ exclude }: { exclude?: string }) {
  const list = exclude ? artists.filter((a) => a.slug !== exclude) : artists;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((a) => (
        <ArtistCard key={a.slug} artist={a} />
      ))}
    </div>
  );
}
