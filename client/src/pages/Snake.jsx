import { useState, useEffect } from "react";
import { apple, rufus } from "../assets/GameObjects.js";
import BOIBACK from "../assets/BOIBACK.png";
import BOIFRONT from "../assets/BOIFRONT.png";
import BOILEFT1 from "../assets/left1.png";
import BOIRIGHT1 from "../assets/right1.png";

function GameObject(props) {
  const { gameObject } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: `${gameObject.top}px`,
        left: `${gameObject.left}px`,
        // backgroundColor: "white",
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

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRotation() {
  let arr = [0, 90, 180, 270];
  let rand = getRandomNumber(0, 4);
  return arr[rand];
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
  const player = { width: 100, height: 200 };
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
  const [gameObjects, setGameObjects] = useState([apple]);

  // handler for all q based interaction types
  const handleinteract = () => {
    gameObjects.forEach((gameObject) => {
      if (
        Math.abs(position.x - gameObject.left) < player.width &&
        Math.abs(position.y - gameObject.top) < player.height
      ) {
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
              gameObjects.filter((obj) => obj.id !== gameObject.id)
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
    rufus.top = position.y;
    rufus.left = position.x;

    setGameObjects([...gameObjects, rufus]);
  };

  // on load, handle page size
  useEffect(() => {
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
            setSprite(BOIBACK);
          }
          break;
        case "w":
          if (!(newPosition.y - moveStep < 0)) {
            newPosition.y -= moveStep;
            setSprite(BOIBACK);
          }
          break;
        case "ArrowDown":
          if (!(newPosition.y + moveStep + player.height > windowSize.height)) {
            newPosition.y += moveStep;
            setSprite(BOIFRONT);
          }
          break;
        case "s":
          if (!(newPosition.y + moveStep + player.height > windowSize.height)) {
            newPosition.y += moveStep;
            setSprite(BOIFRONT);
          }
          break;
        case "ArrowLeft":
          if (!(newPosition.x - moveStep < 0)) {
            newPosition.x -= moveStep;
            setSprite(BOILEFT1);
          }
          break;
        case "a":
          if (!(newPosition.x - moveStep < 0)) {
            newPosition.x -= moveStep;
            setSprite(BOILEFT1);
          }
          break;
        case "ArrowRight":
          if (!(newPosition.x + moveStep + player.width > windowSize.width)) {
            newPosition.x += moveStep;
            setSprite(BOIRIGHT1);
            break;
          }
        case "d":
          if (!(newPosition.x + moveStep + player.height > windowSize.width)) {
            newPosition.x += moveStep;
            setSprite(BOIRIGHT1);
            break;
          }
        default:
          break;
      }

      setPosition(newPosition);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]); // Listening to position could lead to infinite updates, better to listen only when mounting

  return (
    <>
      {gameObjects.map((gameObject, index) => (
        <GameObject key={index} gameObject={gameObject} />
      ))}
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          // backgroundColor: "white",
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
    </>
  );
}
