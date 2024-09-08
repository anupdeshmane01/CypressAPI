describe('REstBooker',()=>{

    it('Get Call get bookings',()=>{

        cy.request({

            method: "GET",
            url:"https://restful-booker.herokuapp.com/booking",
            headers:{
                Authorization:"Bearer dc39e491e666daf"
            }
        })
        .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
        })
    })
})