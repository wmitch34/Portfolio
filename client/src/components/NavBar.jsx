import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import ThemeMenu from "./ThemeMenu";

let links = [
  {
    text: "Multiplayer Bingo",
    link: "/Bingo",
  },
  {
    text: "Type Racer",
    link: "/TypeRacer",
  },
];

function NavBar({ children, fullScreen }) {
  const checkboxRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (page, section) => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
    if (section === undefined) {
      navigate(page);
    } else {
      navigate(page, { state: { scrollTo: section } });
    }
  };

  let className = "";
  if (fullScreen) {
    className =
      "w-full h-full relative bg-bgPrimary flex mx-auto justify-between";
  } else
    className =
      "w-full h-full relative bg-bgPrimary flex md:max-w-screen-md mx-auto justify-between";

  return (
    <div
      className="w-full shadow-lg sticky top-0 h-16 bg-bgPrimary items-center text-xl "
      id="app-nav-bar"
    >
      <div className={className}>
        <label
          id="hamburger-menu"
          className="flex flex-col justify-center p-3 min-w-[64px] z-50  cursor-pointer"
        >
          <input
            ref={checkboxRef}
            type="checkbox"
            className="appearance-none m-0 outline-none pointer-events-none"
          />
        </label>
        <div
          id="sidebar"
          className="flex flex-col z-[-50] absolute shadow-lg bg-bgSecondary justify-start p-4 rounded-xl text-xl text-textPrimary"
        >
          <button
            className="text-left w-full "
            onClick={() => handleClick("/Home", "Hero")}
          >
            Home
          </button>
          <button
            className="text-left w-full "
            onClick={() => handleClick("/Home", "About")}
          >
            About
          </button>

          <button
            className="text-left w-full "
            onClick={() => handleClick("/Home", "About")}
          >
            Links
          </button>
          {links.map((link, index) => (
            <button
              className="text-left w-full "
              onClick={() => handleClick(link.link)}
              key={index}
            >
              {link.text}
            </button>
          ))}
        </div>
        {children}
        <ThemeMenu />
      </div>
    </div>
  );
}

export default NavBar;
