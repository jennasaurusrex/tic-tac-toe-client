'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#signOutButton').on('click', authEvents.onSignOut)

  $('#start-game').on('click', gameEvents.onStartGame)
  $('#index-game').on('click', gameEvents.onFindGames)
  $('.box').on('click', gameEvents.onUpdateGame)
})
