import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/booking/BookingForm";
import { ContactLinks } from "@/components/layout/ContactLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getArtist } from "@/lib/artists";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with After Light Tattoo in White Oak, PA.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ artist?: string }> }) {
  const { artist } = await searchParams;
  const defaultArtist = artist && getArtist(artist) ? artist : "any";

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        as="h1"
        title="Contact us"
        description="Share a few details and we'll follow up to confirm your artist, a consult, and a date."
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_380px]">
        <BookingForm defaultArtist={defaultArtist} />

        <aside className="space-y-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold/30">
            <Image
              src="/studio/entrance.jpg"
              alt="The After Light Tattoo front desk"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Visit</h2>
            <address className="space-y-1 not-italic text-zinc-400">
              {site.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-gold-light transition hover:text-ivory"
            >
              Get directions →
            </a>
          </div>

          <div>
            <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Hours</h2>
            <ul className="space-y-1 text-zinc-400">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-zinc-200">{h.days}</span> · {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Connect</h2>
            <ContactLinks />
          </div>
        </aside>
      </div>
    </section>
  );
}
