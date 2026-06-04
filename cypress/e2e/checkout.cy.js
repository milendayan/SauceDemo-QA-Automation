describe('Modulo Checkout', () => {

    beforeEach(() => {

        cy.viewport(1366, 768)

        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
    })
    
    // CP-13.0
    it('Completar checkout con datos validos', () => {

        // Agregar producto
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click()

        cy.get('.shopping_cart_badge')
            .should('have.text', '1')

        // Ir al carrito
        cy.get('.shopping_cart_link')
            .click()

        cy.url().should('include', '/cart.html')

        // Checkout
        cy.get('[data-test="checkout"]')
            .click()

        cy.url().should('include', '/checkout-step-one.html')

        // Completar formulario
        cy.get('[data-test="firstName"]')
            .type('Juan')

        cy.get('[data-test="lastName"]')
            .type('Perez')

        cy.get('[data-test="postalCode"]')
            .type('5000')

        cy.get('[data-test="continue"]')
            .click()

        // Resumen
        cy.url().should('include', '/checkout-step-two.html')

        cy.get('[data-test="finish"]')
            .click()

        // Confirmación
        cy.url().should('include', '/checkout-complete.html')

        cy.contains('Thank you for your order!')
            .should('be.visible')
    })
    
    // CP-14.0
    it('CP-14 Checkout con campos vacios', () => {

    // Agregar producto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click()

    // Ir al carrito
    cy.get('.shopping_cart_link')
        .click()

    // Checkout
    cy.get('[data-test="checkout"]')
        .click()

    // No completar datos
    cy.get('[data-test="continue"]')
        .click()

    // Validar error
    cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain',
            'Error: First Name is required')

    // Verificar que sigue en Step One
    cy.url()
        .should('include',
            '/checkout-step-one.html')
    })
})