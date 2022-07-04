describe("API Automation",function(){
    it("Response intercept",function(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        

        //intercepting the repose, it detects the backend url from the network and when that 
        //url matches with the interceptor, it overrides with mock response and send it to browser/client
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode: '200',
            body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }]
        }).as('@booksdata')
        cy.get('input[button="btn btn-primary"]').click()
        cy.wait('@booksdata')
        cy.get('p').should('have.text','Sorry we have only one book available')

    })
})