import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/pageobjects/HomePage'
import ProductPage from '../../../../support/pageobjects/ProductPage'
import CartPage from '../../../../support/pageobjects/CartPage'
import { when } from "cypress/types/jquery";
//import all cucumber keywords from cypress-cucumber-preprocessor/steps module so that cypress recognizes them

const homePage = new HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()
let name
Given('I open ecommerce page',function(){
    cy.visit(Cypress.env('url')+"/angularpractice")
})

When('I add items to the cart', function(){

    homePage.getShopTab().click()
    this.cdata.productName.forEach(function(element){
        cy.log(element)
        //cy.pause()//it will pause the execution
        cy.selectProduct(element)
    })
        
    productPage.getCheckoutButton().click()
})

And('validate the total prices',()=>{
    var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
            cy.log($el.text())
            const eachAmount = $el.text()
            var res = eachAmount.split(" ")
            res = res[1].trim()
            sum=Number(sum)+Number(res)
            
        }).then(function(){
            //telling cypress to wait till above iteration completes and then print log. otherwise
            //since cypress is async, it will print sum before calculating
            cy.log("sum="+sum)
        })
        cy.get('h3 > strong').then(function(elem){
            const amount = elem.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
})

Then('select the country, submit and verify thank you',function(){
    cartPage.getCheckoutBtnOnCart().click()
        cy.get('#country').type('india')
        //Below config override works from this line till the test execution complete(it block completes)
        Cypress.config('defaultCommandTimeout',10000)
        cy.get('.suggestions > ul > li > a').click()//auto suggestion
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then(function(element){
            const actualtext = element.text()
            expect(actualtext.includes('Success')).to.be.true
        })
})

Given('I open the ecommerce page',function(){
    cy.visit(Cypress.env('url')+"/angularpractice")
})

when('When I fill the form details',function(dataTable){
    name = dataTable.rawTable[1][0]
    homePage.getNameField().type(dataTable.rawTable[1][0])
    homePage.getGenderSelect().select(dataTable.rawTable[1][1])
})

Then('validate the form details',function(){
    homePage.getTwoWayBindingBox().should('have.value',name)
        //name field should have minlength attr with value= 2
    homePage.getNameByAttr().should('have.attr','minlength','2')
        //check Entrepenuer radio button is diabled
    homePage.getenterpreneurRadio().should('be.disabled')
})

And('select the shop page',function(){
    homePage.getShopTab().click()
})

