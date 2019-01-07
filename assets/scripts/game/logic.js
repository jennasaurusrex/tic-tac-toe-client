'use strict'

let cells = ['', '', '', '', '', '', '', '', '']

let turn = 0
const turnCount = function () {
  turn += 1
  console.log(turn)
}
console.log(turn)
// Reset Board

const onResetBoard = function () {
  $('#user-message').text('')
  $(' ').replaceAll('p')
  turn = 0
  cells = ['', '', '', '', '', '', '', '', '']
}

// Game logic
const checkPlayer = function (winner) {
  if (winner === 'X') {
    $('#win-message').text('Player 1 Wins!')
    onResetBoard()
  } else if (winner === 'O') {
    $('#win-message').text('Player 2 Wins!')
    onResetBoard()
  }
}

const checkForWin = function () {
  if (cells[0] === cells[1] && cells[1] === cells[2]) {
    checkPlayer(cells[0])
  } else if (cells[3] === cells[4] && cells[4] === cells[5]) {
    checkPlayer(cells[3])
  } else if (cells[6] === cells[7] && cells[7] === cells[8]) {
    checkPlayer(cells[6])
  } else if (cells[0] === cells[3] && cells[3] === cells[6]) {
    checkPlayer(cells[0])
  } else if (cells[1] === cells[4] && cells[4] === cells[7]) {
    checkPlayer(cells[1])
  } else if (cells[2] === cells[5] && cells[5] === cells[8]) {
    checkPlayer(cells[2])
  } else if (cells[0] === cells[4] && cells[4] === cells[8]) {
    checkPlayer(cells[0])
  } else if (cells[2] === cells[4] && cells[4] === cells[6]) {
    checkPlayer(cells[2])
  }
}

const onClick = function (id, cellNum) {
  $('#win-message').text('')
  // prevent occupied cell from being changed
  if ($(id).is(":contains('X')") || $(id).is(":contains('O')")) {
    return $('#user-message').text('Please choose an empty cell!')
    // turns alternate player
  } else if (turn % 2 === 0) {
    $(id).append('<p>X</p>')
    // Add player indentifier to correct cell space
    cells.splice(cellNum, 1, 'X')
    turnCount()
    checkForWin()
    $('#user-message').text('Player 2\'s turn')
  } else if (turn % 2 === 1) {
    $(id).append('<p>O</p>')
    cells.splice(cellNum, 1, 'O')
    console.log(cells)
    turnCount()
    $('#user-message').text('Player 1\'s turn')

    checkForWin()
  }
}

module.exports = {
  onClick,
  checkForWin,
  onResetBoard
}
