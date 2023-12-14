import React, { useState, useEffect } from 'react';
import './App.css'
import Board from './components/Board';
import Chatbox from './components/ChatBox';
import BingoInfo from './components/BingoInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001");

export default function App(){
    const[user, setUser] = useState("");
    const [rollHist, setRollHist] = useState([]);

    const handleSetUser = (val) => {
        setUser(val);
    }

    const handleSetHistory = (val) => {
        setRollHist(prevArray => [...prevArray, val])
    }

    useEffect(() =>{
        socket.on('rolled_number', (data)=>{
            handleSetHistory(data)
        });

        socket.on('game_over', (data)=>{
            setRollHist([])
        })

        return () => {
            socket.off('rolled_number');
        };
        
    }, [socket])

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
                    <Board user = {user}/>
                </div>
                <div className='col-3 align-items-center justify-content-center'>
                    <BingoInfo socket = {socket}/>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <div style ={{display: 'flex'}} className='w-100'>
                        {rollHist.map((roll, index) =>(
                            <div key={index} style={{margin: '10px'}}>{roll}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


