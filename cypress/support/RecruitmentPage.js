class RecruitmentPage {
  elements = {
    pageTitle: () => cy.get('.oxd-topbar-header-breadcrumb'),
    vacancyDropdown: () => cy.get('.oxd-form .oxd-select-text').eq(1),
    statusDropdown: () => cy.get('.oxd-form .oxd-select-text').eq(3),
    searchButton: () => cy.get('button[type="submit"]'),
    tableRows: () => cy.get('.oxd-table-body .oxd-table-row'),
    tableHeader: () => cy.get('.oxd-table-header'),
    noRecordsFound: () => cy.contains('No Records Found'),
  }

  visitJobVacancies() {
    cy.visit('/index.php/recruitment/viewJobVacancy')
    cy.url().should('include', '/recruitment/viewJobVacancy')
  }

  getTableRows() {
    return this.elements.tableRows()
  }

  getTableHeader() {
    return this.elements.tableHeader()
  }

  validateOnRecruitmentPage() {
    cy.url().should('include', '/recruitment')
    this.elements.pageTitle().should('contain', 'Recruitment')
  }

  validateTableHeaders() {
    this.elements.tableHeader().should('contain', 'Vacancy')
    this.elements.tableHeader().should('contain', 'Job Title')
    this.elements.tableHeader().should('contain', 'Hiring Manager')
    this.elements.tableHeader().should('contain', 'Status')
  }

  selectClosedStatus() {
    this.elements.statusDropdown().click()
    cy.get('.oxd-select-dropdown .oxd-select-option')
      .contains(/^Closed$/)
      .click()
  }
}

module.exports = RecruitmentPage