import React from "react";
import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Bingo from "./pages/Bingo";
import Snake from "./pages/Snake";
import TypeRacer from "./pages/TypeRacer";
import NoMatch from "./pages/NoMatch";

function FixedNavbar() {
  const menuTitle = {
    color: "white",
  };

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

  const [navOpen, setNavOpen] = useState(false);

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand={false}
      variant="dark"
      style={{
        margin: "1rem",
      }}
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          setNavOpen((prev) => !prev);
        }}
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        in={navOpen}
        style={{
          marginTop: "1rem",
          border: "solid white",
          borderRadius: ".5rem",
          backgroundColor: "#121212",
          padding: "1rem",
        }}
      >
        <div style={menuTitle}>Select A game</div>
        <Nav className="mr-auto">
          {links.map((menuItem, index) => (
            <Nav.Link
              as={Link}
              key={index}
              to={menuItem.link}
              onClick={() => {
                setNavOpen(false);
              }}
            >
              {menuItem.text}
            </Nav.Link>
          ))}
        </Nav>
        <Outlet />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default function App() {
  return (
    <>
      <FixedNavbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="Bingo" element={<Bingo />} />
        <Route path="ApplePicker" element={<Snake />} />
        <Route path="TypeRacer" element={<TypeRacer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
