import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function MyModal(props) {
  const { message, state, stateHandler, title, children, closeMSG } = props;
  //   const [show, setShow] = useState(state);
  //   const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={state} onHide={() => stateHandler()}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{message}</p>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => stateHandler()}>
            {closeMSG ? closeMSG : "Close"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
