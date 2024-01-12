import axios from "axios";

export async function submitBoard(board, user) {
  let ret = 0;

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
    url: "http://localhost:3001/verify",
    data: { board: reqBody, user },
  })
    .then((response) => {
      return ret;
    })
    .catch((err) => {
      console.log(err);
    });
}

// export function getRollDelay(){
//     return axios({
//         method: 'get',
//         url: 'http://localhost:3001/getRollDelay',
//     }).then(response => {
//        const ret = response.data.delay;
//        return ret;
//     }).catch(err =>{
//         console.log(err)
//     })
// }
