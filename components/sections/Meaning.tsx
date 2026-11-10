import { site } from "@/lib/site";

/** The owner's statement on what the studio name means. */
export function Meaning() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/5 py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_50%,rgba(185,143,90,0.12),transparent_65%)]"
      />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Our name</p>
        <h2 className="mt-4 font-display text-4xl font-medium text-ivory md:text-5xl">
          The meaning behind After Light
        </h2>
        <blockquote className="mt-10 font-display text-2xl italic leading-relaxed text-zinc-300 md:text-3xl">
          &ldquo;{site.meaning}&rdquo;
        </blockquote>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-zinc-500">From the owner</p>
      </div>
    </section>
  );
}
