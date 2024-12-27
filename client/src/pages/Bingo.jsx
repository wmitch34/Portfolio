import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { submitBoard } from "../api";
import Chatbox from "../components/ChatBox";
import Modal from "../components/modal";
import NavBar from "../components/NavBar";
import { parseCookies } from "../components/tools";

let socket_url;

if (import.meta.env.VITE_ENVIRONMENT === "DEV") {
  socket_url = import.meta.env.VITE_DEV_URL;
} else if (import.meta.env.VITE_MODE === "PROD") {
  socket_url = import.meta.env.VITE_PROD_URL;
} else {
  console.log(
    "Running in some other mode: " + import.meta.env.VITE_ENVIRONMENT
  );
}

const socket = io(socket_url);

socket.on("connect", () => {
  console.log("Websocket connection success!");
});

socket.on("connect_error", (error) => {
  console.error("Error connecting to server:", error);
});

function initCard() {
  // track used to avoid repeats
  let used = [];
  let tempCard = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  let id = 0;
  // loop through array
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      // get valid number for curr col
      let number = col * 15 + (Math.floor(Math.random() * 15) + 1);
      // check if used
      while (used.includes(number)) {
        number = col * 15 + (Math.floor(Math.random() * 15) + 1);
      }
      // Push valid number to 'used' and card
      tempCard[row][col] = { value: number, id: id, class_List: "bingo" };
      used.push(number);
      id++;
    }
  }
  // Manually override contents of Free space
  tempCard[2][2] = {
    value: "Free",
    class_List: "Free bingo highlight-obj",
    id: 12,
  };
  return tempCard;
}

