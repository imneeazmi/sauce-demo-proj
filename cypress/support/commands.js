// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// **********************************************
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- for visiting website --
Cypress.Commands.add('visitWebApp', () => {
    cy.visit('https://www.saucedemo.com')
})

// -- for login --
Cypress.Commands.add('login', (username, password) => {
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

// -- for error message --
Cypress.Commands.add('checkErrorMessage', (page, errorMessage) => {
    if (page === 'loginPage') {
        cy.get('.error-message-container').find('[data-test="error"]').should('have.text', errorMessage)
    }
})

// -- for clearing login fields --
Cypress.Commands.add('clearLoginFields', () => {
    cy.get('#user-name').focus().clear()
    cy.get('#password').focus().clear()
})

Cypress.Commands.add('getProductName', () => {
    var products = []

    cy.get('.inventory_item').find('.inventory_item_name').each((name) => {
        products.push(name.text())
    })

    return cy.wrap(products)
})

Cypress.Commands.add('getProductPrice', () => {
    var products = []

    cy.get('.inventory_item').find('.inventory_item_price').each((price) => {

        const start = price.text().indexOf('$')
        const end = price.text().slice(-1)
        const productFloat = parseFloat(price.text().slice(start + 1, end))

        products.push(productFloat)
        //cy.log('Item price is = ' + productFloat)
    })

    return cy.wrap(products)
})