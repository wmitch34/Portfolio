import React from "react";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function FixedNavbar(props) {
  const { btnArray } = props;
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand={false}
      variant="dark"
      style={{
        zIndex: 9999999999,
        position: "fixed",
        backgroundColor: "#121212",
      }}
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          setNavOpen((prev) => !prev);
        }}
      />
      <Navbar.Collapse id="responsive-navbar-nav" in={navOpen}>
        <div>Select A game</div>
        <Nav className="mr-auto">
          {btnArray.map((menuItem, index) => (
            <Nav.Link
              onClick={() => {
                menuItem.on_click();
                setNavOpen(false);
              }}
            >
              {menuItem.text}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
