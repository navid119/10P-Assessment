/// <reference types="cypress" />
import etsyRegistration from "./PageObject/etsyRegistration"
describe("Etsy Registration", function () {
    before(function () {
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
        })
})
    it("adds a new user registration to etsy site", function () {
        const register = new etsyRegistration();
        register.navigate(this.testdata.adminUrl);
        register.loginButton();
        register.registerButton();
        cy.wait(3000);
        register.emailAddress(this.testdata.testEmail);
        register.firstName().type(this.testdata.firstName);
        register.password().type(this.testdata.password);        
        register.submitButton().forceClick();
        cy.get('.welcome-message-text').should('contain.text', 'Welcome to Etsy');

    });
});