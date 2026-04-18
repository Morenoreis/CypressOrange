class DashboardPage {
  elements = {
    userMenu: () => cy.get('.oxd-userdropdown-name'),
    logoutLink: () => cy.contains('Logout'),
    dashboardTitle: () => cy.contains('Dashboard'),
  }

  validateDashboardIsVisible() {
    this.elements.dashboardTitle().should('be.visible')
  }

  openUserMenu() {
    this.elements.userMenu().should('be.visible').click()
  }

  logout() {
    this.openUserMenu()
    this.elements.logoutLink().should('be.visible').click()
  }
}

module.exports = DashboardPage