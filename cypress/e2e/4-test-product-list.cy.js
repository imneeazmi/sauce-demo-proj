describe('Testing different login scenarios of saucedemo.com', () => {

  var num_products_in_cart = 0

  it('Visit saucedemo.com', () => {
    cy.visitWebApp()
  })

  it('Login with valid username and password', () => {
    cy.login('standard_user', 'secret_sauce')
  })

  it('Checks product container is visible', () => {
    cy.get('#inventory_container')
  })

  // Test total products displayed
  it('Check total products = 6', () => {
    cy.getProductName().should('have.length', 6)
  })

  // Test sorting A-Z
  it('Check products after sorted in alphabetical ASCENDING order', () => {

    cy.get('.product_sort_container').select('az')

    cy.getProductName().then(Cypress._.first).should('equal', 'Sauce Labs Backpack')
    cy.getProductName().then(Cypress._.last).should('equal', 'Test.allTheThings() T-Shirt (Red)')

  })

  // Test sorting Z-A
  it('Check products after sorted in alphabetical DESCENDING order', () => {

    cy.get('.product_sort_container').select('za')

    cy.getProductName().then(Cypress._.first).should('equal', 'Test.allTheThings() T-Shirt (Red)')
    cy.getProductName().then(Cypress._.last).should('equal', 'Sauce Labs Backpack')

    cy.log('For printing purpose. List in DESC')
    var productNamesZA = cy.getProductName()
    productNamesZA.each((name) => {
      cy.log('In desc order: ' + name)
    })
  })

  // Test sorting price low-high
  it('Check products after sorted by pricing LOW to HIGH', () => {

    cy.get('.product_sort_container').select('lohi')

    const priceListLoHi = cy.getProductPrice()

    priceListLoHi.each((price) => {
      expect(price).to.be.within(7, 50)
    }).and((price) => {
      expect(price[0]).to.eq(7.99)
      expect(price[5]).to.eq(49.99)
    })

  })

  // Test sorting price high-low
  it('Check products after sorted by pricing HIGH to LOW', () => {

    cy.get('.product_sort_container').select('hilo')

    const priceListHiLo = cy.getProductPrice()

    priceListHiLo.each((price) => {
      expect(price).to.be.within(7, 50)
    }).and((price) => {
      expect(price[0]).to.eq(49.99)
      expect(price[5]).to.eq(7.99)
    })

    /* cy.log('For printing purpose. List prices low to high')
    priceList.each((name) => {
      cy.log('price low to high: $' + name)
    })*/

  })

  // Test adding items to cart
  it('Check cart icon after added product', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    num_products_in_cart += 1

    cy.get('.shopping_cart_link').invoke('text').then(parseInt).should('equal', num_products_in_cart).end()
  })
})