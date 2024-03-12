import { useState, useEffect } from "react";
import { Apple, Rufus } from "../components/GameObjects.js";
import BOIBACK from "../assets/boyBack.png";
import BOIFRONT from "../assets/boyFront.png";
import BOILEFT1 from "../assets/boyLeft.png";
import BOIRIGHT1 from "../assets/boyRight.png";
import GRASS from "../assets/grassy.png";
import { getRandomNumber } from "../components/tools.js";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import BingoThumb from "../assets/bingoThumb.png";
import TypeRacerThumb from "../assets/typeRacerThumb.png";
import StocksThumb2 from "../assets/stocksThumb2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Home.css";

// React component for rendering a game object
function GameObject(props) {
  const { gameObject } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: `${gameObject.top}px`,
        left: `${gameObject.left}px`,
      }}
    >
      <img
        src={gameObject.image}
        style={{
          width: `${gameObject.size.x}px`,
          height: `${gameObject.size.y}px`,
        }}
      ></img>
    </div>
  );
}

function getSafeCoords(screen_width, screen_height, objSize) {
  let x = getRandomNumber(0, screen_width);
  let y = getRandomNumber(0, screen_height);

  if (screen_width - x < objSize.x) {
    x -= objSize.x;
  }

  if (screen_height - y < objSize.y) {
    y -= objSize.y;
  }
  return { x: x, y: y };
}

function OnScreenController(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>Place</Col>
          <Col>Up</Col>
          <Col>Interact</Col>
        </Row>
        <Row>
          <Col>left</Col>
          <Col>down</Col>
          <Col>Right</Col>
        </Row>
      </Container>
    </>
  );
}

