
console.log("tic-tac-toc");

//Draw game board
const gameBoard = (function (){
    
   const game = {
    

 getBoard: () => {

      const rows =3;
      const columns = 3;
      let board = [['1','2','3'],
                   ['4','5','6'],
                   ['7','8','9']];


                   
                   console.log(board[0][0]);
                   console.log(board[0][1]);
                   console.log(board[0][2]);
                   console.log(board[1][0]);
                   console.log(board[1][1]);
                   console.log(board[1][2]);
                   console.log(board[2][0]);
                   console.log(board[2][1]);
                   console.log(board[2][2]);
                   
   
    return game.getBoard, board,rows,columns ;

 },
};

return { game };

})()
 



// get Player objects
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
   
const board = gameBoard.game.getBoard();
 const playerOne = Player.playerOne;
 const playerTwo = Player.playerTwo;





// game logic
const gameLogic = (function(){
    
 let gameActive = false;

 console.log(`${playerOne.name} has the X marker`);
 console.log(`${playerTwo.name} has the X marker`);
 
 function currentPlayer (){
    console.log (`whose turn is it`);
     for (let i = 0; i < 10 ; i++){
    if(playerOne.turn === true){
      
       playerTwo.turn = false;
       board.cell= playerOne.marker;
       board.rows[columns]= value;

    } else {
      playerOne.turn = false;
      value = playerTwo.marker;
       rows[columns]= value;
    };
  }
  }

   function checkWin (){
      let winner = false;

  
      if (board[0][0]&& board[0][1]&&board[0][2]  === 'X' ||
          board[1][0]&& board[1][1]&&board[1][2]  === 'X' ||
          board[2][0]&& board[2][1]&&board[2][2]  === 'X' ||
          board[0][0]&& board[1][1]&&board[2][2]  === 'X' ||
          board[2][0]&& board[1][1]&&board[0][2]  === 'X' 
      ){   console.log(`${playerOne.name} has won the Game!`)
        winner = true;

      }else if (board[0][0]&& board[0][1]&&board[0][2]  === 'O' ||
                board[1][0]&& board[1][1]&&board[1][2]  === 'O' ||
                board[2][0]&& board[2][1]&&board[2][2]  === 'O' ||
                board[0][0]&& board[1][1]&&board[2][2]  === 'O' ||
                board[2][0]&& board[1][1]&&board[0][2]  === 'O' ){
                  console.log(`${playerTwo.name} has won the Game!`)
                  winner = true;
                } 
                else{
                  winner=false;
                }
      
    return winner;
  }

   function checkDraw(){
     let draw= false;
      if (gameBoard.board !== ""){
         draw = true;
         console.log("it's a draw");
         console.log("try again")
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

// Set up start Game
const startBtn = document. querySelector("button");
 startBtn.addEventListener("click",()=>{
  console.log("you clicked start btn")
   
   const currentPlayer=gameLogic.currentPlayer;
   const gameOver= gameLogic.gameOver;
   const checkWin= gameLogic.checkWin;
   const checkDraw =gameLogic.checkDraw;
   let active = gameLogic.gameActive;
   playerOne.turn= true;
   active = true;
   

 })



 // DOM Logic
 let tabs = document.querySelectorAll(".cell");
    displayGame = {
       
      displayX : function(){
        tabs.addEventListener("click", ()=>{
       if (tabs.textContent == ""){ 
         tabs.textContent = gameLogic.currentPlayer;
         currentPlayer()
         gameOver()
         checkWin();
         checkDraw();
         
     } else {
       tabs.textContent === gameLogic.currentPlayer;
     }

    
     })
 
   
   }};
   
   displayGame.display = function (){
     return this.displayX;
   }
displayGame.display()

 // display game array

 // add markers to DOM

 // Prevents picked DOM

 // start button
 
 // modal for prompt player name
 
  