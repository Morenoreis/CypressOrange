const LoginPage = require('../support/LoginPage.js');

describe('Login com campos em branco - OrangeHRM', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Deve exibir mensagem Required nos campos obrigatórios', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(
        users.emptyUser.username,
        users.emptyUser.password
      );
    });

    cy.get('.oxd-input-field-error-message')
      .should('have.length.at.least', 2)
      .each(($el) => {
        expect($el.text()).to.eq('Required');
      });

    cy.url().should('include', '/auth/login');
  });

});
