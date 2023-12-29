export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomRotation() {
  let arr = [0, 90, 180, 270];
  let rand = getRandomNumber(0, 4);
  return arr[rand];
}
