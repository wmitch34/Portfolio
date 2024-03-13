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
import OnScreenController from "../components/OnscreenController.jsx";
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

export default function Snake(props) {
  // This state is for controlling OffCanvas that shows when mobile opens the app
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSetIsMobile = (input) => {
    setShow(input);
  };

  const [isTouchDevice, setIsTouchDevice] = useState(false);

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

    const handleTouchStart = () => {
      setIsTouchDevice(true);
      // Remove the event listener once detected
      window.removeEventListener("touchstart", handleTouchStart);
    };

    // Attach the event listener to check for touch support
    window.addEventListener("touchstart", handleTouchStart);

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const Controller = {
    // Define how many pixels the playerchar moves with each key press

    moveStep: 25,
    // Calculate new position based on current position
    newPosition: { ...position },

    up() {
      if (!(this.newPosition.y - this.moveStep < 0)) {
        this.newPosition.y -= this.moveStep;
      }
      setSprite(BOIBACK);
      setPosition(this.newPosition);
    },
    down() {
      if (
        !(
          this.newPosition.y + this.moveStep + player.height >
          windowSize.height
        )
      ) {
        this.newPosition.y += this.moveStep;
      }
      setSprite(BOIFRONT);
      setPosition(this.newPosition);
    },
    left() {
      if (!(this.newPosition.x - this.moveStep < 0)) {
        this.newPosition.x -= this.moveStep;
      }
      setSprite(BOILEFT1);
      setPosition(this.newPosition);
    },
    right() {
      if (
        !(this.newPosition.x + this.moveStep + player.width > windowSize.width)
      ) {
        this.newPosition.x += this.moveStep;
      }
      setSprite(BOIRIGHT1);
      setPosition(this.newPosition);
    },
    place() {
      handleAction();
      if (
        !(
          this.newPosition.y + this.moveStep + player.height >
          windowSize.height
        )
      ) {
        this.newPosition.y += this.moveStep;
        setSprite(BOIFRONT);
      }
      setPosition(this.newPosition);
    },
    interact() {
      handleinteract();
      setSprite(BOIFRONT);
    },
  };
  // controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key);

      if (event.key == "e" || event.key == "Enter") {
        Controller.interact();
      }

      if (event.key == "q") {
        Controller.place();
      }

      switch (event.key) {
        case "ArrowUp":
          Controller.up();
          break;
        case "w":
          Controller.up();

          break;
        case "ArrowDown":
          Controller.down();
          break;
        case "s":
          Controller.down();
          break;
        case "ArrowLeft":
          Controller.left();
          break;
        case "a":
          Controller.left();
          break;
        case "ArrowRight":
          Controller.right();
          break;
        case "d":
          Controller.right();

          break;
        default:
          break;
      }
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

      <OnScreenController controller={Controller} touchScreen={isTouchDevice} />

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
