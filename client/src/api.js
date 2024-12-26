import axios from "axios";

let url_body;
if (import.meta.env.VITE_ENVIRONMENT === "DEV") {
  url_body = import.meta.env.VITE_DEV_URL;
} else if (import.meta.env.VITE_ENVIRONMENT === "PROD") {
  url_body = import.meta.env.VITE_PROD_URL;
} else {
  console.log(
    "Running in some other mode: " + import.meta.env.VITE_ENVIRONMENT
  );
}
console.log(url_body);

export async function submitBoard(board, user, setSubmitModal) {
  let reqBody = [];
  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      row.push(board[i][j].value);
    }
    reqBody.push(row);
  }

  await axios({
    method: "post",
    url: `${url_body}/api/verify`,
    data: { board: reqBody, user },
  })
    .then((response) => {
      let res = response.data.response;
      console.log(res);
      setSubmitModal(!res);
    })
    .catch((err) => {
      alert("Somthing went wrong!");
      console.log(err);
    });
}

export async function getSentence() {
  try {
    const response = await axios.post(`${url_body}/api/getSentence`, {
      data: "Hi there",
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function sendMessage(message) {
  try {
    const response = await axios.post(`${url_body}/api/sendMessage`, {
      data: message,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
