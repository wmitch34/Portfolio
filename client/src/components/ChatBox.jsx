import React, { useRef, useState, useEffect } from "react";

export default function Chatbox(props) {
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const { user, setUser, chatHistory, setChatHistory, socket } = props;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const sendMessage = () => {
    setChatHistory([...chatHistory, { message: inputVal, user: user }]);
    socket.emit("send_message", { message: inputVal, user: user });
  };

  const handlSendMessage = (event) => {
    event.preventDefault();
    if (inputVal === "" || props.user === "") {
      return;
    }
    sendMessage();
    setInputVal("");
    inputRef.current.focus();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex flex-column">
          <div className="row flex-grow-1">
            <div>
              <form className="text-box-container">
                <input
                  placeholder="Enter user name..."
                  value={user}
                  onChange={(event) => {
                    setUser(event.target.value);
                  }}
                  className="text-black"
                />
              </form>
            </div>
          </div>

          <div className="row flex-grow-3">
            <div className="message-window-container">
              <div className="w-100 message-window" ref={scrollRef}>
                {chatHistory.map((message, index) => (
                  <div key={index}>
                    <div>{message.user}</div>
                    <div style={{}}>
                      <div key={index}>{message.message}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row flex-grow-1">
            <div className="w-100 overFlow-auto " style={{ display: "inline" }}>
              <form className="text-box-container">
                <input
                  autoFocus
                  value={inputVal}
                  placeholder="Message..."
                  onChange={(event) => {
                    setInputVal(event.target.value);
                  }}
                  ref={inputRef}
                  className="form-control chat-text-field"
                />
                <button type="submit" onClick={handlSendMessage} className="">
                  <i className=""></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
