function setChoiceList(){
    let list = [];

    for(let i = 1; i<77; i++ ){
        list.push(i)
    }
    
    return list
}

// Set initial Gamestate
let gameState = {
    delay: 1000,

    rolledList: ['Free'],
    gameOver: false,
    winners: [],
    choiceList: setChoiceList(),
    gameOverTimer: 30000,
    second: 0,

    setGameOver(winner){
        gameState.winners.push(winner)
        gameState.gameOver = true;
    },
    verify(board){
        let truth = true;
    
        // rows
        for(let i = 0; i< 5; i++){
            for(let j = 0; j< 5; j++){
                if(!this.rolledList.includes(board[i][j])){
                    truth = false;
                }
            }
            if(truth){
                return true;
            }
            truth = true        
        }
    
        // cols
        for(let i = 0; i< 5; i++){
            for(let j = 0; j< 5; j++){
                if(!this.rolledList.includes(board[j][i])){
                    truth = false;
                }
            }
            if(truth){
                return true;
            }
            truth = true 
            
        }
    
        //diag1
        for(let i = 0; i < 5; i++){
            if( !this.rolledList.includes(board[i][i])){
                truth = false;
                break;
            }   
        }
        if(truth){
            return true;
        }
    
        truth = true
    
        // diag2
        for(let i = 4; i>= 0; i--){
            if( !this.rolledList.includes(board[(i - 4) * -1][i])){
                truth = false;
                break;
            }
        }
        if(truth){
            return true;
        }
    
        return false;
    },
    resetGame(){
        this.rolledList = ['Free'];
        this.gameOver = false;
        this.winners = [];
        this.choiceList = setChoiceList();
        this.second = 0;
    },
}

// Driver function for game -- RECURSIVE
function game(io){
    // Wait 1 second and emit a time
    setTimeout(()=>{
        io.emit('send_curr_time', gameState.second)
        gameState.second = gameState.second + 1;
        game(io)
    }, 1000);

    // // Base case. If gameOver is turned to true, or the choice array is empty, end the game
    // if(gameState.gameOver || gameState.choiceList.length === 0){
    //     io.emit('game_over', (gameState.winners));
    //     gameState.resetGame();
    //     console.log("Restarting game....");
    //     game(io);
    //     return;
    // }

    // if(gameState.second % 30 === 0){

    //     // Get a random roll from the choiceList, then remove it from the choiceList
    //     let randomIndex = Math.floor(Math.random() * gameState.choiceList.length);
    //     let roll = gameState.choiceList[randomIndex];
    //     gameState.choiceList.splice(randomIndex, 1)
        
    //     // console.log(roll)
    //     gameState.rolledList.push(roll)
    //     io.emit('rolled_number', roll);
            
    // }    
    
}

exports.game = game;
exports.gameState = gameState;

