'use strict'
const config = require('../config')
const store = require('../store')

const startGame = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const findGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = (id, value) => {
  console.log('store.game is: ', store.game)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify({
      'game': {
        'cell': {
          'index': id,
          'value': value
        },
        over: false
      }
    })
  })
}

module.exports = {
  startGame,
  findGames,
  updateGame
}
