
console.log("tic-tac-toc");

const gameBoard = (function (){
    let rows = 3;
    let columns = 3;
   
 const getBoard = {
 
    makeBoard : function(){
      let board = [];

         for (let i = 0; i < rows; i++){
             board[i] = [];
         
               for(let n = 0; n < columns; n++){
               board[i][n] = null;
                  
               }
      
              }    
              return board; 
    },
   
  };


return {getBoard:getBoard};

})()

const board = gameBoard.getBoard.makeBoard();
console.log(board);


const playerContainer = (function(){


class Player {
 constructor(name, marker){
    this.name = name;
    this.marker = marker;
    this.turn = false;
    this.score = 0;
 }
// i thought i would add some methods to this class , I need to a refresher on the syntax laws;

switchTurn = () => {
  let nextPlayer = playerOne.marker;
   if (playerOne.makeMove){
  nextPlayer = playerTwo.marker
} else {
  nextPlayer = playerOne.marker;
}
  return nextPlayer
 }


 makeMove =() => {
  for(let m = 1; m <= 9; m--){
    this.turn = true;
    let moves = this.marker;
    board = moves ;
    console.log(board[0][0]= moves)
    this.switchTurn
    
  }
 }
} 

return {Player,makeMove, switchTurn }

})()

const playerOne = new Player("Miracle","X");
const playerTwo = new Player("Purity","O");

function playGame(position){
 playerOne.makeMove();
if(console.log("Game Start!")){
  playerOne.turn = true;
  console.log (`${playerOne.name} it your turn to play.`);
}


}playGame();




 const gameOver = function (){
 
   const boardArray = board. filter((letter)=>{ 
    let letters = board.textContent;
     if (board.forEach( letters ==="X"||letters === "O" && letters !== null)){
      console.log("GameOver");
      const gameMessage = `${winner} with ${winner.score} wins this round`;
     }
     else {
      gameMessage =  `it's ${nextPlayer}'s turn to play next`
     }

   })




 }