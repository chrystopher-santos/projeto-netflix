describe('login is working', () => {
    it('use test account', () => {
        cy.visit('http://localhost:3000/')
        
        cy.window()
        .then($window => $window.document.querySelector('#signout'))
        .then($signout => {
            if ($signout) {
                cy.get('#signout').click()
            }
        });

        // check if #login is rendered
        cy.get('#login').should('be.visible')
        cy.get('#login').click()
        cy.get('#email').type('xandykati98@gmail.com')
        cy.get('#password').type('123456')

        cy.get('#login-btn').click()

        cy.get('#account').should('be.visible')
    })
})