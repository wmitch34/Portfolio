import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import Home from "./pages/Home";
import Bingo from "./pages/Bingo";
import Snake from "./pages/Snake";
import TypeRacer from "./pages/TypeRacer";
import NoMatch from "./pages/NoMatch";

let links = [
  {
    text: "Multiplayer Bingo",
    link: "/Bingo",
  },
  {
    text: "Apple Picker",
    link: "/ApplePicker",
  },
  {
    text: "Type Racer",
    link: "/TypeRacer",
  },
];

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function parseCookies() {
  return document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = decodeURIComponent(value); // Decode URI-encoded values
    return acc;
  }, {});
}

export default function App() {
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

  const cookie = parseCookies();

  if (
    cookie.userId == null ||
    cookie.userId == undefined ||
    cookie.userId == ""
  ) {
    document.cookie = `userId=${uid()}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  }

  return (
    <div id="app-container" className="bg-primary text-primary font-sans">
      <label
        id="hamburger-menu"
        className="flex flex-col absolute top-4 left-2 z-50 cursor-pointer"
      >
        <input
          ref={checkboxRef}
          type="checkbox"
          defaultValue={false}
          className="appearance-none m-0 p-0 outline-none pointer-events-none"
        />
      </label>
      <div
        id="sidebar"
        className="flex flex-col justify-start absolute p-4 bg-primary rounded-xl text-xl"
      >
        <div style={{ transition: "height 0.3s ease" }}>
          <button
            className="text-left w-full hover:text-secondary"
            onClick={() => handleClick("/Home")}
          >
            Home
          </button>
          <div
            className="flex flex-col"
            style={{
              height: isHovered ? "auto" : "0px",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleY(1)" : "scaleY(0)",
              transition:
                "height 0.5s ease, opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <button
              className="text-left ml-4 hover:text-secondary"
              onClick={() => handleClick("/Home", "About")}
            >
              About
            </button>
            <button
              className="text-left ml-4 hover:text-secondary"
              onClick={() => handleClick("/Home", "Experience")}
            >
              Experience
            </button>
            <button
              className="text-left ml-4 hover:text-secondary"
              onClick={() => handleClick("/Home", "Projects")}
            >
              Projects
            </button>
            <button
              className="text-left ml-4 hover:text-secondary"
              onClick={() => handleClick("/Home", "Links")}
            >
              Links
            </button>
          </div>
        </div>
        {links.map((link, index) => (
          <button
            className="text-left w-full hover:text-secondary"
            onClick={() => handleClick(link.link)}
            key={index}
          >
            {link.text}
          </button>
        ))}
      </div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Bingo" element={<Bingo />} />
        <Route path="ApplePicker" element={<Snake />} />
        <Route path="TypeRacer" element={<TypeRacer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
