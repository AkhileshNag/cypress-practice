/// <reference types="Cypress" />

describe('Test case on Alerts',function(){
    it('Test case on Alerts', function(){
        //Test steps
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        //get all 2nd column values and iterate
        cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
            //get the text from second column
            const course = $el.text()
            //check if text contains JMETER word
            if(course.includes("JMETER")){
                //then get next column value
                cy.get('tr td:nth-child(2)').eq(4).next().then(function(priceTxt){
                    const price = priceTxt.text()
                    //assert
                    expect(price).to.equal('25')
                })
            }
        })
    })

    
})
