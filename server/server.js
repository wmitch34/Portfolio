const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io')
const cors = require("cors");

const game = require('./src/game.js');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('send_message', (data) => {
        console.log(data, socket.id);
        socket.broadcast.emit('recieve_message', data)
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
    if(true){
        res.send(200, {response: 'winner'})

    }else{
        res.send(200, {response: 'loser'})
    }
});

game.game();