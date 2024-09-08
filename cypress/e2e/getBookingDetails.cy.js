describe('Get booking details', () => {

    it('Verify Booking Details', () => {
  
      cy.request({
        method: "GET",
        url: "https://restful-booker.herokuapp.com/booking/785",
        headers: {
          Authorization: "Bearer dc39e491e666daf",
        },
        failOnStatusCode: false,
      })
      .then((response) => {
        // Log the entire response body
        cy.log(JSON.stringify(response.body));
        cy.log("Broswer Versions: ",Cypress.browser.version)
  
        // Verify the response status
        expect(response.status).to.equal(200);
  
        // Verify booking details (example checks)
       
        expect(response.body.firstname).to.equal("John");
        expect(response.body.lastname).to.equal("Smith");
        expect(response.body.totalprice).to.equal(111);
        expect(response.body.depositpaid).to.be.true;
        expect(response.body.bookingdates.checkin).to.equal("2018-01-01");
        expect(response.body.bookingdates.checkout).to.equal("2019-01-01");
        expect(response.body.additionalneeds).to.equal("Breakfast");
      });
  
    });
  
  });
  