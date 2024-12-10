const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const Game = require("./src/game.js");
const sendMail = require("./src/emailService.js");
const sentenceService = require("./src/sentenceService.js");
const path = require("path");
require("dotenv").config();

let url_body;
let PORT;

if (process.env.ENVIRONMENT === "DEV") {
  url_body = process.env.DEV_URL;
  PORT = process.env.DEV_PORT;
} else if (process.env.ENVIRONMENT === "PROD") {
  url_body = process.env.PROD_URL;
  PORT = process.env.PROD_PORT;
} else {
  console.log("Running in some other mode: " + process.env.ENVIRONMENT);
}

let chatHistory = [];

const app = express();
app.use(express.static(path.join(__dirname, "client", "dist")));
app.use("/public", express.static(path.join(__dirname, "client/public")));

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
const server = http.createServer(app);

const io = socketIO(server, {
  path: "/socket.io",
  cors: {
    origin: [url_body],
    methods: ["GET", "POST"],
  },
});

app.post("/api/getSentence", async (req, res) => {
  try {
    const value = await sentenceService.getSentence();
    let myReturn = await value;
    res.status(200).json({ data: myReturn });
  } catch (e) {
    console.log(e);
  }
});

app.post("/api/sendMessage", async (req, res) => {
  try {
    let payload = {
      message: req.body.data.message,
      email: req.body.data.email,
      phone: req.body.data.phone,
    };
    sendMail(payload);
  } catch (e) {
    console.log(e);
  }
});

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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

io.on("connection", (socket) => {
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
