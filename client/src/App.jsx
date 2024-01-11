import { useState } from "react";
import Bingo from "./pages/Bingo";
import Snake from "./pages/Snake";
import FixedNavbar from "./components/Navbar";

export default function App() {
  const [bingo, setBingo] = useState(false);
  const [snake, setSnake] = useState(false);
  const [menu, setMenu] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

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
  ];
  return (
    <>
      <FixedNavbar btnArray={btns} />
      {bingo ? <Bingo /> : <div></div>}
      {snake ? <Snake /> : <div></div>}
    </>
  );
}
