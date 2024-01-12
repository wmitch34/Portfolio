function setChoiceList() {
  let list = [];

  for (let i = 1; i < 77; i++) {
    list.push(i);
  }

  return list;
}

// Set initial Gamestate
let gameState = {
  // How often a value rolls
  delay: 15000,
  // values that have been rolled
  rolledList: ["Free"],
  //State of the curr game
  gameOver: false,
  // List off curr winners
  winners: [],
  // list of remaining picks
  choiceList: setChoiceList(),
  // length of game over timer
  gameOverTimer: 30000,
  // curr time in loop btwn sending next val
  second: 0,

  setGameOver(winner) {
    gameState.winners.push(winner);
    gameState.gameOver = true;
  },
  verify(board) {
    let truth = true;

    // rows
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (!this.rolledList.includes(board[i][j])) {
          truth = false;
        }
      }
      if (truth) {
        return true;
      }
      truth = true;
    }

    // cols
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (!this.rolledList.includes(board[j][i])) {
          truth = false;
        }
      }
      if (truth) {
        return true;
      }
      truth = true;
    }

    //diag1
    for (let i = 0; i < 5; i++) {
      if (!this.rolledList.includes(board[i][i])) {
        truth = false;
        break;
      }
    }
    if (truth) {
      return true;
    }

    truth = true;

    // diag2
    for (let i = 4; i >= 0; i--) {
      if (!this.rolledList.includes(board[(i - 4) * -1][i])) {
        truth = false;
        break;
      }
    }
    if (truth) {
      return true;
    }

    return false;
  },
  resetGame() {
    this.rolledList = ["Free"];
    this.gameOver = false;
    this.winners = [];
    this.choiceList = setChoiceList();
    this.second = 0;
  },
};

// Driver function for game -- RECURSIVE
function game(io) {
  setTimeout(() => {
    // Base case. If gameOver is turned to true, or the choice array is empty, end the game
    if (gameState.gameOver) {
      io.emit("game_over", gameState.winners);
      setTimeout(() => {
        gameState.resetGame();
        console.log("Restarting game....");
        game(io);
      }, gameState.gameOverTimer);
      return;
    } else if (gameState.choiceList.length === 0) {
      io.emit("game_over", "Game concluded with no winning submissions");
      setTimeout(() => {
        gameState.resetGame();
        console.log("Restarting game....");
        game(io);
      }, gameState.gameOverTimer);
      return;
    } else {
      if (gameState.second % (gameState.delay / 1000) === 0) {
        //   if (gameState.second % 1 === 0) {
        // Get a random roll from the choiceList, then remove it from the choiceList
        // then add it to the rolled list
        let randomIndex = Math.floor(
          Math.random() * gameState.choiceList.length
        );
        let roll = gameState.choiceList[randomIndex];
        gameState.choiceList.splice(randomIndex, 1);

        gameState.rolledList.push(roll);
        io.emit("rolled_number", roll);
      }
      io.emit("send_curr_time", gameState.second);
      gameState.second++;
      game(io);
    }
  }, 1000);
}

exports.game = game;
exports.gameState = gameState;
