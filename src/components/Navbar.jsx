import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';
import './Navbar.css';

export const Navbar = ({ lang, setLang, t = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Array de idiomas actualizado con URLs SVG de FlagCDN
  const languages = [
    { code: 'es', label: 'Español', flag: 'https://flagcdn.com/ar.svg' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/us.svg' },
    { code: 'pt', label: 'Português', flag: 'https://flagcdn.com/br.svg' }
  ];

  const currentLanguage = languages.find(l => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <a href="#inicio" className="nav-logo">
          CB<span> Dev</span>
        </a>

        {/* Enlaces de navegación */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>{t.inicio || "Inicio"}</a>
          <a href="#sobre-mi" onClick={() => setIsOpen(false)}>{t.sobreMi || "Sobre mí"}</a>
          <a href="#tecnologias" onClick={() => setIsOpen(false)}>{t.tecnologias || "Tecnologías"}</a>
          <a href="#proyectos" onClick={() => setIsOpen(false)}>{t.proyectos || "Proyectos"}</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>{t.contacto || "Contacto"}</a>
        </nav>

        {/* Acciones (Idioma + CV + Menú hamburguesa) */}
        <div className="nav-actions">
          
          <div className="custom-lang-dropdown" ref={dropdownRef}>
            <button 
              className="lang-btn-toggle" 
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Seleccionar idioma"
            >
              <img
                src={currentLanguage.flag}
                alt={currentLanguage.label}
                className="lang-flag"
              />
              <span className="lang-name">{currentLanguage.label}</span>
              <ChevronDown size={14} className={`chevron-icon ${isLangOpen ? 'rotate' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="lang-menu">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    className={`lang-option ${lang === l.code ? 'active' : ''}`}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                  >
                    <img
                      src={l.flag}
                      alt={l.label}
                      className="lang-flag"
                    />
                    <span className="lang-name">{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="/cv-carlos-bianchi.pdf" target="_blank" rel="noopener noreferrer" className="btn-cv">
            <FileText size={16} />
            <span className="btn-cv-text">{t.downloadCv || "Descargar CV"}</span>
          </a>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
    </header>
  );
};