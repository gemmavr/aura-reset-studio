import ImageSlot from "./ImageSlot.jsx";

export default function Editorial({ copy }) {
  const marqueeText = `${copy.marquee} · ${copy.marquee} · `;

  return (
    <section id="journal" className="reveal overflow-hidden bg-aura-shell px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h2 className="font-serif text-6xl leading-[0.95] sm:text-8xl">{copy.title}</h2>
          <div className="overflow-hidden border-y border-aura-ink/10 py-5">
            <div className="marquee-track flex w-max gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-aura-teal">
              <span>{marqueeText}</span>
              <span>{marqueeText}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-[1.05fr_0.75fr_1fr] md:grid-rows-[260px_260px]">
          {copy.slots.map((slot, index) => (
            <ImageSlot
              key={slot.src}
              src={slot.src}
              label={slot.label}
              className={[
                "min-h-[320px] rounded-[1.8rem]",
                index === 0 ? "md:row-span-2 md:min-h-0" : "",
                index === 1 ? "md:min-h-0" : "",
                index === 2 ? "md:min-h-0" : "",
                index === 3 ? "md:col-span-2 md:min-h-0" : "",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
