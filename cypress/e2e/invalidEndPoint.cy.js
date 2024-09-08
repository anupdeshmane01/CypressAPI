describe('API Automation with Cypress',()=>{

    it('GET Methods invalid End Point',()=>{

        cy.request({
            method: "GET",
            url : 'https://gorest.co.in/public/v2/user/',
            headeras : {
                Authorization: 'Bearer d125fbe9c3c570b9b715b14a954b6db74f4106cc860c57db135fb42c1dc01a48'
            },
            failOnStatusCode: false
        })
        .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)
        })
    })
})