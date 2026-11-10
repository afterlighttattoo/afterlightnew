type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, description, align = "center", as: Tag = "h2" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>}
      <Tag className="font-display text-4xl font-medium text-ivory md:text-5xl">{title}</Tag>
      {description && <p className="mt-5 leading-relaxed text-zinc-400">{description}</p>}
    </div>
  );
}
