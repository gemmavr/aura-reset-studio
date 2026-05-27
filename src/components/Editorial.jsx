import { images } from "../data/images.js";

export default function Editorial({ copy }) {
  return (
    <section className="reveal overflow-hidden bg-aura-warm px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="grid min-h-[620px] grid-cols-6 grid-rows-6 gap-4 sm:gap-6">
          <img
            src={images.seaWoman}
            alt={copy.alt.seaWoman}
            className="col-span-4 row-span-6 h-full w-full rounded-[2rem] object-cover shadow-soft"
          />
          <img
            src={images.journal}
            alt={copy.alt.journal}
            className="col-span-2 row-span-2 h-full w-full rounded-[1.4rem] object-cover"
          />
          <img
            src={images.group}
            alt={copy.alt.group}
            className="col-span-2 row-span-4 h-full w-full rounded-[1.4rem] object-cover"
          />
        </div>
        <div className="max-w-xl lg:pl-10">
          <p className="font-serif text-6xl leading-[0.96] sm:text-7xl">
            {copy.title}
          </p>
          <p className="mt-8 text-xl leading-8 text-aura-ink/70">{copy.text}</p>
        </div>
      </div>
    </section>
  );
}
