export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomRotation() {
  let arr = [0, 90, 180, 270];
  let rand = getRandomNumber(0, 4);
  return arr[rand];
}

export function normalizeApostrophes(text) {
  return text.replace(/[\u2018\u2019]/g, "'").replace(/\u201C|\u201D/g, '"');
}

export function parseCookies() {
  return document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = decodeURIComponent(value); // Decode URI-encoded values
    return acc;
  }, {});
}
