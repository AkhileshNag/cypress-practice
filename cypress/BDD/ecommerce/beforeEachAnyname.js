beforeEach(function(){
    cy.fixture('example').then(function(data){
        this.cdata=data
    })
});