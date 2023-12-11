import React, { useState } from 'react';
import '../App.css'
import './Board.css'
import { submitBoard } from '../api';

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
            tempCard[row][col] = {value: number, class_List: 'bingo', id: id};
            used.push(number);
            id++;
        }            
    }
    // Manually override contents of Free space
    tempCard[2][2] = {value: 'Free', class_List: 'bingo Free', id: 12};
    return tempCard;
}

export default function Board(props){
    const[board, setBoard] = useState(initCard())
    const user = props.user;

    // handler for genereting new board
    const handleButtonClick = () => {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
            element.classList.remove('highlight');
        });        
        const newBoard = initCard();
        setBoard(newBoard);
    };

    // Controller for submitting board to axios
    const checkBoard = () => {
        console.log(submitBoard(board, user));
    };

    // Define event handler method handleMouseClick 
    function handleMouseClick(event){
        let classList = event.target.classList
        if(classList.contains('highlight')){
            classList.remove('highlight');
        }else{
            classList.add('highlight');
        }       
    };

    return(
        <>
            <div id = 'bingoContainer'>
                <div id = 'container' className ='gird-offset'>
                    {board.map((row, index) => (
                        <div key = {index} className= 'row grid-offset'>
                            {row.map((tile) => (
                                <div key = {tile.id} className= {'col-2 text-center'} onClick={handleMouseClick}>
                                    {tile.value}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>  
            </div>

            <div className=''>
                <button onClick={handleButtonClick} className=''>Reset Board</button>
            </div>
            <div className=''>
                <button onClick={checkBoard} className=''>Submit Board</button>
            </div>
        </>

    )
    
}
