import el from './loginElements'

class loginPage {
  visitSite() {
    cy.visit('/')
  }

  fillLogin(user = 'standard_user', pass = 'secret_sauce') {
    cy.get(el.username).type(user)
    cy.get(el.password).type(pass, { log: false })
  }

  clickButton(button) {
    cy.contains(button).click()
  }

  verifyLogin() {
    cy.url().should('include', '/inventory.html')
  }

  verifyError() {
    cy.get(el.error).should('be.visible')
  }
}

const login = new loginPage()
export default login