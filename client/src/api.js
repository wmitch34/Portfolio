import axios from "axios";

let url_body = "http://localhost:5000";

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
    url: `${url_body}/verify`,
    data: { board: reqBody, user },
  })
    .then((response) => {
      let res = response.data.response;
      console.log(res);
      setSubmitModal(!res);
    })
    .catch((err) => {
      console.log(err);
    });
}
