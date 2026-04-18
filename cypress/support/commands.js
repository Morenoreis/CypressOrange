const LoginPage = require('./LoginPage');

const loginPage = new LoginPage();

Cypress.Commands.add('loginViaFixture', () => {
  cy.fixture('users').then((users) => {
    loginPage.visit();
    loginPage.login(
      users.admin.username,
      users.admin.password
    );
    cy.url().should('include', '/dashboard');
  });
});