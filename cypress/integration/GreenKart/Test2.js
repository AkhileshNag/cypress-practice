/// <reference types="Cypress" />

describe('My Second test suite',function(){
    it('My Second test case', function(){
        //Test steps
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //Add 3rd product from the results to cart
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        //iterate thru products and find cashew and add it to cart
        cy.get('.products').find('.product').each(($el,index,$list) => {
            const productName = $el.find('.product-name').text() // here we are calling text() on $el which is resolved promise
            if(productName.includes('Cashew')){
                cy.wrap($el).find('button').click()
            }
        })
        
        //check any items are added to cart and click on Proceed to checkout and place order
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })

    
})
