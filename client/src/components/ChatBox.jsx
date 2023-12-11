import React, { useState, useEffect } from 'react';
import "./board.css"
import io from 'socket.io-client'


const socket = io.connect("http://localhost:3001");

export default function Chatbox(props){

    const[inputVal, setInputVal] = useState([""])
    const[chatHistory, setChathistory] = useState([])
    let user = props.user
    let setUser = props.setUser

    useEffect(()=>{
        socket.emit('req_history')
    },[])

    useEffect(() =>{
        socket.on('recieve_message', (data)=>{
            console.log(data)
            setChathistory(data)
        })

        socket.on('game_over', (data)=>{
            console.log('gameOver: ', data)
        })

        socket.on('rolled_number', (data)=>{
            console.log(data)
        })
        
    }, [socket])

    const sendMessage = () =>{
        setChathistory([...chatHistory, {message: inputVal, user:user}])
        socket.emit("send_message", {message: inputVal, user:user})
    };

    const handlSendMessage = () =>{
        if(inputVal === ""){
            return
        }
        sendMessage()
        setInputVal("")
    }


    return(
        <>
            <div className='w-100'>
                <input 
                    value={user}
                    onChange ={(event) => {
                        setUser(event.target.value)
                    }}
                    className='form-control'
                />
            </div>
            <div className='w-100'>
                {chatHistory.map((message, index) =>(
                    <p key = {index}>{message.user}: {message.message}</p>
                ))}
            </div>
            <div className='w-100'>
                <input 
                    value={inputVal}
                    onChange ={(event) =>{
                        setInputVal(event.target.value)
                    }}
                    className='form-control'
                />
                <button onClick = {handlSendMessage}>Send Message</button>
            </div>
        </>
    )
}