let rolledList = ['Free']

const game = ()=> {
    for(let i = 1; i <76; i++ ){
        rolledList.push(i);
    }
    console.log(rolledList)
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

