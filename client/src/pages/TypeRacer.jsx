import { useState } from "react";

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
    <div id="app-content-contanier">
      <div id="button-wrapper">
        <button autoFocus id="game-start" onClick={() => handleBegin()}>
          Begin Text Race!
        </button>
        <button id="game-reset" onClick={() => handleReset()}>
          Reset Game
        </button>
        <button onClick={() => handleAddContentEditor()}>Add Challenge</button>
      </div>

      <div id="target-wrapper">
        <textarea id="target_textbox" value={curr_sen}></textarea>
      </div>

      <div id="input-wrapper">
        <textarea
          id="input-textbox"
          placeholder="Type Here"
          spellCheck={false}
          onChange={() => validate()}
        ></textarea>
      </div>

      <div id="timer">
        {session_complete_flag && (
          <Timer
            start_time={start_time}
            end_time={end_time}
            target={curr_sen}
          />
        )}
      </div>
      {submit_new_flag && (
        <div id="edit-field-wrapper">
          <textarea
            id="new_content"
            placeholder="Enter new sentence here"
          ></textarea>
          <button onClick={() => handleAddContentSubmit()}>Sumbit</button>
          <button
            onClick={() => {
              handleReset();
              set_submit_new_flag(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default TypeRacer;
