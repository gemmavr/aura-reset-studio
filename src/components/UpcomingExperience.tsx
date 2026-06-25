import { stockImages } from "@/lib/images";
import CTAButton from "./CTAButton";

export default function UpcomingExperience() {
  return (
    <section
      id="proxima"
      className="border-y border-aura-clay bg-aura-softWhite px-7 py-20 sm:px-12 lg:px-16 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-24">
        <div className="relative min-h-[24rem] overflow-hidden sm:min-h-[34rem]">
          <img
            src={stockImages.upcoming}
            alt="Grupo pequeño compartiendo una experiencia al aire libre"
            loading="lazy"
            decoding="async"
            className="editorial-image h-full w-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 border border-aura-clay bg-aura-softWhite/88 p-4 sm:hidden">
            <p className="text-sm font-semibold text-aura-deepAtlantic">
              Barcelona · grupo reducido
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center border-t border-aura-clay pt-8 lg:pt-0">
          <p className="text-xs font-semibold uppercase tracking-aura text-aura-olive">
            Próxima experiencia
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-aura-deepAtlantic sm:text-5xl">
            Pausa Aura: Volver al cuerpo
          </h2>
          <p className="mt-5 text-lg leading-8 text-aura-stone">
            Una pausa presencial para bajar revoluciones, respirar con espacio y reconectar con el cuerpo desde una práctica suave, sensorial y acompañada.
          </p>
          <dl className="mt-8 grid gap-3 text-sm text-aura-deepAtlantic sm:grid-cols-3">
            <div className="border-t border-aura-clay pt-4">
              <dt className="font-semibold">Formato</dt>
              <dd className="mt-1 text-aura-stone">
                Movimiento, respiración y journaling
              </dd>
            </div>
            <div className="border-t border-aura-clay pt-4">
              <dt className="font-semibold">Lugar</dt>
              <dd className="mt-1 text-aura-stone">Barcelona · espacio local</dd>
            </div>
            <div className="border-t border-aura-clay pt-4">
              <dt className="font-semibold">Duración</dt>
              <dd className="mt-1 text-aura-stone">2 horas · grupo reducido</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#reserva" eventName="Reservar">
              Quiero reservar
            </CTAButton>
            <CTAButton href="#faq" variant="secondary">
              Resolver dudas
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
