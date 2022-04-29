// we have a 4x4 board
let chessBoard = 
  [
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0]
  ]

// Possible solutions Counter
var counterAllSolutions = 0
// tree traversal 
var conflict = () => {
 //we need to iterate horizontal , vertical and diaginal minor and major
}

var nQueens = function(pieces, board, row){
    // base case 
    if(pieces === board.length){
      // the base case should be when you reach the length of the board 
      counterAllSolutions++
      return
    }
    for(let col = 0; col < board.length; col++){
      // we need to iterate over the array that represent the coloms
      // we need to toggle a piece 
      board[row][col] = 1
      // check if the current piece is conflict 
      // !! we need to create a function that will check if there is a comflict on the board 
      if(!error){
        // recurse down the tree moving into the next row 
        traversal(pieces+1, board, row+1)
      }
      // if there was a conflict untoggle the pice 
      board[row][col] = 0
    }
}

module.exports = nQueens