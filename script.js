


const gameBoard = (function (){
    
    const columns = 3;
    const rows = 3;
    const board = [];

// creation of a 2d array
    for (let i = 0; i < rows; i++){
        board[i]=[];
        for(let j= 0; j < columns; i++){
            board[i].push(cell());
        }
    }

    const getBoard = board;

    const gamePieces=["X","O"]
   
    const {playerOne, playerTwo}= gamePieces;
    

  return{getBoard, playerOne, playerTwo}
})()
;


const displayController= (function(){

 const allSquare = document .querySelectorAll(".cell");
 allSquare.addeventlistener("click", ()=>{
    allSquare.textContent = playerOne ? playerTwo:playerOne;
 })
 
 const square1 = document.querySelector(".cell1");
 const square2 = document.querySelector(".cell2");
 const square3 = document.querySelector(".cell3");
 const square4 = document.querySelector(".cell4");
 const square5 = document.querySelector(".cell5");
 const square6 = document.querySelector(".cell6");
 const square7 = document.querySelector(".cell7");
 const square8 = document.querySelector(".cell8");
 const square9 = document.querySelector(".cell9");
  

   function winningPlayer(){
  if(square1&& square2&& square3 === "x" ||
    square3 && square4 && square5 === "x" ||
    square6 && square7 && square9 === "x" ||
    square1 && square4 && square9 === "x" ||
    square6 && square4 && square3 === "x"
  ){
    alert ("PlayerOne has won the game")
  }else if (square1&& square2&& square3 === "o" ||
               square3 && square4 && square5 === "o" ||
               square6 && square7 && square9 === "o" ||
               square1 && square4 && square9 === "o" ||
               square6 && square4 && square3 === "o"

         ){ alert("PlayerTwo has won the game");
   }

 return{ allSquare}
}
})()

console.log(allSquare);

playerOne={
    nam
}