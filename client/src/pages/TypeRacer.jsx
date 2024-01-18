import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Results({ start_time, end_time, target }) {
  let time_elapsed = (end_time - start_time) / 1000;
  let wpm = 0.0;
  if (time_elapsed < 0) {
    time_elapsed = 0;
  } else {
    let num_words = target.split(" ").length;
    wpm = num_words / (time_elapsed / 60);
  }

  return (
    <div>
      {time_elapsed.toFixed(2)}s<div>Words Per minute: {wpm.toFixed(2)}</div>
    </div>
  );
}

function TypeRacer() {
  const userInputBoxRef = useRef(null);
  useEffect(() => {
    userInputBoxRef.current.onpaste = (e) => e.preventDefault();
    // return () => {
    //   userInputBoxRef.current.removeEventListener("paste", handlePaste);
    // };
  }, []);

  let options = [
    "The quick brown fox jumps over the lazy dog.",
    "Please type out this temporary sentence.",
    "There is a one in three chance you are typing this sentence.",
    "Adding one more, for the variety.",
  ];

  function get_rand() {
    const num = Math.random() * options.length;
    const ret = Math.floor(num);
    return ret;
  }

  // string value of current target
  const [curr_sen, set_curr_sentance] = useState(options[get_rand()]);

  // indicate if a session has been completed
  const [session_complete_flag, set_session_complete_flag] = useState(false);

  // indicate start and end times and track a 3-2-1-go timer
  const [startTimer, setStartTimer] = useState(3);
  const [start_time, set_start_time] = useState(Date.now());
  const [end_time, set_end_time] = useState(Date.now());

  // indicate adding new content state
  const [submit_new_flag, set_submit_new_flag] = useState(false);

  // track state of user input
  const [userInput, setUserInput] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleSetUserInput = (event) => {
    setUserInput(event.target.value);
    validate();
  };

  function startCountdown(i) {
    if (i == 0) {
      set_session_complete_flag(true);
      setStartTimer("Go!");
      console.log("Waiting??");
      let inputBox = document.getElementById("input-textbox");
      inputBox.disabled = false;
      inputBox.focus();

      set_start_time(Date.now());
      return;
    }
    i--;
    setStartTimer(i);
    setTimeout(() => startCountdown(i), 1000);
  }

  const handleBegin = () => {
    setUserInput("");
    set_session_complete_flag(false);
    set_submit_new_flag(false);
    startCountdown(4);
  };

  const handleEnd = () => {
    set_end_time(Date.now());
    let inputBox = document.getElementById("input-textbox");
    inputBox.disabled = true;
    set_session_complete_flag(false);
    handleReset();
  };

  const handleReset = () => {
    let inputBox = document.getElementById("input-textbox");
    inputBox.disabled = true;
    set_curr_sentance(options[get_rand()]);
    setUserInput("");
    document.getElementById("game-start").focus();
  };

  const handleAddContentSubmit = () => {
    options.push(newContent);
    console.log(options);
    set_curr_sentance(newContent);

    document.getElementById("input-textbox").value = "";
    document.getElementById("game-start").focus();
  };

  const handleAddContentEditor = () => {
    set_submit_new_flag(true);
  };

  const validate = () => {
    const text_field = document.getElementById("input-textbox");

    if (text_field.value == curr_sen) {
      handleEnd();
      return;
    } else if (curr_sen.includes(text_field.value)) {
      text_field.style.color = "green";
    } else {
      text_field.style.color = "red";
    }
  };

  return (
    <>
      <Container className="mt-4 ms-5.5">
        <Row>
          <Col>
            <h1>Type Racer</h1>
          </Col>
        </Row>
        <Row>
          <Col className="ms-0 mb-2">
            <button
              autoFocus
              id="game-start"
              onClick={() => handleBegin()}
              className="btn btn-primary ms-0 me-1"
            >
              START
            </button>

            <button
              onClick={() => handleReset()}
              className="btn btn-primary me-1"
            >
              RESET
            </button>

            <button
              className="btn btn-primary me-1"
              onClick={() => handleAddContentEditor()}
            >
              CUSTOM CHALLENGE
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <textarea
              id="target_textbox"
              value={curr_sen}
              readOnly
              className="w-100"
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col>
            <textarea
              id="input-textbox"
              placeholder="Type Here"
              ref={userInputBoxRef}
              spellCheck={false}
              value={userInput}
              onChange={handleSetUserInput}
              className="w-100 h-5"
              disabled
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col>
            <Results
              start_time={start_time}
              end_time={end_time}
              target={curr_sen}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>{startTimer}</h1>
          </Col>
        </Row>

        {submit_new_flag && (
          <Row>
            <Col xs={8} sm={8} md={8} lg={8}>
              <textarea
                id="new_content"
                placeholder="Enter new sentence here"
                className="w-100"
                value={newContent}
                onChange={(event) => {
                  let val = event.target.value;
                  setNewContent(val);
                }}
              ></textarea>
            </Col>
            <Col
              xs={2}
              sm={2}
              md={2}
              lg={2}
              className="d-flex align-items-center justify-content-center"
            >
              <button
                onClick={() => handleAddContentSubmit()}
                className="btn btn-primary w-100"
              >
                Sumbit
              </button>
            </Col>
            <Col
              xs={2}
              sm={2}
              md={2}
              lg={2}
              className="d-flex align-items-center justify-content-center"
            >
              <button
                className="btn btn-primary w-100 "
                onClick={() => {
                  handleReset();
                  set_submit_new_flag(false);
                }}
              >
                Cancel
              </button>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default TypeRacer;
