import React from 'react';
import { StarBackground } from './components/StarBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#0a0c10' }}>
      {/* Fondo fijo animado */}
      <StarBackground />

      {/* Contenido por encima del fondo */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;