class PaginaCarrinho {

    carrinho() {
        cy.get('.woocommerce-message > .button').click();
        cy.get('.checkout-button').click();
    }
}

export default new PaginaCarrinho()