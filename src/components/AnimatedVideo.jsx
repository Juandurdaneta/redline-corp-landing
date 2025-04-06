import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedVideo = ({ heroVideoRef, targetRef }) => {
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const videoElem = videoRef.current;
    const heroElem = heroVideoRef.current;
    const targetElem = targetRef.current;
    if (!videoElem || !heroElem || !targetElem) return;

    // Obtener posiciones iniciales relativas al viewport
    const heroRect = heroElem.getBoundingClientRect();
    const targetRect = targetElem.getBoundingClientRect();

    // Calcula la diferencia en X e Y
    const deltaX = targetRect.left - heroRect.left;
    const deltaY = targetRect.top - heroRect.top;
    // Calcula el factor de escala (asumiendo que se mantiene la relación de aspecto)
    const scale = targetRect.width / heroRect.width;

    // Establece la posición inicial del video en base a la miniatura del Hero
    gsap.set(videoElem, {
      position: "fixed", // Fija el elemento para animarlo en el viewport
      top: heroRect.top,
      left: heroRect.left,
      width: heroRect.width,
      height: heroRect.height,
      zIndex: 1000, // Asegura que esté por encima de otros elementos
    });

    // Crea una timeline que anima el video conforme se hace scroll
    gsap
      .timeline({
        scrollTrigger: {
          trigger: targetElem, // Puedes ajustar el trigger para que se active en el scroll deseado
          start: "top center",
          end: "bottom center",
          scrub: true, // Hace la animación dependiente del scroll
        },
      })
      .to(videoElem, {
        x: deltaX,
        y: deltaY,
        scale: scale,
        ease: "none",
      });

    // Actualización en redimensionamiento
    const handleResize = () => {
      const newHeroRect = heroElem.getBoundingClientRect();
      const newTargetRect = targetElem.getBoundingClientRect();
      const newDeltaX = newTargetRect.left - newHeroRect.left;
      const newDeltaY = newTargetRect.top - newHeroRect.top;
      const newScale = newTargetRect.width / newHeroRect.width;
      gsap.set(videoElem, {
        top: newHeroRect.top,
        left: newHeroRect.left,
        width: newHeroRect.width,
        height: newHeroRect.height,
      });
      gsap.to(videoElem, {
        x: newDeltaX,
        y: newDeltaY,
        scale: newScale,
        duration: 0,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [heroVideoRef, targetRef]);

  return (
    <div ref={videoRef} className="video-border-wrapper">
      <video
        src="/videos/car_build.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Video animado"
        className="video-border-inner"
      />
    </div>
  );
};

export default AnimatedVideo;
