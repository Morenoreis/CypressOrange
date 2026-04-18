class PimPage {
  elements = {
    searchNameInput: () =>
      cy.get('.oxd-form .oxd-autocomplete-text-input input').first(),
    searchButton: () => cy.get('button[type="submit"]'),
    tableRows: () => cy.get('.oxd-table-body .oxd-table-row'),
    tableHeader: () => cy.get('.oxd-table-header'),
  }

  searchByName(name) {
    this.elements.searchNameInput().clear().type(name)
    cy.get('.oxd-autocomplete-dropdown').then(($dropdown) => {
      if ($dropdown.length > 0) {
        cy.get('.oxd-autocomplete-option').first().click()
      }
    })
    this.elements.searchButton().click()
  }

  getTableRows() {
    return this.elements.tableRows()
  }

  validateOnPimPage() {
    cy.url().should('include', '/pim/viewEmployeeList')
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'PIM')
  }

  validateTableHeaders() {
    this.elements.tableHeader().should('contain', 'Id')
    this.elements.tableHeader().should('contain', 'Last Name')
    this.elements.tableHeader().should('contain', 'Job Title')
  }
}

module.exports = PimPage