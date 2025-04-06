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

    // Obtener la posición y tamaño inicial de la miniatura en Hero
    const heroRect = heroElem.getBoundingClientRect();

    // Configura el video en posición fixed usando los datos del Hero
    gsap.set(videoElem, {
      position: "fixed",
      top: heroRect.top,
      left: heroRect.left,
      width: heroRect.width,
      height: heroRect.height,
      zIndex: 1000,
      transformOrigin: "top left",
    });

    // Tween que anima la posición, traslación y escala del video
    const tween = gsap.to(videoElem, {
      x: () => {
        const currentHeroRect = heroElem.getBoundingClientRect();
        const targetRect = targetElem.getBoundingClientRect();
        return targetRect.left - currentHeroRect.left;
      },
      y: () => {
        const currentHeroRect = heroElem.getBoundingClientRect();
        const targetRect = targetElem.getBoundingClientRect();
        return targetRect.top - currentHeroRect.top;
      },
      scale: () => {
        const currentHeroRect = heroElem.getBoundingClientRect();
        const targetRect = targetElem.getBoundingClientRect();
        return targetRect.width / currentHeroRect.width;
      },
      ease: "none",
      paused: true, // Se controlará mediante el ScrollTrigger
    });

    // ScrollTrigger que asocia el tween al scroll
    ScrollTrigger.create({
      trigger: targetElem,
      start: "top center",
      end: "bottom center",
      scrub: true,
      animation: tween,
      // Cuando el trigger se sale por abajo, reubica el video
      onLeave: () => {
        if (videoElem.parentNode !== targetElem) {
          targetElem.appendChild(videoElem);
          gsap.set(videoElem, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            x: 0,
            y: 0,
            clearProps: "transform",
          });
        }
      },
      // Opcional: si deseas que al hacer scroll hacia arriba se regrese el video a su estado original,
      // podrías implementar onEnterBack y reparentarlo de nuevo al contenedor original.
    });

    // Actualiza las medidas en caso de resize
    const handleResize = () => {
      const newHeroRect = heroElem.getBoundingClientRect();
      gsap.set(videoElem, {
        top: newHeroRect.top,
        left: newHeroRect.left,
        width: newHeroRect.width,
        height: newHeroRect.height,
      });
      ScrollTrigger.refresh();
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
