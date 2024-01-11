import React from "react";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const menuTitle = {
  color: "white",
};

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
        top: 20,
        left: 20,
      }}
    >
      <Navbar.Toggle
        style={{ backgroundColor: "#121212" }}
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          setNavOpen((prev) => !prev);
        }}
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        in={navOpen}
        style={{
          textAlign: "center",
          backgroundColor: "#121212",
          padding: 5,
          borderRadius: 20,
          marginTop: 10,
        }}
      >
        <div style={menuTitle}>Select A game</div>
        <Nav className="mr-auto">
          {btnArray.map((menuItem, index) => (
            <Nav.Link
              key={index}
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
