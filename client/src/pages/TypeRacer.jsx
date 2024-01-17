import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function TypeRacer() {
  window.onload = () => {
    const myInput = document.getElementById("input-textbox");
    myInput.onpaste = (e) => e.preventDefault();
  };

  const date = new Date();

  const options = [
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

  // indicate if a session is in progress
  const [in_session, set_in_session] = useState(false);

  // indicate start and end times
  const [start_time, set_start_time] = useState(Date.now());
  const [end_time, set_end_time] = useState(Date.now());

  // indicate adding new content state
  const [submit_new_flag, set_submit_new_flag] = useState(false);

  // diable enable textbox
  const [disabled, set_disabled] = useState(true);

  function Timer({ start_time, end_time, target }) {
    const time_elapsed = (end_time - start_time) / 1000;
    const num_words = target.split(" ").length;
    const wpm = num_words / (time_elapsed / 60);

    return (
      <div>
        <div>Time elapsed</div>
        {time_elapsed.toFixed(2)}s<div>Words Per minute: {wpm.toFixed(2)}</div>
      </div>
    );
  }

  const handleBegin = () => {
    set_in_session(true);
    set_session_complete_flag(false);
    set_submit_new_flag(false);
    document.getElementById("input-textbox").focus();
    set_start_time(Date.now());
  };

  const handleEnd = () => {
    set_end_time(Date.now());
    set_in_session(false);
    set_session_complete_flag(true);
    document.getElementById("game-reset").focus();
  };

  const handleReset = () => {
    set_in_session(false);
    set_curr_sentance(options[get_rand()]);
    document.getElementById("input-textbox").value = "";
    document.getElementById("game-start").focus();
  };

  const handleAddContentSubmit = () => {
    const user_input = document.getElementById("target_textbox").innerHTML;
    options.push(user_input);
    set_curr_sentance(user_input);
    document.getElementById("input-textbox").value = "";
    document.getElementById("game-start").focus();
  };

  const handleAddContentEditor = () => {
    // const user_input = document.getElementById("new_content")
    // user_input.focus()
    set_submit_new_flag(true);
    // set_curr_sentance("")
    set_disabled(false);
  };

  const validate = () => {
    const text_field = document.getElementById("input-textbox");
    if (text_field.value === curr_sen) {
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
      <Container className="mt-4 ms-6 me-5">
        <Row>
          <Col className="ms-0">
            <button
              autoFocus
              id="game-start"
              onClick={() => handleBegin()}
              className="btn btn-primary ms-0"
            >
              Begin Text Race!
            </button>

            <button onClick={() => handleReset()} className="btn btn-primary">
              Reset Game
            </button>

            <button
              className="btn btn-primary"
              onClick={() => handleAddContentEditor()}
            >
              Add Challenge
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
              spellCheck={false}
              onChange={() => validate()}
              className="w-100 h-5"
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col>
            {session_complete_flag && (
              <Timer
                start_time={start_time}
                end_time={end_time}
                target={curr_sen}
              />
            )}
          </Col>
        </Row>
        {submit_new_flag && (
          <Row>
            <Col xs={8} sm={8} md={8} lg={8}>
              <textarea
                id="new_content"
                placeholder="Enter new sentence here"
                className="w-100"
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
                  // handleReset();
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
