import { useState, useEffect } from "react";
import BOI from "../assets/BOI.jpg";
import BOIFRONT from "../assets/BOIFRONT.jpg";

function TargetBlock(props) {
  const { x, y, points, size } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "Grey",
      }}
    >
      {points}
    </div>
  );
}

function getRandomNumber(min, max) {
  // Calculate a random number between min (inclusive) and max (exclusive)
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function Snake(props) {
  const SIZE = 200;
  const window_height = window.innerHeight;
  const window_width = window.innerWidth;

  const getSafeCoords = (window_width, window_height) => {
    let x = getRandomNumber(0, window_width);
    let y = getRandomNumber(0, window_height);

    if (window_width - x < SIZE) {
      x -= SIZE;
    }

    if (window_height - y < SIZE) {
      y -= SIZE;
    }
    return { x: x, y: y };
  };

  const [position, setPosition] = useState({
    x: window_width / 2,
    y: window_height / 2,
  });
  const [score, setScore] = useState(0);
  const [points, setPointes] = useState(10 * getRandomNumber(0, 10));
  const [foodCoords, setFoodCoords] = useState(
    getSafeCoords(window_width, window_height)
  );
  const [sprite, setSprite] = useState(BOIFRONT);

  const handleConsumeCheck = () => {
    console.log(position);
    console.log(foodCoords);
    if (
      Math.abs(position.x - foodCoords.x) < SIZE &&
      Math.abs(position.y - foodCoords.y) < SIZE
    ) {
      setScore((prev) => prev + points);
      setFoodCoords(getSafeCoords(window_width, window_height));
      setPointes(10 * getRandomNumber(0, 10));
    }

    return;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const moveStep = 25; // Define how many pixels the element moves with each key press

      if (event.key == "e") {
        console.log("Checking");
        handleConsumeCheck();
      }

      // Calculate new position based on current position
      let newPosition = { ...position };
      switch (event.key) {
        case "ArrowUp":
          if (!(newPosition.y - moveStep < 0)) {
            newPosition.y -= moveStep;
            setSprite(BOI);
          }
          break;
        case "w":
          if (!(newPosition.y - moveStep < 0)) {
            newPosition.y -= moveStep;
          }
          break;
        case "ArrowDown":
          if (!(newPosition.y + moveStep + SIZE > window_height)) {
            newPosition.y += moveStep;
            setSprite(BOIFRONT);
          }
          break;
        case "s":
          if (!(newPosition.y + moveStep + SIZE > window_height)) {
            newPosition.y += moveStep;
            setSprite(BOIFRONT);
          }
          break;
        case "ArrowLeft":
          if (!(newPosition.x - moveStep < 0)) {
            newPosition.x -= moveStep;
            setSprite(BOIFRONT);
          }
          break;
        case "a":
          if (!(newPosition.x - moveStep < 0)) {
            newPosition.x -= moveStep;
            setSprite(BOIFRONT);
          }
          break;
        case "ArrowRight":
          if (!(newPosition.x + moveStep + SIZE > window_width)) {
            newPosition.x += moveStep;
            setSprite(BOIFRONT);
            break;
          }
        case "d":
          if (!(newPosition.x + moveStep + SIZE > window_width)) {
            newPosition.x += moveStep;
            setSprite(BOIFRONT);
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
      <TargetBlock
        x={foodCoords.x}
        y={foodCoords.y}
        points={points}
        size={SIZE}
      />
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: `${SIZE}px`,
          height: `${SIZE}px`,
          color: "white",
        }}
      >
        <img
          src={sprite}
          style={{
            width: `${SIZE}px`,
            height: `${SIZE}px`,
          }}
        ></img>
        {score}
      </div>
    </>
  );
}
