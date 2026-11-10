import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about booking, pricing, preparing for and caring for your tattoo.",
};

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading
          as="h1"
          eyebrow="Good to know"
          title="Frequently asked questions"
          description="Everything you need to know before your first appointment."
        />

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-xl text-ivory transition hover:text-gold-light [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="pb-6 pr-10 leading-relaxed text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Still have a question?{" "}
          <Link href="/contact" className="text-gold-light underline-offset-4 hover:underline">
            Get in touch
          </Link>
          .
        </p>
      </section>
      <CtaBand />
    </>
  );
}
