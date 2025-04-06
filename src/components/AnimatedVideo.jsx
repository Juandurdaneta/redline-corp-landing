import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedVideo = ({ heroVideoRef, targetRef }) => {
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const videoElem = videoRef.current;
    const heroElem = heroVideoRef.current; // Contenedor original en Hero
    const targetElem = targetRef.current;  // Contenedor destino en Features
    if (!videoElem || !heroElem || !targetElem) return;

    // Guarda la posición y tamaño inicial del contenedor de Hero (relativo al viewport)
    const initialHeroRect = heroElem.getBoundingClientRect();

    // Guarda el contenedor original para poder reparentar de regreso al hacer scroll hacia arriba
    const originalParent = heroElem;

    // Configura el video con posición fixed, usando los valores iniciales de Hero
    gsap.set(videoElem, {
      position: "fixed",
      top: initialHeroRect.top,
      left: initialHeroRect.left,
      width: initialHeroRect.width,
      height: initialHeroRect.height,
      zIndex: 80,
      transformOrigin: "top left",
    });

    // Tween que calcula la diferencia entre la posición inicial y la posición actual del contenedor destino
    // NOTA: usamos la posición inicial guardada para que el cálculo no se vea afectado por el scroll.
    const tween = gsap.to(videoElem, {
      x: () => {
        const targetRect = targetElem.getBoundingClientRect();
        return targetRect.left - initialHeroRect.left;
      },
      y: () => {
        const targetRect = targetElem.getBoundingClientRect();
        return targetRect.top - initialHeroRect.top;
      },
      scale: () => {
        const targetRect = targetElem.getBoundingClientRect();
        return targetRect.width / initialHeroRect.width;
      },
      ease: "none",
      paused: true,
    });

    // Bandera para controlar en qué estado se encuentra el video (reparentado o no)
    let reparented = false;

    // Creamos un ScrollTrigger de corta duración (con start y end en el mismo punto)
    // de modo que se dispare cuando el contenedor destino esté centrado.
    ScrollTrigger.create({
      trigger: targetElem,
      start: "top center", // cuando la parte superior del contenedor destino llega al centro
      end: "top center",
      scrub: true,
      animation: tween,
      onEnter: () => {
        // Al bajar y alcanzar el trigger, si aún no se ha reparentado, lo reubicamos
        if (!reparented) {
          reparented = true;
          targetElem.appendChild(videoElem);
          // Ahora que el video está dentro del contenedor destino, ajustamos sus estilos para que ocupe el 100%
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
      onLeaveBack: () => {
        // Al subir y abandonar el trigger, si el video estaba reparentado, lo devolvemos a su contenedor original
        if (reparented) {
          reparented = false;
          originalParent.appendChild(videoElem);
          // Reestablece la posición fixed y los estilos originales usando initialHeroRect
          gsap.set(videoElem, {
            position: "fixed",
            top: initialHeroRect.top,
            left: initialHeroRect.left,
            width: initialHeroRect.width,
            height: initialHeroRect.height,
            transformOrigin: "top left",
          });
        }
      },
    });

    // Actualización en caso de redimensionamiento
    const handleResize = () => {
      const newHeroRect = heroElem.getBoundingClientRect();
      if (!reparented) {
        gsap.set(videoElem, {
          top: newHeroRect.top,
          left: newHeroRect.left,
          width: newHeroRect.width,
          height: newHeroRect.height,
        });
      }
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
