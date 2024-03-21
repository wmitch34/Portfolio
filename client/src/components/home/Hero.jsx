import React from "react";
import { Image, Stack, Container, Row, Col } from "react-bootstrap";
import Portrait from "../../assets/portrait.png";

export default function Hero() {
  return (
    <Container className="">
      <Row className="" id="image-container">
        <Col md={6} className="flex-end">
          <Image
            src={Portrait}
            alt={"Portait of Will"}
            style={{ width: 300 }}
          />
        </Col>

        <Col id="desc-container" md={6}>
          <h1>
            <i>WILL MITCHELL</i>
          </h1>
          <h2>Software Developer</h2>
          <h2>Computer Science, UCF 2023 </h2>
        </Col>
      </Row>
    </Container>
  );
}
