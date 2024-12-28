import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Bingo from "./pages/Bingo";
import TypeRacer from "./pages/TypeRacer";
import NoMatch from "./pages/NoMatch";

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
  const cookie = parseCookies();

  if (
    cookie.userId == null ||
    cookie.userId == undefined ||
    cookie.userId == ""
  ) {
    document.cookie = `userId=${uid()}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  }

  return (
    <div id="app-container" className="bg-bgPrimary">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Bingo" element={<Bingo />} />
        <Route path="TypeRacer" element={<TypeRacer />} />\
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
