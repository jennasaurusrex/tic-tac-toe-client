'use strict'
const html = require('../../../index.html')
const store = require('./store')

const gameBoard = ['', '', '', '', '', '', '', '', '']
const currentPlayer = [playerX, playerO]
const playerX = 'x'
const playerO = 'o'

const checkForWinner = () => {
  $('#user-message').text('Checking for winner...')
  if (store.game.isOver === true) {
    if (gameBoard === true && currentPlayer === playerX) {
      console.log('Player 1 wins!')
    } else if (gameBoard === true && currentPlayer === playerO) {
      console.log('Player 2 wins!')
    }
  } else {
    $('#user-message').text('Next player turn.')
  }
}
