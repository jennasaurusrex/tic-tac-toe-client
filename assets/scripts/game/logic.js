'use strict'
const events = require('./events')
const store = require('../store')

let playerTurn = 0
const turnCount = () => {
  playerTurn += 1
}

const onResetBoard = function () {
  $('#user-message').text('')
  $(' ').replaceAll('p')
  playerTurn = 0
  store.game.cells = ['', '', '', '', '', '', '', '', '']
}

const checkPlayer = (player) => {
  if (player === 'X') {
    $('#user-message').text('Player 1 Wins!')
  } else if (player === 'O') {
    $('#user-message').text('Player 2 Wins!')
  }
}

const checkForEnd = () => {
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2]) {
    checkPlayer(store.game.cells[0])
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
    checkPlayer(store.game.cells[3])
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
    checkPlayer(store.game.cells[6])
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
    checkPlayer(store.game.cells[0])
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
    checkPlayer(store.game.cells[1])
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
    checkPlayer(store.game.cells[2])
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
    checkPlayer(store.game.cells[0])
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
    checkPlayer(store.game.cells[2])
  } else if (!store.game.cells.some('')) {
    $('#user-message').text('Tie Game! Play again?')
  }
}

const onClick = (id, cellId) => {
  if ($(id).is(":contains('X')") || $(id).is(":contains('O')")) {
    $('#user-message').text('Please choose an empty cell!')
  } else if (playerTurn % 2 === 0) {
    $(id).append('<p>X</p>')
    store.game.cells.splice(cellId, 1, 'X')
    console.log(store.game.cells)
    checkForEnd()
    events.onUpdateGame(cellId, 'X')
    turnCount()
    $('#user-message').text('Player 2s turn')
  } else if (playerTurn % 2 === 1) {
    $(id).append('<p>O</p>')
    store.game.cells.splice(cellId, 1, 'O')
    $('#user-message').text('Player 1s turn')
    checkForEnd()
    events.onUpdateGame(cellId, 'O')
    turnCount()
  }
}

module.exports = {
  onClick,
  checkForEnd,
  onResetBoard
}
