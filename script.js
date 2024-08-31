
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
      rows[0].every(isMatchedX)
  }

   function checkDraw(){};


   function gameOver(){};








   return {gameActive, currentPlayer, checkWin, checkDraw, gameOver};
})()

 // DOM Logic

 // display game array

 // add markers to DOM

 // Prevents picked DOM

 // start button

 // modal for prompt player name
 
   function winningPlayer(){
  if(row1[0]&& row1[1] && row1[2] === "X" ||
     row2[0]&& row2[1] && row2[2] === "X" ||
     row3[0]&& row3[1] && row3[2] === "X" ||
     row1[0]&& row2[1] && row3[2] === "X" ||
     row3[0]&& row2[1] && row1[2] === "X"
  ){
    console.log(`${playerOne.name} has won the game`)
    playerOne.score += 1;

  }else if (row1[0]&& row1[1] && row1[2] === "O" ||
            row2[0]&& row2[1] && row2[2] === "O" ||
            row3[0]&& row3[1] && row3[2] === "O" ||
            row1[0]&& row2[1] && row3[2] === "O" ||
            row3[0]&& row2[1] && row1[2] === "O"

         ){ console.log(`${playerTwo.name} has won the game`);
         playerTwo.score += 1;

           
   }

 return{ winningPlayer}
}



function playGame(){
   
    
    switchTurn(playerOne,playerTwo);
   
let token = Player.marker;
 let instance = row1|| row2|| row3;

  return function play (newState){
    newState = instance.push(token)
    return newState;
  }
instance.push(token);

playerOne.turn=true;
    console.log(`player has played ${x} in ${y}`)
    console.log(`${y = token}`)
}playGame()



function gameControl(){
 winningPlayer()

 if(Player.score ===1){
    row1().reset();
    row2().reset();
    row3().reset();

    playGame()
 }

  console.log ( Player.name )
}gameControl();