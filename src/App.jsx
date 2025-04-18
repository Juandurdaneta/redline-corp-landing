import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import AnimatedVideo from "./components/AnimatedVideo";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  // Ref para la posición inicial (donde se muestra la miniatura en Hero)
  const heroVideoRef = useRef(null);
  // Ref para la posición destino (en Features)
  const featuresVideoTargetRef = useRef(null);

  const totalVideos = 2;
  const [loadedVideos, setLoadedVideos] = useState(0);

  const handleVideoLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const isPageLoaded = loadedVideos === totalVideos;

  useEffect(() => {
    if (!isPageLoaded) {
      document.body.style.overflow = "hidden"; // bloquea scroll en y
    } else {
      document.body.style.overflowY = "auto"; // activa scroll en y
      document.body.style.overflowX = "hidden"; // mantiene scroll-x bloqueado siempre
    }
    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [isPageLoaded]);

  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      {!isPageLoaded && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
          <div className="loader">
            <p className="text-white dark:text-red-dark text-base font-porsche-regular">LOADING</p>
          </div>
        </div>
      )}
      <Navbar />
      <Hero videoRef={heroVideoRef} handleVideoLoaded={handleVideoLoaded} />
      <Features videoTargetRef={featuresVideoTargetRef} />
      <AnimatedVideo
        heroVideoRef={heroVideoRef}
        targetRef={featuresVideoTargetRef}
        handleVideoLoaded={handleVideoLoaded}
      />
    </main>
  );
};

export default App;
