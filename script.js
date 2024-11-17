
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


return {getBoard:getBoard};
console.log("end of iife");

})()

const board = gameBoard.getBoard.makeBoard();
console.log(board);