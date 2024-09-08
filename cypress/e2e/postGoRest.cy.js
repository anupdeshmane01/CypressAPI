describe("POST Call JSON", () => {
  it("Post Call", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/",
      headers: {
        Authorization:
          "Bearer d125fbe9c3c570b9b715b14a954b6db74f4106cc860c57db135fb42c1dc01a48",
        },
        body: {
          name: "Anup Deshmane",
          email: "anup2101@yopmail.com",
          gender: "male",
          status: "active",
        },
        failOnStatusCode: false
       })
       .then((response)=>{
        cy.log(JSON.stringify.response)
        expect(response.status).to.equal(201)
        expect(response.body).has.property("name", "Anup Deshmane")
        expect(response.body.id).not.null
       })
  });
});
