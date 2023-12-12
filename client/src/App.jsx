import React, { useState } from 'react';
import './App.css'
import Board from './components/Board';
import Chatbox from './components/ChatBox';
import BingoInfo from './components/BingoInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
    const[user, setUser] = useState("")

    const handleSetUser = (val) => {
        console.log('here')
        setUser(val)
    }

    return (
        <div className='container'>
            <div className = 'row'>
                <div className="col text-center">
                    <h1 className = 'header'>Bingo</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-3 align-items-center justify-content-center'>
                    <Chatbox user ={user} setUser = {handleSetUser}/>
                </div>
                <div className='col-6 align-items-center justify-content-center'>
                    <Board user = {user}/>
                </div>
                <div className='col-3 align-items-center justify-content-center'>
                    <BingoInfo/>
                </div>
            </div>
        </div>
    );
}


