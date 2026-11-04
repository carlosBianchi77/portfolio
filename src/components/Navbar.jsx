import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#inicio" className="nav-logo">
          CB<span> Dev</span>
        </a>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#sobre-mi" onClick={() => setIsOpen(false)}>Sobre mí</a>
          <a href="#tecnologias" onClick={() => setIsOpen(false)}>Tecnologías</a>
          <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        </nav>

        <div className="nav-actions">
          <a href="/cv-carlos-bianchi.pdf" target="_blank" rel="noopener noreferrer" className="btn-cv">
            <FileText size={16} />
            <span>Descargar CV</span>
          </a>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};