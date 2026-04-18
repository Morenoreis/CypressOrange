const LoginPage = require('../support/LoginPage.js');
const DashboardPage = require('../support/DashboardPage.js');

describe('Logout - OrangeHRM', () => {

  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Cannot read properties of undefined')) {
      return false;
    }
  });

  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  it('Deve realizar logout com sucesso e retornar para a tela de login', () => {
    cy.fixture('users').then((users) => {
      loginPage.visit();
      loginPage.login(
        users.admin.username,
        users.admin.password
      );
    });

    cy.url().should('include', '/dashboard');
    dashboardPage.validateDashboardIsVisible();

    dashboardPage.logout();

    cy.url().should('include', '/auth/login');
    cy.contains('Login').should('be.visible');
  });
});