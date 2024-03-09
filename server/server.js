require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const Game = require("./src/game.js");

let PORT = process.env.PORT;
// let url;
let chatHistory = [];

// console.log(process.env.STATUS === "development" ? "Dev" : "Prod");
// process.env.STATUS === "production"
//   ? (url = "http://162.243.173.148")
//   : (url = "http://localhost:3000");

// console.log("Cors Allowing: ", url)

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

const server = http.createServer(app);
const io = socketIO(server, {
  path: '/socket.io',
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
},});

app.post("/api/verify", (req, res) => {
  try {
    if (Game.gameState.verify(req.body.board)) {
      Game.gameState.setGameOver(req.body.user);
      chatHistory = [];
      io.emit("recieve_message", chatHistory);
      res.status(200).send({ response: true });
    } else {
      res.status(200).send({ response: false });
    }
  } catch (e) {
    console.log("Server Error: ", e);
  }
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  if (Game.gameState.gameOver) {
    socket.emit("game_over", Game.gameState.winners);
  }

  socket.on("send_message", (data) => {
    chatHistory.push(data);
    socket.broadcast.emit("recieve_message", chatHistory);
  });

  socket.on("req_chat_history", () => {
    socket.emit("recieve_message", chatHistory);
  });

  socket.on("req_roll_hist", () => {
    socket.emit("send_roll_hist", Game.gameState.rolledList);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("req_current_time", () => {
    socket.emit("send_curr_time", Game.gameState.second);
  });

  socket.on("req_game_state", () => {
    socket.emit("send_game_state", Game.gameState);
  });
});

server.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

setTimeout(() => {
  console.log("Starting Game");
  Game.game(io);
}, 5000);
