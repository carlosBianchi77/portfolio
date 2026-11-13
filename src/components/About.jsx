import React from 'react';
import './About.css';

export const About = ({ t = {} }) => {
  const { p1 = {}, p2 = {}, p3 = {}, highlights = {} } = t;

  return (
    <section id="sobre-mi" className="about-section">
      <div className="section-container">
        <h2 className="section-title">
          {t.titleMain || "Sobre"} <span>{t.titleSpan || "mí"}</span>
        </h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p>
              {p1.part1 || "Soy desarrollador web con conocimientos en "}
              <strong>{p1.strong1 || "Frontend"}</strong>
              {p1.part2 || " y actualmente estoy ampliando mis habilidades hacia el desarrollo "}
              <strong>{p1.strong2 || "Backend"}</strong>
              {p1.part3 || ", con el objetivo de convertirme en Full Stack."}
            </p>
            <p>
              {p2.part1 || "Actualmente curso una "}
              <strong>{p2.strong1 || "Diplomatura Web Full Stack en ICARO"}</strong>
              {p2.part2 || ", donde continúo fortaleciendo mis conocimientos en desarrollo web. Me interesa comprender la lógica detrás de cada proyecto, resolver problemas y construir aplicaciones funcionales, organizadas y fáciles de utilizar."}
            </p>
            <p>
              {p3.part1 || "Interesado en formar parte de equipos de desarrollo donde pueda aportar mis conocimientos en tecnologías "}
              <strong>{p3.strong1 || "Frontend"}</strong>
              {p3.part2 || ", colaborar en proyectos reales y continuar fortaleciendo mis habilidades técnicas. Me caracterizo por la curiosidad, la iniciativa y el compromiso con el aprendizaje continuo."}
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>{highlights.educationTitle || "Formación"}</h3>
              <p>{highlights.educationDesc || "Diplomaturas en Full Stack y Data Analytics, junto con aprendizaje y práctica constante."}</p>
            </div>

            <div className="highlight-card">
              <h3>{highlights.specTitle || "Especialización"}</h3>
              <p>{highlights.specDesc || "Desarrollo de interfaces modernas, componentes reutilizables y gestión de estados con React."}</p>
            </div>

            <div className="highlight-card">
              <h3>{highlights.goalTitle || "Objetivo"}</h3>
              <p>{highlights.goalDesc || "Crear soluciones funcionales, escribir código mantenible y crecer profesionalmente en el desarrollo de software."}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};