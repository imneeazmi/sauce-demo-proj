describe('Testing different login scenarios of saucedemo.com', () => {

  it('Visit saucedemo.com', () => {
    cy.visitWebApp()
  })

  // Login with empty password
  it('Login with empty password', () => {
    cy.login('standard_user', '{backspace}')
  })

  it('Checks missing \'password\' error message', () => {
    cy.checkErrorMessage("loginPage", 'Epic sadface: Password is required')
  })

  it('Test finished', () => {
    cy.clearLoginFields()
  })

  // Login with empty username
  it('Login with empty username', () => {
    cy.login('{backspace}', 'secret_sauce')
  })

  it('Checks missing \'username\' error message', () => {
    cy.checkErrorMessage("loginPage", 'Epic sadface: Username is required')
  })

  it('Test finished', () => {
    cy.clearLoginFields()
  })

  // Login with invalid username/password
  it('Login with invalid username/password', () => {
    cy.login('standard_user', 's3cr3t_s4uc3')
  })

  it('Checks invalid username/password error message', () => {
    cy.checkErrorMessage("loginPage", 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Test finished', () => {
    cy.clearLoginFields()
  })

  // Login to locked account user
  it('Enter locked account credentials', () => {
    cy.login('locked_out_user', 'secret_sauce')
  })

  it('Checks locked out user error message', () => {
    cy.checkErrorMessage("loginPage", 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Test finished', () => {
    cy.clearLoginFields()
  })

  // Login success scenario
  it('Test with valid username and password', () => {
    cy.login('standard_user', 'secret_sauce')
  })

  it('Checks for components at dashboard when login success', () => {
    cy.get('#react-burger-menu-btn')
    cy.get('.primary_header')
    cy.get('#shopping_cart_container').end()
  })

})