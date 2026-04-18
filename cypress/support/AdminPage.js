class AdminPage {
  elements = {
    pageTitle: () => cy.get('.oxd-topbar-header-breadcrumb h6'),
    searchUsernameInput: () =>
      cy.get('.oxd-form input[class="oxd-input oxd-input--active"]').first(),
    searchButton: () => cy.get('button[type="submit"]'),
    tableRows: () => cy.get('.oxd-table-body .oxd-table-row'),
    tableHeader: () => cy.get('.oxd-table-header'),
    noRecordsFound: () => cy.contains('No Records Found'),
    userRoleDropdown: () => cy.get('.oxd-form .oxd-select-text').eq(0),
    statusDropdown: () => cy.get('.oxd-form .oxd-select-text').eq(1),
  }

  getPageTitle() {
    return this.elements.pageTitle()
  }

  searchByUsername(username) {
    this.elements.searchUsernameInput().clear().type(username)
    this.elements.searchButton().click()
  }

  getTableRows() {
    return this.elements.tableRows()
  }

  getNoRecordsMessage() {
    return this.elements.noRecordsFound()
  }

  validateOnAdminPage() {
    cy.url().should('include', '/admin/viewSystemUsers')
    this.elements.pageTitle().should('contain', 'User Management')
  }

  validateTableHeaders() {
    this.elements.tableHeader().should('contain', 'Username')
    this.elements.tableHeader().should('contain', 'User Role')
    this.elements.tableHeader().should('contain', 'Employee Name')
    this.elements.tableHeader().should('contain', 'Status')
  }
}

module.exports = AdminPage