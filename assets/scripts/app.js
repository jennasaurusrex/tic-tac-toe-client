'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const gameLogic = require('./game/logic')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#signOutButton').on('click', authEvents.onSignOut)

  $('#start-game').on('click', gameEvents.onStartGame)
  $('#index-game').on('click', gameEvents.onFindGames)
  $('.box').on('click', gameEvents.onUpdateGame)

  $('#cell1').on('click', function () { gameLogic.onClick('#cell1', 0) })
  $('#cell2').on('click', function () { gameLogic.onClick('#cell2', 1) })
  $('#cell3').on('click', function () { gameLogic.onClick('#cell3', 2) })
  $('#cell4').on('click', function () { gameLogic.onClick('#cell4', 3) })
  $('#cell5').on('click', function () { gameLogic.onClick('#cell5', 4) })
  $('#cell6').on('click', function () { gameLogic.onClick('#cell6', 5) })
  $('#cell7').on('click', function () { gameLogic.onClick('#cell7', 6) })
  $('#cell8').on('click', function () { gameLogic.onClick('#cell8', 7) })
  $('#cell9').on('click', function () { gameLogic.onClick('#cell9', 8) })
})
