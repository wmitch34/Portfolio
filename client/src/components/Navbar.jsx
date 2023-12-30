import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function FixedNavbar(props) {
  const { btnArray } = props;
  return (
    <Navbar collapseOnSelect expand={false} variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div>Select A game</div>
        <Nav className="mr-auto">
          {btnArray.map((menuItem, index) => (
            <Nav.Link
              onClick={() => {
                menuItem.id === index
                  ? menuItem.on_click(true)
                  : menuItem.on_click(false);
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
