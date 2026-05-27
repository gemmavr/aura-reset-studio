import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Manifesto from "./components/Manifesto.jsx";
import Pillars from "./components/Pillars.jsx";
import Editorial from "./components/Editorial.jsx";
import FirstExperience from "./components/FirstExperience.jsx";
import AboutGemma from "./components/AboutGemma.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Footer from "./components/Footer.jsx";
import { translations } from "./data/translations.jsx";

export default function App() {
  const [language, setLanguage] = useState("es");
  const copy = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-aura-shell text-aura-ink selection:bg-aura-clay selection:text-aura-warm">
      <Header copy={copy.nav} language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero copy={copy.hero} />
        <Manifesto copy={copy.manifesto} />
        <Pillars copy={copy.pillars} />
        <Editorial copy={copy.editorial} />
        <FirstExperience copy={copy.firstExperience} />
        <AboutGemma copy={copy.about} />
        <Waitlist copy={copy.waitlist} />
      </main>
      <Footer copy={copy.footer} />
    </div>
  );
}
