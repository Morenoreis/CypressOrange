const SideMenuPage = require('../support/SideMenuPage');
const PimPage = require('../support/PimPage');

describe('PIM - Employee List', () => {

  const sideMenuPage = new SideMenuPage();
  const pimPage = new PimPage();

  beforeEach(() => {
    cy.loginViaFixture();
    sideMenuPage.clickMenu('PIM');
    cy.url().should('include', '/pim');
  });

  it('Deve acessar o módulo PIM e validar título da página', () => {
    pimPage.validateOnPimPage();
  });

  it('Deve exibir lista de colaboradores com pelo menos um registro', () => {
    pimPage.getTableRows().should('have.length.greaterThan', 0);
  });

  it('Deve exibir colunas corretas na tabela de colaboradores', () => {
    pimPage.validateTableHeaders();
  });

  it('Deve buscar colaborador existente e encontrar resultados', () => {
    pimPage.searchByName('John');
    pimPage.getTableRows().should('have.length.greaterThan', 0);
  });

  it('Deve buscar colaborador inexistente e validar zero registros', () => {
    cy.get('.oxd-form .oxd-autocomplete-text-input input').first()
      .clear()
      .type('colaboradorquenaexiste999');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-table-body .oxd-table-row').should('have.length', 0);
  });

});