export default function Bingo() {
  const [user, setUser] = useState("");
  const [rollHist, setRollHist] = useState([]);
  const [board, setBoard] = useState(initCard());
  const [gameOver, setGameOver] = useState();
  const [timer, setTimer] = useState(0);
  const [roll, setRoll] = useState(0);
  const [hint, setHint] = useState();
  const [submitModal, setSubmitModal] = useState(false);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [missingUsernameModal, setMissingUsernamemodal] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);
  const [winner, setWinner] = useState("");
  const [badge, setBadge] = useState(0);
  const [chatHistory, setChatHistory] = useState([]);

  const [rollDelay, setRollDelay] = useState();

  // API call to check users board
  const checkBoard = () => {
    if (user === "") {
      setMissingUsernamemodal(true);
      return;
    }
    try {
      console.log("Trying");
      submitBoard(board, user, setSubmitModal);
    } catch (e) {
      alert("API Call error");
      // console.error(e);
    }
  };
  // handler for setting user
  const handleSetUser = (data) => {
    console.log("setting Cookie");
    document.cookie = `username=${data}; max-age=3600`;
    setUser(data);
  };
  // handler for adding the curr roll to history
  const handleSetHistory = (data) => {
    setRollHist((prevArray) => [...prevArray, data]);
  };
  const handleCloseGameOverModal = () => {
    setGameOverModal(false);
  };
  const handleCloseSubmissionHandler = () => {
    setSubmitModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // handler for reset board btn
  const handleResetBoard = () => {
    const elements = document.querySelectorAll("*");
    elements.forEach((element) => {
      element.classList.remove("highlight-obj");
    });
    let newBoard = initCard();
    setBoard(newBoard);
  };
  // handler for tile click event
  const handleTileClick = (event) => {
    let classList = event.target.classList;
    let histTile = document.getElementById(`hist-${event.target.innerHTML}`);

    if (classList.contains("highlight-obj")) {
      classList.remove("highlight-obj");
      if (histTile != null) {
        histTile.style.backgrounddivor = "grey";
      }
    } else {
      classList.add("highlight-obj");
      if (histTile != null) {
        histTile.style.backgrounddivor = "white";
      }
    }
  };
  // handler for server saying the game is over
  const handleGameOver = (data) => {
    setWinner(data);
    setGameOverModal(true);
    setGameOver(true);
    setRollHist([]);
    handleResetBoard();
  };
  //handler for setting timer
  const handleSetTimer = (data) => {
    setTimer(data);
  };
  // handle click for hint
  const handleHistClick = (data) => {
    let board1D = board.flat();

    board1D.forEach((tile) => {
      if (tile.value == data) {
        setHint(tile.value);
        document.getElementById(`hist-${data}`).style.backgrounddivor = "white";
        setTimeout(() => {
          setHint();
        }, 1000);
      }
    });
  };

  useEffect(() => {
    // on rolled number
    socket.on("rolled_number", (data) => {
      Promise.resolve(data).then((reslovedData) => {
        setGameOver(false);
        setGameOverModal(false);
        setRoll(reslovedData);
        handleSetHistory(reslovedData);
      });
    });

    // on game over
    socket.on("game_over", (data) => {
      setGameOver(true);
      Promise.resolve(data).then((reslovedData) => {
        handleGameOver(reslovedData);
      });
    });

    // on timer change
    socket.on("send_curr_time", (data) => {
      Promise.resolve(data).then((reslovedData) => {
        handleSetTimer(reslovedData);
      });
    });

    // on start
    socket.on("send_game_state", (data) => {
      Promise.resolve(data).then((reslovedData) => {
        setTimer(reslovedData.second);
        setRollDelay(reslovedData.delay / 1000);
        setGameOver(reslovedData.gameOver);

        const trimmed_hist = reslovedData.rolledList.slice(1);
        // setRoll here to avoid waiting 1s for the poll
        setRoll(trimmed_hist[trimmed_hist.length - 1]);
        setRollHist(trimmed_hist);
      });
    });

    socket.on("recieve_message", (data) => {
      console.log("recieved Message");
      if (data.length > 0) {
        setBadge((prev) => prev + 1);
      }

      setChatHistory(data);
    });

    socket.on("recieve_board_history", (data) => {
      setBoardHistory(data);
    });

    return () => {
      socket.off("rolled_number");
      socket.off("game_over");
      socket.off("send_curr_time");
      socket.off("send_game_state");
      socket.off("recieve_message");
      socket.off("recieve_board_history");
    };
  }, [socket]);

  useEffect(() => {
    socket.emit("req_chat_history");
    socket.emit("req_game_state");

    const cookie = parseCookies();

    if (
      cookie.username != null &&
      cookie.username != undefined &&
      cookie.username != ""
    ) {
      setUser(cookie.username);
      setWelcomeModal(false);
    } else {
      setWelcomeModal(true);
    }

    return () => {
      socket.off("req_chat_history");
      socket.off("req_game_state");
    };
  }, []);

  return (
    <div id="bingo" className="">
      <NavBar fullScreen={true}>
        <div className="w-full text-center">
          <h1 className="text-3xl pt-2">Bingo</h1>
        </div>
      </NavBar>
      <Modal
        message={`${winner}`}
        state={gameOverModal}
        stateHandler={handleCloseGameOverModal}
        title={"Game Over! Winner"}
      ></Modal>
      <Modal
        message={`The board you submitted is not a winning configuration.`}
        state={submitModal}
        stateHandler={handleCloseSubmissionHandler}
        title={"Invalid Board"}
      ></Modal>
      <Modal
        state={welcomeModal}
        stateHandler={setWelcomeModal}
        title={"Welcome to Bingo"}
        message={"Set a username"}
        closeMSG={"Submit"}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            className="p-2 rounded-md mb-2"
            type="text"
            placeholder="Your user name..."
            value={user}
            onChange={(event) => {
              handleSetUser(event.target.value);
            }}
          />
        </form>
      </Modal>
      <Modal
        state={missingUsernameModal}
        stateHandler={setMissingUsernamemodal}
        title={"You dont have a username!"}
        message={
          "Enter a username into the chatbox before you submit your board."
        }
      ></Modal>
      <div className="flex flex-wrap pt-0 md:pt-24">
        <div
          id="chatboxContainer"
          className="w-full md:w-1/3 p-7 md:p-0 flex md:hidden"
        >
          <div className="p-2 md:p-0 w-full md:w-3/4 flex mx-auto">
            <Chatbox
              user={user}
              handleSetUser={handleSetUser}
              chatHistory={chatHistory}
              handleSetChatHistory={setChatHistory}
              socket={socket}
            />
          </div>
        </div>
        <div
          id="lastes-roll"
          className="flex flex-col w-full md:w-1/3 p-7 md:p-0 justify-center text-center items-center"
        >
          <h2 className="text-lg"> Latest Roll</h2>
          <div className="">
            {!gameOver && (
              <div>
                <div className="current-roll w-28 md:w-40">{roll}</div>

                <div>
                  00:
                  {rollDelay - (timer % rollDelay) < 10
                    ? "0" + (rollDelay - (timer % rollDelay))
                    : rollDelay - (timer % rollDelay)}
                </div>
              </div>
            )}
            {gameOver && (
              <div className="text-xl">Next Game starting soon!</div>
            )}
          </div>
        </div>
        <div id="board" className="w-full md:w-1/3 p-7 md:p-0">
          {board.map((row, index) => (
            <div key={index} className="board-row w-100">
              {row.map((tile) => (
                <div
                  key={tile.id}
                  className={
                    hint == tile.value
                      ? `${tile.class_List} hint-pulse`
                      : tile.class_List
                  }
                  onClick={handleTileClick}
                  id={"tile-" + tile.value}
                >
                  {tile.value}
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={checkBoard}
            className="my-button mt-1"
            disabled={gameOver}
          >
            Submit Board
          </button>
        </div>
        <div
          id="chatboxContainer"
          className="w-full md:w-1/3 p-7 md:p-0 hidden md:flex"
        >
          <div className="p-2 md:p-0 w-full md:w-3/4 flex mx-auto">
            <Chatbox
              user={user}
              handleSetUser={handleSetUser}
              chatHistory={chatHistory}
              handleSetChatHistory={setChatHistory}
              socket={socket}
            />
          </div>
        </div>
      </div>

      <div>
        <h2>Roll History</h2>
        <div className="roll-hist-container mb-4">
          {rollHist.map((roll, index) => (
            <div
              key={index}
              className="roll-hist-bingo"
              id={"hist-" + roll}
              onClick={() => handleHistClick(roll)}
            >
              {roll}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
