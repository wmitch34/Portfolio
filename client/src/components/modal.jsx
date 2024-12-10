import React from "react";

function Modal(props) {
  const { message, state, stateHandler, title, children, closeMSG } = props;

  return (
    <>
      {state && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <dialog
            open={state}
            className="inset-0 z-50 p-5 rounded-lg bg-primary mx-auto"
          >
            <h1 className="text-secondary  text-5xl">{title}</h1>
            <p className="text-white p-4">{message}</p>
            {children}
            <button
              onClick={() => {
                stateHandler();
              }}
              className="my-bingo-button"
            >
              {closeMSG ? closeMSG : "Close"}
            </button>
          </dialog>
        </div>
      )}
    </>
  );
}

export default Modal;
