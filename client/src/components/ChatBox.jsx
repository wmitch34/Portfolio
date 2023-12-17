import React, { useRef, useState, useEffect } from 'react';
import "./Chatbox.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



export default function Chatbox(props){
    
    const inputRef = useRef(null);
    const scrollRef = useRef(null);
    const[inputVal, setInputVal] = useState("");
    const[chatHistory, setChathistory] = useState([]);
    const{ user, setUser, socket} = props

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory]);

    useEffect(()=>{
        socket.emit('req_chat_history')
    },[])

    useEffect(() =>{
        socket.on('recieve_message', (data)=>{
            setChathistory(data)
        })

        socket.on('recieve_board_history', (data)=>{
            setBoardHistory(data)
        })
        
    }, [socket])

    const sendMessage = () =>{
        setChathistory([...chatHistory, {message: inputVal, user:user}])
        socket.emit("send_message", {message: inputVal, user:user})
    };

    const handlSendMessage = (event) =>{
        event.preventDefault()
        if(inputVal === "" || props.user ===""){
            return
        }
        sendMessage()
        setInputVal("")
        inputRef.current.focus()
    }


    return(
        <div className="container-fluid" >
            <div className="row" style={{ height: '100%' }}>
                <div className="col-12 d-flex flex-column">
                    <div className="row flex-grow-1">
                        <h1>Global Chat</h1>
                    </div>
            
                    <div className="row flex-grow-1">
                        <div>
                            <form className='text-box-container'>
                                <input 
                                    placeholder='Enter user name...'
                                    value={user}
                                    onChange ={(event) => {
                                        setUser(event.target.value)
                                    }}
                                    className='form-control chat-text-field'
                                />
                            </form>                        
                        </div>
                    </div>
             
                    <div className="row flex-grow-3">
                        <div className= 'message-window-container'>
                            <div className='w-100 message-window' style ={{height: '282px', overflowY: 'auto', }} ref = {scrollRef}>
                                {chatHistory.map((message, index) =>(
                                    <div key = {index}>
                                        <div style={{color: '#121212'}}>{message.user}</div>
                                        <div style={{backgroundColor: '#121212', padding: '5px', borderRadius: '10px',marginBottom: '5px 5px 5px 5px'}}>
                                            <div style={{padding: '5px'}}key = {index}>{message.message}</div>
                                        </div>
                                    </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div className="row flex-grow-1">
                        <div className='w-100 overFlow-auto ' style={{display: 'inline'}}>
                            <form className='text-box-container'>
                                <input 
                                    value={inputVal}
                                    placeholder='Message...'
                                    onChange ={(event) =>{
                                        setInputVal(event.target.value)
                                    }}
                                    ref={inputRef}
                                    className='form-control chat-text-field'
                                />
                                <button type = 'submit' onClick = {handlSendMessage} className='rounded-circle'><i className="bi bi-arrow-up-circle-fill fs-3" style={{color: '#0d6efd'}}></i></button>
                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};