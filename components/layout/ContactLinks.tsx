import { site } from "@/lib/site";

/** Email, phone and social links. Email and phone only show once set in lib/site.ts. */
export function ContactLinks() {
  const link = "transition hover:text-gold-light";
  return (
    <ul className="space-y-2 text-zinc-400">
      {site.email && (
        <li>
          <a href={`mailto:${site.email}`} className={link}>
            {site.email}
          </a>
        </li>
      )}
      {site.phone && (
        <li>
          <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className={link}>
            {site.phone}
          </a>
        </li>
      )}
      <li>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={link}>
          Instagram
        </a>
      </li>
      <li>
        <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={link}>
          Facebook
        </a>
      </li>
    </ul>
  );
}
