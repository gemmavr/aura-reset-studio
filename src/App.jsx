import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Manifesto from "./components/Manifesto.jsx";
import Pillars from "./components/Pillars.jsx";
import Editorial from "./components/Editorial.jsx";
import Experiences from "./components/Experiences.jsx";
import SensoryRitual from "./components/SensoryRitual.jsx";
import FirstExperience from "./components/FirstExperience.jsx";
import DigitalLayer from "./components/DigitalLayer.jsx";
import AboutGemma from "./components/AboutGemma.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Footer from "./components/Footer.jsx";
import { translations } from "./data/translations.jsx";

export default function App() {
  const copy = translations.es;

  return (
    <div className="min-h-screen bg-aura-shell text-aura-ink selection:bg-aura-clay selection:text-aura-ivory">
      <Header copy={copy.nav} />
      <main>
        <Hero copy={copy.hero} />
        <Manifesto copy={copy.manifesto} />
        <Editorial copy={copy.universe} />
        <Pillars copy={copy.method} />
        <Experiences copy={copy.experiences} />
        <SensoryRitual copy={copy.sensory} />
        <FirstExperience copy={copy.event} />
        <DigitalLayer copy={copy.digital} />
        <AboutGemma copy={copy.origin} />
        <Waitlist copy={copy.finalCta} />
      </main>
      <Footer copy={copy.footer} />
    </div>
  );
}
