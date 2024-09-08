describe('Get booking ID',()=>{

    it('Get Booking ID',()=>{

        cy.request({

            method: "GET",
            url:"https://restful-booker.herokuapp.com/booking/",
            headers: {
                Authorization: "Bearer dc39e491e666daf"
                
            },
            failOnStatusCode: false
        })
        .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
        })



    })




})