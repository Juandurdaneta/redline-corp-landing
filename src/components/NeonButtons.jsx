import { User } from "lucide-react";
import React from "react";

const NeonButtons = () => {
  return (
    <div className="flex items-center -space-x-7 bg-black">
      {/* Botón con su video */}
      <div className="relative w-24 h-[50px] overflow-hidden left-button-clip border dark:border-red-dark rounded-xl">
        <button className="w-full items-center flex justify-center h-full text-white dark:text-red-dark bg-black">
          <User />
        </button>
      </div>

      {/* Botón 2 con su propio video */}
      <div className="relative w-48 h-[50px] overflow-hidden border dark:border-red-dark rounded-xl right-button-clip">
        <button className="w-full items-center h-full justify-center font-porsche-regular text-md text-white dark:text-red-dark flex bg-black">
          <span className="text-shadow-white dark:text-shadow-red-dark text-shadow-[0_0px_15px_rgb(0_0_0_/_0.25)]">
            Pre-order
          </span>
        </button>
      </div>
    </div>
  );
};

export default NeonButtons;
