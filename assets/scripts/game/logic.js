'use strict'
const events = require('./events')
const store = require('../store')

let cells = ['', '', '', '', '', '', '', '', '']
let playerTurn = 0
const turnCount = () => {
  playerTurn += 1
  checkForWinner()
}

const endGame = () => {
  store.game.over = true
  playerTurn = 0
  cells = ['', '', '', '', '', '', '', '', '']
  return $('#user-message').append(' Game Over!')
}

const checkPlayer = (player) => {
  if (player === 'X') {
    $('#user-message').text('Player 1 Wins!')
    endGame()
  } else if (player === 'O') {
    $('#user-message').text('Player 2 Wins!')
    endGame()
  }
}

const checkForWinner = () => {
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
  } else if (cells.every((cell) => { return cell !== '' })) {
  // (!cells.some('')) {
    $('#user-message').text('Tie Game!')
    endGame()
  }
}

const onClick = (id, cellId) => {
  if (store.game.over === true) {
    return $('#user-message').text('Click Start Game to begin a new game.')
  } else if ($(id).is(":contains('X')") || $(id).is(":contains('O')")) {
    $('#user-message').text('Please choose an empty cell!')
  } else if (playerTurn % 2 === 0) {
    $(id).html('<p>X</p>')
    $('#user-message').text('Player 2s turn')
    cells.splice(cellId, 1, 'X')
    // // console.log(cells)
    events.onUpdateGame(cellId, 'X')
    turnCount()
  } else if (playerTurn % 2 === 1) {
    $(id).html('<p>O</p>')
    $('#user-message').text('Player 1s turn')
    cells.splice(cellId, 1, 'O')
    events.onUpdateGame(cellId, 'O')
    turnCount()
  }
}

module.exports = {
  onClick,
  checkForWinner,
  endGame
}
