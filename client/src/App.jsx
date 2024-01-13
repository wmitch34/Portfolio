import { useState } from "react";
import Bingo from "./pages/Bingo";
import Snake from "./pages/Snake";
import TypeRacer from "./pages/TypeRacer";
import FixedNavbar from "./components/Navbar";
import PIZZA from "../src/assets/pizza.jpg";

export default function App() {
  const [bingo, setBingo] = useState(false);
  const [snake, setSnake] = useState(false);
  const [typeRacer, setTypeRacer] = useState(false);

  let btns = [
    {
      text: "Home",
      on_click: () => {
        setBingo(false);
        setSnake(false);
        setTypeRacer(false);
      },
    },
    {
      text: "Multiplayer Bingo",
      on_click: () => {
        setBingo(true);
        setSnake(false);
        setTypeRacer(false);
      },
    },
    {
      text: "Apple Picker",
      on_click: () => {
        setBingo(false);
        setTypeRacer(false);
        setSnake(true);
      },
    },
    {
      text: "Type Racer",
      on_click: () => {
        setBingo(false);
        setSnake(false);
        setTypeRacer(true);
      },
    },
  ];
  return (
    <>
      <FixedNavbar btnArray={btns} />
      {bingo ? <Bingo /> : <div></div>}
      {snake ? <Snake /> : <div></div>}
      {typeRacer ? <TypeRacer /> : <div></div>}
      {!bingo && !snake && !typeRacer && (
        <>
          <br />
          <br />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <h1>Pizza Time</h1>
            <img src={PIZZA}></img>
          </div>
        </>
      )}
    </>
  );
}
