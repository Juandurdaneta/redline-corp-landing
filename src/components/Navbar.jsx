import React from "react";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import { UserRound } from "lucide-react";
import Logo from "../assets/logo.svg?react";

const NavItems = ["Home", "Vehicles", "Specifications", "Shop"];

const NavItem = ({ item, isActive }) => {
  return (
    <li>
      <a
        href="#"
        className={`text-white/50 dark:text-red-dark/50 font-porsche-regular text-base ${
          isActive ? "border-b-2 border-red-dark dark:border-red-light" : ""
        } dark:hover:text-red-dark hover:text-white transition-all duration-300`}
        onClick={
          () => {
            window.scrollTo({
              top: document.querySelector(`#${item.toLowerCase()}`).offsetTop,
              behavior: "smooth",
            });
          }
          // Prevent default behavior of anchor tag
        }
      >
        {item}
      </a>
    </li>
  );
};

const Navbar = () => {
  const currentUrl = window.location.href;
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 lg:inset-x-0">
      <header className="w-full h-full flex items-center justify-between px-4">
        <nav className="flex size-full items-start justify-between p-4 gap-20">
          <div className="flex justify-center items-center gap-14 w-1/4">
            <Logo className="w-32 text-white dark:text-red-dark" />
            <ToggleDarkModeButton />
          </div>

          <div className="flex items-center">
            <ul className="gap-10 lg:flex mt-4 flex-1 hidden list-none justify-center">
              {NavItems.map((item) => (
                <NavItem
                  key={item}
                  item={item}
                  isActive={currentUrl.includes(item.toLowerCase())}
                />
              ))}
            </ul>
          </div>
          <div className="flex  w-1/4 justify-end h-10">
            <button className="hidden lg:block px-6 bg-black border dark:border-red-dark rounded-xl text-white dark:text-red-dark">
              <UserRound />
            </button>
            <button className="hidden lg:block font-porsche-regular text-base dark:text-red-dark px-6 bg-black border dark:border-red-dark rounded-xl">
              Pre-order
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
