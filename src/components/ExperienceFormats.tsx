type Experience = {
  title: string;
  description: string;
  image: string;
  alt: string;
  meta: string;
  price: string;
};

type ExperienceFormatsProps = {
  experiences: Experience[];
};

export default function ExperienceFormats({ experiences }: ExperienceFormatsProps) {
  const [featured, ...items] = experiences;

  return (
    <section
      id="experiencias"
      className="bg-aura-cal px-7 py-20 sm:px-12 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 max-w-xl lg:mb-20">
          <p className="mb-5 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-aura-stone before:mr-2 before:text-aura-olive before:content-['—']">
            Experiencias
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-aura-deepAtlantic sm:text-5xl">
            Formatos para volver sin desaparecer.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <article>
            <img
              src={featured.image}
              alt={featured.alt}
              loading="lazy"
              decoding="async"
              className="h-[360px] w-full object-cover sm:h-[420px]"
            />
            <p className="mt-7 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-aura-stone">
              {featured.meta}
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-3xl font-normal text-aura-deepAtlantic">
                {featured.title}
              </h3>
              <p className="text-sm font-medium text-aura-deepAtlantic">{featured.price}</p>
            </div>
            <p className="mt-4 max-w-[42ch] leading-7 text-aura-stone">
              {featured.description}
            </p>
          </article>

          <div className="lg:mt-10">
            {items.map((item) => (
              <article
                key={item.title}
                className="flex items-baseline justify-between gap-6 border-t border-aura-clay py-7 last:border-b"
              >
                <div>
                  <h3 className="font-serif text-2xl font-normal text-aura-deepAtlantic">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-aura-stone">{item.meta}</p>
                </div>
                <p className="shrink-0 text-right text-sm font-medium text-aura-deepAtlantic">
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
