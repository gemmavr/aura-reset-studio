import { stockImages } from "@/lib/images";
import CTAButton from "./CTAButton";

export default function UpcomingExperience() {
  return (
    <section
      id="proxima"
      className="bg-aura-softWhite px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="relative min-h-[24rem] overflow-hidden rounded-[1.25rem] sm:min-h-[34rem]">
          <img
            src={stockImages.upcoming}
            alt="Grupo pequeño compartiendo una experiencia al aire libre"
            className="editorial-image h-full w-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-aura-softWhite/88 p-4 backdrop-blur sm:hidden">
            <p className="text-sm font-semibold text-aura-deepAtlantic">
              Barcelona · grupo reducido
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden rounded-[1.25rem] bg-aura-mist p-6 sm:p-8 lg:p-12">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-aura-atlantic/10 blur-2xl" />
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
            <div className="rounded-2xl bg-aura-softWhite/68 p-4">
              <dt className="font-semibold">Formato</dt>
              <dd className="mt-1 text-aura-stone">
                Movimiento, respiración y journaling
              </dd>
            </div>
            <div className="rounded-2xl bg-aura-softWhite/68 p-4">
              <dt className="font-semibold">Lugar</dt>
              <dd className="mt-1 text-aura-stone">Barcelona · espacio local</dd>
            </div>
            <div className="rounded-2xl bg-aura-softWhite/68 p-4">
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
