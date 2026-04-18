const LoginPage = require('../support/LoginPage.js');

describe('Login OrangeHRM', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Deve realizar login com sucesso e parar no Dashboard', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(
        users.admin.username,
        users.admin.password
      );
    });

    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });

});
