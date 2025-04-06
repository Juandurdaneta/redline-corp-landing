import React, { useEffect, useState } from "react";
import MoonIcon from "../assets/moon.svg?react";
import SunIcon from "../assets/sun.svg?react";
import ButtonShape from "../assets/rectangle-5.svg?react";
const ToggleDarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // If darkMode is true, add .dark
    // else remove it
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle function
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center gap-2 rounded-full p-2 shadow-md transition-all duration-300 dark:text-white"
    >
      <ButtonShape className="absolute h-3/4 w-full animate-pulse dark:text-red-dark text-white" />
      <MoonIcon className="size-[20px]" />
    </button>
  );
};

export default ToggleDarkModeButton;
