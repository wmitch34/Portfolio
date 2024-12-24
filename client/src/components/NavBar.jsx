import React from "react";
import NavHamburger from "./NavHamburger";
import ThemeMenu from "./ThemeMenu";

function NavBar({ refs }) {
  return (
    <div className="sticky top-0" id="app-nav-bar">
      <div className="w-full flex sticky top-0 h-16 bg-bgPrimary text-xl">
        <NavHamburger />

        <nav className="w-full hidden md:flex flex-center space-x-4 justify-center">
          <button
            onClick={() =>
              refs.homeRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Home
          </button>
          <button
            onClick={() =>
              refs.aboutRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            About
          </button>
          <button
            onClick={() =>
              refs.experienceRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Experience
          </button>
          <button
            onClick={() =>
              refs.projectsRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Projects
          </button>
          <button
            onClick={() =>
              refs.linkRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Links
          </button>
        </nav>
        <ThemeMenu />
      </div>
    </div>
  );
}

export default NavBar;
