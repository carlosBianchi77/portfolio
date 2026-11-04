import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './Projects.css';

export const Projects = () => {
  return (
    <section id="proyectos" className="projects-section">
      <div className="section-container">

        <h2 className="section-title">
          Mis <span>proyectos</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">

              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-image"
                  loading="lazy"
                />

                <span
                  className={`project-status ${
                    project.status === 'En desarrollo'
                      ? 'dev'
                      : 'finished'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

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
                      <span>Ver demo</span>
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
                      <span>Código</span>
                    </a>
                  )}

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};