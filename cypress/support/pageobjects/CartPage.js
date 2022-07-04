class CartPage{
    getCheckoutBtnOnCart(){
        return cy.contains('Checkout')
    }
}

export default CartPage