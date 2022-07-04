describe("API Automation",function(){
    it("Response intercept",function(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        
//If u hit the site with diff user, API should send 403 forbidden status and should not show books on the page.
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>{
            //we are changing the url here in request object
            req.url('https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty')
            //continue() will hit the changed url in the request obj and give response
            req.continue((res)=>{
                //assert status code with wrong user
                expect(res.statusCode).to.equal(403)
                //can write assertion for no of books displayed,returned by API
            })
        }).as("dummyurl")

        cy.get('input[button="btn btn-primary"]').click()
        cy.wait("@dummyurl")
        
        

    })
})