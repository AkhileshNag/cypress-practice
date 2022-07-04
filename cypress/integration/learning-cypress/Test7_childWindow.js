/// <reference types="Cypress" />

describe('Test case on child window',function(){
    it('Test case on child window', function(){
        //Test steps
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        //method 2: child windows - Works on same unique domain and works on subdomains
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })

    
})
