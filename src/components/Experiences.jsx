import Button from "./Button.jsx";

export default function Experiences({ copy }) {
  return (
    <section id="experiencias" className="reveal scroll-mt-24 bg-aura-shell px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="font-serif text-6xl leading-[0.95] sm:text-8xl">{copy.title}</h2>
          <p className="max-w-xl text-lg leading-8 text-aura-ink/70">{copy.subtitle}</p>
        </div>

        <div className="mt-10 grid border-t border-aura-ink/10 md:mt-12 md:grid-cols-2">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className={`group border-b border-aura-ink/10 py-9 transition md:px-8 ${
                index % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-aura-halo transition group-hover:bg-aura-coral" />
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-aura-deepAtlantic">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-md font-serif text-3xl leading-tight text-aura-ink sm:text-4xl">
                    {item.text}
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-aura-teal">{item.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Button href="#sunset-reset">{copy.cta}</Button>
        </div>
      </div>
    </section>
  );
}
