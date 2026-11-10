import type { Metadata } from "next";
import Image from "next/image";
import { Believe } from "@/components/sections/Believe";
import { CtaBand } from "@/components/sections/CtaBand";
import { Meaning } from "@/components/sections/Meaning";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "About the After Light Tattoo studio: our space, our artists and what we believe in.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
        <SectionHeading
          as="h1"
          eyebrow="About the studio"
          title="Made in the quiet hours"
        />
        {/* Draft copy — replace with the studio's own story. */}
        <div className="mt-10 space-y-5 text-center leading-relaxed text-zinc-400">
          <p>
            After Light is a custom tattoo studio built around a simple idea: a tattoo should be unhurried. A real
            conversation, a drawing made for you, and a result you&apos;ll love for decades.
          </p>
          <p>
            Our space is relaxed, clean and welcoming. Each artist brings their own style, influences and personality
            to every piece, and every tattoo starts with getting to know you and your idea.
          </p>
          <p>
            Browse the artists, pick a style that speaks to you, and get in touch. If you&apos;re not sure who&apos;s
            the right fit, tell us what you have in mind and we&apos;ll point you to the right artist.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-4 px-6 pb-24">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-gold/30">
          <Image
            src="/studio/lobby.jpg"
            alt="The lobby at After Light Tattoo: seating, display wall and front desk"
            fill
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
            <Image
              src="/studio/lounge-portrait.jpg"
              alt="The lounge with leather couch and flash books, looking toward the artists' stations"
              fill
              sizes="(min-width: 768px) 576px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
            <Image
              src="/studio/entrance.jpg"
              alt="The entrance and marble front desk with the neon After Light Tattoo sign"
              fill
              sizes="(min-width: 768px) 576px, 100vw"
              className="object-cover object-[65%_50%]"
            />
          </div>
        </div>
      </section>

      <Meaning />
      <Believe />
      <CtaBand />
    </>
  );
}
