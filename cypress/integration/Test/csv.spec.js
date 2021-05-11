describe('Billable Hours', () => {

    it('Ensure User can access Url', () => {
        //Application URL
        cy.visit('https://csvdemomockappp.bundlewallet.com/')
    }) 

    it('Ensure user can Upload', () => {
        //This is the file to be uploaded
        const fixtureFile = 'test A.csv';
        
        cy.get('#statement-file').attachFile(fixtureFile);

        //Parse New File button
        cy.get('.btn').click()
    })

    it('Ensure User can view company details', () => {
        //One of the companies displyed is selected here to view for more billable details
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
        cy.wait(4000)

        //To go back to results in order to select another company for more billable details
        cy.contains('Back to Result').click()
        cy.wait(4000)

        //One of the companies displyed is selected here to view for more billable details
        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-binding').click()
        cy.wait(4000)

        //This is to allow user to parse new file
        cy.get('[ng-href="#!/"]').click()
    })

    it('Ensure User cannot upload incomplete file', () => {
        //This is the incomplete file to be uploaded
        const fixtureFile = 'test B.csv';

        cy.get('#statement-file').attachFile(fixtureFile);

        //Parse New File button
        cy.get('.btn').click()

        //Error message displayed
        cy.get('.alert').should('include.text', 'Column count is less than expected')
    })
})