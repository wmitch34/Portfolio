const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io')
const cors = require("cors");
const bodyParser = require('body-parser');
const Game = require('./src/game.js');

app.use(cors(), bodyParser.json())
const server = http.createServer(app);
const chatHistory = [];

const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:3000",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('send_message', (data) => {
        chatHistory.push(data)
        socket.broadcast.emit('recieve_message', chatHistory)
    })

    socket.on('req_history', (data)=>{
        socket.emit('recieve_message', chatHistory)
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

})

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`); 
});

app.post('/verify', (req, res) => {
    if(Game.verify(req.body)){
        res.send(200, {response: 'winner'})

    }else{
        res.send(200, {response: 'loser'})
    }
});

Game.game();