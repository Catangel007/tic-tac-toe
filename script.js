
console.log("tic-tac-toe");



 const gameBoard = (function (){
    
       const gameBoard = {
           
         rows: 3,
        columns: 3,
        board: [],

        getBoard: function (rows, columns,board){
             
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
          
        }

       
       }
       return { gameBoard}; 
    
 })();
 


const Player = (function(){

function Player (name, marker){
    this.name = name;
    this.marker= marker;
    this.turn= false;
    this.score = 0;
}

const playerOne = new Player( "howard", "X")
console.log("playerOne has the X marker");

const playerTwo = new Player("vera", "O")
console.log("playerTwo has the O marker")

    return{ playerOne, playerTwo, Player}
})();
   


const gameLogic = (function(){
    
 let gameActive = true;

  gameBoard.getBoard();
  Player.playerOne;
  Player.playerTwo;

  const currentPlayer = () => {
     for (let i = 0; i<10 ; i++){
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

        } else if ( letter === "O"){
          winner = true;
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
      if (gameBoard.board !== ''){
         draw = true;
         console.log("it's a draw")
      } 

      return draw;

   };


   function gameOver(){

    if(gameBoard.board.every( value => value !== '')){
      
      console.log("it's game-over")
   }





  }


   return {gameActive, currentPlayer, checkWin, checkDraw, gameOver};
})()

 // DOM Logic
 const tabs = document. querySelectorAll(".cell")
  const DisplayGame = {
       
    displayX : function(){

      tabs.addEventListener("click", ()=>{
        gameLogic.currentPlayer;
        gameLogic.gameActive;
        gameLogic.checkWin;
        gameLogic.checkDraw;
        gameLogic.gameOver;
      })
    }

    
  }
 // display game array

 // add markers to DOM

 // Prevents picked DOM

 // start button

 // modal for prompt player name
 
  