// Server-only: reads the filesystem. Never import this from a client component.
import fs from "node:fs";
import path from "node:path";
import type { Artist } from "./artists";

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

/**
 * Lists the image files in an artist's artwork folder as public URLs, in natural
 * order (am-2 before am-10). Runs at build/request time on the server.
 */
export function getArtwork(artist: Artist): string[] {
  const dir = path.join(process.cwd(), "public", artist.artworkDir);
  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map((f) => `${artist.artworkDir}/${f}`);
}
