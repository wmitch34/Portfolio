import React, { useRef, useState, useEffect } from "react";

export default function Chatbox(props) {
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const { user, handleSetUser, chatHistory, handleSetChatHistory, socket } =
    props;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const sendMessage = () => {
    handleSetChatHistory([...chatHistory, { message: inputVal, user: user }]);
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

  function parseCookies() {
    return document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = decodeURIComponent(value); // Decode URI-encoded values
      return acc;
    }, {});
  }

  return (
    <div className="w-full pt-5 flex flex-col" id="chatBox">
      <h2 className="p-2">Chat Box</h2>
      <form className="text-box-container" onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Enter user name..."
          value={user}
          onChange={(event) => {
            handleSetUser(event.target.value);
          }}
          className="text-black p-1 w-full rounded-sm"
        />
      </form>

      <div
        className="py-6 h-80 m-0 overflow-y-auto w-64 max-w-64"
        ref={scrollRef}
      >
        {chatHistory.map((message, index) => (
          <div key={index} className="">
            <div className="text-sm">{message.user}</div>
            {message.user == parseCookies().username ? (
              <div key={index} className="bg-secondary w-fit rounded-md p-1">
                {message.message}
              </div>
            ) : (
              <div
                key={index}
                className="w-fit rounded-md p-1 text-black"
                style={{ backgroundColor: "grey" }}
              >
                {message.message}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="row flex-grow-1">
        <div className="overFlow-auto" style={{ display: "inline" }}>
          <form
            className="text-box-container items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              autoFocus
              value={inputVal}
              placeholder="Message..."
              onChange={(event) => {
                setInputVal(event.target.value);
              }}
              ref={inputRef}
              className="text-black p-1 w-full rounded-sm"
            />
            <button
              type="submit"
              onClick={handlSendMessage}
              className="bg-secondary rounded-sm p-2 ml-2 h-10"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
