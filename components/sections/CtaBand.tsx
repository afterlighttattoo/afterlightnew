import Link from "next/link";
import { btnPrimary } from "@/components/ui/styles";

export function CtaBand() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-4xl text-ivory md:text-5xl">Ready when you are.</h2>
        <p className="mt-5 text-zinc-400">
          Tell us your idea, placement and preferred artist. We&apos;ll reply with next steps and availability.
        </p>
        <Link href="/contact" className={`${btnPrimary} mt-10`}>
          Contact us
        </Link>
      </div>
    </section>
  );
}
