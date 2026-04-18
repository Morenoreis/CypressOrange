class LeavePage {
  elements = {
    leaveTypeDropdown: () => cy.get('.oxd-form .oxd-select-text').first(),
    fromDateInput: () => cy.get('.oxd-form .oxd-date-input input').first(),
    toDateInput: () => cy.get('.oxd-form .oxd-date-input input').last(),
    commentInput: () => cy.get('.oxd-form textarea'),
    submitButton: () => cy.get('.oxd-form button[type="submit"]'),
    tableRows: () => cy.get('.oxd-table-body .oxd-table-row'),
    tableHeader: () => cy.get('.oxd-table-header'),
  }

  visitApplyLeave() {
    cy.visit('/index.php/leave/applyLeave')
    cy.url().should('include', '/leave/applyLeave')
  }

  visitMyLeaveList() {
    cy.visit('/index.php/leave/viewMyLeaveList')
    cy.url().should('include', '/leave/viewMyLeaveList')
  }

  getTableRows() {
    return this.elements.tableRows()
  }

  getTableHeader() {
    return this.elements.tableHeader()
  }

  validateOnApplyLeavePage() {
    cy.url().should('include', '/leave/applyLeave')
    cy.get('.oxd-layout-context').should('contain', 'Apply Leave')
  }

  validateOnMyLeavePage() {
    cy.url().should('include', '/leave/viewMyLeaveList')
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Leave')
  }

  validateTableHeaders() {
    this.elements.tableHeader().should('contain', 'Date')
    this.elements.tableHeader().should('contain', 'Leave Type')
    this.elements.tableHeader().should('contain', 'Status')
  }
}

module.exports = LeavePage