'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const logic = require('./logic')

const onStartGame = (event) => {
  event.preventDefault()
  logic.playerTurn = 0
  const data = getFormFields(event.target)
  // console.log(data)
  api.startGame(data)
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}
const onFindGames = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.findGames(data)
    .then(ui.onFindGamesSuccess)
    .catch(ui.onFindGamesFailure)
}
const onUpdateGame = (id, value) => {
  // // console.log('hello')
  api.updateGame(id, value)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

module.exports = {
  onStartGame,
  onFindGames,
  onUpdateGame
}
