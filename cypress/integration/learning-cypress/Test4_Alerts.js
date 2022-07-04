/// <reference types="Cypress" />

describe('Test case on Alerts',function(){
    it('Test case on Alerts', function(){
        //Test steps
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //Method 1:Working on child windows. Works for cross domain
        cy.visit('http://qaclickacademy.com/practice.php')
        //cy.get('#opentab').click()
        //invoke() is a js function. Here we asked to remove target attribute so that 
        //in Cypress test window, new child window will not open instead it redirects to the new page
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy.com')
        //browser navigation controls: back and forward
        cy.go('back').url().should('include','AutomationPractice')
    })

    
})
