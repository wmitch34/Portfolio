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
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <dialog open={state} className="inset-0 z-50 p-5 rounded-xl mx-auto">
            <h1 className="text-5xl text-textSecondary">{title}</h1>
            <p className="p-4">{message}</p>
            {children}
            <button
              onClick={() => {
                stateHandler();
              }}
              className="my-button"
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
