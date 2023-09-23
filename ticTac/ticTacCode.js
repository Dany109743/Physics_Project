let buttons = document.querySelectorAll(".btnOption");
let board = [ "", "", "", "", "", "", "", "", ""];
let message = document.getElementById("message");
let screen2 = document.querySelector(".screen2");
let restart = document.getElementById("restart").addEventListener("click", restartFunction);
let user1 = document.querySelector(".user1");
let user2 = document.querySelector(".user2");
let count1 = 0;
let count2 = 0;
let turn = document.querySelector(".turn")

let currentPlayer = "X";
let gameOver = false;
//  Creacion de funciones

for (let i = 0; i < buttons.length; i++){
    let btn = buttons[i];
    btn.addEventListener("click", function(){
        main(btn);
    });
}

function main(btn){
    btn.innerHTML = currentPlayer;
    board[btn.id - 1] = currentPlayer;
    check();
    changePlayer();
}

function changePlayer(){
    if(currentPlayer == "O"){
        currentPlayer = "X";
    } else{
        currentPlayer = "O";
    }
    turn.innerHTML = `Turn: ${currentPlayer}`;
}

function check(){
    checkHorizontal();
    checkVertical();
    checkDiagonal();
    checkDraw();
}

function checkHorizontal(){
    if (allEqual([board[0], board[1], board[2], currentPlayer])){
        message.innerHTML = currentPlayer+" Won";
        screen2.classList.remove("hide");
        highSocre();
        gameOver = true;
    
    }  else if(allEqual([board[3], board[4], board[5], currentPlayer])){
        message.innerHTML = currentPlayer+" Won";
        screen2.classList.remove("hide");
        highSocre();
        gameOver = true;
    
    }  else if(allEqual([board[6], board[7], board[8], currentPlayer])){
        message.innerHTML = currentPlayer+" Won";
        screen2.classList.remove("hide");
        highSocre();
        gameOver = true;
    }
}



function checkVertical(){
    if (allEqual([board[0], board[3], board[6], currentPlayer])){
        message.innerHTML = currentPlayer+" Won";
        screen2.classList.remove("hide");
        highSocre();
        gameOver = true;
    
    }  else if(allEqual([board[1], board[4], board[7], currentPlayer])){
        message.innerHTML = currentPlayer+" Won";
        screen2.classList.remove("hide");
        highSocre();
        gameOver = true;
    
    }  else if(allEqual([board[2], board[5], board[8], currentPlayer])){
        message.innerHTML = currentPlayer+" Won";
        screen2.classList.remove("hide");
        highSocre();
        gameOver = true;
    }
}


function checkDiagonal(){
    if (allEqual([board[0], board[4], board[8], currentPlayer])){
        message.innerHTML = currentPlayer+" Won";
        screen2.classList.remove("hide");
        highSocre();
        gameOver = true;
    
    }  else if(allEqual([board[2], board[4], board[6], currentPlayer])){
        message.innerHTML = currentPlayer+" Won";
        screen2.classList.remove("hide");
        highSocre();
        gameOver = true;
    } 
}

function checkDraw(){
    let checkIfExsist = board.includes("");
    if (allEqual(board) == false && checkIfExsist == false) {
        if(gameOver != true){
             message.innerHTML = "Draw";
             screen2.classList.remove("hide");
             gameOver = true;
        }        
    }
}


function allEqual(array){
    const result = array.every(element => {
        if (element === array[0]) {
            return true;
        }
    });
    return result;
}

function restartFunction(){
    screen2.classList.add("hide");
    for (let i = 0; i<buttons.length; i++) {
        buttons[i].innerHTML = "";
        board[i] = "";
    }
    gameOver= false;
}


function highSocre(){
    if(currentPlayer == "O"){
        count1 +=1;
        user1.innerHTML = `Player O: ${count1}`;
    } else {
        count2 += 1;
        user2.innerHTML = `Player X: ${count2}`;
    }
}