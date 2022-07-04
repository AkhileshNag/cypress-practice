class HomePage{

    getNameField(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getGenderSelect(){
        return cy.get('select')
    }

    getTwoWayBindingBox(){
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getenterpreneurRadio(){
        return cy.get('#inlineRadio3')
    }

    getNameByAttr(){
        return cy.get("input[name='name']:nth-child(2)")
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

//to make the objects created here available to all the other files in the framework then export the class.
export default HomePage;