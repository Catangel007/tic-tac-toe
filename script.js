
console.log("tic-tac-toc");


const gameBoard = (function (){
    
   const game = {
    

 getBoard: () => {

      const rows =3;
      const columns = 3;
      let board = [];

   for (let i = 0; i < rows; i++){
       board[i] = []; 
       for(let j = 0; j < columns; j++){
          board[i].push(cell())
       }
   }
   function cell (){
      let value = "";
     
      return value;
   }
    return game.getBoard;

 },
};

return { game };

})()
 
const board = gameBoard.game.getBoard();
console.log(board());



const Player = (function(){
function Player (name, marker){
    this.name = name;
    this.marker= marker;
    this.turn= false;
    this.score = 0;
}

const playerOne = new Player( "howard", "X")
const playerTwo = new Player("vera", "O")


    return{ playerOne, playerTwo, Player}
})();
   
const playerOne = Player.playerOne;
const playerTwo = Player.playerTwo;

console.log(`${playerOne.name} has the X marker`);
console.log(`${playerTwo.name} has the X marker`);

const gameLogic = (function(){
    
 let gameActive = true;

  gameBoard.getBoard;
   Player.playerOne;
   Player.playerTwo;

  const currentPlayer = () => {
     for (let i = 0; i < 10 ; i++){
    if(playerOne.turn === true){
       playerTwo.turn = false;
       value= playerOne.marker;
       rows[columns]= value;

    } else {
      playerOne.turn = false;
      value = playerTwo.marker;
       rows[columns]= value;
    };
  }
  }

  function checkWin (){
      let winner = false;

      function isMatchedX (){
        let letter = rows[columns];
        if (letter === "X"){
          winner = true;
          console.log(`${playerOne.name} has won the Game!`)

        } else if ( letter === "O"){
          winner = true;
          console.log(`${playerTwo.name} has won the Game!`)

        }
        else {
          winner = false;
        }

        
      }
      board[rows[0]].every(isMatchedX);
      board[rows[1]].every(isMatchedX);
      board[rows[2]].every(isMatchedX);
      board[0].every(isMatchedX);
      board[1].every(isMatchedX);
      board[2].every(isMatchedX);
      board[0][2] && board[1][1]&& board[2][0].every(isMatchedX);
      board[0][0] && board[1][1]&& board[2][2].every(isMatchedX);
      
    return winner;
  }

   function checkDraw(){
     let draw= false;
      if (gameBoard.board !== ""){
         draw = true;
         console.log("it's a draw")
      } 

      return draw;

   };


   function gameOver(){

    if(gameBoard.board.every( value => value !== "")){
      
      console.log("it's game-over");
    }
  }
  return {gameActive, currentPlayer, checkWin, checkDraw, gameOver};
})()





 // DOM Logic
 let tabs = document.querySelectorAll(".cell");
    displayGame = {
       
      displayX : function(){
       if (tabs.textContent !== ""){ 
        tabs.addEventListener("click", ()=>{
          tabs.textContent = gameLogic.currentPlayer;
           gameLogic.gameActive;
           gameLogic.checkWin;
           gameLogic.checkDraw;
           gameLogic.gameOver;

         });
     } else {
       tabs.textContent === gameLogic.currentPlayer;
     }
     }
 
  
   };
   displayGame.displayX

 // display game array

 // add markers to DOM

 // Prevents picked DOM

 // start button

 // modal for prompt player name
 
  