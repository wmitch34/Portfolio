import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ApplePickerThumb from "../assets/applePickerThumb.png";
import BingoThumb from "../assets/bingoThumb.png";
import Construction from "../assets/construction.jpg";
import "./Home.css";

import { Link } from "react-router-dom";

const bingoDesc =
  "Test your Bingo skills against the world's finest players over the web. Enjoy banter and commoradary over the in game chatbox!";
const applePickerDesc =
  "The only thing standing between you and the end of the world as we know it-- the almighty apple. Collect apples as they fall and use the seeds to plant new trees!";
const typeRacerDesc =
  "Blaze through bite-sized typing promps to improve your skills as a typist. Compare your score with friends to see who is the speediest typer!";

function MyCard(props) {
  const { title, desc, img, link } = props;
  return (
    <div className="hoverClass">
      <Link to={link} style={{ textDecoration: "none" }}>
        <Card style={{}}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>

            <Button variant="primary">Explore!</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default function Home(props) {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        <Col>
          <div>
            <h1 className="text-lg">
              Welcome! Select an activity, or read more about{" "}
              <a href="#about" style={{ textDecoration: "none" }}>
                this page
              </a>
              !
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-4">
          <MyCard
            title="Multiplayer Bingo"
            link="/Bingo"
            desc={bingoDesc}
            img={BingoThumb}
          ></MyCard>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-4">
          <MyCard
            title="Apple Picker"
            link="/ApplePicker"
            desc={applePickerDesc}
            img={ApplePickerThumb}
          ></MyCard>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-4">
          <MyCard
            title="Type Racer"
            link="/TypeRacer"
            desc={typeRacerDesc}
            img={Construction}
          ></MyCard>
        </Col>
      </Row>
    </Container>
  );
}
