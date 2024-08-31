
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
                  [].push(j)
              }
          }

        }

       }
        
     
 })();
 gameBoard.row1();
    gameBoard.row2();
    gameBoard.row3();








const getPlayer = (function(){

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
   getPlayer.playerOne;
    getPlayer.playerTwo;
    getPlayer.Player;



// const displayController= (function(){

//  const allSquare = document .querySelectorAll(".cell");
//  allSquare.addeventlistener("click", ()=>{
//     allSquare.textContent = playerOne ? playerTwo:playerOne;
//  })

 
 function switchTurn(a, db){
 playerOne.turn === true ? console.log( `it is ${playerTwo.name}'s turn`): console.log( `it is ${playerOne.name}'s turn`);

 
 }
  

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