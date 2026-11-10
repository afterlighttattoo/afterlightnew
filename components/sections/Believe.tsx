import { SectionHeading } from "@/components/ui/SectionHeading";

// Draft values — edit to match the studio's real principles.
const beliefs = [
  "Custom designs drawn for you and your body",
  "Bold, clean linework that holds up over time",
  "A warm, welcoming atmosphere from the first hello",
  "A professional, spotless studio",
  "Honest aftercare guidance so your tattoo heals well",
];

export function Believe() {
  return (
    <section className="border-y border-white/5 bg-black/40 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="What we stand for" title="We believe in" />
        <ul className="mt-12 space-y-5">
          {beliefs.map((b) => (
            <li key={b} className="flex items-start gap-4 border-b border-white/5 pb-5 text-lg text-zinc-300">
              <svg viewBox="0 0 12 12" className="mt-2 h-3 w-3 shrink-0 text-gold" fill="currentColor" aria-hidden>
                <path d="M6 0l6 6-6 6-6-6z" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
