import { stockImages } from "@/lib/images";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section id="inicio" className="aura-grain overflow-hidden border-b border-aura-clay">
      <div className="grid min-h-[86svh] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="section-rise flex flex-col justify-center px-7 py-20 sm:px-12 lg:px-16 xl:px-24">
          <p className="mb-7 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-aura-stone before:mr-2 before:text-aura-olive before:content-['—']">
            Barcelona · Las Palmas
          </p>
          <h1 className="max-w-[11ch] font-serif text-[3.1rem] font-light leading-[1.02] tracking-[-0.01em] text-aura-deepAtlantic sm:text-6xl lg:text-[4.4rem]">
            Baja el ruido. Vuelve al cuerpo.
          </h1>
          <p className="mt-9 max-w-[38ch] text-[1.04rem] leading-8 text-aura-stone">
            Pausas, talleres y encuentros para volver al ritmo propio sin salir de la vida real.
          </p>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <CTAButton href="#proxima" eventName="Reservar">
              Reservar próxima pausa
            </CTAButton>
            <CTAButton href="#retiro" variant="secondary" eventName="Apuntarme al interés">
              Interés retiro septiembre
            </CTAButton>
          </div>
        </div>

        <div className="section-rise relative min-h-[52svh] bg-aura-sand lg:min-h-full lg:-mr-12">
          <img
            src={stockImages.hero}
            alt="Mar atlántico luminoso como paisaje principal de AURA"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-6 border border-aura-ivory/45" />
          <div className="absolute bottom-8 left-6 max-w-[15rem] border border-aura-clay bg-aura-ivory p-5 text-sm leading-6 text-aura-stone shadow-soft sm:left-[-4rem] sm:bottom-14">
            <strong className="mb-1 block font-serif text-base font-normal text-aura-deepAtlantic">
              Pausa Aura
            </strong>
            Volver al cuerpo · plazas limitadas
          </div>
        </div>
      </div>
    </section>
  );
}
