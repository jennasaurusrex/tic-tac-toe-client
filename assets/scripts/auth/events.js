'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onFailure)

  $('form').trigger('reset')
}

const onSignIn = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)

  $('form').trigger('reset')
}

const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onFailure)

  $('form').trigger('reset')
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)

  $('form').trigger('reset')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
