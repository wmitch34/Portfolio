import { useState } from "react";
import Bingo from "./pages/Bingo";
import Snake from "./pages/Snake";
import FixedNavbar from "./components/Navbar";

export default function App() {
  const [bingo, setBingo] = useState(false);
  const [snake, setSnake] = useState(false);

  let btns = [
    {
      text: "Multiplayer Bingo",
      on_click: () => {
        setBingo(true);
        setSnake(false);
      },
    },
    {
      text: "Apple Picker",
      on_click: () => {
        setBingo(false);
        setSnake(true);
      },
    },
    {
      text: "Home",
      on_click: () => {
        setBingo(false);
        setSnake(false);
      },
    },
  ];
  return (
    <>
      <FixedNavbar btnArray={btns} />
      {bingo ? <Bingo /> : <div></div>}
      {snake ? <Snake /> : <div></div>}
      {!bingo && !snake && (
        <>
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ textAlign: "center" }}>TEMP LANDING PAGE</h1>
        </>
      )}
    </>
  );
}
