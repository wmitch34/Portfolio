require('dotenv').config();
const express = require('express');
const http = require('http');
const {Server} = require('socket.io')
const cors = require("cors");
const bodyParser = require('body-parser');
const Game = require('./src/game.js');

let PORT;
let chatHistory = [];
process.env.STATUS === 'production'? (PORT = process.env.PROD_PORT):(PORT = process.env.DEV_PORT)

const app = express();
app.use(cors(), bodyParser.json())
const server = http.createServer(app);

app.post('/verify', (req, res) => {
    try{

        if(Game.gameState.verify(req.body.board)){
            Game.gameState.setGameOver(req.body.user)
            chatHistory = []
            io.emit('recieve_message', chatHistory)
            res.status(200).send({response: true})
    
        }else{
            res.status(200).send({response: false})
        }
    }catch(e){
        console.log('Server Error: ', e)
    }
});

server.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`); 
});

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

    socket.on('req_chat_history', (data)=>{
        socket.emit('recieve_message', chatHistory)
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
})

setTimeout(()=> Game.game(io), 10000);
