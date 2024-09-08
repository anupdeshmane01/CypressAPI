import userData from '../fixtures/GoRestData.json'

function randomEmail() {
  const ranEmail = Math.random().toString(36).substring(2, 10);
  const newEmail = ranEmail + "@yopmail.com";
  return newEmail;
}

describe("POST Call JSON", () => {
  it("Post Call", () => {
    let emailAddress = randomEmail();
    let payload = {
      name: "Anup Deshmane",
      email: emailAddress,
      gender: "male",
      status: "active",
    };

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users/",
      headers: {
        Authorization:
          "Bearer d125fbe9c3c570b9b715b14a954b6db74f4106cc860c57db135fb42c1dc01a48",
      },
      body: payload,
      failOnStatusCode: false,
    }).then((response) => {
      cy.log(JSON.stringify.response);
      cy.log(emailAddress);
      expect(response.status).to.equal(201);
      expect(response.body).has.property("name", "Anup Deshmane");
      expect(response.body.id).not.null;
    });
  });

  it("Post Call by JSON File", () => {
   userData.email =randomEmail()
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users/",
        headers: {
          Authorization:
            "Bearer d125fbe9c3c570b9b715b14a954b6db74f4106cc860c57db135fb42c1dc01a48",
        },
        body: userData,
        failOnStatusCode: false,
      }).then((response) => {
        cy.log(JSON.stringify.response);
        cy.log(randomEmail());
        expect(response.status).to.equal(201);
        expect(response.body).has.property("name", "Anup Deshmane");
        expect(response.body.id).not.null;
      
    });
  });
});
