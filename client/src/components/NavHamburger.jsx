import React from "react";

import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
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
  const [isHovered, setIsHovered] = useState(true);

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
        className="flex flex-col absolute top-4 left-2 z-50 cursor-pointer"
      >
        <input
          ref={checkboxRef}
          type="checkbox"
          className="appearance-none m-0 p-0 outline-none pointer-events-none"
        />
      </label>
      <div
        id="sidebar"
        className="flex flex-col z-40 shadow-xl shadow-grey-800 bg-bgSecondary justify-start absolute p-4 rounded-br-xl text-xl text-textPrimary"
      >
        <div>
          <button
            className="text-left w-full "
            onClick={() => handleClick("/Home", "Hero")}
          >
            Home
          </button>
          <div className="flex flex-col">
            <button
              className="text-left ml-4 "
              onClick={() => handleClick("/Home", "About")}
            >
              About
            </button>
            <button
              className="text-left ml-4 "
              onClick={() => handleClick("/Home", "Experience")}
            >
              Experience
            </button>
            <button
              className="text-left ml-4 "
              onClick={() => handleClick("/Home", "Projects")}
            >
              Projects
            </button>
            <button
              className="text-left ml-4 "
              onClick={() => handleClick("/Home", "Links")}
            >
              Links
            </button>
          </div>
        </div>
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
