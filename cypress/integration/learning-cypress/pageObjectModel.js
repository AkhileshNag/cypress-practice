/// <reference types="Cypress" />

//import classes here if u use any in below programming
import HomePage from '../../support/pageobjects/HomePage'
import ProductPage from '../../support/pageobjects/ProductPage'
import CartPage from '../../support/pageobjects/CartPage'
describe('Iframe test',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.cdata=data
        })
    })
    it('Iframe test', function(){
        //create Object here
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const cartPage = new CartPage()
        cy.visit(Cypress.env('url')+"/angularpractice")
        homePage.getNameField().type(this.cdata.name)
        homePage.getGenderSelect().select(this.cdata.gender)
        //verify the text typed in name field is same as in "Two-way Data Binding example" field
        homePage.getTwoWayBindingBox().should('have.value',this.cdata.name)
        //name field should have minlength attr with value= 2
        homePage.getNameByAttr().should('have.attr','minlength','2')
        //check Entrepenuer radio button is diabled
        homePage.getenterpreneurRadio().should('be.disabled')
        //click on shop, add blackberry to the cart
        // cy.get(':nth-child(2) > .nav-link').click()exit

        // cy.get('h4.card-title').each(($el,index,$list)=>{
        //     if($el.text().includes('Blackberry')){
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })
        //Do above using custom meth by just passing productName to the method.
        //cy.selectProduct('Nokia Edge')
        //call above custom meth on multiple params
        //cy.debug()//it will pause the execution
        //click on shop
        homePage.getShopTab().click()
        this.cdata.productName.forEach(function(element){
            cy.log(element)
            //cy.pause()//it will pause the execution
            cy.selectProduct(element)
        })
        
        productPage.getCheckoutButton().click()
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
})
