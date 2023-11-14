describe('is rendering .logo', () => {
  it('get by classname', () => {
    cy.visit('http://localhost:3000/')
    // .logo is rendered
    cy.get('.logo').should('be.visible')
  })
})