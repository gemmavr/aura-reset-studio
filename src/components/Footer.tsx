import CTAButton from "./CTAButton";

export default function Footer() {
  return (
    <footer className="border-t border-aura-clay bg-aura-cal px-7 py-10 sm:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-base font-semibold tracking-[0.22em] text-aura-deepAtlantic">
            AURA
          </p>
          <p className="mt-2 text-sm uppercase tracking-aura text-aura-stone">
            Reset Studio
          </p>
          <p className="mt-5 max-w-md text-sm leading-6 text-aura-stone">
            Experiencias presenciales de bienestar creadas desde Barcelona y Las Palmas.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <CTAButton href="#proxima">Ver próxima pausa</CTAButton>
          <p className="text-xs text-aura-stone">
            © 2026 AURA Reset Studio · hola@auraresetstudio.com
          </p>
        </div>
      </div>
    </footer>
  );
}
