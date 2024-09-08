import restBooker from '../fixtures/restBooker.json'
describe('Create Booking',()=>{

    it('Create New Booking',()=>{

        cy.request({

            method: "POST",
            url: "https://restful-booker.herokuapp.com/booking/",
            body:{
                "firstname" : "Anup",
                "lastname" : "Deshmane",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Lunch"
            } 
        })
        .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('bookingid')
        })

    })
})