const axios = require("axios");

// Make a GET request
async function getDadJoke() {
  try {
    const response = await axios.get("https://api.api-ninjas.com/v1/dadjokes", {
      headers: {
        "X-Api-Key": process.env.API_KEY,
        "Content-Type": "application/json",
      },
    });

    let ret = response.data[0].joke;
    return ret;
  } catch (e) {
    console.log(e);
  }
}

async function getFact() {
  try {
    const response = await axios.get("https://api.api-ninjas.com/v1/facts", {
      headers: {
        "X-Api-Key": process.env.API_KEY,
        "Content-Type": "application/json",
      },
    });

    let ret = response.data[0].fact;
    return ret;
  } catch (e) {
    console.log(e);
  }
}

async function getHistoricalEvent() {
  try {
    const day = Math.floor(Math.random() * 31) + 1;
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/historicalevents?day=" + day,
      {
        headers: {
          "X-Api-Key": process.env.API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    let ret = response.data[0].event;
    return ret;
  } catch (e) {
    console.log(e);
  }
}

async function getSentence() {
  const arr = [getDadJoke, getFact, getHistoricalEvent];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const funky_function = arr[randomIndex];
  const ret = await funky_function();
  return ret;
}
exports.getSentence = getSentence;
exports.getDadJoke = getDadJoke;
