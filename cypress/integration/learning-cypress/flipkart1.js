describe('Flipkart automation',function(){
    it('Electronics',function(){
        cy.visit('https://www.flipkart.com/')
        cy.get('.xtXmba').each(($el,index,$list)=>{
            cy.log($el.text())
            //cy.wait(1000)
            if($el.text().includes("Electronics")){
                cy.log(index-1)
               // cy.wrap($el).eq(index).invoke('show')
               
                cy.get('.xtXmba').eq(index).invoke('show')
                cy.contains('Bluetooth Speakers').click();
                cy.contains('Laptop and Desktop').click({force:true});
                //cy.wait(1000)
                //cy.find('._6WOcW9').eq(8).click()
                cy.contains('Laptop and Desktop').click()
                cy.get('._10UF8M').each(($ele,index,$list)=>{
                    cy.log(index)
                    if($ele.text().includes("Price -- Low to High")){
                        cy.get('._10UF8M').eq(index).click()
                    }
                })
                //cy.contains("Laptop and Desktop").click()
            }
        })
        

    })
})