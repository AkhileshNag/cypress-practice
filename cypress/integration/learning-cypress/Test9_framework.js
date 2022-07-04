/// <reference types="Cypress" />


describe('Iframe test',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.cdata=data
        })
    })
    it('Iframe test', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice')
        cy.get(':nth-child(1) > .form-control').type(this.cdata.name)
        cy.get('select').select(this.cdata.gender)
        //verify the text typed in name field is same as in "Two-way Data Binding example" field
        cy.get('input[name="name"]:nth-child(1)').should('have.value',this.cdata.name)
        //name field should have minlength attr with value= 2
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')
        //check Entrepenuer radio button is diabled
        cy.get('#inlineRadio3').should('be.disabled')
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
        cy.get(':nth-child(2) > .nav-link').click()
        this.cdata.productName.forEach(function(element){
            cy.log(element)
            //cy.pause()//it will pause the execution
            cy.selectProduct(element)
        })
    })
})
