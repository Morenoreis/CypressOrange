class SideMenuPage {
  elements = {
    menuItems: () => cy.get('.oxd-sidepanel-body a.oxd-main-menu-item'),
  }

  validateMenuIsVisible() {
    this.elements.menuItems().should('have.length.greaterThan', 0)
  }

  validateMenuItemVisible(menuName) {
    this.elements.menuItems().contains(menuName).should('be.visible')
  }

  clickMenu(menuName) {
    this.elements.menuItems()
      .contains(menuName)
      .should('be.visible')
      .click()
  }
}

module.exports = SideMenuPage