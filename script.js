
console.log("tic-tac-toc");

const gameBoard = (function (){
    let rows = 3;
    let columns = 3;
   
 const getBoard = {
 
    makeBoard : function(){
      let board = [];

         for (let i = 0; i < rows; i++){
             board[i] = [];
         console.log(i)
               for(let n = 0; n < columns; n++){
               board[i][n] = null;
                    console.log(board[i][n]);
               }
      
              }    
              return board; 
    },
   
  };

  console.log("end of IIFE");

return {getBoard:getBoard};

})()

const board = gameBoard.getBoard.makeBoard();
console.log(board);



class Player {
 constructor(name, marker){
    this.name = name;
    this.marker = marker;
    this.turn = false;
    this.score = 0;
 }

 switchTurn(){
  let nextPlayer = "X";
   
  nextPlayer = nextPlayer === "X" ? "0": "X";

  return nextPlayer
 }

 makeMove(){
  for(let m = 1; m <= 9; m--){
    this.turn = true;
    let moves = this.marker;
    board = moves ;
    console.log(board[0][0]= moves)
    this.switchTurn
    
  }

  
 }
}

const playerOne = new Player("Miracle","X");
const playerTwo = new Player("Purity","O");

function playGame(position){
 playerOne.makeMove();
if(console.log("Game Start!")){
  playerOne.turn = true;
  console.log (`${playerOne.name} it your turn to play.`);
}

}playGame();