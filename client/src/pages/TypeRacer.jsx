import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getSentence } from "../api";
import { normalizeApostrophes } from "../components/tools";
import "./TypeRacer.css";

let localSentences = [
  "At the same time, enemy codebreakers have attempted to break these codes and steal secrets.",
  "The desire for secrecy has meant that nations have operated codemaking departments, which were responsible for ensuring the security of communications by inventing and implementing the best possible codes.",
  "The quick brown fox jumps over the lazy dog.",
  "Please type out this temporary sentence.",
  "There is a one in six chance you are typing this sentence.",
  "Adding one more, for the variety.",
];

function getRand(list) {
  const num = Math.random() * list.length;
  const ret = Math.floor(num);
  return ret;
}

function Results({ start_time, end_time, target, mistakes }) {
  let calcMistakes = mistakes;
  let time_elapsed = (end_time - start_time) / 1000;
  let wpm = 0.0;
  if (time_elapsed <= 0) {
    time_elapsed = 0;
    return <></>;
  } else {
    let num_words = target.split(" ").length;
    wpm = num_words / (time_elapsed / 60);
  }

  if (Math.floor(mistakes) % 2 == 0) {
    calcMistakes = Math.floor(mistakes) / 2;
  } else {
    calcMistakes = (Math.floor(mistakes) + 1) / 2;
  }

  return (
    <>
      <div>{time_elapsed.toFixed(2)} seconds</div>
      <div>{wpm.toFixed(2)} words per minute</div>
      <div>{calcMistakes} mistakes</div>
    </>
  );
}

async function getRandomSentence(setter) {
  try {
    const sentence_from_api = await getSentence();
    let text = normalizeApostrophes(sentence_from_api);
    setter(text);
  } catch (e) {
    console.log("Falied to set sentence from API Ninjas: ", e);
    const localSentence = localSentences[getRand(localSentences)];
    console.log(localSentence);
    setter(localSentence);
  }
}

function TypeRacer() {
  const userInputBoxRef = useRef(null);
  const startGameBtnRef = useRef(null);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice =
      /Mobi/i.test(userAgent) || /Android/i.test(userAgent);

    setIsMobile(isMobileDevice);
    userInputBoxRef.current.onpaste = (e) => e.preventDefault();

    getRandomSentence(handleSetSentence);
  }, []);

  const [history, setHistoy] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // The following block of states are for setting the value of text areas.
  // String value of current target.
  const [curr_sen, setSentence] = useState("");

  // Text area for primary game.
  const [userInput, setUserInput] = useState("");
  // Text area for user created sentence.
  const [newContent, setNewContent] = useState("");

  // The following block of states are controllers for rendering components.
  // Indicate if a session has been completed.
  const [session, setSession] = useState(false);
  // Indicate if the results should show.
  const [results, setResults] = useState(false);
  // Indicate adding new content state.
  const [submit_new_flag, setSubmitNewFlag] = useState(false);

  // The following block of states are controllers for handling timing values
  const [startTimer, setStartTimer] = useState(3);
  const [start_time, set_start_time] = useState(Date.now());
  const [end_time, set_end_time] = useState(Date.now());

  const [mistakes, setMistakes] = useState(0);

  // Handle user inputting into the primary game text area, and validate the input imediatly after
  const handleSetUserInput = (event) => {
    setUserInput(event.target.value);
    validate();
  };

  // Recursive function to start countdown timer thens tart game
  function startCountdown(i) {
    if (i == 0) {
      setStartTimer("Go!");

      userInputBoxRef.current.disabled = false;
      userInputBoxRef.current.focus();

      set_start_time(Date.now());
      return;
    }
    i--;
    setStartTimer(i);
    setTimeout(() => startCountdown(i), 1000);
  }

  const handleBegin = () => {
    // set in session indicator to true
    setSession(true);
    // close custom content box
    setSubmitNewFlag(false);
    // close prev results info box
    setResults(false);
    // clear input
    setUserInput("");
    // clear mistakes
    setMistakes(0);
    // enter countdown (game also starts here)
    startCountdown(4);
  };

  const handleEnd = () => {
    set_end_time(Date.now());
    handleReset();
    setResults(true);
  };

  const handleReset = () => {
    setSession(false);
    setUserInput("");
    startGameBtnRef.current.focus();
    userInputBoxRef.current.disabled = true;
  };

  const validate = () => {
    const text_field = userInputBoxRef.current;

    if (text_field.value == curr_sen) {
      handleEnd();
      return;
    } else if (curr_sen.includes(text_field.value)) {
      text_field.style.color = "green";
    } else {
      text_field.style.color = "red";
      setMistakes((prev) => prev + 1);
    }
  };

  const handleSetSentence = (input) => {
    if (!history.includes(input)) {
      setHistoy((prev) => [input, ...prev]);
    }
    setSentence(input);
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="text-lg mt-5">
            <h1>{""}</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-lg">
            <h1>Type Racer</h1>
          </Col>
          {isMobile && (
            <div className="text-md">
              <p className="p-3">
                ATTENTION MOBILE USERS: When the timer countdown finishes, touch
                the text box to open your keyboard and begin typing! It may also
                be helpful to adjust the siz of the text box as needed.
              </p>
            </div>
          )}
        </Row>
        <Row>
          <Col className="ms-0 mb-2">
            <button
              autoFocus
              disabled={session}
              ref={startGameBtnRef}
              onClick={handleBegin}
              className="btn btn-primary ms-0 me-1 mb-1"
            >
              START
            </button>

            <button
              disabled={!session}
              onClick={handleReset}
              className="btn btn-primary me-1 mb-1"
            >
              RESET
            </button>

            <button
              disabled={session}
              onClick={() => {
                handleReset();
                getRandomSentence(handleSetSentence);
                setResults(false);
              }}
              className="btn btn-primary me-1 mb-1"
            >
              NEW CHALLENGE
            </button>

            <button
              disabled={session}
              onClick={() => {
                handleReset();
                setSubmitNewFlag((prev) => !prev);
                setResults(false);
              }}
              className="btn btn-primary me-1 mb-1"
            >
              CUSTOM CHALLENGE
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="w-100 p-1 mb-2"
              style={{
                backgroundColor: "white",
                color: "black",
                minHeight: "5rem",
              }}
            >
              {curr_sen}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <textarea
              disabled
              ref={userInputBoxRef}
              value={userInput}
              placeholder="Type Here"
              className="w-100 mb-3"
              spellCheck={false}
              onChange={handleSetUserInput}
            ></textarea>
          </Col>
        </Row>
        {results && (
          <Row>
            <Col>
              <Results
                start_time={start_time}
                end_time={end_time}
                target={curr_sen}
                mistakes={mistakes}
              />
            </Col>
          </Row>
        )}
        {session && (
          <Row>
            <Col>
              <h1>{startTimer}</h1>
            </Col>
          </Row>
        )}

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
                onClick={() => {
                  if (newContent.trim() !== "") {
                    handleSetSentence(newContent);
                    setSubmitNewFlag(false);
                  }
                }}
                className="btn btn-primary w-100"
              >
                Submit
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
                  setSubmitNewFlag(false);
                }}
              >
                Cancel
              </button>
            </Col>
          </Row>
        )}
        <Row>
          <h2>Sentence History</h2>
          <Container style={{ maxHeight: "50vh", overflow: "auto" }}>
            {history.map((value, index) => (
              <Row
                onClick={() => handleSetSentence(value)}
                className="mt-2 history-row"
                key={{ index }}
              >
                {value}
              </Row>
            ))}
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default TypeRacer;
