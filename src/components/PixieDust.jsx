import { useEffect, useRef } from 'react';

export default function PixieDust() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add CSS styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .pixie-particle {
        position: absolute;
        background: radial-gradient(circle, #00d4ff 0%, transparent 70%);
        border-radius: 50%;
        opacity: 0;
        animation: pixieFloat 2s ease-out forwards;
        box-shadow: 0 0 6px #00d4ff, 0 0 12px #00d4ff;
        pointer-events: none;
      }

      @keyframes pixieFloat {
        0% {
          opacity: 0;
          transform: translateX(0) translateY(0) scale(0);
        }
        10% {
          opacity: 1;
          transform: translateX(10px) translateY(-5px) scale(1);
        }
        50% {
          opacity: 0.8;
          transform: translateX(40px) translateY(-15px) scale(0.8);
        }
        100% {
          opacity: 0;
          transform: translateX(80px) translateY(-25px) scale(0);
        }
      }
    `;
    document.head.appendChild(style);

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'pixie-particle';
      
      // Random starting position along the left edge
      const startY = Math.random() * 100;
      particle.style.left = '0px';
      particle.style.top = `${startY}%`;
      
      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random animation duration
      const duration = Math.random() * 2 + 1;
      particle.style.animationDuration = `${duration}s`;
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 150);

    return () => {
      clearInterval(interval);
      style.remove();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        left: '-20px',
        right: 'auto',
        width: '100px',
      }}
    />
  );
}
