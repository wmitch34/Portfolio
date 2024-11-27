import APPLE from "../assets/gameAssets/apple2.png";

function getRandomId() {
  return 0;
}

class GameObject {
  constructor(x, y) {
    this.size = {
      x: 200,
      y: 200,
    };
    this.top = x;
    this.left = y;
    this.id = getRandomId();
  }
  top = 0;
  left = 0;
  id = 0;
  size = {};
}

class Apple extends GameObject {
  points = 100;
  image = APPLE;
  interaction = "collect and move";
  size = {
    x: 100,
    y: 100,
  };
}

class Rufus extends GameObject {
  points = 200;
  image = APPLE;
  interaction = "collect";
}

export { Apple, Rufus };
