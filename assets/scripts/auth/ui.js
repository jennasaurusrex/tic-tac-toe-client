'use strict'
const store = require('../store')

const onSignUpSuccess = (response) => {
  $('#user-message').text('Successfully signed up')
}
const onSignUpFailure = (response) => {
  $('#user-message').text('Error signing up. Try again.')
}
const onSignInSuccess = (response) => {
  $('#user-message').text(`Welcome back, ${response.user.email}!`)
  store.user = response.user
  $('#changePasswordButton').removeClass('hide')
  $('#signOutButton').removeClass('hide')
  $('#signInButton').addClass('hide')
  $('#signUpButton').addClass('hide')
  $('#start-game').removeClass('hide')
  $('#index-game').removeClass('hide')
  store.turn = 0
}
const onSignInFailure = (response) => {
  $('#user-message').text('Error signing in. Try again.')
}
const onChangePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password.')
}
const onChangePasswordFailure = (response) => {
  $('#user-message').text('Could not change password. Try again.')
}
const onSignOutSuccess = () => {
  $('#user-message').text('Successfully signed out.')
  store.user = null
  $('#signInButton').removeClass('hide')
  $('#signUpButton').removeClass('hide')
  $('#changePasswordButton').addClass('hide')
  $('#signOutButton').addClass('hide')
  $('#start-game').addClass('hide')
  $('#index-game').addClass('hide')
  $('#game-board').addClass('hide')
  store.turn = 0
}
const onSignOutFailure = (response) => {
  $('#user-message').text('Error signing out. Try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onSignUpFailure,
  onSignInFailure,
  onChangePasswordFailure,
  onSignOutFailure
}
