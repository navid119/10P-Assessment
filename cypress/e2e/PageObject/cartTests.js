class Product{

    globalSearch(){
        return cy.get('#global-enhancements-search-query');
    }
    searchProduct(){
        return cy.contains('Air Jordan Red White Custom Sneaker');
    }
    selectSize(){
        return cy.get('#variation-selector-0');
    }
    cartButton(){
        return cy.get('.wt-btn').contains("Add to basket");
    }    
    removeButton(){
        return cy.get('.wt-btn').contains('Remove');
    }
    emptyCart(){
        return cy.get('.wt-text-heading-01').should('contain.text', 'Your basket is empty.');
    }
}


export default Product;