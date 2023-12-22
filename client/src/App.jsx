import { useState } from "react";
import Bingo from "./pages/Bingo";
import Snake from "./pages/Snake";

export default function App() {
  const [bingo, setBingo] = useState(false);
  return <>{bingo ? <Bingo /> : <Snake />}</>;
}
