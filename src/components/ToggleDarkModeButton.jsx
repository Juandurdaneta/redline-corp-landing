import React from "react";
import MoonIcon from "../assets/moon.svg?react";
import SunIcon from "../assets/sun.svg?react";
import ButtonShape from "../assets/rectangle-5.svg?react";
const ToggleDarkModeButton = () => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full p-2 shadow-md transition-all duration-300 dark:text-white">
      <ButtonShape className="absolute h-3/4 w-full animate-pulse opacity-30" />
      <MoonIcon className="size-[20px]" />
    </button>
  );
};

export default ToggleDarkModeButton;
