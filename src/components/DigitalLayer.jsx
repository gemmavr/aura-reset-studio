export default function DigitalLayer({ copy }) {
  return (
    <section className="reveal bg-aura-softWhite px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-aura-teal">Acceso digital próximamente</p>
          <h2 className="mt-7 font-serif text-6xl leading-[0.96] sm:text-8xl">{copy.title}</h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-aura-ink/72">{copy.text}</p>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border border-aura-ink/10 bg-aura-shell p-5 shadow-image">
          <div className="rounded-[2rem] bg-aura-softWhite p-6">
            <div className="flex items-center justify-between border-b border-aura-ink/10 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aura-stone">Aura</p>
              <span className="h-3 w-3 rounded-full bg-aura-halo" />
            </div>
            <h3 className="mt-8 font-serif text-4xl leading-none text-aura-deepAtlantic">{copy.question}</h3>
            <div className="mt-8 grid gap-3">
              {copy.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    index === 0
                      ? "border-aura-teal bg-aura-teal text-aura-softWhite"
                      : "border-aura-ink/10 text-aura-ink/70 hover:border-aura-teal"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-aura-arena/45 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-aura-stone">Recomendado</p>
              <p className="mt-3 font-serif text-3xl text-aura-ink">{copy.recommendation}</p>
            </div>
            <button
              type="button"
              className="mt-5 min-h-12 w-full rounded-full bg-aura-deepAtlantic text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aura-softWhite"
            >
              {copy.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
