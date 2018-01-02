var prompt = require('prompt');

var playerOne = '1'
var playerTwo = '2'
var currentPlayer = '1'

var board = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
}

function printBoard() {
  console.log(` ${board[1]}  | ${board[2]} |  ${board[3]}\n` + `______________\n` + 
  ` ${board[4]}  | ${board[5]} |  ${board[6]}\n` + `______________\n` + 
  ` ${board[7]}  | ${board[8]} |  ${board[9]}\n`)
}

function togglePlayer() {
  if (currentPlayer === '1') {
    currentPlayer = '2'
  } else {
    currentPlayer = '1'
  }
}

prompt.start();
printBoard();
prompt.get(['number'])


//put this in the game function later 
// printBoard();

//need next turn function that alternates 