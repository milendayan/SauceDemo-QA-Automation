describe ('Login Página', ()=>{

    beforeEach(()=>{ // nos permite ejecutar esto primero antes del it
        cy.visit('https://www.saucedemo.com/')
    })

    // CP-1.0
    it('Login exitoso',()=>{
        // cy.log('test 1') Logueamos mensaje en consola
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include','/inventory.html')
        cy.get('.app_logo').should('have.text', 'Swag Labs')
    })

    // CP-2.0
    it('Login con contrasena incorrecta',()=>{
        // cy.log('test 2') Logueamos mensaje en consola
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauceaassd')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain','Epic sadface: Username and password do not match any user in this service')
    })

    // CP-3.0
    it('Login con campos vacíos',()=>{
        // cy.log('test 3')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username is required')

    })

    // CP-4.0
    it('Login con usuario bloqueado',()=>{

        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain',
            'Epic sadface: Sorry, this user has been locked out.')

        cy.url().should('eq','https://www.saucedemo.com/')
    })
    
    // CP-5.0
    it('Logout desde menu hamburguesa',()=>{

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include','/inventory.html')

        cy.get('#react-burger-menu-btn').click()

        cy.get('#logout_sidebar_link')
            .should('be.visible')
            .click()

        cy.url().should('eq','https://www.saucedemo.com/')

        cy.get('[data-test="username"]').should('have.value','')
        cy.get('[data-test="password"]').should('have.value','')
    })

    
})