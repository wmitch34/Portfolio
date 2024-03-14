import React from "react";
import { Modal, Button } from "react-bootstrap";

const bootstrapSucks = {
  backgroundColor: "grey",
  color: "#121212",
};

function MyModal(props) {
  const { message, state, stateHandler, title, children, closeMSG } = props;

  return (
    <>
      <Modal show={state} onHide={() => stateHandler()}>
        <Modal.Header
          closeButton
          style={{ ...bootstrapSucks, borderColor: "#121212" }}
        >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={bootstrapSucks}>
          <p>{message}</p>
          {children}
        </Modal.Body>
        <Modal.Footer style={{ ...bootstrapSucks, borderColor: "#121212" }}>
          <Button variant="primary" onClick={() => stateHandler()}>
            {closeMSG ? closeMSG : "Close"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
