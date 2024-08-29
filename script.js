


const gameBoard = (function (){
    
    
      const row1 = [null,null,null];
      const row2 = [null,null,null];
      const row3 = [null,null,null];
     
  
})()
;

const gamePieces = ["X", "O"];

const {playerOne, playerTwo}= gamePieces;
function Player (name, marker){
    this.name = name;
    this.marker= marker;
    this.turn= false;
    this.score = 0;
}

playerOne = new Player( prompt.value, "X")
console.log("playerOne has the X marker");

playerTwo = new Player(prompt.value, "0")
console.log("playerTwo has the O marker")

// const displayController= (function(){

//  const allSquare = document .querySelectorAll(".cell");
//  allSquare.addeventlistener("click", ()=>{
//     allSquare.textContent = playerOne ? playerTwo:playerOne;
//  })
 
 function switchTurn(){

 }
  

   function winningPlayer(){
  if(row1[0]&& row1[1] && row1[2] === "X" ||
    row2[0]&& row2[1] && row2[2] === "X" ||
    row3[0]&& row3[1] && row3[2] === "X" ||
    row1[0]&& row2[1] && row3[2] === "X" ||
    row3[0]&& row2[1] && row1[2] === "X"
  ){
    alert (`${playerOne.name} has won the game`);

  }else if (row1[0]&& row1[1] && row1[2] === "O" ||
    row2[0]&& row2[1] && row2[2] === "O" ||
    row3[0]&& row3[1] && row3[2] === "O" ||
    row1[0]&& row2[1] && row3[2] === "O" ||
    row3[0]&& row2[1] && row1[2] === "O"

         ){ alert(`${playerTwo.name} has won the game`);

            return winningPlayer;
   }

 return{ allSquare, winningPlayer}
}winningPlayer()

console.log(allSquare,);

playerOne={
    nam
}