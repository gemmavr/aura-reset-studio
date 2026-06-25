import ExperienceCard from "@/components/ExperienceCard";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReservationForm from "@/components/ReservationForm";
import RetreatSection from "@/components/RetreatSection";
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

        <section className="bg-aura-softWhite px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="relative order-2 min-h-[26rem] lg:order-1">
              <img
                src={stockImages.manifesto}
                alt="Mesa luminosa con ordenador y libreta, una escena cotidiana y cuidada"
                className="editorial-image absolute left-0 top-0 h-[72%] w-[78%] rounded-[1.25rem] object-cover shadow-image"
              />
              <img
                src={stockImages.table}
                alt="Comida saludable en una mesa de madera compartida"
                className="editorial-image absolute bottom-0 right-0 h-[46%] w-[54%] rounded-[1.1rem] object-cover shadow-soft ring-8 ring-aura-softWhite"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-aura text-aura-olive">
                Manifiesto
              </p>
              <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-tight text-aura-deepAtlantic sm:text-5xl">
                No venimos a optimizarte. Venimos a recordarte que ya tienes cuerpo, ritmo y casa dentro.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-aura-stone">
                AURA no es bienestar de escaparate ni una postal para turistas. Es una forma de encontrarnos en la ciudad, bajar la velocidad y cuidar lo que sostiene la vida cotidiana.
              </p>
            </div>
          </div>
        </section>

        <section
          id="experiencias"
          className="bg-aura-cal px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-aura text-aura-olive">
                  Experiencias
                </p>
                <h2 className="mt-4 text-balance font-serif text-4xl text-aura-deepAtlantic sm:text-5xl">
                  Formatos para volver sin desaparecer.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-aura-stone lg:justify-self-end">
                Cada formato mezcla cuerpo, palabra, mesa y territorio de manera distinta. Nada de fórmulas importadas: presencia local, diseño cuidado y grupos pequeños.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:[&>*:nth-child(even)]:mt-10">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.title} {...experience} />
              ))}
            </div>
          </div>
        </section>

        <UpcomingExperience />
        <ReservationForm />

        <section className="bg-aura-cal px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-[1.25rem] bg-aura-olive/10 p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-aura text-aura-olive">
                Ven como estés
              </p>
              <h2 className="mt-4 text-balance font-serif text-4xl leading-tight text-aura-deepAtlantic sm:text-5xl">
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
                className="editorial-image absolute right-0 top-0 h-[78%] w-[76%] rounded-[1.25rem] object-cover shadow-image"
              />
              <img
                src={stockImages.journal}
                alt="Escritura en cuaderno durante una pausa"
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
