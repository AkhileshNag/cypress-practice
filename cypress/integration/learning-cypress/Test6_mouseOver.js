/// <reference types="Cypress" />

describe('Test case on Alerts',function(){
    it('Test case on Alerts', function(){
        //Test steps
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        //cy.get('#mousehover').invoke('show')
        //verify the pop up is dislayed when u mousehover on the element
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        //verify invisible elements
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })

    
})
