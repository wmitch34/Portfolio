import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import ApplePickerThumb from "../../assets/applePickerThumb.png";
import BingoThumb from "../../assets/bingoThumb2.jpg";
import TypeRacerThumb from "../../assets/typeRacerThumb.png";

const bingoDesc =
  "Test your Bingo skills against the world's finest players over the web.";
const applePickerDesc =
  "Collect apples as they fall and use the seeds to plant new trees!";
const typeRacerDesc =
  "Blaze through bite-sized typing promps to improve your skills as a typist.";

function MyCard(props) {
  const { title, desc, img, link, alt } = props;
  return (
    <div className="my-col hoverClass">
      <Link to={link} style={{ textDecoration: "none" }}>
        <Card>
          <Card.Img variant="top" src={img} alt={alt} fluid="true" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text
              style={{
                height: 100,
                overflow: "auto",
              }}
            >
              {desc}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default function Cards(props) {
  return (
    <Container>
      <Row className="sm-col-margin">
        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="mb-4 ">
          <MyCard
            title="Bingo"
            link="/Bingo"
            desc={bingoDesc}
            img={BingoThumb}
            alt={"Bingo thumbnail"}
          ></MyCard>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="mb-4">
          <MyCard
            title="Apple Picker"
            link="/ApplePicker"
            desc={applePickerDesc}
            img={ApplePickerThumb}
            alt={"Apple Picker thumbnail"}
          ></MyCard>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} xl={4} className="mb-4">
          <MyCard
            title="Type Racer"
            link="/TypeRacer"
            desc={typeRacerDesc}
            img={TypeRacerThumb}
            alt={"Type Racer thumbnail"}
          ></MyCard>
        </Col>
      </Row>
    </Container>
  );
}
