const axios = require("axios");

// Make a GET request
async function getDadJoke() {
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/dadjokes?limit=1",
      {
        headers: {
          "X-Api-Key": process.env.API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    let ret = response.data[0].joke;
    return ret;
  } catch (e) {
    console.log(e);
  }
}
async function getSentence() {
  const ret = await getDadJoke();
  return ret;
}
exports.getSentence = getSentence;
exports.getDadJoke = getDadJoke;
