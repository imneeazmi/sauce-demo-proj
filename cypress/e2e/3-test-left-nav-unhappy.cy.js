describe('Testing different login scenarios of saucedemo.com', () => {

  var num_products_in_cart = 0

  it('Visit saucedemo.com', () => {
    cy.visitWebApp()
  })

  it('Login with problematic username', () => {
    cy.login('problem_user', 'secret_sauce')
  })

  it('Expand left side nav', () => {
    cy.get('#react-burger-menu-btn').click()
  })

  // Check menu list items
  it('Check left side lists', () => {
    cy.get('.bm-menu').find('nav').children().should('contain', 'All Items')
      .and('contain', 'About')
      .and('contain', 'Logout')
      .and('contain', 'Reset App State')
  })

  // Click "ABOUT" unhappy flow
  it('Click \'ABOUT\' for problem_user', () => {
    cy.get('#about_sidebar_link').click()
    cy.contains('We\'re sorry. We can\'t find the page you are looking for.').end()
  })

})