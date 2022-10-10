/// <reference types="cypress" />
import etsyRegistration from "./PageObject/etsyRegistration"
describe("Required fields validation on registration page", function () {
    before(function () {
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
        })
})
    it("Test for all required fields on etsy registration page", function () {
        const register = new etsyRegistration();
        register.navigate(this.testdata.adminUrl);
        register.loginButton();
        register.registerButton();
        cy.wait(3000);        
        register.firstName().type(this.testdata.firstName);
        register.password().type(this.testdata.password);
        register.submitButton().forceClick();        
        register.emailFieldError().should('contain.text',"Email can't be blank.")
        register.emailAddress(this.testdata.testEmail);
        register.firstName().type(this.testdata.firstName);
        register.password();
        register.submitButton().should('be.disabled')
        register.emailAddress(this.testdata.testEmail);
        register.firstName();
        register.password().type(this.testdata.password);
        register.submitButton().forceClick();
        register.nameFieldError().should('contain.text', "First name can't be blank.");

    });
});