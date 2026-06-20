import { stockImages } from "@/lib/images";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section id="inicio" className="aura-grain overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-20">
        <div className="section-rise relative z-10 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-aura text-aura-olive">
            Barcelona · Las Palmas · Experiencias presenciales
          </p>
          <h1 className="text-balance font-serif text-[3.25rem] leading-[0.9] text-aura-deepAtlantic sm:text-6xl lg:text-7xl">
            Baja el ruido. Vuelve al cuerpo.
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-aura-stone sm:text-lg">
            AURA Reset Studio crea pausas, talleres y encuentros para volver al ritmo propio sin salir de la vida real.
          </p>
          <p className="mt-5 max-w-xl text-base italic text-aura-atlantic">
            Tornar al cos. Tornar al ritme. Tornar a tu.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#proxima">Reservar próxima pausa</CTAButton>
            <CTAButton href="#retiro" variant="secondary">
              Interés retiro septiembre
            </CTAButton>
          </div>
        </div>

        <div className="section-rise relative min-h-[25rem] sm:min-h-[34rem] lg:min-h-[42rem]">
          <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-aura-olive/15 blur-3xl" />
          <img
            src={stockImages.hero}
            alt="Mar atlántico luminoso como paisaje principal de AURA"
            className="editorial-image absolute left-0 top-0 h-[78%] w-[74%] rounded-[1.35rem] object-cover shadow-image sm:rounded-[1.75rem]"
          />
          <img
            src={stockImages.journal}
            alt="Cuaderno abierto para escritura consciente"
            className="editorial-image absolute bottom-0 right-0 h-[48%] w-[48%] rounded-[1.15rem] object-cover shadow-soft ring-8 ring-aura-cal sm:ring-[14px]"
          />
          <div className="absolute bottom-[16%] left-[8%] max-w-[17rem] rounded-2xl bg-aura-softWhite/90 p-4 shadow-soft backdrop-blur">
            <p className="text-sm font-semibold text-aura-deepAtlantic">
              Próxima experiencia
            </p>
            <p className="mt-1 text-sm leading-5 text-aura-stone">
              Pausa Aura: Volver al cuerpo · plazas limitadas
            </p>
          </div>
          <div className="absolute right-[8%] top-[8%] hidden max-w-[9rem] rounded-full bg-aura-arena/75 px-4 py-3 text-center text-xs font-semibold uppercase tracking-aura text-aura-deepAtlantic shadow-soft sm:block">
            Luz local
          </div>
        </div>
      </div>
    </section>
  );
}
