import APPLE from "./Apple2.png";
import RUFUS from "./RUFUS.png";

const apple = {
  points: 100,
  size: {
    x: 200,
    y: 200,
  },
  image: APPLE,
  top: 0,
  left: 0,
  interaction: "collect and move",
  id: 123,
};

const rufus = {
  points: 200,
  size: {
    x: 200,
    y: 200,
  },
  image: RUFUS,
  top: 0,
  left: 0,
  interaction: "collect",
  id: 456,
};

export { apple, rufus };
