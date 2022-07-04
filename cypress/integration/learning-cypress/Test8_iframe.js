/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'


describe('Iframe test',function(){
    it('Iframe test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        //should have 2 elements with given class name
        cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',2)
    })

    
})
