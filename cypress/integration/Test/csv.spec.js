describe('Billable Hours', () => {

    it('Ensure User can access Url', () => {
        cy.visit('https://csvdemomockappp.bundlewallet.com/')
    }) 

    it('Ensure user can Upload', () => {
        const fixtureFile = 'test A.csv';
        cy.get('#statement-file').attachFile(fixtureFile);
        cy.get('.btn').click()
    })

    it('Ensure User can view company details', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
        cy.wait(4000)
        cy.contains('Back to Result').click()
        cy.wait(4000)
        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-binding').click()
        cy.wait(4000)
        cy.get('[ng-href="#!/"]').click()
    })

    it('Ensure User can upload another file', () => {
        const fixtureFile = 'test B.csv';
        cy.get('#statement-file').attachFile(fixtureFile);
        cy.get('.btn').click()
    })
})