const LoginPage = require('../support/LoginPage.js');
const SideMenuPage = require('../support/SideMenuPage.js');

describe('Menu lateral - OrangeHRM', () => {

  const loginPage = new LoginPage();
  const sideMenuPage = new SideMenuPage();

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage.visit();
      loginPage.login(
        users.admin.username,
        users.admin.password
      );
    });

    cy.url().should('include', '/dashboard');
  });

  it('Deve exibir os principais itens do menu lateral', () => {
    sideMenuPage.validateMenuIsVisible();

    sideMenuPage.validateMenuItemVisible('Admin');
    sideMenuPage.validateMenuItemVisible('PIM');
    sideMenuPage.validateMenuItemVisible('Leave');
    sideMenuPage.validateMenuItemVisible('Time');
    sideMenuPage.validateMenuItemVisible('Recruitment');
  });

  it('Deve navegar para o módulo Admin via menu lateral', () => {
    sideMenuPage.clickMenu('Admin');
    cy.url().should('include', '/admin');
  });

  it('Deve navegar para o módulo PIM via menu lateral', () => {
    sideMenuPage.clickMenu('PIM');
    cy.url().should('include', '/pim');
  });

});
