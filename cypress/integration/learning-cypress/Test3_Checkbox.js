/// <reference types="Cypress" />

describe('My Second test suite',function(){
    it('My Second test case', function(){
        //Test steps
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        //using attribute and value and check given array of check boxes.Ex:tagname[attribute=value]
        cy.get('input[type="checkbox"]').check(['option1','option3'])
        //For static drop down
        cy.get('select').select('option2').should('have.value','option2')
        //using index
        cy.get('select').select(1).should('have.value','option1')
        //selecting option from dynamic select box on typing
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()==="India"){
                $el.click()
            }
        })
        //after selecting check the value is India or not using assertion
        cy.get('#autocomplete').should('have.value','India')
        //test visible/invisible fields
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        //test radio buttons
        cy.get('.radioButton').check(['radio2']).should('have.value','radio2')
        //cy.get('.radioButton').uncheck(['radio2']).should('have.value','radio2')
        cy.get('input[type="radio"]').check(['radio3'])
        cy.get('[value="radio1"]').check().should('have.value','radio1')
    })

    
})
