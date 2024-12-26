import React from "react";
import NavHamburger from "./NavHamburger";
import ThemeMenu from "./ThemeMenu";

function NavBar({ children }) {
  return (
    <div
      className="w-full shadow-lg sticky top-0 h-16 bg-bgPrimary items-center text-xl "
      id="app-nav-bar"
    >
      <div className="w-full h-full flex flex-center md:max-w-screen-md  mx-auto justify-between">
        <NavHamburger />
        {children}
        <ThemeMenu />
      </div>
    </div>
  );
}

export default NavBar;
