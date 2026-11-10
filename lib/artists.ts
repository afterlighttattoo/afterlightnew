export type Artist = {
  slug: string;
  name: string;
  /** Short style line shown on cards. */
  specialty: string;
  /** Full list of primary styles, shown on the artist's page. */
  styles: string[];
  /** One entry per paragraph. */
  bio: string[];
  /** Profile photo, relative to /public. */
  profile: string;
  /** Portfolio folder, relative to /public. Every image inside is picked up automatically. */
  artworkDir: string;
};

/**
 * Add or edit an artist here. To add artwork, just drop image files into the
 * artist's `artworkDir`; no code changes needed.
 */
export const artists: Artist[] = [
  {
    slug: "rob-duncan",
    name: "Rob Duncan",
    specialty: "Neo-Traditional • American Traditional • Pop-Culture",
    styles: ["Neo-Traditional", "American Traditional", "Pop-Culture"],
    bio: [
      "My name is Rob Duncan. I was born in Jeannette, Pennsylvania, spent much of my childhood in Lancaster, and moved back to the area in 2006.",
      "I’ve been professionally tattooing since 2017, specializing in Neo-Traditional, American Traditional, and pop-culture-inspired tattoos. I especially enjoy creating pieces with bold lines, strong designs, and bright, vibrant color.",
      "After years of growing as an artist and building my career, I’m proud to begin the next chapter by opening After Light Tattoo. Creating a shop of my own has given me the opportunity to build a space centered around great artwork, creativity, and making every client feel comfortable and welcome.",
      "For me, tattooing is about more than putting artwork on skin. I love taking someone’s idea—whether it’s meaningful, nostalgic, weird, or completely original—and turning it into something they’re excited to wear for life.",
      "I’m always working to grow as an artist, push my creativity, and make every tattoo better than the last.",
    ],
    profile: "/rob-duncan/rob.PNG",
    artworkDir: "/rob-duncan/new-artwork",
  },
  {
    slug: "josh-mann",
    name: "Josh Mann",
    specialty: "Color • Illustrative • Cartoon",
    styles: [
      "Color",
      "Illustrative",
      "Cartoon-inspired",
      "Graffiti-inspired",
      "Bold imagery",
      "Character designs",
      "Custom pet character tattoos",
    ],
    bio: [
      "Art has been a part of my life for as long as I can remember. I grew up in a household with a father who was an incredible artist and well known locally for his work. Watching him create had a huge influence on me, and from a young age, I was always drawing, coloring, and filling pages—and sometimes walls—with color.",
      "As I got older, I became heavily drawn to graffiti and the world of cartoons. I loved the bold colors, exaggerated characters, and personality that cartoons could bring to a piece. Eventually, I began combining those influences with graffiti, developing a style that felt uniquely my own.",
      "As my love for art continued to grow, I eventually found my way into tattooing. It gave me a new canvas to explore the styles and ideas I had been developing for years, allowing me to combine my love of graffiti, cartoons, and illustration into artwork that people can carry with them forever.",
      "Today, I love creating tattoos with bright colors, bold imagery, and plenty of personality. One of my favorite things to do is turn people’s pets into characters that capture their unique personalities.",
      "Outside of tattooing, I enjoy graffiti black book sessions, creating large murals, painting on canvas, and designing tattoo flash with paint markers.",
      "Whether I’m working on skin, paper, or a large-scale piece of artwork, my goal is always the same: to create something dope that people can connect with and never forget.",
    ],
    profile: "/josh-mann/josh-mann.jpeg",
    artworkDir: "/josh-mann/new-artwork",
  },
  {
    slug: "amanda-simonich",
    name: "Amanda Simonich",
    specialty: "Black & Gray • Floral • Fine-Line",
    styles: ["Black and gray realism", "Illustrative", "Floral", "Geometric", "Fine-line"],
    bio: [
      "I have eight years of experience tattooing in Pittsburgh and the surrounding areas. I specialize primarily in black and gray realism, illustrative, floral, geometric, and fine-line tattoos.",
      "My goal is to work with every client throughout the creative process to design a custom, lasting piece of art that they’ll be proud to wear for years to come.",
    ],
    profile: "/amanda-simonich/amanda.jpeg",
    artworkDir: "/amanda-simonich/new-artwork",
  },
  {
    slug: "aly-wisler",
    name: "Aly Wisler",
    specialty: "Fine-Line • Micro-Realism • Neo-Traditional",
    styles: ["Fine-line", "Black and gray micro-realism", "Neo-traditional", "Color", "Black and gray"],
    bio: [
      "Hello! My name is Aly, and I’ve been tattooing for about five years. I began my tattoo journey in Brookline, learning under Gregory Tepper, and completed my apprenticeship in a little over a year.",
      "While I’ve continued to grow throughout my career, I feel like the last two years have pushed me especially far as an artist and taught me so much about my craft.",
      "I’ve always leaned toward fine-line tattooing, but I try not to put myself into a box. I love experimenting with different styles and keeping things fresh. Doing the same thing every day would get boring, and fortunately, tattooing gives me the opportunity to constantly change it up.",
      "From black and gray micro-realism to bright, bold neo-traditional pieces, I love the variety and the opportunity to create something different for every client.",
    ],
    profile: "/aly-wisler/aly.jpeg",
    artworkDir: "/aly-wisler/new-artwork2",
  },
];

export function getArtist(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
