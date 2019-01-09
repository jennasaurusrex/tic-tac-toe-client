'use strict'
const events = require('./events')
const store = require('../store')

store.turn = 0

let cells = ['', '', '', '', '', '', '', '', '']

const turnCount = () => {
  store.turn += 1
  if (store.turn >= 5) {
    checkForWinner()
  }
}

const endGame = () => {
  store.game.over = true
  store.turn = 0
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
  } else if (cells[3] === cells[4] && cells[4] === cells[5] && cells[3] !== '') {
    checkPlayer(cells[3])
  } else if (cells[6] === cells[7] && cells[7] === cells[8] && cells[6] !== '') {
    checkPlayer(cells[6])
  } else if (cells[0] === cells[3] && cells[3] === cells[6] && cells[0] !== '') {
    checkPlayer(cells[0])
  } else if (cells[1] === cells[4] && cells[4] === cells[7] && cells[1] !== '') {
    checkPlayer(cells[1])
  } else if (cells[2] === cells[5] && cells[5] === cells[8] && cells[2] !== '') {
    checkPlayer(cells[2])
  } else if (cells[0] === cells[4] && cells[4] === cells[8] && cells[0] !== '') {
    checkPlayer(cells[0])
  } else if (cells[2] === cells[4] && cells[4] === cells[6] && cells[2] !== '') {
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
  } else if (store.turn % 2 === 0) {
    $(id).html('<p class="xo">X</p>')
    $('#user-message').text('Player 2s turn')
    cells.splice(cellId, 1, 'X')
    // // console.log(cells)
    events.onUpdateGame(cellId, 'X')
    turnCount()
  } else if (store.turn % 2 === 1) {
    $(id).html('<p class="xo">O</p>')
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
