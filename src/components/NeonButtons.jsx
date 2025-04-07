import { User } from "lucide-react";
import React from "react";
import LeftButtonContainer from "../assets/rectangle-button-1.svg?react";
import LeftButtonContainerGradient from "../assets/rectangle-button-gradient.svg?react";
import RightButtonContainerGradient from "../assets/rectangle-button-gradient-2.svg?react";
import RightButtonContainer from "../assets/rectangle-button-2.svg?react";

const NeonButtons = () => {
  return (
    <div className="flex items-center -space-x-12">
      {/* Botón decorado con SVG contenedor */}
      <div className="relative w-[128px] h-[50px] overflow-hidden">
        {/* SVG como contenedor decorativo */}
        <LeftButtonContainer className="absolute inset-0 w-full h-full text-white dark:text-red-dark" />
        <LeftButtonContainerGradient className="z-50 w-full absolute left-6 h-full text-white dark:text-red-dark" />
        {/* Contenido dentro del SVG */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <User className="dark:text-red-dark drop-shadow-[0_0_6px_#ff0000]" />
        </div>
      </div>

      {/* Segundo botón regular */}
      <div className="relative w-48 h-[50px] overflow-hidden">
        <RightButtonContainer className="absolute inset-0 w-full h-full text-white dark:text-red-dark" />
        <RightButtonContainerGradient className="z-50 w-full absolute right-16 h-full text-white dark:text-red-dark" />

        <div className="absolute inset-2 flex items-center justify-center w-full">
          <p className="text-shadow-white dark:text-red-dark font-porsche-regular text-md dark:text-shadow-red-dark text-shadow-[0_0px_15px_rgb(0_0_0_/_0.25)]">
            Pre-order
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeonButtons;
