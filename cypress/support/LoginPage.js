class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get('.oxd-alert-content-text'),
  }

  visit() {
    cy.visit('/auth/login')
  }

  fillUsername(username) {
    this.elements.usernameInput().clear()
    if (username) {
      this.elements.usernameInput().type(username)
    }
  }

  fillPassword(password) {
    this.elements.passwordInput().clear()
    if (password) {
      this.elements.passwordInput().type(password)
    }
  }

  submitLogin() {
    this.elements.loginButton().click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submitLogin()
  }

  getErrorMessage() {
    return this.elements.errorMessage()
  }
}

module.exports = LoginPage