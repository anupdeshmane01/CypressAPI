///<reference types="cypress"/>
describe('API Automation with Cypress',()=>{

    it('GET Methods',()=>{

        cy.request({
            method: "GET",
            url : 'https://gorest.co.in/public/v2/users/',
            headers : {
                Authorization: 'Bearer d125fbe9c3c570b9b715b14a954b6db74f4106cc860c57db135fb42c1dc01a48'
            }
        })
        .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
        })
    })

    it('GET Methods',()=>{

        cy.request({
            method: "GET",
            url : 'https://gorest.co.in/public/v2/users/7386813',
            headeras : {
                Authorization: 'Bearer d125fbe9c3c570b9b715b14a954b6db74f4106cc860c57db135fb42c1dc01a48'
            }
        })
        .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(7386813)
        })
    })
    
})