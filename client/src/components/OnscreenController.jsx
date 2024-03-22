export default function OnScreenController(props) {
  const { controller, touchScreen } = props;
  console.log(touchScreen);

  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          zIndex: "999",
        }}
      >
        <div>
          <div xs={8} sm={8} md={4} lg={4} xl={4}>
            <div>
              <div className="mb-1">
                <div xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.place()}
                      className="my-button"
                    >
                      {touchScreen ? "DROP" : "Q"}
                    </button>
                  </div>
                </div>
                <div xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.up()}
                      className="my-button"
                    >
                      {touchScreen ? "UP" : "W"}
                    </button>
                  </div>
                </div>
                <div xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.interact()}
                      className="my-button"
                    >
                      {touchScreen ? "PICKUP" : "E"}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.left()}
                      className="my-button"
                    >
                      {touchScreen ? "LEFT" : "A"}
                    </button>
                  </div>
                </div>
                <div xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.down()}
                      className="my-button"
                    >
                      {touchScreen ? "DOWN" : "S"}
                    </button>
                  </div>
                </div>
                <div xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.right()}
                      className="my-button"
                    >
                      {touchScreen ? "RIGHT" : "D"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div xs={4} sm={4} md={8} lg={8} xl={8}></div>
        </div>
      </div>
    </>
  );
}
