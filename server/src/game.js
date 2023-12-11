let delay = 30000
let rolledList = ['Free']
let gameOver = false;
let winners = [];

function game(io){
    if(gameOver){
        io.emit('game_over', (winners));
    }

    let roll = Math.floor(Math.random() * 76) + 1;
    while(rolledList.includes(roll)){
        roll = Math.floor(Math.random() * 76) + 1;
    }
    
    console.log(roll)
    rolledList.push(roll)
    io.emit('rolled_number', roll);
    
    console.log('Delaying 30s');   
    
    setTimeout(()=> game(io),delay);  
    
}

const setGameOver= (winner) => {
    winners.push(winner)
    gameOver = true;
}

const verify = (reqBody)=> {
    let board = reqBody.board;
    let user = reqBody.user;

    let truth = true;
    console.log(board)
    // rows
    for(let i = 0; i< 5; i++){
        for(let j = 0; j< 5; j++){
            if(!rolledList.includes(board[i][j])){
                truth = false;
            }
        }
        if(truth){
            console.log("Row "+ i)
            return true;
        }
        truth = true        
    }

    // cols
    for(let i = 0; i< 5; i++){
        for(let j = 0; j< 5; j++){
            if(!rolledList.includes(board[j][i])){
                truth = false;
            }
        }
        if(truth){
            console.log("Col "+ i)
            return true;
        }
        truth = true 
        
    }

    //diag1
    for(let i = 0; i < 5; i++){
        if( !rolledList.includes(board[i][i])){
            truth = false;
            break;
        }   
    }
    if(truth){
        console.log("diag left -> right")
        return true;
    }

    truth = true

    // diag2
    for(let i = 4; i>= 0; i--){
        if( !rolledList.includes(board[(i - 4) * -1][i])){
            truth = false;
            break;
        }
    }
    if(truth){
        console.log("diag right -> left")
        return true;
    }

    return false;
}

exports.verify = verify;
exports.game = game;
exports.setGameOver = setGameOver

