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
            tempCard[row][col] = {value: number, id: id, class_List: 'bingo'};
            used.push(number);
            id++;
        }            
    }
    // Manually override contents of Free space
    tempCard[2][2] = {value: 'Free', class_List: 'highlight-obj bingo', id: 12};
    return tempCard;
}

export default function Board(props){
    const[board, setBoard] = useState(initCard())
    const user = props.user;

    // handler for genereting new board
    const handleResetBoard = () => {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
            element.classList.remove('highlight-obj');
        });        
        let newBoard = initCard();
        console.log(newBoard)
        setBoard(newBoard);
    };

    const checkBoard = () => {
        console.log(submitBoard(board, user));
    };

    function handleTileClick(event){
        let classList = event.target.classList
        if(classList.contains('highlight-obj')){
            classList.remove('highlight-obj');
        }else{
            classList.add('highlight-obj');
        }       
    };

    return(
        <>
            <div id = 'bingoContainer' className='w-100'>
                <div  className ='w-100'>
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
            </div>

            <div className='container'>
                <button onClick={handleResetBoard} className='btn btn-primary'>Reset Board</button>
            </div>
            <div className='container'>
                <button onClick={checkBoard} className='btn btn-primary'>Submit Board</button>
            </div>
        </>

    )
    
}
