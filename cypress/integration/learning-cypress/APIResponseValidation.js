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
        }).as('booksdata')
        cy.get('input[button="btn btn-primary"]').click()
        
        cy.wait('@booksdata').should(({request,response})=>{
            //check the books array size sent by server is same as the no.of books displayed
            //i.e., the size of the books array in response = no. of table rows + 1 (heading)
            cy.get('tr').should('have.length',response.body.length + 1)
        })
        

    })
})