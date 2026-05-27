export default function Manifesto({ copy }) {
  return (
    <section className="reveal bg-aura-warm px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-5xl leading-[1.02] sm:text-6xl">
          {copy.title}
        </h2>
        <div className="mx-auto mt-9 max-w-2xl space-y-6 text-base leading-8 text-aura-ink/75 sm:text-lg">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-16 font-serif text-5xl italic text-aura-clay sm:text-7xl">{copy.highlight}</p>
      </div>
    </section>
  );
}
