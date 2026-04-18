class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get('.oxd-alert-content-text'),
  };

  visit() {
    cy.visit('/auth/login');
  }

  fillUsername(usuario) {
    this.elements.usernameInput().clear().type(usuario);
  }

  fillPassword(senha) {
    this.elements.passwordInput().clear().type(senha);
  }

  submitLogin() {
    this.elements.loginButton().click();
  }

  login(usuario, senha) {
    this.fillUsername(usuario);
    this.fillPassword(senha);
    this.submitLogin();
  }

  getErrorMessage() {
    return this.elements.errorMessage();
  }
}

module.exports = LoginPage;