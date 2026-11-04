import React, { useEffect, useRef } from 'react';
import './StarBackground.css';

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Ajustar tamaño cuando cambia la pantalla
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generar estrellas/destellos
    const numStars = 70;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.005,
      direction: Math.random() < 0.5 ? 1 : -1,
    }));

    // Bucle de animación suave
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Efecto Titilante (twinkle)
        star.alpha += star.speed * star.direction;
        if (star.alpha >= 1 || star.alpha <= 0.1) {
          star.direction *= -1;
        }

        // Movimiento sutil ascendente
        star.y -= 0.15;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Dibujar estrella
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ffffff';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-stars-container">
      {/* Rejilla de cuadrados sutil */}
      <div className="bg-grid-overlay" />
      
      {/* Resplandor ambiental superior */}
      <div className="bg-glow-top" />

      {/* Canvas donde se animan las estrellas */}
      <canvas ref={canvasRef} className="stars-canvas" />
    </div>
  );
};