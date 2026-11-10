import Image from "next/image";
import Link from "next/link";
import { ContactLinks } from "@/components/layout/ContactLinks";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/branding/logo-transparent.png"
            alt="After Light Tattoo"
            width={120}
            height={120}
            className="h-28 w-28"
          />
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Explore</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Visit</h3>
          <address className="space-y-1 text-sm not-italic text-zinc-400">
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
          <ul className="mt-4 space-y-1 text-sm text-zinc-400">
            {site.hours.map((h) => (
              <li key={h.days}>
                <span className="text-zinc-300">{h.days}</span> · {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Connect</h3>
          <div className="text-sm">
            <ContactLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs tracking-widest text-zinc-600">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
