import React from 'react';
import './About.css';

export const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="section-container">
        <h2 className="section-title">Sobre <span>mí</span></h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p>
              Soy desarrollador web con conocimientos en <strong>Frontend</strong> y actualmente estoy ampliando mis habilidades hacia el desarrollo <strong>Backend</strong>, con el objetivo de convertirme en Full Stack.
              </p>
            <p>
              Actualmente curso una <strong>Diplomatura Web Full Stack en ICARO</strong>, donde continúo fortaleciendo mis conocimientos en desarrollo web. Me interesa comprender la lógica detrás de cada proyecto, resolver problemas y construir aplicaciones funcionales, organizadas y fáciles de utilizar.
              </p>
            <p>
              Mi objetivo es conseguir mi primera oportunidad laboral como <strong>Frontend Developer Junior o Trainee</strong>, aportando compromiso, curiosidad técnica y muchas ganas de aprender y crecer profesionalmente.
              </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Formación</h3>
              <p>Diplomaturas en Full Stack y Data Analytics, junto con aprendizaje y práctica constante.</p>
            </div>

            <div className="highlight-card">
              <h3>Especialización</h3>
              <p>Desarrollo de interfaces modernas, componentes reutilizables y gestión de estados con React.</p>
            </div>

            <div className="highlight-card">
                <h3>Objetivo</h3>
                <p>Crear soluciones funcionales, escribir código mantenible y crecer profesionalmente en el desarrollo de software.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};