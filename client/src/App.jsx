import { useState } from "react";
import Bingo from "./pages/Bingo";
import Snake from "./pages/Snake";
import FixedNavbar from "./components/Navbar";

export default function App() {
  const [bingo, setBingo] = useState(false);
  const [snake, setSnake] = useState(false);
  const [menu, setMenu] = useState(true);

  let btns = [
    {
      text: "Multiplayer Bingo",
      on_click: (val) => {
        setBingo(val);
        console.log("Bingo: ", bingo);
      },
      id: 0,
    },
    {
      text: "Apple Picker",
      on_click: (val) => {
        setSnake(val);
        console.log("Snake: ", snake);
      },
      id: 1,
    },
  ];
  return (
    <>
      <FixedNavbar btnArray={btns} />
      {bingo ? <Bingo /> : <div></div>}
      {snake ? <Snake /> : <div></div>}
    </>
  );
}
