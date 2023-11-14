describe('is getting movie', () => {
    it('axios get movie', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.mov-title')
          .should('not.be.empty');
        
    })
})