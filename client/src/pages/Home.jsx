import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import ApplePickerThumb from "../assets/applePickerThumb.png";
import BingoThumb from "../assets/bingoThumb2.jpg";
import TypeRacerThumb from "../assets/typeRacerThumb.png";
import Portrait from "../assets/portrait.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./Home.css";
import Resume from "./resume.jsx";

import { Link, useLocation } from "react-router-dom";

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

            {/* <Button variant="primary">Explore!</Button> */}
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default function Home(props) {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  const history = useLocation();
  useEffect(() => {
    if (history.hash === "#about") {
      executeScroll();
    }
  }, []);

  return (
    <Container className="pageContainter">
      <Image href={Portrait} alt={"Portraint of Will M"}></Image>
      <Row className="xl-screen-100vh align-items-center">
        <Container>
          <Row
            style={{ marginBottom: "2rem" }}
            className="sm-padding-top lg-padding-top "
          >
            <Col>
              <div>
                <h2 className="sm-justify-left lg-center">
                  Welcome, select an activity, or read more{" "}
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={300}
                    className="test-primary"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    about
                  </ScrollLink>{" "}
                  this page!
                </h2>
              </div>
            </Col>
          </Row>

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
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1 ref={myRef} id="about">
            {" "}
          </h1>
          <h1 className="text-xl mt-4">About</h1>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="lg-screen-100vh"
        >
          <Resume />
        </Col>
      </Row>
    </Container>
  );
}
