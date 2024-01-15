import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ApplePickerThumb from "../assets/ApplePickerThumb.png";
import BingoThumb from "../assets/BingoThumb.png";
import Construction from "../assets/Construction.jpg";
import "./Home.css";

import { Link } from "react-router-dom";

const bingoDesc = "lorem ipsum";
const applePickerDesc = "lorem ipsum";
const typeRacerDesc = "lorem ipsum";

function MyCard(props) {
  const { title, desc, img, link } = props;
  return (
    <div className="hoverClass">
      <Link to={link} style={{ textDecoration: "none" }}>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={img} height={400} />
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
    <Container>
      <Row>
        <Col>
          <div style={{ textAlign: "center", fontSize: "3REM" }}>
            Welcome! Select an Activity, or read more about THIS PAGE
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <MyCard
            title="Multiplayer Bingo"
            link="/Bingo"
            desc={bingoDesc}
            img={BingoThumb}
          ></MyCard>
        </Col>
        <Col>
          <MyCard
            title="Apple Picker"
            link="/ApplePicker"
            desc={applePickerDesc}
            img={ApplePickerThumb}
          ></MyCard>
        </Col>
        <Col>
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
