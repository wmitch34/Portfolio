import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './snake.css'

export default function Snake(){

    function initBoard(i_input, j_input){
        console.log("called")
        let board = [];
        let id = 0
    
        for(let i = 0; i < 13; i++){
            let row = [];
            let state;
            for(let j = 0; j < 13; j++){
                if(i_input == i && j_input == j){
                    state = 1;
                }else state = 0;
    
                let col = {
                    row: i,
                    col: j,
                    id: id,       
                    state: state,           
                }
                row.push(col)
                id++;
            }
            board.push(row);        
        }
        console.log("Board: ",board)
        return board
    }

    const SIZE = 13;
    // const[board, setBoard] = useState([[]])
    const[currPosition, setCurrPosition]= useState({i:((SIZE - 1)/2), j:((SIZE - 1)/2)})


    const handleInput = (event) =>{
        switch(event.key){

            case 'ArrowLeft':
                console.log(event.key)
                setCurrPosition((prev) => ({i:prev.i, j: prev.j - 1}));
                console.log(currPosition)

            break;

            case 'ArrowRight':
                console.log(event.key)
                setCurrPosition((prev) => ({i:prev.i, j: prev.j + 1})); 
                console.log(currPosition)

            break;

            case 'ArrowUp':
                console.log(event.key)
                setCurrPosition((prev) => ({i:prev.i - 1, j: prev.j}));
                console.log(currPosition)

            break;

            case 'ArrowDown':
                console.log(event.key)
                setCurrPosition((prev) => ({i:prev.i + 1, j: prev.j}));
                console.log(currPosition)

            break;

            default:
            break;
        }
    }

    useEffect(()=>{
        
        // setBoard(initBoard(((SIZE - 1)/2), ((SIZE - 1)/2)))        
        
        console.log('rerendering')
        setTimeout(()=>{
            window.addEventListener('keydown', handleInput);

        }, 1000)

    }, [])
    
    return (
        <>
                <div className='custom-cell' style={{ left: currPosition.x * 2, top: '-3rem' }}></div>
                {/*<div className = 'row'>
                    <div className="col text-center">
                        <h1 className = 'title'>Snake</h1>
                    </div>
                </div>
                <div className = 'row'>
                    <div className="col-3 align-items-center justify-content-center">
                        <h1 className = 'title'>left</h1>
                    </div>
                    <div className="col-6 align-items-center justify-content-center">
                        <h1 className = 'title'>center</h1>
                        <div className='container'>
                            <div className='snake-board'>
                                {board.map((row, index) => (
                                    <div key={index} className='snake-row w-100'>
                                        {row.map((cell) => (
                                            <div key={cell.id} id = {cell.id} className={'custom-cell'}>
                                            </div>
                                        ))}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="col-3 align-items-center justify-content-center">
                        <h1 className = 'title'>right</h1>
                    </div>
                </div>*/}
        </>
    )

}