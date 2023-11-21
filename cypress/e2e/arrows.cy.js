describe('is checking arrow', () => {
    it('get arrow position after click', () => {
        cy.visit('http://localhost:3000/')

        
        // get scroll X position from #slider1
        cy.get('#slider1').scrollIntoView().then(($el) => {
            const x = $el[0].scrollLeft
            expect(x).to.equal(0)

            cy.get('#slider1+.arrow-r').click({force: true})
            cy.wait(400).then(() => {
                expect($el[0].scrollLeft).to.equal(500)
            })
        })
    })
})