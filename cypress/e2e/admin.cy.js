const SideMenuPage = require('../support/SideMenuPage');
const AdminPage = require('../support/AdminPage');

describe('Admin - User Management', () => {

  const sideMenuPage = new SideMenuPage();
  const adminPage = new AdminPage();

  beforeEach(() => {
    cy.loginViaFixture();
    sideMenuPage.clickMenu('Admin');
    cy.url().should('include', '/admin');
  });

  it('Deve acessar o módulo Admin e validar título da página', () => {
    adminPage.validateOnAdminPage();
  });

  it('Deve buscar usuário existente e encontrar resultados', () => {
    adminPage.searchByUsername('Admin');
    adminPage.getTableRows().should('have.length.greaterThan', 0);
  });

  it('Deve buscar usuário inexistente e exibir No Records Found', () => {
    adminPage.searchByUsername('usuarioquenaexiste123');
    adminPage.getNoRecordsMessage().should('be.visible');
  });

  it('Deve exibir colunas corretas na tabela de usuários', () => {
    adminPage.validateTableHeaders();
  });

});