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
    <div
      id="app-container"
      className="bg-primary text-primary md:px-20 lg:px-30 xl:px-40"
    >
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
