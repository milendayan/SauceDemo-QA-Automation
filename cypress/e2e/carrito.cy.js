describe('Modulo Carrito', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
    })

    // CP-10.0
    it('Agregar un producto al carrito', () => {

        cy.contains('Add to cart').click()

        cy.contains('Remove')
            .should('be.visible')

        cy.get('.shopping_cart_badge')
            .should('have.text', '1')
    })

    // CP-11.0
    it('Agregar multiples productos', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

    cy.get('.shopping_cart_badge')
        .should('have.text', '3')

    cy.get('[data-test^="remove"]')
        .should('have.length', 3)
    })

    // CP-12.0
    it('Eliminar producto desde carrito', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('.shopping_cart_badge')
        .should('have.text', '2')

    cy.get('.shopping_cart_link').click()

    cy.url().should('include', '/cart.html')

    cy.get('[data-test="remove-sauce-labs-backpack"]')
        .click()

    cy.get('.shopping_cart_badge')
        .should('have.text', '1')

    cy.get('.cart_item')
        .should('have.length', 1)
    })

})