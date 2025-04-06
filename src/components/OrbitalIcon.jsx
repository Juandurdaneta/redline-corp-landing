import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import gsap from 'gsap';

const OrbitalIcon = forwardRef(({ darkMode, SunIcon, MoonIcon }, ref) => {
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  useEffect(() => {
    // Inicializa posiciones sin animación
    if (darkMode) {
      gsap.set(sunRef.current, { x: 20, y: 20, opacity: 0 });
      gsap.set(moonRef.current, { x: 0, y: 0, opacity: 1 });
    } else {
      gsap.set(moonRef.current, { x: -20, y: 20, opacity: 0 });
      gsap.set(sunRef.current, { x: 0, y: 0, opacity: 1 });
    }
  }, []);

  // Expone método para animar desde fuera
  useImperativeHandle(ref, () => ({
    animateOrbital(newDarkMode) {
      const duration = 0.6;
      const ease = "power2.inOut";
      const tl = gsap.timeline();

      if (newDarkMode) {
        tl.to(sunRef.current, {
          x: 20, y: 20, opacity: 0,
          duration, ease,
        })
        .fromTo(moonRef.current,
          { x: -20, y: 20, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration, ease },
          "<"
        );
      } else {
        tl.to(moonRef.current, {
          x: -20, y: 20, opacity: 0,
          duration, ease,
        })
        .fromTo(sunRef.current,
          { x: 20, y: 20, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration, ease },
          "<"
        );
      }

      return tl; // Devuelve la timeline para esperar al finalizar
    }
  }));

  return (
    <div className="relative w-6 h-6 overflow-hidden">
      <SunIcon ref={sunRef} className="absolute inset-0 w-full h-full" />
      <MoonIcon ref={moonRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
});

export default OrbitalIcon;
