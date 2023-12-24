import { useState, useEffect } from "react";
import BOI from "../assets/BOIBACK.png";
import BOIFRONT from "../assets/BOIFRONT.png";
import APPLE from "../assets/apple2.png";
import carpet from "../assets/carpet.png";
import left1 from "../assets/left1.png";
import right1 from "../assets/right1.png";
import RUFUS from "../assets/rufus.png";

function TargetBlock(props) {
  const { x, y, points, size } = props;
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
        width: `${size}px`,
        height: `${size}px`,
        color: "white",
      }}
    >
      <img
        src={APPLE}
        style={{
          width: `${size + 20}px`,
          height: `${size - 20}px`,
        }}
      ></img>
      {points}
    </div>
  );
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function Snake(props) {
  const SIZE = 200;
  const window_height = window.innerHeight;
  const window_width = window.innerWidth;
  // const [window_height, setHeight] = useState();
  // const [window_width, setWidth] = useState();

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
  const [points, setPointes] = useState(1);
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
      setPointes(1);
    }

    return;
  };

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const moveStep = 25; // Define how many pixels the element moves with each key press

      if (event.key == "e" || event.key == "Enter") {
        console.log("Checking");
        handleConsumeCheck();
        setSprite(BOIFRONT);
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
            setSprite(BOI);
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
            setSprite(left1);
          }
          break;
        case "a":
          if (!(newPosition.x - moveStep < 0)) {
            newPosition.x -= moveStep;
            setSprite(left1);
          }
          break;
        case "ArrowRight":
          if (!(newPosition.x + moveStep + SIZE > window_width)) {
            newPosition.x += moveStep;
            setSprite(right1);
            break;
          }
        case "d":
          if (!(newPosition.x + moveStep + SIZE > window_width)) {
            newPosition.x += moveStep;
            setSprite(right1);
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

  const getRandomRotation = () => {
    let arr = [0, 90, 180, 270];
    let rand = getRandomNumber(0, 4);
    return arr[rand];
  };

  let cols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let rows = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <div
        id="backdrop"
        className="container-fluid w-100"
        style={{ margin: "0", padding: "0px" }}
      >
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="row g-0 w-100"
            style={{ margin: "0", padding: "0px" }}
          >
            {cols.map((num, index) => (
              <div
                key={index}
                className={`col-${1}`}
                style={{ width: `${window_width / 12}px` }}
              >
                <img
                  src={idx == 0 && index == 0 ? RUFUS : carpet}
                  style={{
                    transform: `rotate(${
                      idx == 0 && index == 0 ? 0 : getRandomRotation()
                    }deg)`,
                    width: `${window_width / 12}px`,
                    height: `${window_width / 12}px`,
                  }}
                  alt="carpet-tile"
                ></img>
              </div>
            ))}
          </div>
        ))}
      </div>
      <TargetBlock
        x={foodCoords.x}
        y={foodCoords.y}
        points={points}
        size={200}
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
