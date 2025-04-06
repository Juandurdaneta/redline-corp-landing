import React from "react";
import ToggleDarkModeButton from "./ToggleDarkModeButton";

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
    <div className="fixed inset-x-0 top-3 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 lg:inset-x-5">
      <header className="absolute top-3/4 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 gap-20">
          <div className="flex items-center gap-20 w-1/4">
            <img src={"/img/logo.svg"} alt="logo" className="w-32" />
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
          <div className="flex  justify-end w-1/4">
            <button className="hidden rounded-full bg-red-dark px-4 py-2 text-white transition-all duration-300 hover:bg-red-light lg:block">
              U
            </button>
            <button className="block rounded-full bg-red-dark px-4 py-2 text-white transition-all duration-300 hover:bg-red-light ">
              Pre-order
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
