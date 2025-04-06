import React, { useEffect, useRef, useState } from "react";
import MoonIcon from "../assets/moon.svg?react";
import SunIcon from "../assets/sun.svg?react";
import ButtonShape from "../assets/rectangle-5.svg?react";
import gsap from "gsap";
import OrbitalIcon from "./OrbitalIcon";

const ToggleDarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(true);
  const iconRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    const newDarkMode = !darkMode;

    // Inicia la animación primero
    iconRef.current.animateOrbital(newDarkMode).then(() => {
      // Cambia el tema solo después de la animación
      setDarkMode(newDarkMode);
    });
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center gap-2 rounded-full p-2 shadow-md transition-all duration-300 dark:text-white"
    >
      <ButtonShape className="absolute h-3/4 w-full animate-pulse dark:text-red-dark text-white" />
      <OrbitalIcon
        ref={iconRef}
        darkMode={darkMode}
        SunIcon={SunIcon}
        MoonIcon={MoonIcon}
      />
    </button>
  );
};

export default ToggleDarkModeButton;
