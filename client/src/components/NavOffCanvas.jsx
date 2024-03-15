import { useEffect, useState } from "react";
import { Offcanvas, Navbar, Button } from "react-bootstrap/";
import chatBoxIcon from "../assets/chatBoxIcon.png";
import Image from "react-bootstrap/Image";

export default function OffCanvas(props) {
  const { children, header, badge, badgeSetter } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => {
    badgeSetter(0);

    setShow(false);
  };
  const handleShow = () => {
    badgeSetter(0);

    setShow(true);
  };

  return (
    <>
      <Navbar
        expand={false}
        variant="dark"
        style={{
          margin: ".5rem",
          maxWidth: "fit-content",
          position: "fixed",
          top: ".5rem",
          right: ".5rem",
          zIndex: "999",
        }}
        onClick={handleShow}
      >
        <div
          style={{
            backgroundColor: "rgba(169, 169, 169, 0.5)",
            borderRadius: "10%",
            height: "3rem",
            width: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {badge !== 0 && (
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                background: "red",
                borderRadius: "50%",
                width: "50%",
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {badge}
            </div>
          )}

          <Image
            style={{ maxHeight: "2rem" }}
            src={chatBoxIcon}
            alt="Description of your image"
            fluid
          />
        </div>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header
          style={{ backgroundColor: "#121212", color: "white" }}
        >
          <Offcanvas.Title>
            <h1 className="text-xl">{header}</h1>
          </Offcanvas.Title>
          <Button
            type="button"
            className="btn-close"
            aria-label="Close"
            style={{
              backgroundColor: "white",
              color: "white",
              marginRight: "1.5rem",
            }}
            onClick={handleClose}
          ></Button>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: "#121212", color: "white" }}>
          {children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
