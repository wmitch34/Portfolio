import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OnScreenController(props) {
  const { controller, touchScreen } = props;
  console.log(touchScreen);

  return (
    <>
      <Container
        style={{
          position: "absolute",
          bottom: "1rem",
          zIndex: "999",
        }}
      >
        <Row>
          <Col xs={8} sm={8} md={4} lg={4} xl={4}>
            <Container>
              <Row className="mb-1">
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.place()}
                      className="my-button"
                    >
                      {touchScreen ? "DROP" : "Q"}
                    </button>
                  </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.up()}
                      className="my-button"
                    >
                      {touchScreen ? "UP" : "W"}
                    </button>
                  </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.interact()}
                      className="my-button"
                    >
                      {touchScreen ? "PICKUP" : "E"}
                    </button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.left()}
                      className="my-button"
                    >
                      {touchScreen ? "LEFT" : "A"}
                    </button>
                  </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.down()}
                      className="my-button"
                    >
                      {touchScreen ? "DOWN" : "S"}
                    </button>
                  </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.right()}
                      className="my-button"
                    >
                      {touchScreen ? "RIGHT" : "D"}
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={4} sm={4} md={8} lg={8} xl={8}></Col>
        </Row>
      </Container>
    </>
  );
}
