import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Bingo from "./pages/Bingo";
import Snake from "./pages/Snake";
import TypeRacer from "./pages/TypeRacer";
import NoMatch from "./pages/NoMatch";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

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

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        expand={false}
        variant="dark"
        style={{
          margin: ".5rem",
          maxWidth: "fit-content",
          position: "fixed",
          top: "1rem",
          zIndex: "999",
        }}
        onClick={handleShow}
      >
        <Navbar.Toggle></Navbar.Toggle>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          style={{ backgroundColor: "#121212", color: "white" }}
        >
          <Offcanvas.Title>
            <h1 className="text-xl">Navigate</h1>
          </Offcanvas.Title>
          <Button
            type="button"
            className="btn-close"
            aria-label="Close"
            style={{ backgroundColor: "white", color: "white" }}
            onClick={handleClose}
          ></Button>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: "#121212", color: "white" }}>
          <Nav className="mr-auto flex-column">
            {links.map((menuItem, index) => (
              <Nav.Link
                as={Link}
                key={index}
                to={menuItem.link}
                onClick={() => {
                  handleClose();
                }}
              >
                <h3>{menuItem.text}</h3>
              </Nav.Link>
            ))}
          </Nav>
          <Outlet />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function App() {
  return (
    <>
      <OffCanvas />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="Bingo" element={<Bingo />} />
        <Route path="ApplePicker" element={<Snake />} />
        <Route path="TypeRacer" element={<TypeRacer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