export default function Snake(props) {
  // This state is for controlling OffCanvas that shows when mobile opens the app
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSetIsMobile = (input) => {
    setShow(input);
  };

  const player = { width: 200, height: 250 };
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  //player position
  const [position, setPosition] = useState({
    x: windowSize.width / 2,
    y: windowSize.height / 2,
  });
  // player score, initial sprite image
  const [sprite, setSprite] = useState(BOIFRONT);

  // All active objects on board saved in array
  const [gameObjects, setGameObjects] = useState([new Apple(0)]);

  // handler for all q based interaction types
  const handleinteract = () => {
    gameObjects.forEach((gameObject) => {
      if (
        Math.abs(position.x - gameObject.left) < player.width &&
        Math.abs(position.y - gameObject.top) < player.height
      ) {
        console.log(gameObject.id);
        switch (gameObject.interaction) {
          case "collect and move":
            let safeCoords = getSafeCoords(
              windowSize.width,
              windowSize.height,
              gameObject.size
            );
            gameObject.top = safeCoords.y;
            gameObject.left = safeCoords.x;
            break;
          case "collect":
            console.log("collecting");

            setGameObjects(
              gameObjects.filter((obj) => obj.id != gameObject.id)
            );

            console.log(gameObject);

            break;
          case "none":
            break;
          default:
            break;
        }
        return;
      }
    });

    return;
  };

  const handleAction = () => {
    let rufus = new Rufus(gameObjects.length + 1);

    rufus.top = position.y;
    rufus.left = position.x;

    setGameObjects([...gameObjects, rufus]);
  };

  // on load, handle page size and check if mobile
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice =
      /Mobi/i.test(userAgent) || /Android/i.test(userAgent);
    handleSetIsMobile(isMobileDevice);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key);
      // Define how many pixels the playerchar moves with each key press
      const moveStep = 25;
      // Calculate new position based on current position
      let newPosition = { ...position };

      if (event.key == "e" || event.key == "Enter") {
        handleinteract();
        setSprite(BOIFRONT);
      }

      if (event.key == "q") {
        handleAction();
        if (!(newPosition.y + moveStep + player.height > windowSize.height)) {
          newPosition.y += moveStep;
          setSprite(BOIFRONT);
        }
      }

      switch (event.key) {
        case "ArrowUp":
          if (!(newPosition.y - moveStep < 0)) {
            newPosition.y -= moveStep;
          }
          setSprite(BOIBACK);
          break;
        case "w":
          if (!(newPosition.y - moveStep < 0)) {
            newPosition.y -= moveStep;
          }
          setSprite(BOIBACK);
          break;
        case "ArrowDown":
          if (!(newPosition.y + moveStep + player.height > windowSize.height)) {
            newPosition.y += moveStep;
          }
          setSprite(BOIFRONT);
          break;
        case "s":
          if (!(newPosition.y + moveStep + player.height > windowSize.height)) {
            newPosition.y += moveStep;
          }
          setSprite(BOIFRONT);
          break;
        case "ArrowLeft":
          if (!(newPosition.x - moveStep < 0)) {
            newPosition.x -= moveStep;
          }
          setSprite(BOILEFT1);
          break;
        case "a":
          if (!(newPosition.x - moveStep < 0)) {
            newPosition.x -= moveStep;
          }
          setSprite(BOILEFT1);
          break;
        case "ArrowRight":
          if (!(newPosition.x + moveStep + player.width > windowSize.width)) {
            newPosition.x += moveStep;
          }
          setSprite(BOIRIGHT1);
          break;
        case "d":
          if (!(newPosition.x + moveStep + player.height > windowSize.width)) {
            newPosition.x += moveStep;
          }
          setSprite(BOIRIGHT1);
          break;
        default:
          break;
      }

      setPosition(newPosition);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]);

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        style={{
          backgroundColor: "#121212",
          color: "white",
          height: "fit-content",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Attention Mobile Users</Offcanvas.Title>{" "}
          <Button
            type="button"
            className="btn-close"
            aria-label="Close"
            style={{ backgroundColor: "white", color: "white" }}
            onClick={handleClose}
          ></Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          This application reads inputs from a keyboard to control the
          character. A touch based version is in the pipeline. Until then you're
          welcome to appreciate my amazing art!
          <Container>
            <Row className="mt-4">
              <Col xs={10} sm={6} md={4} lg={3} xl={3} className="mb-4">
                <div className="hoverClass">
                  <Link to={"/Bingo"} style={{ textDecoration: "none" }}>
                    <Card style={{}}>
                      <Card.Img variant="top" src={BingoThumb} />
                      <Card.Body>
                        <Card.Title>{"Bingo"}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </Col>

              <Col xs={10} sm={6} md={4} lg={3} xl={3} className="mb-4">
                <div className="hoverClass">
                  <Link to={"/TypeRacer"} style={{ textDecoration: "none" }}>
                    <Card style={{}}>
                      <Card.Img variant="top" src={TypeRacerThumb} />
                      <Card.Body>
                        <Card.Title>{"TypeRacer"}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </Col>
              <Col xs={10} sm={6} md={4} lg={3} xl={3} className="mb-4">
                <div className="hoverClass">
                  <Link to={"/Home#about"} style={{ textDecoration: "none" }}>
                    <Card style={{}}>
                      <Card.Img variant="top" src={StocksThumb2} />
                      <Card.Body>
                        <Card.Title>{"About"}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>

      <OnScreenController />

      {gameObjects.map((gameObject, index) => (
        <GameObject key={index} gameObject={gameObject} />
      ))}
      <div
        id="player"
        style={{
          textAlign: "center",
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      >
        <img
          src={sprite}
          style={{
            width: `${player.width}px`,
            height: `${player.height}px`,
          }}
        ></img>
      </div>
      <div
        id="board"
        style={{
          width: `${windowSize.width}px`,
          height: `${windowSize.height}px`,
          overflow: "hidden",
        }}
      >
        <img
          src={GRASS}
          style={{
            width: `${windowSize.width}px`,
            height: `${windowSize.height}px`,
          }}
        ></img>
      </div>
    </>
  );
}
