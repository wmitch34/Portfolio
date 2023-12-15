import React, { useState, useEffect } from 'react';
import './BingoInfo.css'

export default function BingoInfo(props){
    const {socket} = props
    const [roll, setRoll] = useState()

    useEffect(() =>{
        socket.on('rolled_number', (data)=>{
            setRoll(data)
        })
    }, [socket])

    return(
        <>
            <h1>Info Goes here</h1>
            <div className='current-roll-container w-100'>
                <div className='current-roll '>{roll}</div>
            </div>
        </>
    )
}