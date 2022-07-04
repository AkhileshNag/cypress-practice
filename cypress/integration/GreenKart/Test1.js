/// <reference types="Cypress" />

describe('My firt test suite',function(){
    it('My first test case', function(){
        //Test steps
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length','5')
        cy.get('.product:visible').should('have.length','4')
        //parent child traverse
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length','4')
        //Add 3rd product from the results to cart
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('Add to cart is clicked')
        })
        //below selector copied from test runner, css selector
        //cy.get(':nth-child(3) > .product-action > button').click()
        //iterate thru products and find cashew and add it to cart
        cy.get('@productsLocator').find('.product').each(($el,index,$list) => {
            const productName = $el.find('.product-name').text() // here we are calling text() on $el which is resolved promise
            if(productName.includes('Cashew')){
                cy.wrap($el).find('button').click()
            }
        })
        //assert if logo text is correct or not
        cy.get('.brand').as('logo')
        cy.get('@logo').should('have.text','GREENKART')
        //below is just to print in text runner logs
        cy.get('@logo').then(function(logoEle){
            cy.log(logoEle.text())  //here also we called text() on resolved promise logoEle    
        })
        //const logoTxt = cy.get('.brand').text()   // this will throw error as text() is not cypress cmd and cant resolve promise returned by get()
        //check any items are added to cart and click on Proceed to checkout and place order
        cy.get('.cart-icon > img').click()
    })

    
})
