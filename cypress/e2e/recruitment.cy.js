const SideMenuPage = require('../support/SideMenuPage');
const RecruitmentPage = require('../support/RecruitmentPage');

describe('Recruitment - Job Vacancies', () => {

  const sideMenuPage = new SideMenuPage();
  const recruitmentPage = new RecruitmentPage();

  beforeEach(() => {
    cy.loginViaFixture();
    sideMenuPage.clickMenu('Recruitment');
    cy.url().should('include', '/recruitment');
  });

  it('Deve acessar o módulo Recruitment via menu lateral', () => {
    recruitmentPage.validateOnRecruitmentPage();
  });

  it('Deve navegar para Job Vacancies e validar página', () => {
    recruitmentPage.visitJobVacancies();
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Recruitment');
  });

  it('Deve exibir lista de vagas com pelo menos um registro', () => {
    recruitmentPage.visitJobVacancies();
    recruitmentPage.getTableRows().should('have.length.greaterThan', 0);
  });

  it('Deve exibir colunas corretas na tabela de vagas', () => {
    recruitmentPage.visitJobVacancies();
    recruitmentPage.validateTableHeaders();
  });

  it('Deve filtrar vagas por status Closed e validar resultado', () => {
    recruitmentPage.visitJobVacancies();
    recruitmentPage.selectClosedStatus();
    recruitmentPage.elements.searchButton().click();
    cy.contains(/Records Found|No Records Found/).should('be.visible');
  });

});