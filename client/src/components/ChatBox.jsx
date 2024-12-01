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
    <div className="w-full pt-5 flex flex-col">
      <h2 className="p-2">Chat Box</h2>
      <form className="text-box-container" onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Enter user name..."
          value={user}
          onChange={(event) => {
            setUser(event.target.value);
          }}
          className="text-black"
        />
      </form>

      <div className="message-window min-h-[70px] break-words" ref={scrollRef}>
        {chatHistory.map((message, index) => (
          <div key={index}>
            <div>{message.user}</div>
            <div key={index}>{message.message}</div>
          </div>
        ))}
      </div>

      <div className="row flex-grow-1">
        <div className="overFlow-auto " style={{ display: "inline" }}>
          <form className="text-box-container">
            <input
              autoFocus
              value={inputVal}
              placeholder="Message..."
              onChange={(event) => {
                setInputVal(event.target.value);
              }}
              ref={inputRef}
              className="text-black"
            />
            <button type="submit" onClick={handlSendMessage} className="">
              <i className=""></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
