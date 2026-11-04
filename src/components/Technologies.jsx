import React from 'react';
import './Technologies.css';

export const Technologies = () => {
  // Tecnologías que utilizo con sus logotipos SVG oficiales
  const activeTechs = [
    { 
      name: "HTML5", 
      color: "#E34F26",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L12.005 24l-8.58-2.437L1.5 0zm17.09 5.72H6.41l.14 1.76h12.01l-.22 2.53H6.77l.15 1.76h11.41l-.42 4.79-5.91 1.63-5.91-1.63-.35-3.92h2.09l.2 2.22 3.97 1.09 3.97-1.09.43-4.88H8.85l-.46-5.28h10.59l.11-1.28z"/>
        </svg>
      )
    },
    { 
      name: "CSS3", 
      color: "#1572B6",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L12.005 24l-8.58-2.437L1.5 0zm17.09 5.72H6.41l.14 1.76h12.01l-.22 2.53H6.77l.15 1.76h11.41l-.42 4.79-5.91 1.63-5.91-1.63-.35-3.92h2.09l.2 2.22 3.97 1.09 3.97-1.09.43-4.88H8.85l-.46-5.28h10.59l.11-1.28z"/>
        </svg>
      )
    },
    { 
      name: "JavaScript", 
      color: "#F7DF1E",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M3 3h18v18H3V3zm14.529 14.22c.272-.443.493-.913.664-1.41l-1.455-.602c-.136.388-.316.745-.54 1.071-.224.326-.499.578-.824.756-.325.178-.711.267-1.157.267-.577 0-1.054-.132-1.431-.397-.377-.265-.566-.64-.566-1.126 0-.441.161-.806.483-1.095.322-.289.803-.526 1.442-.711l.831-.237c.928-.266 1.636-.669 2.124-1.209.488-.54.732-1.229.732-2.067 0-.916-.342-1.678-1.026-2.286-.684-.608-1.567-.912-2.648-.912-.993 0-1.821.268-2.483.804-.662.536-1.109 1.284-1.341 2.244l1.455.443c.182-.727.533-1.272 1.052-1.635.519-.363 1.159-.545 1.919-.545.545 0 .996.111 1.353.333.357.222.535.549.535.981 0 .399-.144.729-.432.99-.288.261-.715.485-1.28.672l-.84.266c-.958.307-1.688.723-2.19 1.248-.502.525-.753 1.189-.753 1.992 0 .908.349 1.657 1.047 2.247.698.59 1.594.885 2.688.885.955 0 1.792-.236 2.511-.708z"/>
        </svg>
      )
    },
    { 
      name: "React", 
      color: "#61DAFB",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="4.5" ry="11" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="4.5" ry="11" transform="rotate(90 12 12)"/>
          <ellipse cx="12" cy="12" rx="4.5" ry="11" transform="rotate(150 12 12)"/>
        </svg>
      )
    },
    { 
      name: "React Router", 
      color: "#CA4245",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 17l6-6-6-6M12 19h8"/>
        </svg>
      )
    },
    { 
      name: "Git y GitHub", 
      color: "#F05032",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: "Consumo de APIs", 
      color: "#38BDF8",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    },
    { 
      name: "Zustand", 
      color: "#FF6B00",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      )
    }
  ];

  // Tecnologías en aprendizaje
  const learningTechs = [
    { 
      name: "Node.js", 
      color: "#5FA04E",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l10.392 6v12L12 24 1.608 18V6L12 0zm0 2.227L3.464 7.16v9.68L12 21.773l8.536-4.933V7.16L12 2.227z"/>
        </svg>
      )
    },
    { 
      name: "Express", 
      color: "#336791",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="tecnologias" className="tech-section">
      <div className="section-container">
        <h2 className="section-title">Tecnologías y <span>herramientas</span></h2>

        {/* Carrusel en movimiento horizontal */}
        <div className="tech-category">
          <h3>Tecnologías que utilizo</h3>
          
          <div className="marquee-container">
            <div className="marquee-track">
              {[...activeTechs, ...activeTechs].map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-pill tech-item-glow" 
                  style={{ 
                    color: tech.color, 
                    filter: `drop-shadow(0 0 8px ${tech.color}60)` 
                  }}
                >
                  <span className="tech-icon">
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categoría estática para aprendizaje */}
        <div className="tech-category learning-block">
          <h3>En proceso de aprendizaje / profundización</h3>
          <div className="tech-tags-static">
            {learningTechs.map((tech, index) => (
              <div 
                key={index} 
                className="tech-pill-static tech-item-glow" 
                style={{ 
                  color: tech.color, 
                  filter: `drop-shadow(0 0 8px ${tech.color}60)` 
                }}
              >
                <span className="tech-icon">
                  {tech.icon}
                </span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};