describe("API Automation",function(){
    it("Response intercept",function(){
        //PURE API automation without any Web/UI automation
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
                "name":"Learn Appium Automation with Java",
                "isbn":"bcd",
                "aisle":"227",
                "author":"John foe"
        })
    })
}).then(function(response){
    expect(response.body).to.have.property("Msg","successfully added")
    //   expect(response.status).to.eq(200)
    // you can check all below assertions in this program
// cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
//   expect(response.status).to.eq(200)
//   expect(response.body).to.have.length(500)
//   expect(response).to.have.property('headers')
//   expect(response).to.have.property('duration')
// })
})

