import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './Projects.css';

export const Projects = ({ t = {} }) => {
  // Textos por defecto en español por si falta alguna clave
  const titleMain = t.titleMain || "Mis";
  const titleSpan = t.titleSpan || "proyectos";
  const viewDemoText = t.viewDemo || "Ver demo";
  const viewCodeText = t.viewCode || "Código";
  const projectItems = t.items || {};

  return (
    <section id="proyectos" className="projects-section">
      <div className="section-container">

        <h2 className="section-title">
          {titleMain} <span>{titleSpan}</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project) => {
            // Buscamos si hay traducción específica para la descripción de este proyecto
            const translatedDesc = projectItems[project.id]?.description || project.description;
            
            // Traducción del estado
            const isDev = project.status === 'En desarrollo' || project.status === 'In development' || project.status === 'Em desenvolvimento';
            const statusText = isDev ? (t.statusDev || "En desarrollo") : (t.statusFinished || "Finalizado");

            return (
              <article key={project.id} className="project-card">

                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="project-image"
                    loading="lazy"
                  />

                  <span
                    className={`project-status ${isDev ? 'dev' : 'finished'}`}
                  >
                    {statusText}
                  </span>
                </div>

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{translatedDesc}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={16} />
                        <span>{viewDemoText}</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Code size={16} />
                        <span>{viewCodeText}</span>
                      </a>
                    )}

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};