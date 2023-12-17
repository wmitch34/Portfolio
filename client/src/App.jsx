import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Chatbox from './components/ChatBox';
import { submitBoard, getRollDelay } from './api';
import './App.css'

const socket = io.connect("http://localhost:3001");

function initCard(){
    // track used to avoid repeats
    let used = [];
    let tempCard  = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
    let id = 0
    // loop through array
    for (let row = 0; row < 5; row++) {

        for (let col = 0; col < 5; col++) {
            // get valid number for curr col
            let number = (col*15) + (Math.floor(Math.random() * 15) + 1);
            // check if used
            while(used.includes(number)){
                number = (col*15) + (Math.floor(Math.random() * 15) + 1);
            }
            // Push valid number to 'used' and card
            tempCard[row][col] = {value: number, id: id, class_List: 'bingo'};
            used.push(number);
            id++;
        }            
    }
    // Manually override contents of Free space
    tempCard[2][2] = {value: 'Free', class_List: 'highlight-obj bingo', id: 12};
    return tempCard;
}

export default function App(){
    const[user, setUser] = useState("");
    const[rollHist, setRollHist] = useState([]);
    const[board, setBoard] = useState(initCard());
    const[gameOver, setGameOver] = useState(false);
    const[timer, setTimer] = useState(0);
    const [roll, setRoll] = useState()
    //assume a 15 second delay
    const[rollDelay, setRollDelay] = useState(15);
    const[gameOverTimer, setGameOverTimer] = useState(30)


    const checkBoard = () => {
        console.log(submitBoard(board, user));
    };

    const handleSetUser = (val) => {
        setUser(val);
    };

    const handleSetHistory = (val) => {
        setRollHist(prevArray => [...prevArray, val])
    };

    const handleResetBoard = () => {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
            element.classList.remove('highlight-obj');
        });        
        let newBoard = initCard();
        setBoard(newBoard);
    };

    const handleTileClick = (event) => {
        let classList = event.target.classList
        if(classList.contains('highlight-obj')){
            classList.remove('highlight-obj');
        }else{
            classList.add('highlight-obj');
        }       
    };

    const handleSetRollDelay = (val) => {
        setRollDelay(val)
    };

    const runGameOverTimer = () => {
        if(gameOverTimer == 0){
            setGameOverTimer(30)
            return
        }
        setInterval(()=>{
            setGameOverTimer(prev => prev - 1);
            runGameOverTimer()
        }, 1000)

    }

    const handleGameOver =(data)=>{
        console.log("Game Over!: ", data);
        setRollHist([]);
        handleResetBoard();
        setGameOver(true);

        runGameOverTimer()
    } 

    useEffect(() =>{
        socket.on('rolled_number', (data)=>{
            setGameOver(false)
            setRoll(data)
            handleSetHistory(data)
        });

        socket.on('game_over', (data)=>{
            handleGameOver(data);
        })

        socket.on('send_roll_hist', (data)=>{
            const trimmed_hist = data.slice(1);
            setRoll(trimmed_hist[trimmed_hist.length -1])
            setRollHist(trimmed_hist);
        })

        socket.on('send_curr_time', (data)=>{
            setTimer(data)
        })

        return () => {
            socket.off('rolled_number');
            socket.off('game_over');
            socket.off('send_curr_time');
        };
        
    }, [socket]);

    useEffect(()=>{
        socket.emit('req_current_time');
        socket.emit('req_roll_hist');
        getRollDelay().then( delay => {
            handleSetRollDelay(delay / 1000)
        })
    
    }, []);

    return (
        <div className='container'>
            <div className = 'row'>
                <div className="col text-center">
                    <h1 className = 'header'>Bingo</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-3 align-items-center justify-content-center'>
                    <Chatbox user ={user} setUser = {handleSetUser} socket ={socket}/>
                </div>
                <div className='col-6 align-items-center justify-content-center'>
                    <div className='container'>
                        <div className= 'board'>
                            {board.map((row, index) => (
                                <div key = {index} className= 'board-row'>
                                    {row.map((tile) => (
                                        <div key = {tile.id} className= {tile.class_List} onClick={handleTileClick}>
                                            {tile.value}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className='container'>
                            <button onClick={handleResetBoard} className='btn btn-primary'>Reset Board</button>
                            <button onClick={checkBoard} className='btn btn-primary'>Submit Board</button>
                        </div>
                    </div>
                </div>
                <div className='col-3 align-items-center justify-content-center'>
                    <h1>Info Goes here</h1>
                    {!gameOver && 
                    
                    (<><div>Next roll in 00:{(rollDelay - (timer%rollDelay)) < 10 ?"0"+(rollDelay - (timer%rollDelay)): (rollDelay - (timer%rollDelay)) }</div>
                    <div className='current-roll-container w-100'>
                        <div className='current-roll '>{roll}</div>
                    </div></>)
                    }
                    {gameOver &&
                        <div>Next Game in 00:{(gameOverTimer) < 10 ?"0"+(gameOverTimer): gameOverTimer }</div>

                    }
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <h1 className = 'header'>Roll History</h1>
                </div>
            </div >
            <div className="row">
                <div className="col text-center roll-hist-container ">
                    {rollHist.map((roll, index) =>(
                        <div key={index} className='roll-hist-bingo'>{roll}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}


