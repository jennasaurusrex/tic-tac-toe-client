'use strict'
const store = require('../store')

const onStartGameSuccess = (response) => {
  $('#user-message').text('Successfully created a new game. Player ones turn.')
  const gameData = response.game
  const cells = gameData.cells
  for (let i = 0; i < cells.length; i++) {
    const cellId = 'cell' + i.toString()
    $(cellId).text = cells[i]
  }
  store.game = response.game
  // console.log('store is', store)
}
const onStartGameFailure = (response) => {
  console.log('response is' + response)
  $('#user-message').text('Error creating a game.')
}
const onFindGamesSuccess = (response) => {
  $('#user-message').text(`Game Plays: ${response.games.length}`)
}
const onFindGamesFailure = (response) => {
  console.log('response is' + response)
  $('#user-message').text('Error finding games.')
}
const onUpdateGameSuccess = (response) => {
  console.log('response is: ', response)
  store.game = response.game
  console.log('store is ', store.game)
}
const onUpdateGameFailure = (response) => {
  console.log('response is: ', response)
  $('#user-message').text('Error updating game.')
}

module.exports = {
  onStartGameSuccess,
  onStartGameFailure,
  onFindGamesSuccess,
  onFindGamesFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
