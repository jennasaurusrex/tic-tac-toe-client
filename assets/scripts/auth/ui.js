'use strict'
const store = require('../store')

const onSignUpSuccess = (response) => {
  console.log(response)
  $('#user-message').text('Successfully signed up').css('color', 'black')
}
const onSignInSuccess = (response) => {
  $('#user-message').text(`Successfully signed ${response.user.email} in`).css('color', 'black')
  store.user = response.user
  console.log(store)
}
const onChangePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password!').css('color', 'black')
}
const onSignOutSuccess = () => {
  $('#user-message').text('Successfully signed out.').css('color', 'black')
  store.user = null
}
const onFailure = (response) => {
  console.log(response)
  $('#user-message').text('Something went wrong. Try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onFailure
}
