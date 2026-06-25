type ExperienceCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  meta: string;
  price: string;
  tone?: "sand" | "olive" | "atlantic";
};

const tones = {
  sand: "bg-aura-arena/22",
  olive: "bg-aura-olive/12",
  atlantic: "bg-aura-atlantic/10",
};

export default function ExperienceCard({
  title,
  description,
  image,
  alt,
  meta,
  price,
  tone = "sand",
}: ExperienceCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.1rem] border border-aura-clay/35 ${tones[tone]} transition duration-500 hover:-translate-y-1 hover:border-aura-atlantic/35 hover:shadow-image`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-[1.045] group-hover:saturate-[1.04]"
        />
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-aura text-aura-olive">
          {meta}
        </p>
        <h3 className="mt-3 font-serif text-3xl text-aura-deepAtlantic">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-aura-stone">{description}</p>
        <p className="mt-5 inline-flex rounded-full border border-aura-atlantic/20 bg-aura-softWhite/72 px-3 py-1.5 text-sm font-semibold text-aura-deepAtlantic">
          {price}
        </p>
      </div>
    </article>
  );
}
