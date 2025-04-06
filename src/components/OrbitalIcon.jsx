import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const OrbitalIcon = ({ darkMode, SunIcon, MoonIcon }) => {
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (darkMode) {
      tl.to(sunRef.current, {
        rotation: 180,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        transformOrigin: "center center",
      })
        .fromTo(moonRef.current,
          { rotation: -180, opacity: 0 },
          {
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
            transformOrigin: "center center",
          },
          "<"
        );
    } else {
      tl.to(moonRef.current, {
        rotation: 180,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        transformOrigin: "center center",
      })
        .fromTo(sunRef.current,
          { rotation: -180, opacity: 0 },
          {
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
            transformOrigin: "center center",
          },
          "<"
        );
    }
  }, [darkMode]);

  return (
    <div className="relative w-6 h-6 overflow-hidden">
      <SunIcon
        ref={sunRef}
        className={`absolute inset-0 w-full h-full ${darkMode ? 'opacity-0' : 'opacity-100'}`}
      />
      <MoonIcon
        ref={moonRef}
        className={`absolute inset-0 w-full h-full ${darkMode ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export default OrbitalIcon;
