export default function OnScreenController(props) {
  const { controller, touchScreen } = props;
  console.log(touchScreen);

  return (
    <>
      <div
        className="flex flex-col space-y-4 p-4 bg-opacity-50 bg-white"
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          zIndex: "999",
          border: "3px solid black",
          borderRadius: "0.5rem",
        }}
      >
        <div id="button-row-top" className="flex space-x-4 justify-center">
          <button onClick={() => controller.place()} className="my-button">
            {touchScreen ? "DROP" : "Q"}
          </button>

          <button onClick={() => controller.up()} className="my-button">
            {touchScreen ? "UP" : "W"}
          </button>

          <button onClick={() => controller.interact()} className="my-button">
            {touchScreen ? "USE" : "E"}
          </button>
        </div>
        <div id="button-row-bottom" className="flex space-x-4 justify-center">
          <button onClick={() => controller.left()} className="my-button">
            {touchScreen ? "LEFT" : "A"}
          </button>
          <button onClick={() => controller.down()} className="my-button">
            {touchScreen ? "DOWN" : "S"}
          </button>

          <button onClick={() => controller.right()} className="my-button">
            {touchScreen ? "RIGHT" : "D"}
          </button>
        </div>
      </div>
    </>
  );
}
