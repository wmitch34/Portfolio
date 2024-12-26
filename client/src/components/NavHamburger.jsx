import React from "react";

import { useNavigate } from "react-router-dom";
import { useRef } from "react";
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
function NavHamburger() {
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
  return (
    <>
      <label
        id="hamburger-menu"
        className="flex flex-col justify-center p-3 min-w-16 z-50 cursor-pointer"
      >
        <input
          ref={checkboxRef}
          type="checkbox"
          className="appearance-none m-0 outline-none pointer-events-none"
        />
      </label>
      <div
        id="sidebar"
        className="flex flex-col z-0 shadow-lg bg-bgSecondary justify-start absolute p-4 rounded-br-xl text-xl text-textPrimary"
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
          onClick={() => handleClick("/Home", "Links")}
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
    </>
  );
}

export default NavHamburger;
