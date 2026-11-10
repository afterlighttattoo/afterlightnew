import type { Metadata } from "next";
import { ArtistGrid } from "@/components/artists/ArtistGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Artists",
  description: "Meet the After Light Tattoo artists and browse their portfolios.",
};

export default function ArtistsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        as="h1"
        eyebrow="The lineup"
        title="Our artists"
        description="Choose an artist to see their latest work and get in touch."
      />
      <div className="mt-14">
        <ArtistGrid />
      </div>
    </section>
  );
}
