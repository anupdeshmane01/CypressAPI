describe('Get booking ID', () => {

    it('Get Booking ID', () => {
  
      cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/booking",
        headers: {
          Authorization: "Bearer dc39e491e666daf",
        },
        body: {
          firstname: "Jimy",
          lastname: "Brown",
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01",
          },
          additionalneeds: "Breakfast",
        },
        failOnStatusCode: false,
      }).then((response) => {
        cy.log(JSON.stringify(response));
        expect(response.status).to.equal(200); // Change 201 to 200 if the API returns a 200 status code
        expect(response.body).to.have.property('bookingid'); // Assert the booking ID is present in the response
      });
  
    });
  
  });
  