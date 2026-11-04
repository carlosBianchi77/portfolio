import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
const miFoto = "/assets/carlos-bianchi.jpg"; // Asegúrate de tener tu foto en esta ruta
import './Hero.css';

export const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        
        {/* NUEVA SECCIÓN GRANDE Y CENTRADA ARRIBA */}
        <div className="hero-main-profile">
          <div className="hero-big-avatar-wrapper">
            <img 
              src={miFoto} 
              alt="Carlos Bianchi" 
              className="hero-big-avatar-img"
            />
          </div>
          <h1 className="hero-profile-name">Carlos Bianchi</h1>
          <p className="hero-profile-tagline">
            Frontend Developer Junior · En formación Full Stack
            </p>
        </div>

        {/* CONTENIDO INFERIOR (Grid con título principal y ventana de código) */}
        <div className="hero-grid-content">
          <div className="hero-content">
            <div className="badge-available">
              <span className="pulse-dot"></span>
              <span>Buscando mi primera oportunidad como Frontend Junior / Trainee</span>
            </div>

            <h2>Construyo experiencias web con código y creatividad.</h2>
            <p>
              Desarrollo aplicaciones web modernas y funcionales con React y JavaScript. Actualmente estoy ampliando mis conocimientos en Backend para crear soluciones completas, desde la interfaz hasta la lógica del servidor.
              </p>

            <div className="hero-buttons">
              <a href="#proyectos" className="btn-primary">
                <span>Explorar Proyectos</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contacto" className="btn-secondary">
                Contactarme
              </a>
            </div>

            <div className="hero-socials">
              {/* GitHub Oficial */}
              <a href="https://github.com/carlosBianchi77" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {/* LinkedIn Oficial */}
              <a href="https://www.linkedin.com/in/carlos-bianchi-b79b86299/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span className="window-dot red"></span>
                  <span className="window-dot yellow"></span>
                  <span className="window-dot green"></span>
                </div>
                <div className="window-title">
                  <Terminal size={14} />
                  <span>carlos-dev.jsx</span>
                </div>
              </div>
              <div className="window-body">
                <pre><code>{`const developer = {
  name: "Carlos Bianchi",
  role: "Frontend Developer",
  focus: ["React", "JavaScript", "UI/UX"],
  status: "Open to Work",
  learning: "Node.js & FullStack"
};`}</code></pre>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};