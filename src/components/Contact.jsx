import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

export const Contact = ({ t = {} }) => {
  const [status, setStatus] = useState({
    submitting: false,
    succeeded: false,
    error: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: false });

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xeaalrdl', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ submitting: false, succeeded: true, error: false });
        form.reset();
      } else {
        setStatus({ submitting: false, succeeded: false, error: true });
      }
    } catch (err) {
      setStatus({ submitting: false, succeeded: false, error: true });
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="section-container contact-box">
        <h2 className="section-title">
          {t.titleMain || "Enviame un"} <span>{t.titleSpan || "mensaje"}</span>
        </h2>
        <p className="contact-description">
          {t.description || "¿Tenés alguna propuesta laboral, proyecto o consulta? Completá el formulario y el mensaje llegará directo a mi casilla de correo."}
        </p>

        {status.succeeded ? (
          <div className="form-success-message">
            <CheckCircle size={32} color="#27c93f" />
            <h3>{t.successTitle || "¡Mensaje enviado con éxito!"}</h3>
            <p>{t.successDesc || "Gracias por escribirme, Te responderé a la brevedad."}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t.nameLabel || "Nombre"}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder={t.namePlaceholder || "Tu nombre o empresa"} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.emailLabel || "Correo electrónico"}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder={t.emailPlaceholder || "tu.email@ejemplo.com"} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.messageLabel || "Mensaje"}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder={t.messagePlaceholder || "Escribí tu mensaje aquí..."} 
                required
              ></textarea>
            </div>

            {status.error && (
              <div className="form-error-message">
                <AlertCircle size={18} />
                <span>{t.errorMessage || "Ocurrió un error al enviar. Por favor intentalo de nuevo."}</span>
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary btn-submit"
              disabled={status.submitting}
            >
              <Send size={18} />
              <span>{status.submitting ? (t.sendingButton || 'Enviando...') : (t.sendButton || 'Enviar mensaje')}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};