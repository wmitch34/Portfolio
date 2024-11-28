import React from "react";

function Modal(props) {
  const { message, state, stateHandler, title, children, closeMSG } = props;

  return (
    <dialog open={state}>
      <h1>{title}</h1>
      <p>{message}</p>
      {children}
      <button
        onClick={() => {
          stateHandler();
          document.querySelector("dialog").close();
        }}
      >
        {closeMSG ? closeMSG : "Close"}
      </button>
    </dialog>
  );
}

export default Modal;
