describe('HTTP requests',()=>{

    it("GET call",()=>{

        cy.request('GET','https://restful-booker.herokuapp.com/booking')
        .its('status')
        .should('equal',200);
    })

})