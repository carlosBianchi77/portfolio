import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
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
        <h2 className="section-title">Enviame un <span>mensaje</span></h2>
        <p className="contact-description">
          ¿Tenés alguna propuesta laboral, proyecto o consulta? Completá el formulario y el mensaje llegará directo a mi casilla de correo.
        </p>

        {status.succeeded ? (
          <div className="form-success-message">
            <CheckCircle size={32} color="#27c93f" />
            <h3>¡Mensaje enviado con éxito!</h3>
            <p>Gracias por escribirme, Te responderé a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Tu nombre o empresa" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="tu.email@ejemplo.com" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Escribí tu mensaje aquí..." 
                required
              ></textarea>
            </div>

            {status.error && (
              <div className="form-error-message">
                <AlertCircle size={18} />
                <span>Ocurrió un error al enviar. Por favor intentalo de nuevo.</span>
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary btn-submit"
              disabled={status.submitting}
            >
              <Send size={18} />
              <span>{status.submitting ? 'Enviando...' : 'Enviar mensaje'}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};