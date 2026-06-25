import ExperienceFormats from "@/components/ExperienceFormats";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReservationForm from "@/components/ReservationForm";
import RetreatSection from "@/components/RetreatSection";
import SignatureMoment from "@/components/SignatureMoment";
import UpcomingExperience from "@/components/UpcomingExperience";
import { stockImages } from "@/lib/images";

const experiences = [
  {
    title: "Pausas",
    description:
      "Sesiones puntuales para bajar el ruido del día y volver al cuerpo con respiración, presencia y un cierre cuidado.",
    image: stockImages.pauses,
    alt: "Paisaje de costa y luz natural para una pausa Aura",
    meta: "2 horas · grupo reducido",
    price: "[PRECIO_PAUSA]",
    tone: "atlantic" as const,
  },
  {
    title: "Talleres",
    description:
      "Formatos más largos para explorar movimiento suave, escritura, ritual cotidiano y herramientas simples de regulación.",
    image: stockImages.workshops,
    alt: "Cuaderno y escritura en una mesa luminosa",
    meta: "Profundidad sin exigencia",
    price: "[PRECIO_TALLERES]",
    tone: "sand" as const,
  },
  {
    title: "Encuentros",
    description:
      "Momentos presenciales para compartir mesa, palabra y práctica desde una comunidad local, moderna y sin pose.",
    image: stockImages.gatherings,
    alt: "Grupo pequeño compartiendo una mesa al aire libre",
    meta: "Comunidad local",
    price: "[PRECIO_ENCUENTROS]",
    tone: "olive" as const,
  },
  {
    title: "Retiro Aura",
    description:
      "Una experiencia de fin de semana para salir del piloto automático y recuperar un ritmo más humano en septiembre.",
    image: stockImages.retreat,
    alt: "Mar atlántico luminoso para el Retiro Aura",
    meta: "Septiembre · interés abierto",
    price: "[PRECIO_RETIRO]",
    tone: "atlantic" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-aura-cal text-aura-ink">
      <Header />
      <main>
        <Hero />
        <SignatureMoment />

        <section className="bg-aura-softWhite px-7 py-20 sm:px-12 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="relative order-2 min-h-[26rem] lg:order-1">
              <img
                src={stockImages.manifesto}
                alt="Mesa luminosa con ordenador y libreta, una escena cotidiana y cuidada"
                loading="lazy"
                decoding="async"
                className="editorial-image absolute left-0 top-0 h-[72%] w-[78%] rounded-[1.25rem] object-cover shadow-image"
              />
              <img
                src={stockImages.table}
                alt="Comida saludable en una mesa de madera compartida"
                loading="lazy"
                decoding="async"
                className="editorial-image absolute bottom-0 right-0 h-[46%] w-[54%] rounded-[1.1rem] object-cover shadow-soft ring-8 ring-aura-softWhite"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-aura text-aura-olive">
                Manifiesto
              </p>
              <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-light leading-tight text-aura-deepAtlantic sm:text-5xl">
                No venimos a optimizarte. Venimos a recordarte que ya tienes cuerpo, ritmo y casa dentro.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-aura-stone">
                AURA no es bienestar de escaparate ni una postal para turistas. Es una forma de encontrarnos en la ciudad, bajar la velocidad y cuidar lo que sostiene la vida cotidiana.
              </p>
            </div>
          </div>
        </section>

        <ExperienceFormats experiences={experiences} />

        <UpcomingExperience />
        <ReservationForm />

        <section className="bg-aura-cal px-7 py-20 sm:px-12 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="border border-aura-clay bg-aura-olive/10 p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-aura text-aura-olive">
                Ven como estés
              </p>
              <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight text-aura-deepAtlantic sm:text-5xl">
                Sin tener que llegar tranquila, flexible o perfectamente disponible.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-aura-stone">
                Puedes venir cansada, dispersa, curiosa, sin saber qué necesitas. AURA sostiene un espacio amable, adulto y luminoso para escuchar el cuerpo sin convertirlo en una tarea más.
              </p>
            </div>
            <div className="relative min-h-[28rem]">
              <img
                src={stockImages.comeAsYouAre}
                alt="Detalle de piel, lino y calma cotidiana"
                loading="lazy"
                decoding="async"
                className="editorial-image absolute right-0 top-0 h-[78%] w-[76%] rounded-[1.25rem] object-cover shadow-image"
              />
              <img
                src={stockImages.journal}
                alt="Escritura en cuaderno durante una pausa"
                loading="lazy"
                decoding="async"
                className="editorial-image absolute bottom-0 left-0 h-[44%] w-[50%] rounded-[1rem] object-cover shadow-soft ring-8 ring-aura-cal"
              />
            </div>
          </div>
        </section>

        <RetreatSection />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
}
