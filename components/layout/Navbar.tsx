"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLeft, navLinks, navRight } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) =>
    `text-[13px] font-medium uppercase tracking-[0.25em] transition-colors hover:text-gold-light ${
      isActive(href) ? "text-gold-light" : "text-zinc-300"
    }`;

  const renderLinks = (links: readonly { href: string; label: string }[]) =>
    links.map((l) => (
      <li key={l.href}>
        <Link href={l.href} className={linkClass(l.href)} aria-current={isActive(l.href) ? "page" : undefined}>
          {l.label}
        </Link>
      </li>
    ));

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 shadow-[0_1px_0_0_rgba(185,143,90,0.35)] backdrop-blur-md">
      {/* Left links | centered logo | right links */}
      <nav
        className="mx-auto grid h-24 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-x-4 px-6 md:gap-x-12"
        aria-label="Main"
      >
        <div className="flex items-center justify-start md:justify-end">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="-ml-2 rounded-full p-2 text-zinc-300 transition hover:text-gold-light md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
          <ul className="hidden items-center gap-10 md:flex">{renderLinks(navLeft)}</ul>
        </div>

        <Link href="/" aria-label="After Light Tattoo — home" onClick={() => setMenuOpen(false)}>
          <Image
            src="/branding/logo-transparent.png"
            alt="After Light Tattoo"
            width={96}
            height={96}
            priority
            className="h-20 w-20 md:h-24 md:w-24"
          />
        </Link>

        <div className="flex items-center">
          <ul className="hidden items-center gap-10 md:flex">{renderLinks(navRight)}</ul>
        </div>
      </nav>

      {menuOpen && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/5 px-6 py-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setMenuOpen(false)} className={`block py-3 ${linkClass(l.href)}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
