import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import AnimatedVideo from "./components/AnimatedVideo";
import { useRef } from "react";

const App = () => {
    // Ref para la posición inicial (donde se muestra la miniatura en Hero)
    const heroVideoRef = useRef(null);
    // Ref para la posición destino (en Features)
    const featuresVideoTargetRef = useRef(null);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero videoRef={heroVideoRef} />
      <Features videoTargetRef={featuresVideoTargetRef} />
      <AnimatedVideo heroVideoRef={heroVideoRef} targetRef={featuresVideoTargetRef} />
    </main>
  );
};

export default App;
