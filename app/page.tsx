import Image from "next/image";
import Link from "next/link";
import { ArtistGrid } from "@/components/artists/ArtistGrid";
import { Believe } from "@/components/sections/Believe";
import { CtaBand } from "@/components/sections/CtaBand";
import { Meaning } from "@/components/sections/Meaning";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { btnGhost, btnPrimary } from "@/components/ui/styles";

export default function HomePage() {
  return (
    <>
      {/* Hero: full-bleed studio photo */}
      <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src="/studio/floor.jpg"
          alt="Inside After Light Tattoo: the front desk with its neon sign, the lounge, and the artists' stations"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[50%_65%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-zinc-950" />
        <div className="px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-light md:text-sm">After Light Tattoo</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-medium leading-tight text-ivory md:text-7xl">
            Drawn in the dark. Worn in the light.
          </h1>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Contact us
            </Link>
            <Link href="/gallery" className={btnGhost}>
              View the gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Welcome" title="A custom tattoo studio" />
          <div className="mt-8 space-y-5 text-center leading-relaxed text-zinc-400">
            <p>
              From the first step inside, you should feel at home. After Light is a crew of artists who care about
              craft, creativity and the people in the chair.
            </p>
            <p>
              Take a look at the artists&apos; work, then reach out to share your idea. You can pick an artist, or
              tell us about your vision and we&apos;ll introduce you to the artist who can bring it to life best.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-5xl px-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-gold/30">
            <Image
              src="/studio/entrance.jpg"
              alt="The After Light Tattoo lobby with the marble front desk and neon sign"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover object-[50%_35%]"
            />
          </div>
        </div>
      </section>

      <Meaning />

      {/* Artists */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The crew"
            title="Meet the artists"
            description="Four artists, four distinct hands. Pick one and see their work."
          />
          <div className="mt-14">
            <ArtistGrid />
          </div>
        </div>
      </section>

      <Believe />
      <CtaBand />
    </>
  );
}
