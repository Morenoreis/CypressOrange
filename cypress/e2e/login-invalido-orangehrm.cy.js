const LoginPage = require('../support/LoginPage.js');

describe('Login inválido - OrangeHRM', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Deve exibir mensagem de credenciais inválidas', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(
        users.invalidUser.username,   // Admin
        users.invalidUser.password    // senha_errada
      );
    });

    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Invalid credentials');
  });

});