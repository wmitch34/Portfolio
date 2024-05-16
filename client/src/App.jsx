import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Bingo from "./pages/Bingo";
import Snake from "./pages/Snake";
import TypeRacer from "./pages/TypeRacer";
import NoMatch from "./pages/NoMatch";

let links = [
  {
    text: "Home",
    link: "/",
  },
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
  return (
    <div id="app-container" className="bg-primary text-primary font-sans">
      <label
        id="hamburger-menu"
        className="flex flex-col absolute top-4 left-2 z-50 cursor-pointer"
      >
        <input
          type="checkbox"
          defaultValue={false}
          className="appearance-none m-0 p-0 outline-none pointer-events-none"
        />
      </label>
      <div
        id="sidebar"
        className="flex flex-col justify-start absolute p-4 bg-primary w-90 rounded-xl text-xl"
      >
        <button
          className="text-left w-full"
          onClick={() =>
            homeRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Home
        </button>
        <button
          className="text-left w-full"
          onClick={() =>
            aboutRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          About
        </button>
        <button
          className="text-left w-full"
          onClick={() =>
            experienceRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Experience
        </button>
        <button
          className="text-left w-full"
          onClick={() =>
            projectsRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Projects
        </button>
        <button
          className="text-left w-full"
          onClick={() =>
            demoRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Demos
        </button>
      </div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="Bingo" element={<Bingo />} />
        <Route path="ApplePicker" element={<Snake />} />
        <Route path="TypeRacer" element={<TypeRacer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
