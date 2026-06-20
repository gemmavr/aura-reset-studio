export default function Manifesto({ copy }) {
  return (
    <section className="reveal bg-aura-softWhite px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mx-auto mb-10 h-px max-w-sm bg-aura-teal/30" />
        <h2 className="font-serif text-5xl leading-[0.98] sm:text-7xl lg:text-[6.4rem]">
          {copy.title}
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-aura-ink/72 sm:text-xl sm:leading-9">
          {copy.text}
        </p>
      </div>
    </section>
  );
}
