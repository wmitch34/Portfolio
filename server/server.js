require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const Game = require("./src/game.js");

let PORT = 5000;
let chatHistory = [];

// console.log(process.env.STATUS === "production" ? "Prod" : "Dev");
// process.env.STATUS === "production"
//   ? (PORT = process.env.PROD_PORT)
//   : (PORT = process.env.DEV_PORT);

const app = express();
app.use(cors(), bodyParser.json());
const server = http.createServer(app);

app.post("/verify", (req, res) => {
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

app.get("/getRollDelay", (req, res) => {
  try {
    res.status(200).send({ delay: Game.gameState.delay });
  } catch (e) {
    console.log("Server Error: ", e);
  }
});

server.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:3000",
    methods: ["GET", "POST"],
  },
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

setTimeout(() => {
  console.log("Starting Game");
  Game.game(io);
}, 5000);
