import React from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
        <div
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          style={{ transition: "height 0.3s ease" }}
        >
          <button
            className="text-left w-full"
            onClick={() => handleClick("/Home")}
          >
            Home
          </button>
          <div
            style={{
              height: isHovered ? "auto" : "0px",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleY(1)" : "scaleY(0)",
              transition:
                "height 0.5s ease, opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <button
              className="text-left w-full ml-4"
              onClick={() => handleClick("/Home", "About")}
            >
              About
            </button>
            <button
              className="text-left w-full ml-4"
              onClick={() => handleClick("/Home", "Experience")}
            >
              Experience
            </button>
            <button
              className="text-left w-full ml-4"
              onClick={() => handleClick("/Home", "Projects")}
            >
              Projects
            </button>
            <button
              className="text-left w-full ml-4"
              onClick={() => handleClick("/Home", "Demos")}
            >
              Demos
            </button>
          </div>
        </div>
        {links.map((link) => (
          <button
            className="text-left w-full"
            onClick={() => handleClick(link.link)}
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
