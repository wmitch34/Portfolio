import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";

import Chatbox from "../components/ChatBox";
import { submitBoard } from "../api";
import "../App.css";

import Modal from "../components/modal";

const socket = io.connect("http://localhost:3001");

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
  const [user, setUser] = useState("Will");
  const [rollHist, setRollHist] = useState([]);
  const [board, setBoard] = useState(initCard());
  const [gameOver, setGameOver] = useState();
  const [timer, setTimer] = useState(0);
  const [roll, setRoll] = useState(0);
  const [hint, setHint] = useState();
  const [submitModal, setSubmitModal] = useState(false);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [winner, setWinner] = useState("");

  const [rollDelay, setRollDelay] = useState();

  // API call to check users board
  const checkBoard = () => {
    try {
      submitBoard(board, user, setSubmitModal);
    } catch (e) {
      console.error(e);
    }
  };
  // handler for setting user
  const handleSetUser = (data) => {
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
        histTile.style.backgroundColor = "grey";
      }
    } else {
      classList.add("highlight-obj");
      if (histTile != null) {
        histTile.style.backgroundColor = "white";
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
        document.getElementById(`hist-${data}`).style.backgroundColor = "white";
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
        console.log(reslovedData.gameOver);
        setGameOver(reslovedData.gameOver);

        const trimmed_hist = reslovedData.rolledList.slice(1);
        // setRoll here to avoid waiting 1s for the poll
        setRoll(trimmed_hist[trimmed_hist.length - 1]);
        setRollHist(trimmed_hist);
      });
    });

    return () => {
      socket.off("rolled_number");
      socket.off("game_over");
      socket.off("send_curr_time");
      socket.off("send_game_state");
    };
  }, [socket]);

  useEffect(() => {
    socket.emit("req_game_state");

    return () => {
      socket.off("req_game_state");
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="title">Bingo</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-3 align-items-center justify-content-center">
            <Chatbox user={user} setUser={handleSetUser} socket={socket} />
          </div>
          <div className="col-6 align-items-center justify-content-center">
            <div className="container">
              <div className="board">
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
              </div>
              <div className="container">
                <button
                  onClick={checkBoard}
                  className="btn btn-primary"
                  disabled={gameOver}
                >
                  Submit Board
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 align-items-center justify-content-center">
            <h1 className="header">Game Info</h1>
            {!gameOver && (
              <>
                <div className="timerContainer">
                  <div className="timer">
                    00:
                    {rollDelay - (timer % rollDelay) < 10
                      ? "0" + (rollDelay - (timer % rollDelay))
                      : rollDelay - (timer % rollDelay)}
                  </div>
                </div>

                <div className="current-roll-container w-100">
                  <div className="current-roll ">{roll}</div>
                </div>
              </>
            )}
            {gameOver && <div className="">Next Game starting soon!</div>}
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h1 className="header">Roll History</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center roll-hist-container ">
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
      <Modal
        message={`${winner}`}
        state={gameOverModal}
        stateHandler={handleCloseGameOverModal}
        title={"Game Over! Winner(s): "}
      ></Modal>
      <Modal
        message={`The board you submitted is not a winning configuration.`}
        state={submitModal}
        stateHandler={handleCloseSubmissionHandler}
        title={"Invalid Board:"}
      ></Modal>
    </>
  );
}
