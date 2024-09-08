describe(' Valid test 200 code',()=>
{
    it('Valid test 200 code',()=>
    {
        cy.request({

            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers:{
                Authorization: "Bearer d125fbe9c3c570b9b715b14a954b6db74f4106cc860c57db135fb42c1dc01a48"
            }
        })
        .then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(200)
        })


    })
})