/// <reference types="cypress" />

import Product from "./PageObject/cartTests.js";

describe("Cart Add and Remove", function () {
    before(function () {
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
        })
})
    it("Add a new product into the cart", function () {
        const product = new Product();
        cy.visit(this.testdata.adminUrl);
        cy.etsyLogin();
        cy.wait(3000);
        product.globalSearch().type('Air Jordan Red White Custom Sneaker').type('{Enter}');       
        cy.get('[data-listing-id=1307341302]').find('a')
        .invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
        })
        cy.wait(3000);
        product.selectSize().select('US MEN 8',{force: true});
        cy.wait(2000);
        product.cartButton().click();
        cy.wait(3000);
        cy.get('[data-listing-id=1307341302]').should('be.visible');        
        product.removeButton().click();
        product.emptyCart();
        


    });
});
