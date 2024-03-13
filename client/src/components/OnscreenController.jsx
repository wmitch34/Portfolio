import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./OnScreenController.css";

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
        ß
      >
        <Row>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <Container>
              <Row className="mb-4">
                <Col>
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
                <Col>
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
                <Col>
                  <div className="controls">
                    <button
                      disabled={!touchScreen}
                      onClick={() => controller.interact()}
                      className="my-button"
                    >
                      {touchScreen ? "INTERACT" : "E / ENTER"}
                    </button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
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
                <Col>
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
                <Col>
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
          <Col xs={0} sm={0} md={4} lg={6} xl={6}></Col>
        </Row>
      </Container>
    </>
  );
}
