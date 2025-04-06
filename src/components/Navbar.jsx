import React from "react";
import Button from "./Button";
import ToggleDarkModeButton from "./ToggleDarkModeButton";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-3 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 lg:inset-x-5">
      <header className="absolute top-3/4 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-20">
            <img src={"/img/logo.svg"} alt="logo" className="w-32" />
            <ToggleDarkModeButton />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
