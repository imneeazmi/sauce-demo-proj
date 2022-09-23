describe('Testing different login scenarios of saucedemo.com', () => {

  it('Visit saucedemo.com', () => {
    cy.visitWebApp()
  })

  // Login with valid credentials
  it('Login with valid credentials', () => {
    cy.login('standard_user', 'secret_sauce')
  })

  it('Checks for components at dashboard when login success', () => {
    cy.get('#react-burger-menu-btn')
    cy.get('.primary_header')
    cy.get('#shopping_cart_container').end()
  })

  it('Expand left side nav', () => {
    cy.get('#react-burger-menu-btn').click()
  })

  // Click "LOGOUT"
  it('Click \'LOGOUT\' for standard_user', () => {
    cy.get('#logout_sidebar_link').click()
    cy.contains('Accepted usernames are').end()
  })

})