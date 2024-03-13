import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ApplePickerThumb from "../assets/applePickerThumb.png";
import BingoThumb from "../assets/bingoThumb.png";
import TypeRacerThumb from "../assets/typeRacerThumb.png";
import Contstruction from "../assets/construction.jpg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "react-bootstrap/Image";

import "./Home.css";

import { Link, useLocation } from "react-router-dom";

const bingoDesc =
  "Test your Bingo skills against the world's finest players over the web. Enjoy banter and commoradary over the in game chatbox!";
const applePickerDesc =
  "The only thing standing between you and the end of the world as we know it-- the almighty apple. Collect apples as they fall and use the seeds to plant new trees!";
const typeRacerDesc =
  "Blaze through bite-sized typing promps to improve your skills as a typist. Compare your score with friends to see who is the speediest typer!";

let aboutStyle = {
  minHeight: "10rem",
  maxHeight: "10rem",
  overflow: "auto",
};

function MyCard(props) {
  const { title, desc, img, link, alt } = props;
  return (
    <div className="hoverClass">
      <Link to={link} style={{ textDecoration: "none" }}>
        <Card style={{}}>
          <Card.Img variant="top" src={img} alt={alt} />
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
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  const history = useLocation();
  useEffect(() => {
    if (history.hash === "#about") {
      executeScroll();
    }
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-lg mt-5">
          <h1>{""}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <h1 className="text-lg">
              Welcome, select an activity, or read more{" "}
              <ScrollLink
                to="about"
                smooth={true}
                duration={200}
                className="test-primary"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                about
              </ScrollLink>{" "}
              this page!
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4">
          <MyCard
            title="Bingo"
            link="/Bingo"
            desc={bingoDesc}
            img={BingoThumb}
            alt={"Bingo thumbnail"}
          ></MyCard>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4">
          <MyCard
            title="Apple Picker"
            link="/ApplePicker"
            desc={applePickerDesc}
            img={ApplePickerThumb}
            alt={"Apple Picker thumbnail"}
          ></MyCard>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mb-4">
          <MyCard
            title="Type Racer"
            link="/TypeRacer"
            desc={typeRacerDesc}
            img={TypeRacerThumb}
            alt={"Type Racer thumbnail"}
          ></MyCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 ref={myRef} id="about">
            {" "}
          </h1>
          <h1 className="text-xl mt-4">About</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>This section is currently under construction!</p>
          <Image
            style={{ maxHeight: "30rem" }}
            src={Contstruction}
            alt="Description of your image"
            fluid // Use fluid to make the image responsive
          />
        </Col>
      </Row>
      {/* <Row className="mt-4">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Bingo</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Multiplayer Gaming
              </Card.Subtitle>
              <Card.Text style={aboutStyle}>
                Bingo started out as an intro-to-react school project. After
                meeting the requirements for the project, I took the opotunity
                to learn some basic CSS animations. Eventually, the gradual
                addition of features turned bingo into an exploration of
                animations, rest api, and web socket utlization.
              </Card.Text>
              <Card.Link href="/Bingo">Play now</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Apple Picker</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Creative Outlet
              </Card.Subtitle>
              <Card.Text style={aboutStyle}>
                Towards the end of my Bachelors degree, I developed an interest
                in digital art. Some of my first attempts at drawing digital
                characters reminded me of 2d video game assets. This inspired me
                to create a place where I could see my art come to life! While
                developing Apple Picker, I learned about 2d grid traversal,
                image handling, catching user input, and much more.
                Additionally, Apple Picker utilizes OOP concepts and 2d
                collision calculations. One of my main take-aways from the dev
                process was that you should not reinvent the wheel (in this
                case, 2d game engine) if better, more rhobust tools are easily
                available.
              </Card.Text>
              <Card.Link href="/ApplePicker">Start collecting</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Type Racer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Offline Challenge
              </Card.Subtitle>
              <Card.Text style={aboutStyle}>
                In preparation for a long flight, I downloaded an offline
                documentation tool called{" "}
                <a href="https://devdocs.io/offline" target="_blank">
                  DevDocs
                </a>
                . I spent the flight writing a words-per-minute calculator app.
                This exercise was meant to develop my documentation-reading
                skills and decreses reliance on frantic googling. I am really
                happy with what I was able to accomplish in such limited time
                with limited resources (and lots of questions from my
                seat-neighbor). The version available here on my portfolio is
                much the same as my original app, althouge I have optimized it
                for mobile viewing and replaced vanilla css with Bootstrap.
              </Card.Text>
              <Card.Link href="/TypeRacer">Test your speed</Card.Link>
              <Card.Link href="https://devdocs.io/offline" target="_blank">
                Dev Docs
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
}
