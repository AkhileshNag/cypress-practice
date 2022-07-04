
const neatCSV = require('neat-csv')
let productName
describe("JWT Session",function(){
    it("logged in throough browser local storage",function(){
        cy.LoginAPI().then(async function(){
            const beforeLoadOptions = {
                //this will execute before loading visit url, so it sets token to browser localStorage
                onBeforeLoad :function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            }
            cy.visit('https://rahulshettyacademy.com/client',beforeLoadOptions)
        })

        cy.get('.card-body b').eq(1).then((ele)=>{
            productName = ele.text();
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerLink*=cart]').click()
        cy.contains('Checkout').click()
        cy.get('[placeholder="Select Country"]').type('ind')
        cy.get('.ta-results button').each(($el,index,$list)=>{
            if($el.text == 'India'){
                cy.wrap($el).click()
            }
        })
        cy.get('.action__submit').click()
        cy.wait(2000)
        cy.get('.order-summary button').click()

        //read csv
        //Cypress.config("fileServerFolder")//this gives present project path 
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_jithendra.csv")
        .then(async(text)=>{
            const csvText = await neatCSV(text)//async and await comes together. Since async is happening here, we are giving await to parse the csv
            console.log(csvText)
            const actualProductname = csvText[0]["product Name"]
            expect(productName).to.equal(actualProductname)
        })
        
    })
})