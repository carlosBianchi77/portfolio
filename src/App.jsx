import React, { useState } from 'react';
import { StarBackground } from './components/StarBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { translations } from './i18n/translations';

export function App() {
  const [lang, setLang] = useState('es'); // Idioma por defecto
  const t = translations[lang];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#0a0c10' }}>
      <StarBackground />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar lang={lang} setLang={setLang} t={t.nav} />
        <main>
          <Hero t={t.hero} />
          <About t={t.about} />
          <Technologies t={t.technologies} />
          <Projects t={t.projects} />
          <Contact t={t.contact} />
        </main>
        <Footer t={t.footer} />
      </div>
    </div>
  );
}

export default App;