const SideMenuPage = require('../support/SideMenuPage');
const LeavePage = require('../support/LeavePage');

describe('Leave - Solicitação de Férias', () => {

  const sideMenuPage = new SideMenuPage();
  const leavePage = new LeavePage();

  beforeEach(() => {
    cy.loginViaFixture();
    sideMenuPage.clickMenu('Leave');
    cy.url().should('include', '/leave');
  });

  it('Deve acessar o módulo Leave via menu lateral', () => {
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Leave');
  });

  it('Deve navegar para Apply Leave e validar página', () => {
    cy.visit('/index.php/leave/applyLeave');
    cy.url().should('include', '/leave/applyLeave');
    cy.get('.oxd-layout-context').should('contain', 'Apply Leave');
  });

  it('Deve exibir formulário de Apply Leave com campos obrigatórios', () => {
    cy.visit('/index.php/leave/applyLeave');
    cy.url().should('include', '/leave/applyLeave');
    leavePage.elements.leaveTypeDropdown().should('be.visible');
    leavePage.elements.fromDateInput().should('be.visible');
    leavePage.elements.toDateInput().should('be.visible');
  });

  it('Deve navegar para My Leave List e validar colunas da tabela', () => {
    leavePage.visitMyLeaveList();
    leavePage.validateOnMyLeavePage();
    leavePage.validateTableHeaders();
  });

});
